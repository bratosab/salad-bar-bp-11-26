import { createFeatureSelector, createSelector } from "@ngrx/store";
import { SaladState } from "./salad.reducer";

export const selectSaladState = createFeatureSelector<SaladState>('salad')

export const selectTotalPrice = createSelector(selectSaladState, (state: SaladState) => {
    let total = 0;
    state.chosenToppings.forEach((element) => {
      total += element.price;
    });
    return total;
})