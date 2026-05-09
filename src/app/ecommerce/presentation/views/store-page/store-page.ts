import { Component, computed, signal } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { TranslatePipe } from '@ngx-translate/core';
import { EcommerceApi } from '../../../infrastructure/ecommerce-api';
import {
  Coupon,
  EmergencyKit,
  PaymentMethod,
  PersonalizedRecommendation,
  ProductCategory,
  ProductReview,
  ShippingAddress,
  StoreProduct,
} from '../../../domain/model/ecommerce.entity';
import { IdentityAccessApi } from '../../../../identity-access/infrastructure/identity-access-api';
import { SafeCoinsWalletStore } from '../../../../shared/application/safe-coins-wallet-store';

@Component({
  selector: 'app-store-page',
  imports: [MatBadgeModule, MatButtonModule, MatCardModule, MatChipsModule, MatIconModule, TranslatePipe],
  templateUrl: './store-page.html',
  styleUrl: './store-page.css',
})
export class StorePage {
  protected readonly products = signal<StoreProduct[]>([]);
  protected readonly categories = signal<ProductCategory[]>([]);
  protected readonly coupons = signal<Coupon[]>([]);
  protected readonly reviews = signal<ProductReview[]>([]);
  protected readonly emergencyKits = signal<EmergencyKit[]>([]);
  protected readonly recommendations = signal<PersonalizedRecommendation[]>([]);
  protected readonly addresses = signal<ShippingAddress[]>([]);
  protected readonly paymentMethods = signal<PaymentMethod[]>([]);
  protected readonly cartCount = signal(0);
  protected readonly selectedCategory = signal('Todos');
  protected readonly searchQuery = signal('');
  protected readonly couponsOpen = signal(false);
  protected readonly isMainStoreView = computed(() => this.selectedCategory() === 'Todos' && !this.couponsOpen());
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

  constructor(
    private readonly ecommerceApi: EcommerceApi,
    private readonly identityAccessApi: IdentityAccessApi,
    protected readonly wallet: SafeCoinsWalletStore,
  ) {
    void this.load();
  }

  protected addToCart(): void {
    this.cartCount.update((count) => count + 1);
  }

  protected setCategory(category: string): void {
    this.selectedCategory.set(category);
    this.couponsOpen.set(false);
  }

  protected setSearchQuery(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.searchQuery.set(input.value);
    this.couponsOpen.set(false);
  }

  protected openCoupons(): void {
    this.couponsOpen.set(true);
  }

  protected closeCoupons(): void {
    this.couponsOpen.set(false);
  }

  protected canRedeem(coupon: Coupon): boolean {
    return this.wallet.balance() >= coupon.costCoins;
  }

  protected missingCoins(coupon: Coupon): number {
    return Math.max(coupon.costCoins - this.wallet.balance(), 0);
  }

  private async load(): Promise<void> {
    const [data, identity] = await Promise.all([
      this.ecommerceApi.getEcommerce(),
      this.identityAccessApi.getIdentity(),
    ]);
    this.products.set(data.products);
    this.categories.set(data.categories ?? []);
    this.coupons.set(data.coupons);
    this.reviews.set(data.reviews ?? []);
    this.emergencyKits.set(data.emergencyKits ?? []);
    this.recommendations.set(data.personalizedRecommendations ?? []);
    this.addresses.set(data.shippingAddresses ?? []);
    this.paymentMethods.set(data.paymentMethods ?? []);
    this.cartCount.set(data.cartItems?.reduce((total, item) => total + item.quantity, 0) ?? 0);
    this.wallet.setBalance(identity.sampleUser.safeCoins);
  }
}
