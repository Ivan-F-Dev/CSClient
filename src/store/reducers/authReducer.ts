import {SET_IS_AUTH, SET_ORDERS, SET_USER, WAITING_OFF, WAITING_ON} from "../actionTypes";
import {setIsAuthAction, setOrdersAction, setUserAction, waitingOffAction, waitingOnAction} from "../actionCreators";
import {OrderEntity, UserEntity} from "../../types/Entities";

//INITIAL STATE FOR REDUCER


export type authReducerAction = setIsAuthAction|waitingOffAction|waitingOnAction|setUserAction|setOrdersAction

export type StateAuthReducer = {
    waiting: boolean
    isAuth: boolean
    user: null | UserEntity
    orders: Array<OrderEntity>
}

const initialState:StateAuthReducer = {
    waiting: false,
    isAuth: false,
    user: null,
    orders: []
}



//REDUCER
export let authReducer = (state:StateAuthReducer = initialState, action:authReducerAction):StateAuthReducer => {
    switch (action.type) {
        case SET_ORDERS:
            return {
                ...state, orders: action.payload
            }
        case SET_USER:
            return {
                ...state, user: action.payload
            }
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