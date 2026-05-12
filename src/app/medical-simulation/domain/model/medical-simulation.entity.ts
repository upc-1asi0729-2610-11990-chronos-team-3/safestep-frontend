import { BaseEntity } from '../../../shared/infrastructure/base-entity';

export interface SimulationStep extends BaseEntity<string> {
  id: string;
  prompt: string;
  correctOptionId: string;
  options: Array<{
    id: string;
    label: string;
    feedback: string;
  }>;
}

export interface ProductSuggestion {
  productId: string;
  reason: string;
}

export interface MedicalSimulation extends BaseEntity<string> {
  id: string;
  title: string;
  emergencyType: string;
  difficulty: 'Basico' | 'Intermedio' | 'Avanzado';
  durationMinutes: number;
  xpReward: number;
  coinReward: number;
  imageUrl: string;
  status: 'Disponible' | 'En progreso' | 'Completado';
  completion: number;
  description: string;
  learningGoals: string[];
  steps: SimulationStep[];
  productSuggestions: ProductSuggestion[];
}

export interface MedicalSimulationData {
  simulations: MedicalSimulation[];
  attempts?: SimulationAttempt[];
}

export interface SimulationAttempt {
  id: number;
  userId: number;
  scenarioId: number;
  scenarioSlug?: string;
  mode: string;
  startedAt?: string;
  completedAt?: string;
  score: number;
  totalSteps: number;
  correctSteps: number;
  timeElapsed: number;
  errors: Array<{ stepNumber: number; error: string; severity: string }>;
}
