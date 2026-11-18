import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { SaladService } from '../../services/salad.service';
import { GetToppings, SaveToppings } from './salad.actions';
import { exhaustMap, map } from 'rxjs';

export const getToppingsEffect = createEffect(
  (actions$ = inject(Actions), saladService = inject(SaladService)) => {
    return actions$.pipe(
      ofType(GetToppings),
      exhaustMap(() =>
        saladService.getToppings().pipe(
            map((toppings) => SaveToppings({ list: toppings }))
        ),
      ),
    );
  },
  { functional: true },
);
