import { BaseResource, BaseResponse } from '../../shared/infrastructure/base-response';

export interface SecurityEventsResponse extends BaseResponse {
  securityEvents: SecurityEventResource[];
}

export interface SecurityEventResource extends BaseResource<string> {
  type: string;
  description: string;
  createdAt: string;
}
