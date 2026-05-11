import { Routes } from '@angular/router';

const gamificationPage = () => import('./gamification-page/gamification-page').then((m) => m.GamificationPage);

export const gamificationRoutes: Routes = [
  { path: 'gamificacion', loadComponent: gamificationPage, title: 'SafeStep - Gamificacion' },
];
