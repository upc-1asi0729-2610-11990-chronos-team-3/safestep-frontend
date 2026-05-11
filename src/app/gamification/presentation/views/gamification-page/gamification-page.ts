import { Component, computed, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { TranslatePipe } from '@ngx-translate/core';
import { GamificationApi } from '../../../infrastructure/gamification-api';
import { GamificationData } from '../../../domain/model/gamification.entity';

@Component({
  selector: 'app-gamification-page',
  imports: [MatCardModule, MatChipsModule, MatIconModule, MatListModule, MatProgressBarModule, TranslatePipe],
  templateUrl: './gamification-page.html',
  styleUrl: './gamification-page.css',
})
export class GamificationPage {
  protected readonly data = signal<GamificationData | null>(null);
  protected readonly error = signal<string | null>(null);
  protected readonly recentCoinTransactions = computed(() => this.data()?.coinTransactions?.slice(0, 6) ?? []);

  constructor(private readonly gamificationApi: GamificationApi) {
    void this.load();
  }

  private async load(): Promise<void> {
    try {
      this.data.set(await this.gamificationApi.getGamification());
    } catch {
      this.error.set('gamification.loadError');
    }
  }
}
