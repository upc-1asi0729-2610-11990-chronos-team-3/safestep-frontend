import { BaseAssembler } from '../../shared/infrastructure/base-assembler';
import { AuthProvider } from '../domain/model/auth-provider.entity';
import { AuthProvidersResponse, AuthProviderResource } from './auth-providers-response';

export class AuthProviderAssembler implements BaseAssembler<AuthProvider, AuthProviderResource, AuthProvidersResponse> {
  toEntitiesFromResponse(response: AuthProvidersResponse): AuthProvider[] {
    return response.authProviders.map((r) => this.toEntityFromResource(r));
  }
  toEntityFromResource(resource: AuthProviderResource): AuthProvider { return new AuthProvider({ ...resource }); }
  toResourceFromEntity(entity: AuthProvider): AuthProviderResource {
    return {
      id: entity.id,
      name: entity.name,
      enabled: entity.enabled,
    };
  }
}
