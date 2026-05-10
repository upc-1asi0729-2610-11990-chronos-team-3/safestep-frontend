import { Routes } from '@angular/router';

const authPage = () => import('./auth-page/auth-page').then((m) => m.AuthPage);
const profilePage = () => import('./profile-page/profile-page').then((m) => m.ProfilePage);

export const identityAccessRoutes: Routes = [
  { path: '', loadComponent: authPage, title: 'SafeStep - Acceso' },
];

export const identityAccessProtectedRoutes: Routes = [
  { path: 'perfil', loadComponent: profilePage, title: 'SafeStep - Perfil' },
];
