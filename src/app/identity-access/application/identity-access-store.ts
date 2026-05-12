import { computed, Injectable, signal } from '@angular/core';
import { IdentityAccessData } from '../domain/model/identity-access-data.entity';
import { UserProfile } from '../domain/model/user-profile.entity';
import { IdentityAccessApi } from '../infrastructure/identity-access-api';

@Injectable({ providedIn: 'root' })
export class IdentityAccessStore {
  private readonly data = signal<IdentityAccessData | null>(null);

  readonly identity = this.data.asReadonly();
  readonly user = computed<UserProfile | null>(() => this.data()?.sampleUser ?? null);

  constructor(private readonly api: IdentityAccessApi) {}

  async load(): Promise<IdentityAccessData> {
    const data = await this.api.getIdentity();
    this.data.set(data);
    return data;
  }

  async update(data: IdentityAccessData): Promise<IdentityAccessData> {
    const saved = await this.api.updateIdentity(data);
    this.data.set(saved);
    return saved;
  }
}
