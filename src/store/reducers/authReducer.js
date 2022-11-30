import {SET_IS_AUTH, WAITING_OFF, WAITING_ON} from "../actionTypes";

//INITIAL STATE FOR REDUCER
const initialState = {
    waiting: false,
    isAuth: false,
}
//REDUCER
export let authReducer = (state = initialState, action) => {
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