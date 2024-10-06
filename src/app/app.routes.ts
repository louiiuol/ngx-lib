import type { Routes } from '@angular/router';

/**
 * Application routes
 */
export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.page').then((m) => m.HomePage),
  },
];
