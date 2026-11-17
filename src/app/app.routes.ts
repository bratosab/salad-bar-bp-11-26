import { Routes } from '@angular/router';
import { Salad } from './salad/salad';
import { Order } from './order/order';
import { saladGuard } from './guards/salad-guard';

export const routes: Routes = [
  { path: '', component: Order },
  {
    path: 'kitchen',
    loadComponent: () => import('./kitchen/kitchen'),
    loadChildren: () => import('./kitchen/kitchen.routes'),
  },
  { path: 'salad', canActivate: [saladGuard], component: Salad },
];
