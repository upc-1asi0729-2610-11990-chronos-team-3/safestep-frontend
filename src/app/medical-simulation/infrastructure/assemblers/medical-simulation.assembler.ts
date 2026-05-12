import { MedicalSimulationData } from '../../domain/model/medical-simulation.entity';
import { MedicalSimulationResource } from '../resources/medical-simulation.resource';

export class MedicalSimulationAssembler {
  static toEntity(resource: MedicalSimulationResource): MedicalSimulationData {
    return {
      simulations: resource.simulations.map((simulation) => ({
        ...simulation,
        learningGoals: [...simulation.learningGoals],
        steps: simulation.steps.map((step) => ({
          ...step,
          options: step.options.map((option) => ({ ...option }))
        })),
        productSuggestions: simulation.productSuggestions.map((suggestion) => ({ ...suggestion }))
      })),
      attempts: (resource.attempts ?? []).map((attempt) => ({
        ...attempt,
        errors: attempt.errors.map((error) => ({ ...error }))
      }))
    };
  }

  static toResource(entity: MedicalSimulationData): MedicalSimulationResource {
    return this.toEntity(entity);
  }
}
