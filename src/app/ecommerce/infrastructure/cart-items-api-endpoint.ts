import { HttpClient } from '@angular/common/http';
import { BaseApiEndpoint } from '../../shared/infrastructure/base-api-endpoint';
import { CartItem } from '../domain/model/cart-item.entity';
import { CartItemsResponse, CartItemResource } from './cart-items-response';
import { CartItemAssembler } from './cart-item.assembler';
import { environment } from '../../../environments/environment';

export class CartItemsApiEndpoint extends BaseApiEndpoint<CartItem, CartItemResource, CartItemsResponse, CartItemAssembler> {
  constructor(http: HttpClient) {
    super(http, `${environment.platformProviderApiBaseUrl}${environment.ecommerceEndpointPath}/cartItems`, new CartItemAssembler());
  }
}
