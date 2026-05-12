import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { BaseApi } from '../../shared/infrastructure/base-api';
import { environment } from '../../../environments/environment';
import { MedicalSimulationData } from '../domain/model/medical-simulation.entity';
import { MedicalSimulationAssembler } from './assemblers/medical-simulation.assembler';
import { MedicalSimulationResource } from './resources/medical-simulation.resource';

@Injectable({ providedIn: 'root' })
export class MedicalSimulationApi extends BaseApi {
  private readonly endpointUrl = `${environment.platformProviderApiBaseUrl}${environment.medicalSimulationsEndpointPath}`;

  constructor(private readonly http: HttpClient) {
    super();
  }

  async getMedicalSimulations(): Promise<MedicalSimulationData> {
    const resource = await firstValueFrom(this.http.get<MedicalSimulationResource>(this.endpointUrl));
    return MedicalSimulationAssembler.toEntity(resource);
  }

  async updateMedicalSimulations(data: MedicalSimulationData): Promise<MedicalSimulationData> {
    const resource = MedicalSimulationAssembler.toResource(data);
    const saved = await firstValueFrom(this.http.patch<MedicalSimulationResource>(this.endpointUrl, resource));
    return MedicalSimulationAssembler.toEntity(saved);
  }
}
