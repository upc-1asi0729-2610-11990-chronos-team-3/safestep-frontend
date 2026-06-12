import { BaseAssembler } from '../../shared/infrastructure/base-assembler';
import { SecurityEvent } from '../domain/model/security-event.entity';
import { SecurityEventsResponse, SecurityEventResource } from './security-events-response';

export class SecurityEventAssembler implements BaseAssembler<SecurityEvent, SecurityEventResource, SecurityEventsResponse> {
  toEntitiesFromResponse(response: SecurityEventsResponse): SecurityEvent[] {
    return response.securityEvents.map((r) => this.toEntityFromResource(r));
  }
  toEntityFromResource(resource: SecurityEventResource): SecurityEvent { return new SecurityEvent({ ...resource }); }
  toResourceFromEntity(entity: SecurityEvent): SecurityEventResource {
    return {
      id: entity.id,
      type: entity.type,
      description: entity.description,
      createdAt: entity.createdAt,
    };
  }
}
