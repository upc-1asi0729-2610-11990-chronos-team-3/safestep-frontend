import { HttpClient } from '@angular/common/http';
import { BaseApiEndpoint } from '../../shared/infrastructure/base-api-endpoint';
import { environment } from '../../../environments/environment';
import { SecurityEvent } from '../domain/model/security-event.entity';
import { SecurityEventsResponse, SecurityEventResource } from './security-events-response';
import { SecurityEventAssembler } from './security-event.assembler';

export class SecurityEventsApiEndpoint extends BaseApiEndpoint<SecurityEvent, SecurityEventResource, SecurityEventsResponse, SecurityEventAssembler> {
  constructor(http: HttpClient) {
    const endpointUrl = `${environment.platformProviderApiBaseUrl}${environment.identityAccessEndpointPath}/securityEvents`;
    super(http, endpointUrl, new SecurityEventAssembler());
  }
}
