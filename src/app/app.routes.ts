import { Routes } from '@angular/router';
import { AppShell } from './shared/presentation/components/app-shell/app-shell';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./identity-access/presentation/views/identity-access.routes').then((m) => m.identityAccessRoutes),
  },
  {
    path: 'app',
    component: AppShell,
    children: [
      {
        path: '',
        loadChildren: () => import('./shared/presentation/views/shared.routes').then((m) => m.sharedRoutes),
      },
      {
        path: '',
        loadChildren: () =>
          import('./medical-simulation/presentation/views/medical-simulation.routes').then(
            (m) => m.medicalSimulationRoutes,
          ),
      },
      {
        path: '',
        loadChildren: () =>
          import('./gamification/presentation/views/gamification.routes').then((m) => m.gamificationRoutes),
      },
      {
        path: '',
        loadChildren: () => import('./ecommerce/presentation/views/ecommerce.routes').then((m) => m.ecommerceRoutes),
      },
      {
        path: '',
        loadChildren: () => import('./statistics/presentation/views/statistics.routes').then((m) => m.statisticsRoutes),
      },
      {
        path: '',
        loadChildren: () =>
          import('./identity-access/presentation/views/identity-access.routes').then(
            (m) => m.identityAccessProtectedRoutes,
          ),
      },
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
    ],
  },
  { path: '', pathMatch: 'full', redirectTo: 'auth' },
  { path: '**', redirectTo: 'auth' },
];
