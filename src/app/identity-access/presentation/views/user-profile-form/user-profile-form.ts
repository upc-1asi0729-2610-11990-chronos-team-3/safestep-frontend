import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { IdentityAccessStore } from '../../../application/identity-access-store';
import { UserProfile } from '../../../domain/model/user-profile.entity';

@Component({
  selector: 'app-user-profile-form',
  imports: [ReactiveFormsModule, MatButtonModule, MatFormFieldModule, MatInputModule, TranslatePipe],
  templateUrl: './user-profile-form.html',
  styleUrl: './user-profile-form.css',
})
export class UserProfileForm {
  private readonly fb = inject(FormBuilder);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly store = inject(IdentityAccessStore);
  readonly profileId = this.route.snapshot.paramMap.get('id');
  readonly isEdit = !!this.profileId;
  readonly form = this.fb.nonNullable.group({
    id: ['', Validators.required],
    fullName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    role: ['', Validators.required],
    city: ['', Validators.required],
    avatarUrl: [''],
    level: [0, [Validators.required, Validators.min(0)]],
    xp: [0, [Validators.required, Validators.min(0)]],
    nextLevelXp: [0, [Validators.required, Validators.min(0)]],
    safeCoins: [0, [Validators.required, Validators.min(0)]],
    streakDays: [0, [Validators.required, Validators.min(0)]],
    completedSimulations: [0, [Validators.required, Validators.min(0)]],
  });

  constructor() {
    const item = this.store.getUserProfileById(this.profileId);
    if (item) {
      this.form.patchValue({
        id: item.id,
        fullName: item.fullName,
        email: item.email,
        role: item.role,
        city: item.city,
        avatarUrl: item.avatarUrl,
        level: item.level,
        xp: item.xp,
        nextLevelXp: item.nextLevelXp,
        safeCoins: item.safeCoins,
        streakDays: item.streakDays,
        completedSimulations: item.completedSimulations,
      });
      this.form.controls.id.disable();
    }
  }

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const value = this.form.getRawValue();
    const item = new UserProfile({
      id: value.id.trim(),
      fullName: value.fullName.trim(),
      email: value.email.trim(),
      role: value.role.trim(),
      city: value.city.trim(),
      avatarUrl: value.avatarUrl.trim(),
      level: value.level,
      xp: value.xp,
      nextLevelXp: value.nextLevelXp,
      safeCoins: value.safeCoins,
      streakDays: value.streakDays,
      completedSimulations: value.completedSimulations,
    });
    if (this.isEdit) {
      this.store.updateUserProfile(item, item.id);
    } else {
      this.store.addUserProfile(item);
    }
    this.cancel();
  }

  cancel(): void {
    void this.router.navigate(['/app/profile/admin/users']);
  }
}
