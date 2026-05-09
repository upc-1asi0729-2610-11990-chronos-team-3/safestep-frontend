import { BaseEntity } from '../../../shared/infrastructure/base-entity';

export interface StoreProduct extends BaseEntity<string> {
  id: string;
  name: string;
  category: string;
  type: 'Producto' | 'Kit';
  price: number;
  oldPrice?: number;
  rating: number;
  stock: number;
  imageUrl: string;
  tags: string[];
  description: string;
  recommendedFor: string[];
  longDescription?: string;
  images?: string[];
  specifications?: Record<string, string>;
  isPopular?: boolean;
}

export interface Coupon extends BaseEntity<string> {
  id: string;
  title: string;
  costCoins: number;
  discount: string;
}

export interface EcommerceData {
  products: StoreProduct[];
  coupons: Coupon[];
  orders?: Order[];
  categories?: ProductCategory[];
  reviews?: ProductReview[];
  cartItems?: CartItem[];
  shippingAddresses?: ShippingAddress[];
  paymentMethods?: PaymentMethod[];
  personalizedRecommendations?: PersonalizedRecommendation[];
  emergencyKits?: EmergencyKit[];
}

export interface ProductCategory {
  id: string;
  name: string;
  productCount: number;
}

export interface ProductReview {
  id: string;
  productId: string;
  userName: string;
  rating: number;
  comment: string;
  createdAt: string;
}

export interface Order {
  id: string;
  userId: string;
  total: number;
  status: string;
  items: string[];
  createdAt: string;
}

export interface CartItem {
  id: string;
  userId: string;
  productId: string;
  quantity: number;
  addedAt: string;
}

export interface ShippingAddress {
  id: number;
  label: string;
  recipientName: string;
  city: string;
  district: string;
  isDefault: boolean;
}

export interface PaymentMethod {
  id: number;
  type: string;
  label: string;
  description: string;
  processingFee: number;
  isAvailable: boolean;
}

export interface PersonalizedRecommendation {
  id: string;
  userId: string;
  productId: string;
  reason: string;
  relatedSimulationId: string;
  priority: string;
  isDismissed: boolean;
}

export interface EmergencyKit {
  id: string;
  name: string;
  description: string;
  level: string;
  individualPrice: number;
  kitPrice: number;
  savings: number;
  savingsPercentage: number;
  products: Array<{ productId: string; quantity: number }>;
  imageUrl: string;
  isPopular: boolean;
}
