import { computed, Injectable, signal } from '@angular/core';
import { MedicalSimulationData } from '../domain/model/medical-simulation.entity';
import { MedicalSimulationApi } from '../infrastructure/medical-simulation-api';

@Injectable({ providedIn: 'root' })
export class MedicalSimulationStore {
  private readonly data = signal<MedicalSimulationData | null>(null);
  readonly simulationsData = this.data.asReadonly();
  readonly simulations = computed(() => this.data()?.simulations ?? []);

  constructor(private readonly api: MedicalSimulationApi) {}

  async load(): Promise<void> {
    this.data.set(await this.api.getMedicalSimulations());
  }
}