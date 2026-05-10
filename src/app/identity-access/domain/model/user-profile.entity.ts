import { BaseEntity } from '../../../shared/infrastructure/base-entity';

export interface UserProfile extends BaseEntity<string> {
  id: string;
  fullName: string;
  email: string;
  role: string;
  city: string;
  avatarUrl: string;
  level: number;
  xp: number;
  nextLevelXp: number;
  safeCoins: number;
  streakDays: number;
  completedSimulations: number;
}
