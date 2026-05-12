import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { TranslatePipe } from '@ngx-translate/core';
import { IdentityAccessStore } from '../../../application/identity-access-store';
import { IdentityAccessData } from '../../../domain/model/identity-access-data.entity';

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
  protected readonly identity = signal<IdentityAccessData | null>(null);

  constructor(private readonly identityAccessStore: IdentityAccessStore) {
    void this.load();
  }

  private async load(): Promise<void> {
    this.identity.set(await this.identityAccessStore.load());
  }
}
