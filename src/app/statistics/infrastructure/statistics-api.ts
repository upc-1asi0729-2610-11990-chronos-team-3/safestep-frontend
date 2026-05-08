import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { BaseApi } from '../../shared/infrastructure/base-api';
import { environment } from '../../../environments/environment';
import { StatsData } from '../domain/model/statistics.entity';

@Injectable({ providedIn: 'root' })
export class StatisticsApi extends BaseApi {
  private readonly endpointUrl = `${environment.platformProviderApiBaseUrl}${environment.statisticsEndpointPath}`;

  constructor(private readonly http: HttpClient) {
    super();
  }

  getStats(): Promise<StatsData> {
    return firstValueFrom(this.http.get<StatsData>(this.endpointUrl));
  }
}
