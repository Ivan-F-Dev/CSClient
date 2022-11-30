import {ADD_CATS, ADD_PRODS} from "../actionTypes";

//INITIAL STATE FOR REDUCER
const initialState = {
    cats: [],
    prods: []
}
//REDUCER
export let mainPageReducer = (state = initialState, action:any) => {
    switch (action.type) {
        case ADD_PRODS:
            const receivedProds = action.payload
            return {
                ...state,
                prods: [...receivedProds]
            }
        case ADD_CATS:
            const receivedCats = action.payload
            return {
                ...state,
                cats: [...receivedCats]
            }

        default :
            return state
    }
}