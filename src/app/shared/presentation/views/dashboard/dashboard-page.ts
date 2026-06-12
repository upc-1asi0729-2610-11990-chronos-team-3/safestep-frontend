import { Component, inject, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { TranslatePipe } from '@ngx-translate/core';
import { IdentityAccessStore } from '../../../../identity-access/application/identity-access-store';
import { MedicalSimulationStore } from '../../../../medical-simulation/application/medical-simulation-store';
import { GamificationStore } from '../../../../gamification/application/gamification-store';
import { EcommerceStore } from '../../../../ecommerce/application/ecommerce-store';
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
  private readonly identityAccessStore = inject(IdentityAccessStore);
  private readonly medicalSimulationStore = inject(MedicalSimulationStore);
  private readonly gamificationStore = inject(GamificationStore);
  private readonly statisticsStore = inject(StatisticsStore);
  private readonly ecommerceStore = inject(EcommerceStore);

  protected readonly user = computed(() => this.identityAccessStore.getCurrentUser());
  protected readonly simulations = this.medicalSimulationStore.simulations;
  protected readonly missions = this.gamificationStore.missions;
  protected readonly coinTransactions = this.gamificationStore.coinTransactions;
  protected readonly badges = this.gamificationStore.badges;
  protected readonly stats = computed(() => {
    const transactions = this.statisticsStore.getSuccessfulTransactions(this.coinTransactions(), 'usr-001');
    const userAttempts = this.statisticsStore.getUserAttempts(this.medicalSimulationStore.attempts(), 1);
    const coins = this.statisticsStore.getTotalCoins(transactions);
    const xp = this.statisticsStore.getTotalXp(transactions, this.simulations());
    const minutes = this.statisticsStore.getTrainedMinutes(transactions, this.simulations());
    const accuracy = this.statisticsStore.getAverageAttemptAccuracy(userAttempts);
    return [
      { label: 'SafeCoins', value: `${coins}`, trend: '+0% hoy' },
      { label: 'XP Total', value: `${xp}`, trend: '+0% hoy' },
      { label: 'Minutos', value: `${minutes}`, trend: '+0% hoy' },
      { label: 'Precisión', value: `${accuracy}%`, trend: '+0% hoy' },
    ];
  });
  protected readonly products = computed(() => this.ecommerceStore.getFeaturedProducts(this.ecommerceStore.products()));
  protected readonly nextSimulations = computed(() => {
    return this.simulations().filter((s) => s.status !== 'Completado').slice(0, 2);
  });

  protected readonly loading = computed(() =>
    this.identityAccessStore.loading() ||
    this.medicalSimulationStore.loading() ||
    this.gamificationStore.loading() ||
    this.statisticsStore.loading() ||
    this.ecommerceStore.loading(),
  );

  protected readonly errors = computed(() => {
    const errs: string[] = [];
    const identityErr = this.identityAccessStore.error();
    if (identityErr) errs.push(identityErr);
    const simErr = this.medicalSimulationStore.error();
    if (simErr) errs.push(simErr);
    const gameErr = this.gamificationStore.error();
    if (gameErr) errs.push(gameErr);
    const statErr = this.statisticsStore.error();
    if (statErr) errs.push(statErr);
    const ecomErr = this.ecommerceStore.error();
    if (ecomErr) errs.push(ecomErr);
    return errs;
  });

  protected readonly hasErrors = computed(() => this.errors().length > 0);

  protected retry(): void {
    // Stores auto-load in their constructors; no manual retry needed.
  }
}
