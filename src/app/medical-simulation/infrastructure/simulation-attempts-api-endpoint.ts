import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseApiEndpoint } from '../../shared/infrastructure/base-api-endpoint';
import { SimulationAttempt } from '../domain/model/simulation-attempt.entity';
import { SimulationAttemptsResponse, SimulationAttemptResource } from './simulation-attempts-response';
import { SimulationAttemptAssembler } from './simulation-attempt.assembler';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class SimulationAttemptsApiEndpoint extends BaseApiEndpoint<
  SimulationAttempt,
  SimulationAttemptResource,
  SimulationAttemptsResponse,
  SimulationAttemptAssembler
> {
  constructor() {
    const http = inject(HttpClient);
    super(
      http,
      `${environment.platformProviderApiBaseUrl}${environment.medicalSimulationsEndpointPath}/attempts`,
      new SimulationAttemptAssembler(),
    );
  }
}
