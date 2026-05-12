import { Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { TranslatePipe } from '@ngx-translate/core';
import {
  Certificate,
  EvaluationResult,
  MicroLesson,
  ModuleEvaluation,
} from '../../../domain/model/medical-simulation.entity';
import { MedicalSimulationApi } from '../../../infrastructure/medical-simulation-api';

@Component({
  selector: 'app-learning-page',
  imports: [RouterLink, MatButtonModule, MatCardModule, MatChipsModule, MatIconModule, MatProgressBarModule, TranslatePipe],
  templateUrl: './learning-page.html',
  styleUrl: './learning-page.css',
})
export class LearningPage {
  protected readonly microLessons = signal<MicroLesson[]>([]);
  protected readonly evaluations = signal<ModuleEvaluation[]>([]);
  protected readonly certificates = signal<Certificate[]>([]);
  protected readonly results = signal<EvaluationResult[]>([]);
  protected readonly completedLessons = computed(() => Math.min(3, this.microLessons().length));

  constructor(private readonly medicalSimulationApi: MedicalSimulationApi) {
    void this.load();
  }

  private async load(): Promise<void> {
    const data = await this.medicalSimulationApi.getMedicalSimulations();
    this.microLessons.set(data.microLessons ?? []);
    this.evaluations.set(data.moduleEvaluations ?? []);
    this.certificates.set(data.certificates ?? []);
    this.results.set(data.evaluationResults ?? []);
  }
}
