import { Component, OnDestroy, signal } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Subscription } from 'rxjs';
import { TranslatePipe } from '@ngx-translate/core';
import { UserProfile } from '../../../../identity-access/domain/model/user-profile.entity';
import { IdentityAccessStore } from '../../../../identity-access/application/identity-access-store';
import { LanguageSwitcher } from '../language-switcher/language-switcher';
import { SafeCoinsWalletStore } from '../../../application/safe-coins-wallet-store';

@Component({
  selector: 'app-shell',
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    MatBadgeModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatProgressBarModule,
    MatSidenavModule,
    MatToolbarModule,
    TranslatePipe,
    LanguageSwitcher,
  ],
  templateUrl: './app-shell.html',
  styleUrl: './app-shell.css',
})
export class AppShell implements OnDestroy {
  protected readonly user = signal<UserProfile | null>(null);
  protected readonly unreadNotifications = signal(0);
  protected readonly isMobile = signal(false);
  private readonly breakpointSubscription: Subscription;
  protected readonly navItems = [
    { label: 'nav.dashboard', path: '/app/dashboard', icon: 'dashboard' },
    { label: 'nav.simulations', path: '/app/simulaciones', icon: 'health_and_safety' },
    { label: 'nav.progress', path: '/app/estadisticas', icon: 'trending_up' },
    { label: 'nav.gamification', path: '/app/gamificacion', icon: 'emoji_events' },
    { label: 'nav.store', path: '/app/tienda', icon: 'shopping_bag' },
  ];

  constructor(
    private readonly identityAccessStore: IdentityAccessStore,
    protected readonly wallet: SafeCoinsWalletStore,
    breakpointObserver: BreakpointObserver,
  ) {
    this.breakpointSubscription = breakpointObserver
      .observe('(max-width: 860px)')
      .subscribe((state) => this.isMobile.set(state.matches));
    void this.loadUser();
  }

  ngOnDestroy(): void {
    this.breakpointSubscription.unsubscribe();
  }

  protected closeNavigation(drawer: MatSidenav): void {
    if (this.isMobile()) {
      void drawer.close();
    }
  }

  private async loadUser(): Promise<void> {
    const identity = await this.identityAccessStore.load();
    this.user.set(identity.sampleUser);
    this.wallet.setBalance(identity.sampleUser.safeCoins);
    this.unreadNotifications.set(identity.notifications?.filter((notification) => !notification.isRead).length ?? 0);
  }
}
