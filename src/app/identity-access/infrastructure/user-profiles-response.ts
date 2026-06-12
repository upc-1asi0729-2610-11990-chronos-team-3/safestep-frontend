import { BaseResource, BaseResponse } from '../../shared/infrastructure/base-response';

export interface UserProfilesResponse extends BaseResponse {
  userProfiles: UserProfileResource[];
}

export interface UserProfileResource extends BaseResource<string> {
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
