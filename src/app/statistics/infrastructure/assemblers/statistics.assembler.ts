import { StatsData } from '../../domain/model/statistics.entity';
import { StatisticsResource } from '../resources/statistics.resource';

export class StatisticsAssembler {
  static toEntity(resource: StatisticsResource): StatsData {
    return {
      summary: resource.summary.map((item) => ({ ...item })),
      simulationTypes: resource.simulationTypes.map((item) => ({ ...item })),
      weeklyActivity: resource.weeklyActivity.map((item) => ({ ...item })),
      commonMistakes: resource.commonMistakes.map((item) => ({ ...item })),
      monthlyActivity: (resource.monthlyActivity ?? []).map((item) => ({ ...item })),
      skillProgress: (resource.skillProgress ?? []).map((item) => ({ ...item })),
      recommendations: (resource.recommendations ?? []).map((item) => ({ ...item })),
      performanceByDifficulty: (resource.performanceByDifficulty ?? []).map((item) => ({ ...item })),
      progressVisuals: (resource.progressVisuals ?? []).map((item) => ({
        ...item,
        commonErrors: [...item.commonErrors]
      })),
      certificates: (resource.certificates ?? []).map((item) => ({ ...item }))
    };
  }

  static toResource(entity: StatsData): StatisticsResource {
    return this.toEntity(entity);
  }
}
