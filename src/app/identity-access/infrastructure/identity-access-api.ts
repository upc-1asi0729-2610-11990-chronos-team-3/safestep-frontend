import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { BaseApi } from '../../shared/infrastructure/base-api';
import { environment } from '../../../environments/environment';
import { IdentityAccessData } from '../domain/model/identity-access-data.entity';

@Injectable({ providedIn: 'root' })
export class IdentityAccessApi extends BaseApi {
  private readonly endpointUrl = `${environment.platformProviderApiBaseUrl}${environment.identityAccessEndpointPath}`;

  constructor(private readonly http: HttpClient) {
    super();
  }

  getIdentity(): Promise<IdentityAccessData> {
    return firstValueFrom(this.http.get<IdentityAccessData>(this.endpointUrl));
  }

  updateIdentity(data: IdentityAccessData): Promise<IdentityAccessData> {
    return firstValueFrom(this.http.patch<IdentityAccessData>(this.endpointUrl, data));
  }
}
