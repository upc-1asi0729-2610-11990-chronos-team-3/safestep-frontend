import { Routes } from '@angular/router';

const simulationsPage = () => import('./simulations-page/simulations-page').then((m) => m.SimulationsPage);
const simulationDetailPage = () =>
  import('./simulation-detail-page/simulation-detail-page').then((m) => m.SimulationDetailPage);

export const medicalSimulationRoutes: Routes = [
  { path: 'simulaciones', loadComponent: simulationsPage, title: 'SafeStep - Simulaciones' },
  { path: 'simulaciones/:id', loadComponent: simulationDetailPage, title: 'SafeStep - Simulacion' },
];
