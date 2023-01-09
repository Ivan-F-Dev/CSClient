import {
    ADD_CATS,
    ADD_PRODS,
    CHANGE_CAT,
    SET_FAVORITE,
    SET_IS_AUTH, SET_ORDERS,
    SET_PROD,
    SET_TO_BASKET,
    SET_TO_COMPARE,
    SET_USER,
    WAITING_OFF,
    WAITING_ON
} from "./actionTypes";
import {CategoryEntity, OrderEntity, ProductEntityClient, UserEntity} from "../types/Entities";
import {CategoriesNameEnum} from "../types/Enums";

//mainPageReducer

export type setFavoriteAction = {
    type: typeof SET_FAVORITE
    id: string
    category: CategoriesNameEnum
}
export const setFavorite = (id: string,category:CategoriesNameEnum):setFavoriteAction => ({type: SET_FAVORITE,id,category})

export type setToCompareAction = {
    type: typeof SET_TO_COMPARE
    id: string
    category: CategoriesNameEnum
}
export const setToCompare = (id: string,category:CategoriesNameEnum):setToCompareAction => ({type: SET_TO_COMPARE,id,category})

export type setToBasketAction = {
    type: typeof SET_TO_BASKET
    id: string
    category: CategoriesNameEnum
}
export const setToBasket = (id: string,category:CategoriesNameEnum):setToBasketAction => ({type: SET_TO_BASKET,id,category})

export type changeCatAction = {
    type: typeof CHANGE_CAT
    payload: CategoriesNameEnum
}
export const changeCat = (payload:CategoriesNameEnum):changeCatAction => ({type: CHANGE_CAT, payload: payload})

export type addProdsAction = {
    type: typeof ADD_PRODS
    payload: Array<ProductEntityClient>
}
export const addProds = (payload:Array<ProductEntityClient>):addProdsAction => ({type: ADD_PRODS, payload: payload})

export type setProdAction = {
    type: typeof SET_PROD
    id: string
    category: CategoriesNameEnum
    actualCount:number
}
export const setProd = (id:string,category:CategoriesNameEnum,actualCount:number):setProdAction => ({type: SET_PROD, id,category,actualCount})

export type addCatsAction = {
    type: typeof ADD_CATS
    payload: Array<CategoryEntity>
}
export const addCats = (payload:Array<CategoryEntity>):addCatsAction => ({type: ADD_CATS, payload: payload})
//authPageReducer
export type setOrdersAction = {
    type: typeof SET_ORDERS
    payload: Array<OrderEntity>
}
export const setOrders = (payload:Array<OrderEntity>):setOrdersAction => ({type:SET_ORDERS,payload:payload})

export type setUserAction = {
    type: typeof SET_USER
    payload: UserEntity|null
}
export const setUser = (payload:UserEntity|null):setUserAction => ({type:SET_USER,payload})

export type setIsAuthAction = {
    type: typeof SET_IS_AUTH
    payload:boolean
}
export const setIsAuth = (payload:boolean):setIsAuthAction => ({type: SET_IS_AUTH, payload})

export type waitingOffAction = {
    type: typeof WAITING_OFF
}
export const waitingOff = ():waitingOffAction => ({type: WAITING_OFF})

export type waitingOnAction = {
    type: typeof WAITING_ON
}
export const waitingOn = ():waitingOnAction => ({type: WAITING_ON})