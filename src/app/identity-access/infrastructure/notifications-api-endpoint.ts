import { HttpClient } from '@angular/common/http';
import { BaseApiEndpoint } from '../../shared/infrastructure/base-api-endpoint';
import { environment } from '../../../environments/environment';
import { Notification } from '../domain/model/notification.entity';
import { NotificationsResponse, NotificationResource } from './notifications-response';
import { NotificationAssembler } from './notification.assembler';

export class NotificationsApiEndpoint extends BaseApiEndpoint<Notification, NotificationResource, NotificationsResponse, NotificationAssembler> {
  constructor(http: HttpClient) {
    const endpointUrl = `${environment.platformProviderApiBaseUrl}${environment.identityAccessEndpointPath}/notifications`;
    super(http, endpointUrl, new NotificationAssembler());
  }
}
