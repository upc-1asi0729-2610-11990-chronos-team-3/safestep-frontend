import { Injectable, signal } from '@angular/core';
import { GamificationData } from '../domain/model/gamification.entity';
import { GamificationApi } from '../infrastructure/gamification-api';

@Injectable({ providedIn: 'root' })
export class GamificationStore {
  private readonly data = signal<GamificationData | null>(null);

  readonly gamification = this.data.asReadonly();

  constructor(private readonly api: GamificationApi) {}

  async load(): Promise<GamificationData> {
    const data = await this.api.getGamification();
    this.data.set(data);
    return data;
  }

  async update(data: GamificationData): Promise<GamificationData> {
    const saved = await this.api.updateGamification(data);
    this.data.set(saved);
    return saved;
  }
}
