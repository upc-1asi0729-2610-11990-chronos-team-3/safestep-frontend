import { BaseResource, BaseResponse } from '../../shared/infrastructure/base-response';

export interface OrdersResponse extends BaseResponse {
  orders: OrderResource[];
}

export interface OrderResource extends BaseResource<string> {
  userId: string;
  total: number;
  status: string;
  items: string[];
  createdAt: string;
}
