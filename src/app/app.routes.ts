import { Routes } from '@angular/router';
import { Salad } from './salad/salad';
import { Order } from './order/order';

export const routes: Routes = [
  { path: '', component: Order },
  {
    path: 'kitchen',
    loadComponent: () => import('./kitchen/kitchen'),
    loadChildren: () => import('./kitchen/kitchen.routes'),
  },
  { path: 'salad', component: Salad },
];
