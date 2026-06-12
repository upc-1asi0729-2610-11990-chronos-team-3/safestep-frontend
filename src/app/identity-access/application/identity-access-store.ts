import { Injectable, computed, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { retry } from 'rxjs';
import { UserProfile } from '../domain/model/user-profile.entity';
import { AuthProvider } from '../domain/model/auth-provider.entity';
import { SecurityEvent } from '../domain/model/security-event.entity';
import { Notification } from '../domain/model/notification.entity';
import { IdentityAccessApi } from '../infrastructure/identity-access-api';

@Injectable({ providedIn: 'root' })
export class IdentityAccessStore {
  private readonly userProfilesSignal = signal<UserProfile[]>([]);
  private readonly authProvidersSignal = signal<AuthProvider[]>([]);
  private readonly securityEventsSignal = signal<SecurityEvent[]>([]);
  private readonly notificationsSignal = signal<Notification[]>([]);
  private readonly loadingSignal = signal<boolean>(false);
  private readonly errorSignal = signal<string | null>(null);
  private readonly authenticatedSignal = signal(false);

  readonly userProfiles = this.userProfilesSignal.asReadonly();
  readonly authProviders = this.authProvidersSignal.asReadonly();
  readonly securityEvents = this.securityEventsSignal.asReadonly();
  readonly notifications = this.notificationsSignal.asReadonly();
  readonly loading = this.loadingSignal.asReadonly();
  readonly error = this.errorSignal.asReadonly();
  readonly isAuthenticated = this.authenticatedSignal.asReadonly();

  readonly safeCoins = computed(() => this.userProfiles()[0]?.safeCoins ?? 0);
  readonly userProfileCount = computed(() => this.userProfiles().length);
  readonly authProviderCount = computed(() => this.authProviders().length);

  constructor(private identityAccessApi: IdentityAccessApi) {
    this.loadUserProfiles();
    this.loadAuthProviders();
    this.loadSecurityEvents();
    this.loadNotifications();
  }

  login(): void {
    this.authenticatedSignal.set(true);
  }

  logout(): void {
    this.authenticatedSignal.set(false);
  }

  getCurrentUser(): UserProfile | null {
    return this.userProfiles()[0] ?? null;
  }

  getUserProfileById(id: string | null): UserProfile | undefined {
    return this.userProfiles().find((profile) => profile.id === id);
  }

  getUnreadNotificationCount(): number {
    return this.notifications().filter((notification) => !notification.isRead).length;
  }

  addUserProfile(profile: UserProfile): void {
    this.loadingSignal.set(true);
    this.errorSignal.set(null);
    this.identityAccessApi.createUserProfile(profile).pipe(retry(2)).subscribe({
      next: (created) => {
        this.userProfilesSignal.update((list) => [...list, created]);
        this.loadingSignal.set(false);
      },
      error: (err) => {
        this.errorSignal.set(this.formatError(err, 'Failed to create user profile'));
        this.loadingSignal.set(false);
      },
    });
  }

  updateUserProfile(profile: UserProfile, id: string): void {
    this.loadingSignal.set(true);
    this.errorSignal.set(null);
    this.identityAccessApi.updateUserProfile(profile, id).pipe(retry(2)).subscribe({
      next: (updated) => {
        this.userProfilesSignal.update((list) => list.map((p) => (p.id === id ? updated : p)));
        this.loadingSignal.set(false);
      },
      error: (err) => {
        this.errorSignal.set(this.formatError(err, 'Failed to update user profile'));
        this.loadingSignal.set(false);
      },
    });
  }

  updateSafeCoinsLocally(newBalance: number): void {
    this.userProfilesSignal.update(list => {
      if (list.length === 0) return list;
      const [first, ...rest] = list;
      return [new UserProfile({
        id: first.id, fullName: first.fullName, email: first.email,
        role: first.role, city: first.city, avatarUrl: first.avatarUrl,
        level: first.level, xp: first.xp, nextLevelXp: first.nextLevelXp,
        safeCoins: newBalance, streakDays: first.streakDays,
        completedSimulations: first.completedSimulations,
      }), ...rest];
    });
  }

  deleteUserProfile(id: string): void {
    this.loadingSignal.set(true);
    this.errorSignal.set(null);
    this.identityAccessApi.deleteUserProfile(id).pipe(retry(2)).subscribe({
      next: () => {
        this.userProfilesSignal.update((list) => list.filter((p) => p.id !== id));
        this.loadingSignal.set(false);
      },
      error: (err) => {
        this.errorSignal.set(this.formatError(err, 'Failed to delete user profile'));
        this.loadingSignal.set(false);
      },
    });
  }

  updateAuthProvider(provider: AuthProvider, id: string): void {
    this.loadingSignal.set(true);
    this.errorSignal.set(null);
    this.identityAccessApi.updateAuthProvider(provider, id).pipe(retry(2)).subscribe({
      next: (updated) => {
        this.authProvidersSignal.update((list) => list.map((p) => (p.id === id ? updated : p)));
        this.loadingSignal.set(false);
      },
      error: (err) => {
        this.errorSignal.set(this.formatError(err, 'Failed to update auth provider'));
        this.loadingSignal.set(false);
      },
    });
  }

  deleteNotification(id: string): void {
    this.loadingSignal.set(true);
    this.errorSignal.set(null);
    this.identityAccessApi.deleteNotification(id).pipe(retry(2)).subscribe({
      next: () => {
        this.notificationsSignal.update((list) => list.filter((n) => n.id !== id));
        this.loadingSignal.set(false);
      },
      error: (err) => {
        this.errorSignal.set(this.formatError(err, 'Failed to delete notification'));
        this.loadingSignal.set(false);
      },
    });
  }

  private loadUserProfiles(): void {
    this.loadingSignal.set(true);
    this.errorSignal.set(null);
    this.identityAccessApi.getUserProfiles().pipe(takeUntilDestroyed()).subscribe({
      next: (profiles) => {
        this.userProfilesSignal.set(profiles);
        this.loadingSignal.set(false);
      },
      error: (err) => {
        this.errorSignal.set(this.formatError(err, 'Failed to load user profiles'));
        this.loadingSignal.set(false);
      },
    });
  }

  private loadAuthProviders(): void {
    this.loadingSignal.set(true);
    this.errorSignal.set(null);
    this.identityAccessApi.getAuthProviders().pipe(takeUntilDestroyed()).subscribe({
      next: (providers) => {
        this.authProvidersSignal.set(providers);
        this.loadingSignal.set(false);
      },
      error: (err) => {
        this.errorSignal.set(this.formatError(err, 'Failed to load auth providers'));
        this.loadingSignal.set(false);
      },
    });
  }

  private loadSecurityEvents(): void {
    this.loadingSignal.set(true);
    this.errorSignal.set(null);
    this.identityAccessApi.getSecurityEvents().pipe(takeUntilDestroyed()).subscribe({
      next: (events) => {
        this.securityEventsSignal.set(events);
        this.loadingSignal.set(false);
      },
      error: (err) => {
        this.errorSignal.set(this.formatError(err, 'Failed to load security events'));
        this.loadingSignal.set(false);
      },
    });
  }

  private loadNotifications(): void {
    this.loadingSignal.set(true);
    this.errorSignal.set(null);
    this.identityAccessApi.getNotifications().pipe(takeUntilDestroyed()).subscribe({
      next: (notifications) => {
        this.notificationsSignal.set(notifications);
        this.loadingSignal.set(false);
      },
      error: (err) => {
        this.errorSignal.set(this.formatError(err, 'Failed to load notifications'));
        this.loadingSignal.set(false);
      },
    });
  }

  private formatError(error: unknown, fallback: string): string {
    if (error instanceof Error) {
      return error.message.includes('Resource not found')
        ? `${fallback}: Not found`
        : error.message;
    }
    return fallback;
  }
}
