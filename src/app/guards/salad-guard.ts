import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { OrderService } from '../services/order.service';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.reducer';

export const saladGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
  const store: Store<{ app: AppState }> = inject(Store)

  const name = store.selectSignal(state => state.app.name)
  const tel = store.selectSignal(state => state.app.tel)

  if(!!name() && !!tel()) {
    return true
  } else {
    router.navigate(['/'])
    return false
  }
};
