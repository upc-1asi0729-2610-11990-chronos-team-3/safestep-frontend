import { Routes } from '@angular/router';
import { authGuard } from './auth-guard/auth-guard';

const authPage = () => import('./auth-page/auth-page').then((m) => m.AuthPage);
const profilePage = () => import('./profile-page/profile-page').then((m) => m.ProfilePage);
const userProfileList = () => import('./user-profile-list/user-profile-list').then((m) => m.UserProfileList);
const userProfileForm = () => import('./user-profile-form/user-profile-form').then((m) => m.UserProfileForm);

export const identityAccessRoutes: Routes = [
  { path: '', loadComponent: authPage, title: 'SafeStep - Acess' },
];

export const identityAccessProtectedRoutes: Routes = [
  {
    path: 'profile',
    loadComponent: profilePage,
    canActivate: [authGuard],
    title: 'SafeStep - Perfil',
  },
  {
    path: 'profile/admin/users',
    loadComponent: userProfileList,
    canActivate: [authGuard],
    title: 'SafeStep - Manage Users',
  },
  {
    path: 'profile/admin/users/new',
    loadComponent: userProfileForm,
    canActivate: [authGuard],
    title: 'SafeStep - Add User',
  },
  {
    path: 'profile/admin/users/edit/:id',
    loadComponent: userProfileForm,
    canActivate: [authGuard],
    title: 'SafeStep - Edit User',
  },
];
