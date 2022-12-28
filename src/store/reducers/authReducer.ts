import {SET_IS_AUTH, WAITING_OFF, WAITING_ON} from "../actionTypes";
import {setIsAuthAction, waitingOffAction, waitingOnAction} from "../actionCreators";

//INITIAL STATE FOR REDUCER
export type StateAuthReducer = {
    waiting: boolean
    isAuth: boolean
}

export type authReducerAction = setIsAuthAction|waitingOffAction|waitingOnAction

const initialState:StateAuthReducer = {
    waiting: false,
    isAuth: false,
}
//REDUCER
export let authReducer = (state:StateAuthReducer = initialState, action:authReducerAction):StateAuthReducer => {
    switch (action.type) {
        case SET_IS_AUTH:
            return {
                ...state, isAuth: action.payload
            }
        case WAITING_ON:
            return {
                ...state, waiting: true
            }
        case WAITING_OFF:
            return {
                ...state, waiting: false
            }

        default :
            return state
    }
}