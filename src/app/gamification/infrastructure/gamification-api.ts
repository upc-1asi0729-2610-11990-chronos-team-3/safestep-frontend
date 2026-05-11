import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { BaseApi } from '../../shared/infrastructure/base-api';
import { environment } from '../../../environments/environment';
import { GamificationData } from '../domain/model/gamification.entity';

@Injectable({ providedIn: 'root' })
export class GamificationApi extends BaseApi {
  private readonly endpointUrl = `${environment.platformProviderApiBaseUrl}${environment.gamificationEndpointPath}`;

  constructor(private readonly http: HttpClient) {
    super();
  }

  getGamification(): Promise<GamificationData> {
    return firstValueFrom(this.http.get<GamificationData>(this.endpointUrl));
  }

  updateGamification(data: GamificationData): Promise<GamificationData> {
    return firstValueFrom(this.http.patch<GamificationData>(this.endpointUrl, data));
  }
}
