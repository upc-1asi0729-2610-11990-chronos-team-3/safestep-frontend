import { BaseResource, BaseResponse } from '../../shared/infrastructure/base-response';

export interface CartItemsResponse extends BaseResponse {
  cartItems: CartItemResource[];
}

export interface CartItemResource extends BaseResource<string> {
  userId: string;
  productId: string;
  quantity: number;
  addedAt: string;
}
