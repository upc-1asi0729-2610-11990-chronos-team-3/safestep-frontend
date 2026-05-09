import { computed, Injectable, signal } from '@angular/core';
import { EcommerceData } from '../domain/model/ecommerce.entity';
import { EcommerceApi } from '../infrastructure/ecommerce-api';

@Injectable({ providedIn: 'root' })
export class EcommerceStore {
  private readonly data = signal<EcommerceData | null>(null);
  readonly ecommerce = this.data.asReadonly();
  readonly products = computed(() => this.data()?.products ?? []);
  readonly coupons = computed(() => this.data()?.coupons ?? []);

  constructor(private readonly api: EcommerceApi) {}

  async load(): Promise<void> {
    this.data.set(await this.api.getEcommerce());
  }
}
