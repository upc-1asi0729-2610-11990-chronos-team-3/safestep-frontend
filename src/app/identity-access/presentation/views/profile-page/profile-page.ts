import { Component, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { TranslatePipe } from '@ngx-translate/core';
import { IdentityAccessStore } from '../../../application/identity-access-store';
import { UserProfile } from '../../../domain/model/user-profile.entity';

@Component({
  selector: 'app-profile-page',
  imports: [MatCardModule, MatCheckboxModule, TranslatePipe],
  templateUrl: './profile-page.html',
  styleUrl: './profile-page.css',
})
export class ProfilePage {
  protected readonly user = signal<UserProfile | null>(null);

  constructor(private readonly identityAccessStore: IdentityAccessStore) {
    void this.load();
  }

  private async load(): Promise<void> {
    const data = await this.identityAccessStore.load();
    this.user.set(data.sampleUser);
  }
}
