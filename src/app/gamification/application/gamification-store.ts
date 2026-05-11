import { Injectable, signal } from '@angular/core';
import { GamificationData } from '../domain/model/gamification.entity';
import { GamificationApi } from '../infrastructure/gamification-api';

@Injectable({ providedIn: 'root' })
export class GamificationStore {
  private readonly data = signal<GamificationData | null>(null);
  readonly gamification = this.data.asReadonly();

  constructor(private readonly api: GamificationApi) {}

  async load(): Promise<void> {
    this.data.set(await this.api.getGamification());
  }
}
