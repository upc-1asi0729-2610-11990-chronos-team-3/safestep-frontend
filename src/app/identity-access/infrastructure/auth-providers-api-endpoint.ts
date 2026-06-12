import { HttpClient } from '@angular/common/http';
import { BaseApiEndpoint } from '../../shared/infrastructure/base-api-endpoint';
import { environment } from '../../../environments/environment';
import { AuthProvider } from '../domain/model/auth-provider.entity';
import { AuthProvidersResponse, AuthProviderResource } from './auth-providers-response';
import { AuthProviderAssembler } from './auth-provider.assembler';

export class AuthProvidersApiEndpoint extends BaseApiEndpoint<AuthProvider, AuthProviderResource, AuthProvidersResponse, AuthProviderAssembler> {
  constructor(http: HttpClient) {
    const endpointUrl = `${environment.platformProviderApiBaseUrl}${environment.identityAccessEndpointPath}/authProviders`;
    super(http, endpointUrl, new AuthProviderAssembler());
  }
}
