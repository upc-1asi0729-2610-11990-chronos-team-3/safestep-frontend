export interface StatsData {
  summary: Array<{
    label: string;
    value: string;
    trend: string;
  }>;
  simulationTypes: Array<{
    type: string;
    completed: number;
    accuracy: number;
  }>;
  weeklyActivity: Array<{
    day: string;
    xp: number;
    simulations: number;
  }>;
  commonMistakes: Array<{
    topic: string;
    mistakes: number;
    recommendation: string;
  }>;
  monthlyActivity?: Array<{
    week: string;
    xp: number;
    simulations: number;
  }>;
  skillProgress?: Array<{
    skill: string;
    progress: number;
  }>;
  recommendations?: Array<{
    id: string;
    title: string;
    action: string;
    priority: string;
  }>;
  performanceByDifficulty?: Array<{
    difficulty: string;
    completed: number;
    accuracy: number;
  }>;
  progressVisuals?: Array<{
    id: number;
    simulationId: string;
    scenarioName: string;
    completionPercentage: number;
    bestScore: number;
    averageScore: number;
    totalAttempts: number;
    commonErrors: string[];
    averageResponseTime: number;
  }>;
  certificates?: Array<{
    id: number;
    moduleName: string;
    score: number;
    achievementLevel: string;
    verificationCode: string;
  }>;
}
