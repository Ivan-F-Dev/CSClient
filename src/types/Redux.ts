import {AnyAction, Dispatch} from "redux";
import {ThunkAction} from "redux-thunk"
import {Store} from "../store/store";
import {mainPageReducerAction} from "../store/reducers/mainPageReducer";

export type ActionT<R extends AnyAction> = ThunkAction<Promise<void>, Store, unknown, R>

