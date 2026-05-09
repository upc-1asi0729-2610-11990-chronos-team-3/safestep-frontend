import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { BaseApi } from '../../shared/infrastructure/base-api';
import { environment } from '../../../environments/environment';
import { EcommerceData } from '../domain/model/ecommerce.entity';

@Injectable({ providedIn: 'root' })
export class EcommerceApi extends BaseApi {
  private readonly endpointUrl = `${environment.platformProviderApiBaseUrl}${environment.ecommerceEndpointPath}`;

  constructor(private readonly http: HttpClient) {
    super();
  }

  getEcommerce(): Promise<EcommerceData> {
    return firstValueFrom(this.http.get<EcommerceData>(this.endpointUrl));
  }
}
