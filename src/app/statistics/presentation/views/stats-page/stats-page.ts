import { Component, computed, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MedicalSimulationApi } from '../../../../medical-simulation/infrastructure/medical-simulation-api';
import {
  MedicalSimulation,
  SimulationAttempt,
} from '../../../../medical-simulation/domain/model/medical-simulation.entity';
import { GamificationApi } from '../../../../gamification/infrastructure/gamification-api';
import { CoinTransaction, GamificationData } from '../../../../gamification/domain/model/gamification.entity';

interface SimulationPerformance {
  simulation: MedicalSimulation;
  attempts: number;
  completions: number;
  bestScore: number;
  averageAccuracy: number;
  lastAttempt: string;
}

interface ActionRecommendation {
  icon: string;
  title: string;
  detail: string;
}

@Component({
  selector: 'app-stats-page',
  imports: [MatCardModule, MatChipsModule, MatIconModule, MatProgressBarModule],
  templateUrl: './stats-page.html',
  styleUrl: './stats-page.css',
})
export class StatsPage {
  protected readonly simulations = signal<MedicalSimulation[]>([]);
  protected readonly attempts = signal<SimulationAttempt[]>([]);
  protected readonly gamification = signal<GamificationData | null>(null);
  protected readonly error = signal<string | null>(null);
  protected readonly loaded = signal(false);

  protected readonly successfulTransactions = computed(() =>
    (this.gamification()?.coinTransactions ?? []).filter(
      (transaction) => transaction.userId === 'usr-001' && transaction.successful,
    ),
  );
  protected readonly completedSimulationIds = computed(
    () => new Set(this.successfulTransactions().map((transaction) => transaction.simulationId)),
  );
  protected readonly totalAttempts = computed(() => this.userAttempts().length);
  protected readonly completedSimulations = computed(() => this.completedSimulationIds().size);
  protected readonly averageAccuracy = computed(() => this.averageAttemptAccuracy(this.userAttempts()));
  protected readonly totalCoins = computed(() =>
    this.successfulTransactions().reduce((total, transaction) => total + transaction.earnedCoins, 0),
  );
  protected readonly totalXp = computed(() =>
    this.successfulTransactions().reduce((total, transaction) => {
      const simulation = this.simulationById(transaction.simulationId);
      return total + Math.floor((simulation?.xpReward ?? 0) * transaction.accuracy);
    }, 0),
  );
  protected readonly trainedMinutes = computed(() =>
    this.successfulTransactions().reduce((total, transaction) => {
      const simulation = this.simulationById(transaction.simulationId);
      return total + (simulation?.durationMinutes ?? 0);
    }, 0),
  );
  protected readonly performanceBySimulation = computed(() =>
    this.simulations().map((simulation) => this.buildSimulationPerformance(simulation)),
  );
  protected readonly pendingSimulations = computed(() =>
    this.simulations().filter((simulation) => !this.completedSimulationIds().has(simulation.id)),
  );
  protected readonly weakSimulations = computed(() =>
    this.performanceBySimulation()
      .filter((item) => item.attempts > 0 && item.averageAccuracy < 80)
      .sort((a, b) => a.averageAccuracy - b.averageAccuracy)
      .slice(0, 4),
  );
  protected readonly commonMistakes = computed(() => this.buildCommonMistakes());
  protected readonly actionRecommendations = computed(() => this.buildRecommendations());
  protected readonly completedMissions = computed(
    () => this.gamification()?.missions.filter((mission) => mission.progress >= mission.goal).length ?? 0,
  );
  protected readonly unlockedBadges = computed(
    () => this.gamification()?.badges.filter((badge) => badge.unlocked).length ?? 0,
  );

  constructor(
    private readonly medicalSimulationApi: MedicalSimulationApi,
    private readonly gamificationApi: GamificationApi,
  ) {
    void this.load();
  }

  protected formatDate(value: string): string {
    if (!value) {
      return 'Sin intentos';
    }
    return new Intl.DateTimeFormat('es-PE', { day: '2-digit', month: 'short' }).format(new Date(value));
  }

  private async load(): Promise<void> {
    try {
      const [medicalSimulationData, gamification] = await Promise.all([
        this.medicalSimulationApi.getMedicalSimulations(),
        this.gamificationApi.getGamification(),
      ]);
      this.simulations.set(medicalSimulationData.simulations);
      this.attempts.set(medicalSimulationData.attempts ?? []);
      this.gamification.set(gamification);
      this.loaded.set(true);
    } catch {
      this.error.set('No se pudo cargar el progreso real. Ejecuta npm run server y revisa server/db.json.');
    }
  }

