import { IdentityAccessData } from '../../domain/model/identity-access-data.entity';
import { IdentityAccessResource } from '../resources/identity-access.resource';

export class IdentityAccessAssembler {
  static toEntity(resource: IdentityAccessResource): IdentityAccessData {
    return {
      ...resource,
      demoUsers: [...(resource.demoUsers ?? [])],
      authProviders: [...resource.authProviders],
      passwordRules: [...resource.passwordRules],
      securityEvents: [...(resource.securityEvents ?? [])],
      notifications: [...(resource.notifications ?? [])]
    };
  }

  static toResource(entity: IdentityAccessData): IdentityAccessResource {
    return {
      ...entity,
      demoUsers: [...(entity.demoUsers ?? [])],
      authProviders: [...entity.authProviders],
      passwordRules: [...entity.passwordRules],
      securityEvents: [...(entity.securityEvents ?? [])],
      notifications: [...(entity.notifications ?? [])]
    };
  }
}
