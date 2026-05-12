import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { BaseApi } from '../../shared/infrastructure/base-api';
import { environment } from '../../../environments/environment';
import { GamificationData } from '../domain/model/gamification.entity';
import { GamificationAssembler } from './assemblers/gamification.assembler';
import { GamificationResource } from './resources/gamification.resource';

@Injectable({ providedIn: 'root' })
export class GamificationApi extends BaseApi {
  private readonly endpointUrl = `${environment.platformProviderApiBaseUrl}${environment.gamificationEndpointPath}`;

  constructor(private readonly http: HttpClient) {
    super();
  }

  async getGamification(): Promise<GamificationData> {
    const resource = await firstValueFrom(this.http.get<GamificationResource>(this.endpointUrl));
    return GamificationAssembler.toEntity(resource);
  }

  async updateGamification(data: GamificationData): Promise<GamificationData> {
    const resource = GamificationAssembler.toResource(data);
    const saved = await firstValueFrom(this.http.patch<GamificationResource>(this.endpointUrl, resource));
    return GamificationAssembler.toEntity(saved);
  }
}
