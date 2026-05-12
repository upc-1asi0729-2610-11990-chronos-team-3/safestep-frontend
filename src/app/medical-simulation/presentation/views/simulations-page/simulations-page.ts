import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { TranslatePipe } from '@ngx-translate/core';
import { MedicalSimulationApi } from '../../../infrastructure/medical-simulation-api';
import { MedicalSimulation } from '../../../domain/model/medical-simulation.entity';

@Component({
  selector: 'app-simulations-page',
  imports: [RouterLink, MatButtonModule, MatCardModule, MatChipsModule, MatProgressBarModule, TranslatePipe],
  templateUrl: './simulations-page.html',
  styleUrl: './simulations-page.css',
})
export class SimulationsPage {
  protected readonly simulations = signal<MedicalSimulation[]>([]);

  constructor(private readonly medicalSimulationApi: MedicalSimulationApi) {
    void this.load();
  }

  private async load(): Promise<void> {
    const data = await this.medicalSimulationApi.getMedicalSimulations();
    this.simulations.set(data.simulations);
  }
}
