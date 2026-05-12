import { BaseEntity } from '../../../shared/infrastructure/base-entity';

export interface Mission extends BaseEntity<string> {
  id: string;
  title: string;
  cadence: 'Diaria' | 'Semanal';
  progress: number;
  goal: number;
  rewardXp: number;
  rewardCoins: number;
  status?: 'Activa' | 'Disponible' | 'Bloqueada';
  instructions?: string;
  unlockRequirement?: string;
}

export interface Badge extends BaseEntity<string> {
  id: string;
  name: string;
  rarity: string;
  unlocked: boolean;
  description: string;
  unlockRequirement?: string;
}

export interface LeaderboardEntry {
  rank: number;
  name: string;
  xp: number;
  streak: number;
}

export interface GamificationData {
  levelSummary: {
    level: number;
    xp: number;
    nextLevelXp: number;
    safeCoins: number;
    streakDays: number;
    weeklyRank: number;
  };
  missions: Mission[];
  badges: Badge[];
  leaderboard: LeaderboardEntry[];
  coinTransactions?: CoinTransaction[];
}

export interface CoinTransaction {
  id: string;
  userId: string;
  simulationId: string;
  simulationTitle: string;
  attemptNumber: number;
  successfulAttemptNumber: number;
  baseCoins: number;
  multiplier: number;
  accuracy: number;
  earnedCoins: number;
  successful: boolean;
  createdAt: string;
}
