import { Injectable, signal } from '@angular/core';
import { StatsData } from '../domain/model/statistics.entity';
import { StatisticsApi } from '../infrastructure/statistics-api';

@Injectable({ providedIn: 'root' })
export class StatisticsStore {
  private readonly data = signal<StatsData | null>(null);
  readonly statistics = this.data.asReadonly();

  constructor(private readonly api: StatisticsApi) {}

  async load(): Promise<void> {
    this.data.set(await this.api.getStats());
  }
}
