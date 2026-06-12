import { HttpClient } from '@angular/common/http';
import { BaseApiEndpoint } from '../../shared/infrastructure/base-api-endpoint';
import { Order } from '../domain/model/order.entity';
import { OrdersResponse, OrderResource } from './orders-response';
import { OrderAssembler } from './order.assembler';
import { environment } from '../../../environments/environment';

export class OrdersApiEndpoint extends BaseApiEndpoint<Order, OrderResource, OrdersResponse, OrderAssembler> {
  constructor(http: HttpClient) {
    super(http, `${environment.platformProviderApiBaseUrl}${environment.ecommerceEndpointPath}/orders`, new OrderAssembler());
  }
}
