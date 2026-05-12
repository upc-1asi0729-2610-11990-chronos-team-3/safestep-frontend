import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { BaseApi } from '../../shared/infrastructure/base-api';
import { environment } from '../../../environments/environment';
import { IdentityAccessData } from '../domain/model/identity-access-data.entity';
import { IdentityAccessAssembler } from './assemblers/identity-access.assembler';
import { IdentityAccessResource } from './resources/identity-access.resource';

@Injectable({ providedIn: 'root' })
export class IdentityAccessApi extends BaseApi {
  private readonly endpointUrl = `${environment.platformProviderApiBaseUrl}${environment.identityAccessEndpointPath}`;

  constructor(private readonly http: HttpClient) {
    super();
  }

  async getIdentity(): Promise<IdentityAccessData> {
    const resource = await firstValueFrom(this.http.get<IdentityAccessResource>(this.endpointUrl));
    return IdentityAccessAssembler.toEntity(resource);
  }

  async updateIdentity(data: IdentityAccessData): Promise<IdentityAccessData> {
    const resource = IdentityAccessAssembler.toResource(data);
    const saved = await firstValueFrom(this.http.patch<IdentityAccessResource>(this.endpointUrl, resource));
    return IdentityAccessAssembler.toEntity(saved);
  }
}
