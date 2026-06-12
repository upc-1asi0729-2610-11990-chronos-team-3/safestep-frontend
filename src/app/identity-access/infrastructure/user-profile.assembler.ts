import { BaseAssembler } from '../../shared/infrastructure/base-assembler';
import { UserProfile } from '../domain/model/user-profile.entity';
import { UserProfilesResponse, UserProfileResource } from './user-profiles-response';

export class UserProfileAssembler implements BaseAssembler<UserProfile, UserProfileResource, UserProfilesResponse> {
  toEntitiesFromResponse(response: UserProfilesResponse): UserProfile[] {
    return response.userProfiles.map((r) => this.toEntityFromResource(r));
  }
  toEntityFromResource(resource: UserProfileResource): UserProfile { return new UserProfile({ ...resource }); }
  toResourceFromEntity(entity: UserProfile): UserProfileResource {
    return {
      id: entity.id,
      fullName: entity.fullName,
      email: entity.email,
      role: entity.role,
      city: entity.city,
      avatarUrl: entity.avatarUrl,
      level: entity.level,
      xp: entity.xp,
      nextLevelXp: entity.nextLevelXp,
      safeCoins: entity.safeCoins,
      streakDays: entity.streakDays,
      completedSimulations: entity.completedSimulations,
    };
  }
}
