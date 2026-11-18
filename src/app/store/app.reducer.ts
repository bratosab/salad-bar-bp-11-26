import { createReducer, on } from "@ngrx/store"
import { SetName, SetTel } from "./app.actions"

export interface AppState {
    name: string
    tel: string
}

export const initialState: AppState = {
    name: "",
    tel: ""
}

export const appReducer = createReducer(
    initialState, 
    on(SetName, (state, action) => {
        return { ...state, name: action.name }
    }),
    on(SetTel, (state, action) => {
        return { ...state, tel: action.tel }
    }),
)