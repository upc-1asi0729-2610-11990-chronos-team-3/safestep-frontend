import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatBadgeModule } from '@angular/material/badge';
import { MatDividerModule } from '@angular/material/divider';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { EcommerceStore } from '../../../application/ecommerce-store';
import { IdentityAccessStore } from '../../../../identity-access/application/identity-access-store';
import { CartItem } from '../../../domain/model/cart-item.entity';
import { Order } from '../../../domain/model/order.entity';
import { formatPrice } from '../../../../shared/infrastructure/format-price';

@Component({
  selector: 'app-store',
  templateUrl: './store-page.html',
  styleUrls: ['./store-page.css'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatBadgeModule,
    MatDividerModule,
    MatTooltipModule,
    MatMenuModule,
    MatListModule,
    MatDialogModule,
    RouterLink,
    TranslateModule,
  ],
})
export class StorePage implements OnInit {
  readonly Math = Math;
  selectedCategory = '';
  searchQuery = '';
  selectedProductId: string | null = null;

  formatPrice = formatPrice;

  constructor(
    public store: EcommerceStore,
    public identityStore: IdentityAccessStore,
    private router: Router,
    private route: ActivatedRoute,
    public translate: TranslateService,
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.selectedProductId = params.get('id');
    });
  }

  get currentUserId(): string {
    return this.identityStore.getCurrentUser()?.id ?? '';
  }

  onSearchChange(value: string): void {
    this.searchQuery = value;
  }

  get filteredProducts() {
    return this.store.filterProducts(this.store.products(), this.selectedCategory, this.searchQuery);
  }

  get filteredKits() {
    return this.store.filterEmergencyKits(this.store.emergencyKits(), this.selectedCategory, this.searchQuery);
  }

  get selectedProduct() {
    const id = this.selectedProductId;
    if (!id) {
      return null;
    }
    return this.store.getProductById(id) ?? this.store.toStoreProductFromKit(this.store.emergencyKits().find((k) => k.id === id)!);
  }

  get productImages() {
    return this.store.getProductImages(this.selectedProduct);
  }

  get productReviews() {
    return this.store.getProductReviews(this.selectedProduct, this.store.reviews());
  }

  get cartLines() {
    const items = this.store.getCartItemsForUser(this.store.cartItems(), this.currentUserId);
    return this.store.buildCartLines(items, this.store.products(), this.store.emergencyKits());
  }

  get cartTotal() {
    return this.store.getCartTotal(this.cartLines);
  }

  get cartCount() {
    return this.store.getCartItemCount(this.store.getCartItemsForUser(this.store.cartItems(), this.currentUserId));
  }

  get userOrders() {
    return this.store.getUserOrders(this.store.orders(), this.currentUserId);
  }

  get orderLines() {
    if (this.userOrders.length === 0) {
      return [];
    }
    return this.store.buildOrderLines(this.userOrders[0], this.store.products(), this.store.emergencyKits());
  }

  selectCategory(category: string): void {
    this.selectedCategory = category;
  }

  viewProduct(productId: string): void {
    this.router.navigate(['/app/store', productId]);
  }

  goBackToStore(): void {
    this.router.navigate(['/app/store']);
  }

  addToCart(productId: string): void {
    const existing = this.store.getCartItemForProduct(this.store.cartItems(), this.currentUserId, productId);
    if (existing) {
      this.store.updateCartItem(new CartItem({ id: existing.id, userId: existing.userId, productId: existing.productId, quantity: existing.quantity + 1, addedAt: existing.addedAt }), existing.id);
    } else {
      this.store.addCartItem(new CartItem({
        id: '',
        userId: this.currentUserId,
        productId,
        quantity: 1,
        addedAt: new Date().toISOString(),
      }));
    }
  }

  removeFromCart(itemId: string): void {
    this.store.deleteCartItem(itemId);
  }

  updateQuantity(itemId: string, quantity: number): void {
    const item = this.store.cartItems().find((cartItem) => cartItem.id === itemId);
    if (item) {
      this.store.updateCartItem(new CartItem({ id: item.id, userId: item.userId, productId: item.productId, quantity, addedAt: item.addedAt }), itemId);
    }
  }

  checkout(): void {
    if (this.cartLines.length === 0) {
      return;
    }
    this.store.addOrder(new Order({
      id: '',
      userId: this.currentUserId,
      items: this.cartLines.flatMap((line) => Array(line.item.quantity).fill(line.product.id)),
      total: this.cartTotal,
      status: 'pending',
      createdAt: new Date().toISOString(),
    }));
    this.cartLines.forEach((line) => {
      this.store.deleteCartItem(line.item.id);
    });
  }
}
