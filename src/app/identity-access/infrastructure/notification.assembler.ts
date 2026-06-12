import { BaseAssembler } from '../../shared/infrastructure/base-assembler';
import { Notification } from '../domain/model/notification.entity';
import { NotificationsResponse, NotificationResource } from './notifications-response';

export class NotificationAssembler implements BaseAssembler<Notification, NotificationResource, NotificationsResponse> {
  toEntitiesFromResponse(response: NotificationsResponse): Notification[] {
    return response.notifications.map((r) => this.toEntityFromResource(r));
  }
  toEntityFromResource(resource: NotificationResource): Notification { return new Notification({ ...resource }); }
  toResourceFromEntity(entity: Notification): NotificationResource {
    return {
      id: entity.id,
      type: entity.type,
      title: entity.title,
      message: entity.message,
      isActive: entity.isActive,
      isRead: entity.isRead,
      createdAt: entity.createdAt,
    };
  }
}
