import { Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { TranslatePipe } from '@ngx-translate/core';
import { IdentityAccessApi } from '../../../../identity-access/infrastructure/identity-access-api';
import { UserProfile } from '../../../../identity-access/domain/model/user-profile.entity';
import { MedicalSimulationApi } from '../../../../medical-simulation/infrastructure/medical-simulation-api';
import { MedicalSimulationData } from '../../../../medical-simulation/domain/model/medical-simulation.entity';
import { GamificationApi } from '../../../../gamification/infrastructure/gamification-api';
import { GamificationData } from '../../../../gamification/domain/model/gamification.entity';
import { EcommerceApi } from '../../../../ecommerce/infrastructure/ecommerce-api';
import { StoreProduct } from '../../../../ecommerce/domain/model/ecommerce.entity';
import { StatisticsApi } from '../../../../statistics/infrastructure/statistics-api';
import { StatsData } from '../../../../statistics/domain/model/statistics.entity';

@Component({
  selector: 'app-dashboard-page',
  imports: [RouterLink, MatButtonModule, MatCardModule, MatChipsModule, MatIconModule, MatProgressBarModule, TranslatePipe],
  templateUrl: './dashboard-page.html',
  styleUrl: './dashboard-page.css',
})
export class DashboardPage {
  protected readonly user = signal<UserProfile | null>(null);
  protected readonly simulations = signal<MedicalSimulationData | null>(null);
  protected readonly gamification = signal<GamificationData | null>(null);
  protected readonly stats = signal<StatsData | null>(null);
  protected readonly products = signal<StoreProduct[]>([]);
  protected readonly nextSimulation = computed(() =>
    this.simulations()?.simulations.find((simulation) => simulation.status !== 'Completado') ?? null,
  );

  constructor(
    private readonly identityAccessApi: IdentityAccessApi,
    private readonly medicalSimulationApi: MedicalSimulationApi,
    private readonly gamificationApi: GamificationApi,
    private readonly statisticsApi: StatisticsApi,
    private readonly ecommerceApi: EcommerceApi,
  ) {
    void this.load();
  }

  private async load(): Promise<void> {
    const [identity, simulations, gamification, stats, ecommerce] = await Promise.all([
      this.identityAccessApi.getIdentity(),
      this.medicalSimulationApi.getMedicalSimulations(),
      this.gamificationApi.getGamification(),
      this.statisticsApi.getStats(),
      this.ecommerceApi.getEcommerce(),
    ]);
    this.user.set(identity.sampleUser);
    this.simulations.set(simulations);
    this.gamification.set(gamification);
    this.stats.set(stats);
    this.products.set(ecommerce.products.slice(0, 3));
  }
}
