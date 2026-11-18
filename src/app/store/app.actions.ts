import { createAction, props } from "@ngrx/store";

export const SetName = createAction("app/order/set-name", props<{ name: string }>());
export const SetTel = createAction("app/order/set-tel", props<{ tel: string }>());