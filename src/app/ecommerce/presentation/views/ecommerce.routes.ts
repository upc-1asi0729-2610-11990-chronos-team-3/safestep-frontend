import { Routes } from '@angular/router';

const storePage = () => import('./store-page/store-page').then((m) => m.StorePage);

export const ecommerceRoutes: Routes = [
  { path: 'tienda', loadComponent: storePage, title: 'SafeStep - Tienda' },
];
