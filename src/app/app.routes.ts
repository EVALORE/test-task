import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'first',
    pathMatch: 'full',
  },
  {
    path: 'first',
    title: 'First variant',
    loadComponent: () =>
      import('./features/first-variant/first-variant').then((m) => m.FirstVariant),
  },
  {
    path: 'second',
    title: 'Second variant',
    loadComponent: () =>
      import('./features/second-variant/second-variant').then((m) => m.SecondVariant),
  },
];
