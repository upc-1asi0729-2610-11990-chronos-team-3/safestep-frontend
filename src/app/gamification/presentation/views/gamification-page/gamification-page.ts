import { Component, computed, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { TranslatePipe } from '@ngx-translate/core';
import { GamificationStore } from '../../../application/gamification-store';
import { Badge, GamificationData, LeaderboardEntry, Mission } from '../../../domain/model/gamification.entity';

@Component({
  selector: 'app-gamification-page',
  imports: [MatButtonModule, MatCardModule, MatChipsModule, MatIconModule, MatListModule, MatProgressBarModule, TranslatePipe],
  templateUrl: './gamification-page.html',
  styleUrl: './gamification-page.css',
})
export class GamificationPage {
  protected readonly data = signal<GamificationData | null>(null);
  protected readonly error = signal<string | null>(null);
  protected readonly missionInventoryOpen = signal(false);
  protected readonly badgeInventoryOpen = signal(false);
  protected readonly recentCoinTransactions = computed(() => this.data()?.coinTransactions?.slice(0, 6) ?? []);
  protected readonly activeMissions = computed(() => this.missionsByStatus('Activa'));
  protected readonly availableMissions = computed(() => this.missionsByStatus('Disponible'));
  protected readonly lockedMissions = computed(() => this.missionsByStatus('Bloqueada'));
  protected readonly missionPreview = computed(() => this.activeMissions().slice(0, 3));
  protected readonly topRanking = computed(() => this.data()?.leaderboard.slice(0, 5) ?? []);
  protected readonly currentUserRanking = computed(() => {
    const game = this.data();
    return game?.leaderboard.find((entry) => entry.name === 'Ana Torres') ?? this.buildCurrentUserRanking(game);
  });
  protected readonly badgePreview = computed(() => this.data()?.badges.filter((badge) => badge.unlocked).slice(0, 5) ?? []);
  protected readonly unlockedBadges = computed(() => this.data()?.badges.filter((badge) => badge.unlocked) ?? []);
  protected readonly lockedBadges = computed(() => this.data()?.badges.filter((badge) => !badge.unlocked) ?? []);

  protected openMissionInventory(): void {
    this.missionInventoryOpen.set(true);
    this.badgeInventoryOpen.set(false);
  }

  protected closeMissionInventory(): void {
    this.missionInventoryOpen.set(false);
  }

  protected openBadgeInventory(): void {
    this.badgeInventoryOpen.set(true);
    this.missionInventoryOpen.set(false);
  }

  protected closeBadgeInventory(): void {
    this.badgeInventoryOpen.set(false);
  }

  protected missionProgress(mission: Mission): number {
    return mission.progress >= mission.goal ? 100 : (mission.progress / mission.goal) * 100;
  }

  protected rarityClass(badge: Badge): string {
    return `rarity-${badge.rarity.toLowerCase()}`;
  }

  constructor(private readonly gamificationStore: GamificationStore) {
    void this.load();
  }

  private async load(): Promise<void> {
    try {
      this.data.set(await this.gamificationStore.load());
    } catch {
      this.error.set('gamification.loadError');
    }
  }

  private missionsByStatus(status: Mission['status']): Mission[] {
    return this.data()?.missions.filter((mission) => (mission.status ?? 'Disponible') === status) ?? [];
  }

  private buildCurrentUserRanking(game: GamificationData | null): LeaderboardEntry | null {
    if (!game) {
      return null;
    }
    return {
      rank: game.levelSummary.weeklyRank,
      name: 'Ana Torres',
      xp: game.levelSummary.xp,
      streak: game.levelSummary.streakDays,
    };
  }
}
