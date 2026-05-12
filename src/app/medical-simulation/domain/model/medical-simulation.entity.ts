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
  microLessons?: MicroLesson[];
  microLessonHistory?: MicroLessonHistory[];
  moduleEvaluations?: ModuleEvaluation[];
  evaluationResults?: EvaluationResult[];
  certificates?: Certificate[];
  feedbackMessages?: FeedbackMessage[];
}

export interface SimulationAttempt {
  id: number;
  userId: number;
  scenarioId: number;
  scenarioSlug?: string;
  mode: string;
  score: number;
  totalSteps: number;
  correctSteps: number;
  timeElapsed: number;
  errors: Array<{ stepNumber: number; error: string; severity: string }>;
}

export interface MicroLesson {
  id: number;
  title: string;
  topic: string;
  description: string;
  content: string;
  estimatedTime: number;
  contentType: string;
  hasVerificationQuestion: boolean;
  verificationQuestion?: {
    question: string;
    options: string[];
    correctAnswerIndex: number;
  };
  xpReward: number;
  relatedSimulationIds: string[];
}

export interface MicroLessonHistory {
  id: number;
  userId: number;
  microLessonId: number;
  completedAt: string;
  timeSpent: number;
  verificationAnswer: string;
  xpEarned: number;
}

export interface ModuleEvaluation {
  id: number;
  moduleName: string;
  description: string;
  minimumPassingScore: number;
  totalQuestions: number;
  estimatedTime: number;
  requiredSimulationIds: string[];
  isUnlocked: boolean;
  maxAttempts: number;
}

export interface EvaluationResult {
  id: number;
  userId: number;
  evaluationId: number;
  score: number;
  passed: boolean;
  recommendations: string[];
  breakdown: Array<{ area: string; correct: number; total: number }>;
}

export interface Certificate {
  id: number;
  userId: number;
  moduleName: string;
  score: number;
  achievementLevel: string;
  issuedAt: string;
  verificationCode: string;
  qrCodeUrl: string;
  downloadablePdfUrl: string;
}

export interface FeedbackMessage {
  id: number;
  scenarioId: number;
  stepNumber: number;
  feedbackType: string;
  message: string;
  isCritical: boolean;
}
