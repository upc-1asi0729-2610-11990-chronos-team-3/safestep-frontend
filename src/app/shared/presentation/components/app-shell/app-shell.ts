import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TranslatePipe } from '@ngx-translate/core';
import { IdentityAccessApi } from '../../../../identity-access/infrastructure/identity-access-api';
import { UserProfile } from '../../../../identity-access/domain/model/user-profile.entity';
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
export class AppShell {
  protected readonly user = signal<UserProfile | null>(null);
  protected readonly unreadNotifications = signal(0);
  protected readonly navItems = [
    { label: 'nav.dashboard', path: '/app/dashboard', icon: 'dashboard' },
    { label: 'nav.simulations', path: '/app/simulaciones', icon: 'health_and_safety' },
    { label: 'nav.learning', path: '/app/aprendizaje', icon: 'menu_book' },
    { label: 'nav.progress', path: '/app/estadisticas', icon: 'trending_up' },
    { label: 'nav.gamification', path: '/app/gamificacion', icon: 'emoji_events' },
    { label: 'nav.store', path: '/app/tienda', icon: 'shopping_bag' },
  ];

  constructor(
    private readonly identityAccessApi: IdentityAccessApi,
    protected readonly wallet: SafeCoinsWalletStore,
  ) {
    void this.loadUser();
  }

  private async loadUser(): Promise<void> {
    const identity = await this.identityAccessApi.getIdentity();
    this.user.set(identity.sampleUser);
    this.wallet.setBalance(identity.sampleUser.safeCoins);
    this.unreadNotifications.set(identity.notifications?.filter((notification) => !notification.isRead).length ?? 0);
  }
}
