import { BaseAssembler } from '../../shared/infrastructure/base-assembler';
import { Order } from '../domain/model/order.entity';
import { OrdersResponse, OrderResource } from './orders-response';

export class OrderAssembler implements BaseAssembler<Order, OrderResource, OrdersResponse> {
  toEntitiesFromResponse(response: OrdersResponse): Order[] { return response.orders.map((r) => this.toEntityFromResource(r)); }
  toEntityFromResource(resource: OrderResource): Order { return new Order({ ...resource, items: [...resource.items] }); }
  toResourceFromEntity(entity: Order): OrderResource { return { id: entity.id, userId: entity.userId, total: entity.total, status: entity.status, items: [...entity.items], createdAt: entity.createdAt }; }
}