  private userAttempts(): SimulationAttempt[] {
    return this.attempts().filter((attempt) => attempt.userId === 1);
  }

  private simulationById(id: string): MedicalSimulation | undefined {
    return this.simulations().find((simulation) => simulation.id === id);
  }

  private attemptsForSimulation(simulationId: string): SimulationAttempt[] {
    return this.userAttempts().filter((attempt) => attempt.scenarioSlug === simulationId);
  }

  private completionsForSimulation(simulationId: string): CoinTransaction[] {
    return this.successfulTransactions().filter((transaction) => transaction.simulationId === simulationId);
  }

  private averageAttemptAccuracy(attempts: SimulationAttempt[]): number {
    if (!attempts.length) {
      return 0;
    }
    const total = attempts.reduce((sum, attempt) => sum + (attempt.correctSteps / attempt.totalSteps) * 100, 0);
    return Math.round(total / attempts.length);
  }

  private buildSimulationPerformance(simulation: MedicalSimulation): SimulationPerformance {
    const attempts = this.attemptsForSimulation(simulation.id);
    const completions = this.completionsForSimulation(simulation.id);
    return {
      simulation,
      attempts: attempts.length,
      completions: completions.length,
      bestScore: attempts.length ? Math.max(...attempts.map((attempt) => attempt.score)) : 0,
      averageAccuracy: this.averageAttemptAccuracy(attempts),
      lastAttempt: attempts.at(-1)?.completedAt ?? completions[0]?.createdAt ?? '',
    };
  }

  private buildCommonMistakes(): Array<{ topic: string; count: number; recommendation: string }> {
    const errors = new Map<string, number>();
    for (const attempt of this.userAttempts()) {
      for (const error of attempt.errors) {
        errors.set(error.error, (errors.get(error.error) ?? 0) + 1);
      }
    }
    return [...errors.entries()]
      .sort((a, b) => b[1] - a[1])
      .slice(0, 6)
      .map(([topic, count]) => ({
        topic,
        count,
        recommendation: this.recommendationForMistake(topic),
      }));
  }

  private buildRecommendations(): ActionRecommendation[] {
    const weakest = this.weakSimulations()[0];
    const pending = this.pendingSimulations()[0];
    const lockedBadge = this.gamification()?.badges.find((badge) => !badge.unlocked);
    const mission = this.gamification()?.missions.find((item) => (item.status ?? 'Disponible') === 'Disponible');
    return [
      weakest
        ? {
            icon: 'replay',
            title: `Repite ${weakest.simulation.title}`,
            detail: `Tu precision promedio es ${weakest.averageAccuracy}%. Es el mejor candidato para reforzar.`,
          }
        : {
            icon: 'verified',
            title: 'Manten tu precision',
            detail: 'No hay simulaciones con precision baja en tus intentos actuales.',
          },
      pending
        ? {
            icon: 'play_circle',
            title: `Completa ${pending.title}`,
            detail: 'Aun no tiene recompensas registradas para tu usuario.',
          }
        : {
            icon: 'fact_check',
            title: 'Rutas principales completadas',
            detail: 'Tus simulaciones principales ya tienen al menos una finalizacion exitosa.',
          },
      lockedBadge
        ? {
            icon: 'workspace_premium',
            title: `Desbloquea ${lockedBadge.name}`,
            detail: lockedBadge.unlockRequirement ?? lockedBadge.description,
          }
        : {
            icon: 'emoji_events',
            title: 'Insignias al dia',
            detail: 'No hay insignias bloqueadas con los datos actuales.',
          },
      mission
        ? {
            icon: 'flag',
            title: `Acepta: ${mission.title}`,
            detail: mission.instructions ?? 'Completa esta mision para ganar XP y SafeCoins.',
          }
        : {
            icon: 'paid',
            title: 'Canjea tus SafeCoins',
            detail: 'Revisa la tienda y usa tus monedas acumuladas en cupones.',
          },
    ];
  }

  private recommendationForMistake(topic: string): string {
    const lower = topic.toLowerCase();
    if (lower.includes('compres')) {
      return 'Repite una simulacion de RCP y revisa la frecuencia de compresiones.';
    }
    if (lower.includes('gasa') || lower.includes('sang')) {
      return 'Practica control de hemorragias y evita retirar gasas colocadas.';
    }
    if (lower.includes('conciencia')) {
      return 'Refuerza evaluacion inicial antes de intervenir.';
    }
    return 'Repite la simulacion asociada y revisa el feedback del paso fallado.';
  }
}
