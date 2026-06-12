import { Component, inject, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { TranslatePipe } from '@ngx-translate/core';
import { MedicalSimulationStore } from '../../../application/medical-simulation-store';

@Component({
  selector: 'app-simulations-page',
  imports: [
    RouterLink,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatProgressBarModule,
    TranslatePipe,
  ],
  templateUrl: './simulations-page.html',
  styleUrl: './simulations-page.css',
})
export class SimulationsPage {
  protected readonly medicalSimulationStore = inject(MedicalSimulationStore);

  protected readonly simulations = computed(() => this.medicalSimulationStore.simulations());

  protected readonly activeFilter = signal<string | null>(null);

  protected readonly emergencyTypes = computed(() => {
    const types = new Set(this.simulations().map((s) => s.emergencyType));
    return Array.from(types);
  });

  protected readonly filteredSimulations = computed(() => {
    const filter = this.activeFilter();
    if (!filter) return this.simulations();
    return this.simulations().filter((s) => s.emergencyType === filter);
  });

  protected readonly inProgressSim = computed(() => {
    return this.simulations().find((s) => s.status === 'En progreso');
  });

  protected readonly inProgressCount = computed(() => {
    return this.simulations().filter((s) => s.status === 'En progreso').length;
  });

  protected setFilter(type: string | null): void {
    this.activeFilter.set(type);
  }
}
