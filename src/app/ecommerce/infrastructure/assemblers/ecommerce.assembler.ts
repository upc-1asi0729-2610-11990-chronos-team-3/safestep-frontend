import { EcommerceData } from '../../domain/model/ecommerce.entity';
import { EcommerceResource } from '../resources/ecommerce.resource';

export class EcommerceAssembler {
  static toEntity(resource: EcommerceResource): EcommerceData {
    return {
      products: resource.products.map((product) => ({
        ...product,
        tags: [...product.tags],
        recommendedFor: [...product.recommendedFor],
        images: [...(product.images ?? [])],
        specifications: { ...(product.specifications ?? {}) }
      })),
      coupons: resource.coupons.map((coupon) => ({ ...coupon })),
      orders: (resource.orders ?? []).map((order) => ({
        ...order,
        items: [...order.items]
      })),
      categories: (resource.categories ?? []).map((category) => ({ ...category })),
      reviews: (resource.reviews ?? []).map((review) => ({ ...review })),
      cartItems: (resource.cartItems ?? []).map((item) => ({ ...item })),
      shippingAddresses: (resource.shippingAddresses ?? []).map((address) => ({ ...address })),
      paymentMethods: (resource.paymentMethods ?? []).map((method) => ({ ...method })),
      personalizedRecommendations: (resource.personalizedRecommendations ?? []).map((recommendation) => ({
        ...recommendation
      })),
      emergencyKits: (resource.emergencyKits ?? []).map((kit) => ({
        ...kit,
        products: kit.products.map((product) => ({ ...product }))
      }))
    };
  }

  static toResource(entity: EcommerceData): EcommerceResource {
    return this.toEntity(entity);
  }
}
