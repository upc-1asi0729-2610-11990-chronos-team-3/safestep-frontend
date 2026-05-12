import { GamificationData } from '../../domain/model/gamification.entity';
import { GamificationResource } from '../resources/gamification.resource';

export class GamificationAssembler {
  static toEntity(resource: GamificationResource): GamificationData {
    return {
      levelSummary: { ...resource.levelSummary },
      missions: resource.missions.map((mission) => ({ ...mission })),
      badges: resource.badges.map((badge) => ({ ...badge })),
      leaderboard: resource.leaderboard.map((entry) => ({ ...entry })),
      coinTransactions: (resource.coinTransactions ?? []).map((transaction) => ({ ...transaction }))
    };
  }

  static toResource(entity: GamificationData): GamificationResource {
    return this.toEntity(entity);
  }
}
