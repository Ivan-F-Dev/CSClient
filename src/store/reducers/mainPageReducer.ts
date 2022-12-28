import {ADD_CATS, ADD_PRODS, CHANGE_CAT, SET_FAVORITE, SET_TO_BASKET, SET_TO_COMPARE} from "../actionTypes";
import {CategoryEntity, ProductEntity, ProductEntityClient} from "../../types/Entities";
import {
    addCatsAction,
    addProdsAction,
    changeCatAction,
    setFavoriteAction,
    setIsAuthAction, setToBasketAction,
    setToCompareAction
} from "../actionCreators";
import {CategoriesNameEnum} from "../../types/Enums";

//INITIAL STATE FOR REDUCER

// export type initialStateMainPageReducer2 = {
//     cats: Array<CategoryEntity>
//     prods: Array<ProductEntity>
// }

export type mainPageReducerAction = addProdsAction | addCatsAction | setIsAuthAction | changeCatAction | setFavoriteAction | setToCompareAction | setToBasketAction

const initialState = {
    //currentCategory: '' as CategoriesNameEnum,
    currentCategory: CategoriesNameEnum.smartphones,
    cats: [] as Array<CategoryEntity>,
    prods: {} as Record<CategoriesNameEnum, Array<ProductEntityClient>>//[] as Array<ProductEntityClient>
}
export type StateMainPageReducer = typeof initialState
// export interface StateMainPageReducer {
//     currentCategory: CategoriesNameEnum
//     cats: Array<CategoryEntity>
//     // prods: {
//     //     [CategoriesNameEnum.smartphones]?: Array<ProductEntityClient>
//     //     [CategoriesNameEnum.laptops]?: Array<ProductEntityClient>
//     //     [CategoriesNameEnum.gameStations]?: Array<ProductEntityClient>
//     //     [CategoriesNameEnum.pads]?: Array<ProductEntityClient>
//     //     [CategoriesNameEnum.photoVideo]?: Array<ProductEntityClient>
//     //     [CategoriesNameEnum.videoCameras]?: Array<ProductEntityClient>
//     //     [CategoriesNameEnum.televisors]?: Array<ProductEntityClient>
//     //
//     //     //[key:CategoriesNameEnum]?: Array<ProductEntityClient>
//     // }
// }




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
        case ADD_CATS:
            const receivedCats:Array<CategoryEntity> = action.payload
            return {
                ...state,
                cats: [...receivedCats]
            }
        case SET_FAVORITE:
            return {
                ...state,

                prods: {...state.prods, [action.category]: state.prods[action.category].map((value => {
                        if (value.id === action.id) {
                            value.favorite = !value.favorite
                        }
                        return value
                    }))}
            }
        case SET_TO_COMPARE:
            return {
                ...state,

                prods: {...state.prods, [action.category]: state.prods[action.category].map((value => {
                        if (value.id === action.id) {
                            value.toCompare = !value.toCompare
                        }
                        return value
                    }))}
            }
        case SET_TO_BASKET:
            return {
                ...state,

                prods: {...state.prods, [action.category]: state.prods[action.category].map((value => {
                        if (value.id === action.id) {
                            value.toBasket = !value.toBasket
                        }
                        return value
                    }))}
            }
        default:
            return state
    }
}