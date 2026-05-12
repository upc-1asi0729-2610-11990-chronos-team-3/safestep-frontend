import { Component, computed, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { TranslatePipe } from '@ngx-translate/core';
import { MedicalSimulationApi } from '../../../infrastructure/medical-simulation-api';
import { MedicalSimulation } from '../../../domain/model/medical-simulation.entity';
import { EcommerceApi } from '../../../../ecommerce/infrastructure/ecommerce-api';
import { StoreProduct } from '../../../../ecommerce/domain/model/ecommerce.entity';
import { IdentityAccessApi } from '../../../../identity-access/infrastructure/identity-access-api';
import { IdentityAccessData } from '../../../../identity-access/domain/model/identity-access-data.entity';
import { GamificationApi } from '../../../../gamification/infrastructure/gamification-api';
import { CoinTransaction, GamificationData } from '../../../../gamification/domain/model/gamification.entity';
import { SafeCoinsWalletStore } from '../../../../shared/application/safe-coins-wallet-store';

@Component({
  selector: 'app-simulation-detail-page',
  imports: [RouterLink, MatButtonModule, MatCardModule, MatChipsModule, MatIconModule, TranslatePipe],
  templateUrl: './simulation-detail-page.html',
  styleUrl: './simulation-detail-page.css',
})
export class SimulationDetailPage {
  protected readonly simulation = signal<MedicalSimulation | null>(null);
  protected readonly products = signal<StoreProduct[]>([]);
  protected readonly identity = signal<IdentityAccessData | null>(null);
  protected readonly gamification = signal<GamificationData | null>(null);
  protected readonly selectedOptions = signal<Record<string, string>>({});
  protected readonly completed = signal(false);
  protected readonly savingReward = signal(false);
  protected readonly rewardError = signal<string | null>(null);
  protected readonly previousBalance = signal(0);
  protected readonly earnedCoins = signal(0);
  protected readonly appliedMultiplier = signal(0);
  protected readonly successfulAttemptNumber = signal(0);
  protected readonly score = computed(() => {
    const current = this.simulation();
    if (!current) {
      return 0;
    }
    return current.steps.reduce((total, step) => {
      return total + (this.selectedOptions()[step.id] === step.correctOptionId ? 1 : 0);
    }, 0);
  });
  protected readonly answeredCount = computed(() => Object.keys(this.selectedOptions()).length);
  protected readonly allAnswered = computed(() => {
    const current = this.simulation();
    return !!current && this.answeredCount() === current.steps.length;
  });
  protected readonly accuracy = computed(() => {
    const current = this.simulation();
    return current ? this.score() / current.steps.length : 0;
  });
  protected readonly accuracyPercent = computed(() => Math.round(this.accuracy() * 100));
  protected readonly earnedXp = computed(() => {
    const current = this.simulation();
    if (!current) {
      return 0;
    }
    return Math.floor(current.xpReward * this.accuracy());
  });
  protected readonly newBalance = computed(() => this.previousBalance() + this.earnedCoins());

  constructor(
    private readonly route: ActivatedRoute,
    private readonly medicalSimulationApi: MedicalSimulationApi,
    private readonly ecommerceApi: EcommerceApi,
    private readonly identityAccessApi: IdentityAccessApi,
    private readonly gamificationApi: GamificationApi,
    private readonly wallet: SafeCoinsWalletStore,
  ) {
    void this.load();
  }

  protected selectOption(stepId: string, optionId: string): void {
    this.selectedOptions.update((current) => ({ ...current, [stepId]: optionId }));
  }

  protected async finish(): Promise<void> {
    if (this.completed() || this.savingReward()) {
      return;
    }

    const current = this.simulation();
    const identity = this.identity();
    const gamification = this.gamification();
    if (!current || !identity || !gamification) {
      return;
    }

    this.savingReward.set(true);
    this.rewardError.set(null);

    const currentBalance = identity.sampleUser.safeCoins;
    const previousTransactions = gamification.coinTransactions ?? [];
    const userTransactions = previousTransactions.filter(
      (transaction) => transaction.userId === identity.sampleUser.id && transaction.simulationId === current.id,
    );
    const successfulAttempts = userTransactions.filter((transaction) => transaction.successful).length;
    const successful = this.accuracy() >= 0.7;
    const multiplier = successful ? 1 / Math.pow(2, successfulAttempts) : 0;
    const earnedCoins = successful ? Math.floor(current.coinReward * this.accuracy() * multiplier) : 0;
    const normalizedCoins = earnedCoins < 1 ? 0 : earnedCoins;
    const nextBalance = currentBalance + normalizedCoins;
    const transaction: CoinTransaction = {
      id: `coin-tx-${Date.now()}`,
      userId: identity.sampleUser.id,
      simulationId: current.id,
      simulationTitle: current.title,
      attemptNumber: userTransactions.length + 1,
      successfulAttemptNumber: successful ? successfulAttempts + 1 : successfulAttempts,
      baseCoins: current.coinReward,
      multiplier,
      accuracy: Number(this.accuracy().toFixed(2)),
      earnedCoins: normalizedCoins,
      successful,
      createdAt: new Date().toISOString(),
    };

    const updatedIdentity: IdentityAccessData = {
      ...identity,
      sampleUser: {
        ...identity.sampleUser,
        safeCoins: nextBalance,
      },
    };
    const updatedGamification: GamificationData = {
      ...gamification,
      levelSummary: {
        ...gamification.levelSummary,
        safeCoins: nextBalance,
      },
      coinTransactions: [transaction, ...previousTransactions],
    };

    try {
      const [savedIdentity, savedGamification] = await Promise.all([
        this.identityAccessApi.updateIdentity(updatedIdentity),
        this.gamificationApi.updateGamification(updatedGamification),
      ]);
      this.identity.set(savedIdentity);
      this.gamification.set(savedGamification);
      this.previousBalance.set(currentBalance);
      this.earnedCoins.set(normalizedCoins);
      this.appliedMultiplier.set(multiplier);
      this.successfulAttemptNumber.set(transaction.successfulAttemptNumber);
      this.wallet.setBalance(nextBalance);
      this.completed.set(true);
    } catch {
      this.rewardError.set('No se pudo guardar la recompensa. Revisa que json-server este activo.');
    } finally {
      this.savingReward.set(false);
    }
  }

  protected optionClass(stepId: string, optionId: string, correctOptionId: string): string {
    const selected = this.selectedOptions()[stepId];
    if (!selected) {
      return '';
    }
    if (optionId === correctOptionId) {
      return 'correct';
    }
    return selected === optionId ? 'wrong' : '';
  }

  private async load(): Promise<void> {
    const id = this.route.snapshot.paramMap.get('id');
    const [simulationData, ecommerceData, identity, gamification] = await Promise.all([
      this.medicalSimulationApi.getMedicalSimulations(),
      this.ecommerceApi.getEcommerce(),
      this.identityAccessApi.getIdentity(),
      this.gamificationApi.getGamification(),
    ]);
    const simulation = simulationData.simulations.find((item) => item.id === id) ?? null;
    this.simulation.set(simulation);
    this.identity.set(identity);
    this.gamification.set(gamification);
    this.wallet.setBalance(identity.sampleUser.safeCoins);
    const suggestedIds = new Set(simulation?.productSuggestions.map((item) => item.productId) ?? []);
    this.products.set(ecommerceData.products.filter((product) => suggestedIds.has(product.id)));
  }
}
