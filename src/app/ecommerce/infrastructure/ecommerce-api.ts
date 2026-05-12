import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { BaseApi } from '../../shared/infrastructure/base-api';
import { environment } from '../../../environments/environment';
import { EcommerceData } from '../domain/model/ecommerce.entity';
import { EcommerceAssembler } from './assemblers/ecommerce.assembler';
import { EcommerceResource } from './resources/ecommerce.resource';

@Injectable({ providedIn: 'root' })
export class EcommerceApi extends BaseApi {
  private readonly endpointUrl = `${environment.platformProviderApiBaseUrl}${environment.ecommerceEndpointPath}`;

  constructor(private readonly http: HttpClient) {
    super();
  }

  async getEcommerce(): Promise<EcommerceData> {
    const resource = await firstValueFrom(this.http.get<EcommerceResource>(this.endpointUrl));
    return EcommerceAssembler.toEntity(resource);
  }

  async updateEcommerce(data: EcommerceData): Promise<EcommerceData> {
    const resource = EcommerceAssembler.toResource(data);
    const saved = await firstValueFrom(this.http.patch<EcommerceResource>(this.endpointUrl, resource));
    return EcommerceAssembler.toEntity(saved);
  }
}
