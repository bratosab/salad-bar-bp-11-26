import { createReducer, on } from '@ngrx/store';
import { Topping } from '../../models/topping.model';
import { ChooseTopping, RemoveTopping, SaveToppings } from './salad.actions';

export interface SaladState {
  toppings: Topping[];
  chosenToppings: Topping[];
}

export const initialState: SaladState = {
  toppings: [],
  chosenToppings: [],
};

export const saladReducer = createReducer(
  initialState,
  on(SaveToppings, (state, action) => {
    return { ...state, toppings: action.list };
  }),
  on(ChooseTopping, (state, action) => {
    return { ...state, chosenToppings: [...state.chosenToppings, action.toppingToAdd] };
  }),
  on(RemoveTopping, (state, action) => {
    const filteredToppings = state.chosenToppings.filter(
      (topping) => topping.id !== action.toppingToRemove.id,
    );
    return { ...state, chosenToppings: [...filteredToppings] };
  }),
);
