import {ADD_CATS, ADD_PRODS, SET_IS_AUTH, WAITING_OFF, WAITING_ON} from "./actionTypes";
//mainPageReducer
export const add_prods = (payload) => ({type: ADD_PRODS, payload: payload})
export const add_cats = (payload) => ({type: ADD_CATS, payload: payload})
//authPageReducer
export const setIsAuth = (payload) => ({type: SET_IS_AUTH, payload})
export const waitingOff = () => ({type: WAITING_OFF})
export const waitingOn = () => ({type: WAITING_ON})