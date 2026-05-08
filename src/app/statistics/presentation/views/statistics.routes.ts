import { Routes } from '@angular/router';

const statsPage = () => import('./stats-page/stats-page').then((m) => m.StatsPage);

export const statisticsRoutes: Routes = [
  { path: 'estadisticas', loadComponent: statsPage, title: 'SafeStep - Estadisticas' },
];
