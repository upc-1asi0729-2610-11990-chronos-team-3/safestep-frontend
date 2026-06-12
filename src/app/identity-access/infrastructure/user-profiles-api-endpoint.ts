import { HttpClient } from '@angular/common/http';
import { BaseApiEndpoint } from '../../shared/infrastructure/base-api-endpoint';
import { environment } from '../../../environments/environment';
import { UserProfile } from '../domain/model/user-profile.entity';
import { UserProfilesResponse, UserProfileResource } from './user-profiles-response';
import { UserProfileAssembler } from './user-profile.assembler';

export class UserProfilesApiEndpoint extends BaseApiEndpoint<UserProfile, UserProfileResource, UserProfilesResponse, UserProfileAssembler> {
  constructor(http: HttpClient) {
    const endpointUrl = `${environment.platformProviderApiBaseUrl}${environment.identityAccessEndpointPath}/userProfiles`;
    super(http, endpointUrl, new UserProfileAssembler());
  }
}
