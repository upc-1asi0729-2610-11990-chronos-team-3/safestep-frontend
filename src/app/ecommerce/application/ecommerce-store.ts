import { computed, Injectable, signal } from '@angular/core';
import { EcommerceData, StoreProduct } from '../domain/model/ecommerce.entity';
import { EcommerceApi } from '../infrastructure/ecommerce-api';

@Injectable({ providedIn: 'root' })
export class EcommerceStore {
  private readonly data = signal<EcommerceData | null>(null);

  readonly ecommerce = this.data.asReadonly();
  readonly products = computed<StoreProduct[]>(() => this.data()?.products ?? []);

  constructor(private readonly api: EcommerceApi) {}

  async load(): Promise<EcommerceData> {
    const data = await this.api.getEcommerce();
    this.data.set(data);
    return data;
  }

  async update(data: EcommerceData): Promise<EcommerceData> {
    const saved = await this.api.updateEcommerce(data);
    this.data.set(saved);
    return saved;
  }
}
