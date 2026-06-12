import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { IdentityAccessStore } from '../../../application/identity-access-store';

@Component({
  selector: 'app-user-profile-list',
  imports: [MatButtonModule, MatIconModule, MatProgressSpinnerModule, MatTableModule, TranslatePipe],
  templateUrl: './user-profile-list.html',
  styleUrl: './user-profile-list.css',
})
export class UserProfileList {
  readonly store = inject(IdentityAccessStore);
  private readonly router = inject(Router);
  private readonly translate = inject(TranslateService);
  readonly displayedColumns = ['id', 'fullName', 'email', 'role', 'level', 'actions'];

  add(): void {
    void this.router.navigate(['/app/profile/admin/users/new']);
  }

  edit(id: string): void {
    void this.router.navigate(['/app/profile/admin/users/edit', id]);
  }

  delete(id: string): void {
    if (window.confirm(this.translate.instant('admin.confirmDeleteProfile'))) {
      this.store.deleteUserProfile(id);
    }
  }

  back(): void {
    void this.router.navigate(['/app/profile']);
  }
}
