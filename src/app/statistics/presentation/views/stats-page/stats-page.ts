import { Component, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { TranslatePipe } from '@ngx-translate/core';
import { StatisticsApi } from '../../../infrastructure/statistics-api';
import { StatsData } from '../../../domain/model/statistics.entity';

@Component({
  selector: 'app-stats-page',
  imports: [MatCardModule, MatChipsModule, MatIconModule, MatProgressBarModule, TranslatePipe],
  templateUrl: './stats-page.html',
  styleUrl: './stats-page.css',
})
export class StatsPage {
  protected readonly data = signal<StatsData | null>(null);
  protected readonly maxWeeklyXp = signal(1);
  protected readonly summaryIcons = ['fact_check', 'local_fire_department', 'stars', 'target'];
  protected readonly error = signal<string | null>(null);

  constructor(private readonly statisticsApi: StatisticsApi) {
    void this.load();
  }

  private async load(): Promise<void> {
    try {
      const stats = await this.statisticsApi.getStats();
      this.data.set(stats);
      this.maxWeeklyXp.set(Math.max(...stats.weeklyActivity.map((item) => item.xp), 1));
    } catch {
      this.error.set('stats.loadError');
    }
  }
}
