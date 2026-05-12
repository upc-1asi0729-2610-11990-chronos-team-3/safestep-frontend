import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { BaseApi } from '../../shared/infrastructure/base-api';
import { environment } from '../../../environments/environment';
import { MedicalSimulationData } from '../domain/model/medical-simulation.entity';

@Injectable({ providedIn: 'root' })
export class MedicalSimulationApi extends BaseApi {
  private readonly endpointUrl = `${environment.platformProviderApiBaseUrl}${environment.medicalSimulationsEndpointPath}`;

  constructor(private readonly http: HttpClient) {
    super();
  }

  getMedicalSimulations(): Promise<MedicalSimulationData> {
    return firstValueFrom(this.http.get<MedicalSimulationData>(this.endpointUrl));
  }

  updateMedicalSimulations(data: MedicalSimulationData): Promise<MedicalSimulationData> {
    return firstValueFrom(this.http.patch<MedicalSimulationData>(this.endpointUrl, data));
  }
}
