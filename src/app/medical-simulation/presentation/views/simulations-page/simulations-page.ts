import { Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { TranslatePipe } from '@ngx-translate/core';
import { MedicalSimulationApi } from '../../../infrastructure/medical-simulation-api';
import { MedicalSimulation } from '../../../domain/model/medical-simulation.entity';
import { GamificationApi } from '../../../../gamification/infrastructure/gamification-api';

@Component({
  selector: 'app-simulations-page',
  imports: [RouterLink, MatButtonModule, MatCardModule, MatChipsModule, MatIconModule, MatProgressBarModule, TranslatePipe],
  templateUrl: './simulations-page.html',
  styleUrl: './simulations-page.css',
})
export class SimulationsPage {
  protected readonly simulations = signal<MedicalSimulation[]>([]);
  protected readonly completionCounts = signal<Record<string, number>>({});
  protected readonly searchQuery = signal('');
  protected readonly filteredSimulations = computed(() => {
    const query = this.searchQuery().trim().toLowerCase();
    if (!query) {
      return this.simulations();
    }
    return this.simulations().filter((simulation) => simulation.title.toLowerCase().includes(query));
  });

  constructor(
    private readonly medicalSimulationApi: MedicalSimulationApi,
    private readonly gamificationApi: GamificationApi,
  ) {
    void this.load();
  }

  protected setSearchQuery(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.searchQuery.set(input.value);
  }

  protected completedCount(simulation: MedicalSimulation): number {
    return this.completionCounts()[simulation.id] ?? (simulation.status === 'Completado' ? 1 : 0);
  }

  protected isCompleted(simulation: MedicalSimulation): boolean {
    return this.completedCount(simulation) > 0;
  }

  private async load(): Promise<void> {
    const [data, gamification] = await Promise.all([
      this.medicalSimulationApi.getMedicalSimulations(),
      this.gamificationApi.getGamification(),
    ]);
    const counts = (gamification.coinTransactions ?? [])
      .filter((transaction) => transaction.userId === 'usr-001' && transaction.successful)
      .reduce<Record<string, number>>((totals, transaction) => {
        totals[transaction.simulationId] = (totals[transaction.simulationId] ?? 0) + 1;
        return totals;
      }, {});
    this.simulations.set(data.simulations);
    this.completionCounts.set(counts);
  }
}
