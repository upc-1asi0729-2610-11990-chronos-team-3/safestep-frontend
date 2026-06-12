import { BaseResource, BaseResponse } from '../../shared/infrastructure/base-response';

export interface AuthProvidersResponse extends BaseResponse {
  authProviders: AuthProviderResource[];
}

export interface AuthProviderResource extends BaseResource<string> {
  name: string;
  enabled: boolean;
}
