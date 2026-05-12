import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { BaseApi } from '../../shared/infrastructure/base-api';
import { environment } from '../../../environments/environment';
import { StatsData } from '../domain/model/statistics.entity';
import { StatisticsAssembler } from './assemblers/statistics.assembler';
import { StatisticsResource } from './resources/statistics.resource';

@Injectable({ providedIn: 'root' })
export class StatisticsApi extends BaseApi {
  private readonly endpointUrl = `${environment.platformProviderApiBaseUrl}${environment.statisticsEndpointPath}`;

  constructor(private readonly http: HttpClient) {
    super();
  }

  async getStats(): Promise<StatsData> {
    const resource = await firstValueFrom(this.http.get<StatisticsResource>(this.endpointUrl));
    return StatisticsAssembler.toEntity(resource);
  }
}
