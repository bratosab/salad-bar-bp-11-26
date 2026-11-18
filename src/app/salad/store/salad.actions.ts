import { createAction, props } from '@ngrx/store';
import { Topping } from '../../models/topping.model';

export const GetToppings = createAction('app/salad/get-toppings');
export const SaveToppings = createAction('app/salad/save-toppings', props<{ list: Topping[] }>());

export const ChooseTopping = createAction(
  'app/salad/choose-topping',
  props<{ toppingToAdd: Topping }>(),
);
export const RemoveTopping = createAction(
  'app/salad/remove-topping',
  props<{ toppingToRemove: Topping }>(),
);
