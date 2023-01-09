import {ADD_CATS, ADD_PRODS, CHANGE_CAT, SET_FAVORITE, SET_PROD, SET_TO_BASKET, SET_TO_COMPARE} from "../actionTypes";
import {CategoryEntity, ProductEntityClient} from "../../types/Entities";
import {
    addCatsAction,
    addProdsAction,
    changeCatAction,
    setFavoriteAction,
    setIsAuthAction,
    setProdAction,
    setToBasketAction,
    setToCompareAction
} from "../actionCreators";
import {CategoriesNameEnum} from "../../types/Enums";

//INITIAL STATE FOR REDUCER

export type mainPageReducerAction = addProdsAction | setProdAction | addCatsAction | setIsAuthAction | changeCatAction | setFavoriteAction | setToCompareAction | setToBasketAction

const initialState = {
    //currentCategory: '' as CategoriesNameEnum,
    currentCategory: CategoriesNameEnum.smartphones,
    cats: [] as Array<CategoryEntity>,
    prods: {} as Record<CategoriesNameEnum, Array<ProductEntityClient>>,//[] as Array<ProductEntityClient>
    countOfCompareProds: 0,
    countOfFavoriteProds: 0,
    countOfBasketProds: 0
}
export type StateMainPageReducer = typeof initialState

//REDUCER
export let mainPageReducer = (state:StateMainPageReducer = initialState, action:mainPageReducerAction):StateMainPageReducer => {
    switch (action.type) {
        case CHANGE_CAT:
            return {
                ...state,
                currentCategory: action.payload
            }
        case ADD_PRODS:
            const receivedProds:Array<ProductEntityClient> = action.payload
            const catName = receivedProds[0].category
            return {
                ...state,
                prods: {...state.prods, [catName]:[...receivedProds]}
            }
        case SET_PROD:
            return {...state,
                    prods: {...state.prods,[action.category]: state.prods[action.category].map(value => {
                        if (action.id === value.id) {
                            return {...value, count: action.actualCount}
                        }
                        return value
                        })}
            }
        case ADD_CATS:
            const receivedCats:Array<CategoryEntity> = action.payload
            return {
                ...state,
                cats: [...receivedCats]
            }
        case SET_FAVORITE:
            let addFavorite = false
            return {
                ...state,

                prods: {...state.prods, [action.category]: state.prods[action.category].map((value => {
                        if (value.id === action.id) {
                            addFavorite = value.favorite = !value.favorite
                        }
                        return value
                    }))},countOfFavoriteProds: addFavorite?state.countOfFavoriteProds+1:state.countOfFavoriteProds-1
            }
        case SET_TO_COMPARE:
            let addCompare = false
            return {
                ...state,

                prods: {...state.prods, [action.category]: state.prods[action.category].map((value => {
                        if (value.id === action.id) {
                            addCompare = value.toCompare = !value.toCompare
                        }
                        return value
                    }))}, countOfCompareProds: addCompare?state.countOfCompareProds + 1:state.countOfCompareProds - 1
            }
        case SET_TO_BASKET:
            let addBasket = false
            return {
                ...state,

                prods: {...state.prods, [action.category]: state.prods[action.category].map((value => {
                        if (value.id === action.id) {
                            addBasket = value.toBasket = !value.toBasket
                        }
                        return value
                    }))},countOfBasketProds: addBasket?state.countOfBasketProds+1:state.countOfBasketProds-1
            }
        default:
            return state
    }
}