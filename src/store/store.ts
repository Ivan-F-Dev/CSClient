import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunk from "redux-thunk";
import {mainPageReducer, StateMainPageReducer} from "./reducers/mainPageReducer";
import {authReducer, StateAuthReducer} from "./reducers/authReducer";

declare global {
    interface Window { __store__: any;__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:any }
}

export type Store = {
    auth:StateAuthReducer
    mainPage:StateMainPageReducer
}

let reducers = combineReducers({
    auth: authReducer,
    mainPage: mainPageReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));
window.__store__ = store;

