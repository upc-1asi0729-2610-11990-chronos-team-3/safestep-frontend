import { BaseEntity } from '../../../shared/infrastructure/base-entity';

export interface Mission extends BaseEntity<string> {
  id: string;
  title: string;
  cadence: 'Diaria' | 'Semanal';
  progress: number;
  goal: number;
  rewardXp: number;
  rewardCoins: number;
}

export interface Badge extends BaseEntity<string> {
  id: string;
  name: string;
  rarity: string;
  unlocked: boolean;
  description: string;
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
  levels?: Level[];
  userXp?: UserXp[];
  userStreaks?: UserStreak[];
  events?: GamificationEvent[];
  prestigeLevels?: PrestigeLevel[];
  userPrestige?: UserPrestige[];
  storeItems?: GamificationStoreItem[];
  milestoneFeedback?: MilestoneFeedback[];
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

export interface Level {
  id: number;
  levelNumber: number;
  requiredXP: number;
  title: string;
  benefits: string[];
}

export interface UserXp {
  id: number;
  userId: number;
  totalXP: number;
  currentLevel: number;
  xpToNextLevel: number;
  xpBreakdown: Record<string, number>;
}

export interface UserStreak {
  id: number;
  userId: number;
  currentStreak: number;
  longestStreak: number;
  streakShieldCount: number;
}

export interface GamificationEvent {
  id: number;
  name: string;
  description: string;
  type: string;
  startDate: string;
  endDate: string;
  xpReward: number;
  coinsReward: number;
  participantCount: number;
  isActive: boolean;
}

export interface PrestigeLevel {
  id: number;
  prestigeNumber: number;
  title: string;
  requiredStandardLevel: number;
  requiredXP: number;
  benefits: string[];
  isUnlocked: boolean;
}

export interface UserPrestige {
  id: number;
  userId: number;
  prestigeLevel: number;
  totalPrestigeXP: number;
  xpToNextPrestige: number;
}

export interface GamificationStoreItem {
  id: number;
  name: string;
  description: string;
  type: string;
  price: number;
  imageUrl: string;
  isAvailable: boolean;
}

export interface MilestoneFeedback {
  id: number;
  milestoneType: string;
  visualEffect: string;
  animationType: string;
  messageTemplate: string;
  bonusXP: number;
  bonusCoins: number;
}
