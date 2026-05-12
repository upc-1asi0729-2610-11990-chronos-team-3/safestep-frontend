import { computed, Injectable, signal } from '@angular/core';
import { MedicalSimulation, MedicalSimulationData } from '../domain/model/medical-simulation.entity';
import { MedicalSimulationApi } from '../infrastructure/medical-simulation-api';

@Injectable({ providedIn: 'root' })
export class MedicalSimulationStore {
  private readonly data = signal<MedicalSimulationData | null>(null);

  readonly simulationsData = this.data.asReadonly();
  readonly simulations = computed<MedicalSimulation[]>(() => this.data()?.simulations ?? []);

  constructor(private readonly api: MedicalSimulationApi) {}

  async load(): Promise<MedicalSimulationData> {
    const data = await this.api.getMedicalSimulations();
    this.data.set(data);
    return data;
  }

  async update(data: MedicalSimulationData): Promise<MedicalSimulationData> {
    const saved = await this.api.updateMedicalSimulations(data);
    this.data.set(saved);
    return saved;
  }
}
