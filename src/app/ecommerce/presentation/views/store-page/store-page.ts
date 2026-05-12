import { Component, computed, signal } from '@angular/core';
import { KeyValuePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { TranslatePipe } from '@ngx-translate/core';
import { EcommerceStore } from '../../../application/ecommerce-store';
import {
  Coupon,
  CartItem,
  EcommerceData,
  EmergencyKit,
  Order,
  PaymentMethod,
  PersonalizedRecommendation,
  ProductCategory,
  ProductReview,
  ShippingAddress,
  StoreProduct,
} from '../../../domain/model/ecommerce.entity';
import { IdentityAccessStore } from '../../../../identity-access/application/identity-access-store';
import { SafeCoinsWalletStore } from '../../../../shared/application/safe-coins-wallet-store';

@Component({
  selector: 'app-store-page',
  imports: [FormsModule, KeyValuePipe, MatBadgeModule, MatButtonModule, MatCardModule, MatChipsModule, MatIconModule, TranslatePipe],
  templateUrl: './store-page.html',
  styleUrl: './store-page.css',
})
export class StorePage {
  private readonly activeUserId = 'usr-001';

  protected readonly data = signal<EcommerceData | null>(null);
  protected readonly products = signal<StoreProduct[]>([]);
  protected readonly categories = signal<ProductCategory[]>([]);
  protected readonly coupons = signal<Coupon[]>([]);
  protected readonly cartItems = signal<CartItem[]>([]);
  protected readonly orders = signal<Order[]>([]);
  protected readonly reviews = signal<ProductReview[]>([]);
  protected readonly emergencyKits = signal<EmergencyKit[]>([]);
  protected readonly recommendations = signal<PersonalizedRecommendation[]>([]);
  protected readonly addresses = signal<ShippingAddress[]>([]);
  protected readonly paymentMethods = signal<PaymentMethod[]>([]);
  protected readonly activeView = signal<'store' | 'coupons' | 'detail' | 'cart' | 'checkout' | 'history' | 'success'>('store');
  protected readonly selectedProduct = signal<StoreProduct | null>(null);
  protected readonly selectedImage = signal<string | null>(null);
  protected readonly selectedCategory = signal('Todos');
  protected readonly searchQuery = signal('');
  protected readonly checkoutError = signal<string | null>(null);
  protected readonly lastOrder = signal<Order | null>(null);
  protected readonly isMainStoreView = computed(() => this.selectedCategory() === 'Todos' && this.activeView() === 'store');
  protected readonly paymentForm = {
    fullName: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
    address: '',
  };
  protected readonly relevantProducts = computed(() => {
    const recommendedIds = new Set(this.recommendations().map((recommendation) => recommendation.productId));
    const products = this.products();
    const recommended = products.filter((product) => recommendedIds.has(product.id));
    const popular = products.filter((product) => product.isPopular || product.tags.includes('Bestseller'));
    return [...new Map([...recommended, ...popular, ...products.slice(0, 4)].map((product) => [product.id, product])).values()].slice(0, 8);
  });
  protected readonly filteredProducts = computed(() => {
    const category = this.selectedCategory();
    const query = this.searchQuery().trim().toLowerCase();
    return this.products().filter((product) => {
      const matchesCategory = category === 'Todos' || product.category === category;
      const matchesQuery =
        !query ||
        product.name.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query) ||
        product.tags.some((tag) => tag.toLowerCase().includes(query));
      return matchesCategory && matchesQuery;
    });
  });
  protected readonly filteredKits = computed(() => {
    const category = this.selectedCategory();
    if (category !== 'Kits') {
      return [];
    }
    const query = this.searchQuery().trim().toLowerCase();
    return this.emergencyKits().filter((kit) => {
      const matchesQuery =
        !query ||
        kit.name.toLowerCase().includes(query) ||
        kit.description.toLowerCase().includes(query) ||
        kit.level.toLowerCase().includes(query);
      return matchesQuery;
    });
  });
  protected readonly hasCategoryResults = computed(() => this.filteredProducts().length > 0 || this.filteredKits().length > 0);
  protected readonly userCartItems = computed(() => this.cartItems().filter((item) => item.userId === this.activeUserId));
  protected readonly cartCount = computed(() => this.userCartItems().reduce((total, item) => total + item.quantity, 0));
  protected readonly cartLines = computed(() =>
    this.userCartItems()
      .map((item) => {
        const product = this.findCatalogItem(item.productId);
        return product ? { item, product, subtotal: product.price * item.quantity } : null;
      })
      .filter((line): line is { item: CartItem; product: StoreProduct; subtotal: number } => Boolean(line)),
  );
  protected readonly cartTotal = computed(() =>
    this.cartLines().reduce((total, line) => total + line.subtotal, 0),
  );
  protected readonly selectedProductImages = computed(() => {
    const product = this.selectedProduct();
    if (!product) {
      return [];
    }
    return [product.imageUrl, ...(product.images ?? [])].filter(Boolean);
  });
  protected readonly selectedProductReviews = computed(() => {
    const product = this.selectedProduct();
    return product ? this.reviews().filter((review) => review.productId === product.id) : [];
  });
  protected readonly userOrders = computed(() =>
    this.orders()
      .filter((order) => order.userId === this.activeUserId)
      .sort((a, b) => b.createdAt.localeCompare(a.createdAt)),
  );

  constructor(
    private readonly ecommerceStore: EcommerceStore,
    private readonly identityAccessStore: IdentityAccessStore,
    protected readonly wallet: SafeCoinsWalletStore,
  ) {
    void this.load();
  }

  protected async addToCart(product: StoreProduct): Promise<void> {
    await this.addItemToCart(product.id);
  }

  protected async addKitToCart(kit: EmergencyKit): Promise<void> {
    await this.addItemToCart(kit.id);
  }

  protected openKit(kit: EmergencyKit): void {
    const catalogItem = this.findCatalogItem(kit.id);
    if (!catalogItem) {
      return;
    }
    this.selectedProduct.set({
      ...catalogItem,
      longDescription: `${kit.description} Incluye ${kit.products.length} tipos de insumos seleccionados para preparacion de emergencias.`,
      specifications: {
        Nivel: kit.level,
        'Precio individual': `S/ ${kit.individualPrice}`,
        Ahorro: `S/ ${kit.savings}`,
        'Ahorro porcentual': `${kit.savingsPercentage}%`,
      },
    });
    this.selectedImage.set(kit.imageUrl);
    this.activeView.set('detail');
  }

  private async addItemToCart(itemId: string): Promise<void> {
    const currentItems = this.cartItems();
    const existing = currentItems.find((item) => item.userId === this.activeUserId && item.productId === itemId);
    const updatedItems = existing
      ? currentItems.map((item) => item.id === existing.id ? { ...item, quantity: item.quantity + 1 } : item)
      : [
          ...currentItems,
          {
            id: `cart-${Date.now()}`,
            userId: this.activeUserId,
            productId: itemId,
            quantity: 1,
            addedAt: new Date().toISOString(),
          },
        ];

    await this.saveEcommerce({ cartItems: updatedItems });
  }

  protected setCategory(category: string): void {
    this.selectedCategory.set(category);
    this.activeView.set('store');
  }

  protected setSearchQuery(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.searchQuery.set(input.value);
    this.activeView.set('store');
  }

  protected openCoupons(): void {
    this.activeView.set('coupons');
  }

  protected closeCoupons(): void {
    this.activeView.set('store');
  }

  protected openProduct(product: StoreProduct): void {
    this.selectedProduct.set(product);
    this.selectedImage.set(product.imageUrl);
    this.activeView.set('detail');
  }

  protected selectImage(imageUrl: string): void {
    this.selectedImage.set(imageUrl);
  }

  protected openCart(): void {
    this.checkoutError.set(null);
    this.activeView.set('cart');
  }

  protected openHistory(): void {
    this.activeView.set('history');
  }

  protected openCheckout(): void {
    if (!this.cartCount()) {
      return;
    }
    this.checkoutError.set(null);
    this.paymentForm.fullName = 'Ana Torres';
    this.paymentForm.address = this.addresses()[0]
      ? `${this.addresses()[0].district}, ${this.addresses()[0].city}`
      : '';
    this.activeView.set('checkout');
  }

  protected async incrementCartItem(item: CartItem): Promise<void> {
    await this.updateCartQuantity(item, item.quantity + 1);
  }

  protected async decrementCartItem(item: CartItem): Promise<void> {
    if (item.quantity <= 1) {
      await this.removeFromCart(item);
      return;
    }
    await this.updateCartQuantity(item, item.quantity - 1);
  }

  protected async removeFromCart(item: CartItem): Promise<void> {
    await this.saveEcommerce({ cartItems: this.cartItems().filter((candidate) => candidate.id !== item.id) });
  }

  protected async completePurchase(): Promise<void> {
    const hasMissingFields = Object.values(this.paymentForm).some((value) => !value.trim());
    if (hasMissingFields) {
      this.checkoutError.set('Completa todos los datos de pago para continuar.');
      return;
    }
    if (!this.cartCount()) {
      this.checkoutError.set('El carrito esta vacio.');
      return;
    }

    const items = this.userCartItems().flatMap((item) => Array.from({ length: item.quantity }, () => item.productId));
    const order: Order = {
      id: `ord-${Date.now()}`,
      userId: this.activeUserId,
      total: Number(this.cartTotal().toFixed(2)),
      status: 'Comprado',
      items,
      createdAt: new Date().toISOString().slice(0, 10),
    };
    const updatedCart = this.cartItems().filter((item) => item.userId !== this.activeUserId);
    const updatedOrders = [order, ...this.orders()];
    await this.saveEcommerce({ cartItems: updatedCart, orders: updatedOrders });
    this.lastOrder.set(order);
    this.activeView.set('success');
  }

  protected canRedeem(coupon: Coupon): boolean {
    return this.wallet.balance() >= coupon.costCoins;
  }

  protected missingCoins(coupon: Coupon): number {
    return Math.max(coupon.costCoins - this.wallet.balance(), 0);
  }

  protected orderLines(order: Order): Array<{ product: StoreProduct; quantity: number; subtotal: number }> {
    const quantities = order.items.reduce<Record<string, number>>((accumulator, productId) => {
      accumulator[productId] = (accumulator[productId] ?? 0) + 1;
      return accumulator;
    }, {});
    return Object.entries(quantities)
      .map(([productId, quantity]) => {
        const product = this.findCatalogItem(productId);
        return product ? { product, quantity, subtotal: product.price * quantity } : null;
      })
      .filter((line): line is { product: StoreProduct; quantity: number; subtotal: number } => Boolean(line));
  }

  private findCatalogItem(itemId: string): StoreProduct | null {
    const product = this.products().find((candidate) => candidate.id === itemId);
    if (product) {
      return product;
    }
    const kit = this.emergencyKits().find((candidate) => candidate.id === itemId);
    if (!kit) {
      return null;
    }
    return {
      id: kit.id,
      name: kit.name,
      category: 'Kits',
      type: 'Kit',
      price: kit.kitPrice,
      oldPrice: kit.individualPrice,
      rating: 4.8,
      stock: 20,
      imageUrl: kit.imageUrl,
      tags: [kit.level, 'Kit'],
      description: kit.description,
      recommendedFor: ['Emergencias'],
      isPopular: kit.isPopular,
    };
  }

  private async updateCartQuantity(item: CartItem, quantity: number): Promise<void> {
    await this.saveEcommerce({
      cartItems: this.cartItems().map((candidate) => candidate.id === item.id ? { ...candidate, quantity } : candidate),
    });
  }

  private async saveEcommerce(partial: Partial<EcommerceData>): Promise<void> {
    const current = this.data();
    if (!current) {
      return;
    }
    const saved = await this.ecommerceStore.update({ ...current, ...partial });
    this.applyEcommerceData(saved);
  }

  private async load(): Promise<void> {
    const [data, identity] = await Promise.all([
      this.ecommerceStore.load(),
      this.identityAccessStore.load(),
    ]);
    this.applyEcommerceData(data);
    this.wallet.setBalance(identity.sampleUser.safeCoins);
  }

  private applyEcommerceData(data: EcommerceData): void {
    this.data.set(data);
    this.products.set(data.products);
    this.categories.set(data.categories ?? []);
    this.coupons.set(data.coupons);
    this.cartItems.set(data.cartItems ?? []);
    this.orders.set(data.orders ?? []);
    this.reviews.set(data.reviews ?? []);
    this.emergencyKits.set(data.emergencyKits ?? []);
    this.recommendations.set(data.personalizedRecommendations ?? []);
    this.addresses.set(data.shippingAddresses ?? []);
    this.paymentMethods.set(data.paymentMethods ?? []);
  }
}
