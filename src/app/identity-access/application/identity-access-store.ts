import { computed, Injectable, signal } from '@angular/core';
import { IdentityAccessData } from '../domain/model/identity-access-data.entity';
import { IdentityAccessApi } from '../infrastructure/identity-access-api';

@Injectable({ providedIn: 'root' })
export class IdentityAccessStore {
  private readonly data = signal<IdentityAccessData | null>(null);
  readonly identity = this.data.asReadonly();
  readonly user = computed(() => this.data()?.sampleUser ?? null);

  constructor(private readonly api: IdentityAccessApi) {}

  async load(): Promise<void> {
    this.data.set(await this.api.getIdentity());
  }
}
