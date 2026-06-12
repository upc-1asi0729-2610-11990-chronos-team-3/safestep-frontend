import { BaseResource, BaseResponse } from '../../shared/infrastructure/base-response';

export interface NotificationsResponse extends BaseResponse {
  notifications: NotificationResource[];
}

export interface NotificationResource extends BaseResource<string> {
  type: string;
  title: string;
  message: string;
  isActive: boolean;
  isRead: boolean;
  createdAt: string;
}
