import { Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { TranslatePipe } from '@ngx-translate/core';
import { UserProfile } from '../../../../identity-access/domain/model/user-profile.entity';
import { IdentityAccessStore } from '../../../../identity-access/application/identity-access-store';
import { MedicalSimulationData } from '../../../../medical-simulation/domain/model/medical-simulation.entity';
import { MedicalSimulationStore } from '../../../../medical-simulation/application/medical-simulation-store';
import { GamificationData } from '../../../../gamification/domain/model/gamification.entity';
import { GamificationStore } from '../../../../gamification/application/gamification-store';
import { StoreProduct } from '../../../../ecommerce/domain/model/ecommerce.entity';
import { EcommerceStore } from '../../../../ecommerce/application/ecommerce-store';
import { StatsData } from '../../../../statistics/domain/model/statistics.entity';
import { StatisticsStore } from '../../../../statistics/application/statistics-store';

@Component({
  selector: 'app-dashboard-page',
  imports: [
    RouterLink,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatIconModule,
    MatProgressBarModule,
    TranslatePipe,
  ],
  templateUrl: './dashboard-page.html',
  styleUrl: './dashboard-page.css',
})
export class DashboardPage {
  protected readonly user = signal<UserProfile | null>(null);
  protected readonly simulations = signal<MedicalSimulationData | null>(null);
  protected readonly gamification = signal<GamificationData | null>(null);
  protected readonly stats = signal<StatsData | null>(null);
  protected readonly products = signal<StoreProduct[]>([]);
  protected readonly nextSimulation = computed(
    () =>
      this.simulations()?.simulations.find((simulation) => simulation.status !== 'Completado') ??
      null,
  );

  constructor(
    private readonly identityAccessStore: IdentityAccessStore,
    private readonly medicalSimulationStore: MedicalSimulationStore,
    private readonly gamificationStore: GamificationStore,
    private readonly statisticsStore: StatisticsStore,
    private readonly ecommerceStore: EcommerceStore,
  ) {
    void this.load();
  }

  private async load(): Promise<void> {
    const [identity, simulations, gamification, stats, ecommerce] = await Promise.all([
      this.identityAccessStore.load(),
      this.medicalSimulationStore.load(),
      this.gamificationStore.load(),
      this.statisticsStore.load(),
      this.ecommerceStore.load(),
    ]);
    this.user.set(identity.sampleUser);
    this.simulations.set(simulations);
    this.gamification.set(gamification);
    this.stats.set(stats);
    this.products.set(ecommerce.products.slice(0, 3));
  }
}
