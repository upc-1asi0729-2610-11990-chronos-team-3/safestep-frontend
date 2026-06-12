import { Component, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { TranslatePipe } from '@ngx-translate/core';
import { IdentityAccessStore } from '../../../application/identity-access-store';

@Component({
  selector: 'app-auth-page',
  imports: [
    RouterLink,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    TranslatePipe,
  ],
  templateUrl: './auth-page.html',
  styleUrl: './auth-page.css',
})
export class AuthPage {
  protected readonly store = inject(IdentityAccessStore);
  protected readonly authProviders = this.store.authProviders;
  private readonly router = inject(Router);
  protected readonly passwordRules = signal<string[]>([
    'Mínimo 8 caracteres',
    'Al menos una mayúscula',
    'Al menos un número',
    'Al menos un caracter especial',
  ]);

  protected handleLogin(): void {
    this.store.login();
    this.router.navigate(['/app/dashboard']);
  }

  constructor() {
    // Store auto-loads in its constructor.
  }
}
