import {API, Payload, TError} from "../utils/API";
import {
    addCats,
    addProds, setError,
    setIsAuth,
    setOrders,
    setProd,
    setToBasket,
    setUser,
    waitingOff,
    waitingOn
} from "./actionCreators";
import {mainPageReducerAction} from "./reducers/mainPageReducer";
import {ActionT} from "../types/Redux";
import {CategoriesNameEnum} from "../types/Enums";
import {authReducerAction} from "./reducers/authReducer";
import {payloadForLog, payloadForReg} from "../types/Payload";
import {OrderItem, ProductEntityClient} from "../types/Entities";

export const TCLoadMainPage = (category:CategoriesNameEnum):ActionT<mainPageReducerAction> => async (dispatch) => {

    let data = await API.loadMainPage(category)
    data = data as TError
    if (data.error?.name === 'TokenExpiredError') {
        dispatch(setIsAuth(false))
        console.log("Токен просрочен")
        return
    }
    data = data as unknown as Payload

    const prodsForClient:Array<ProductEntityClient> = data.prods.map( (value):ProductEntityClient => ({...value, toCompare:false,toBasket:false,favorite:false}))

    dispatch(addProds(prodsForClient))
    dispatch(addCats(data.cats))
}
export const TCAuthReg = (payload:payloadForReg):ActionT<authReducerAction> => async (dispatch) => {
    dispatch(waitingOn())
    dispatch(setError(''))
    const registration = await API.registration(payload)
    if (registration.status !== 200) {
        dispatch(setError(registration.data.message))
    }
    console.log('log from createThunk_authReg',registration.data)

    dispatch(waitingOff())
}
export const TCAuthLog = (payload:payloadForLog):ActionT<authReducerAction> => async (dispatch) => {
    dispatch(waitingOn())
    dispatch(setError(''))
    const login = await API.login(payload)

    if (login.status === 200) {
        localStorage.auth = JSON.stringify({
            token:"Bearer " + login.data.token,
            login:payload.login,
            password:payload.password
        })
        dispatch(setIsAuth(true))
        dispatch(setUser(login.data.user))
        console.log('log from createThunk_authLog',login)
    } else {
        dispatch(setError(login.data.message))
        console.log("Error in TCAuthLog (login)")
    }

    const orders = await API.getUserOrders(login.data.user.id)

    if (orders.status === 200) {
        dispatch(setOrders(orders.data))
    } else {
        console.log("Error in TCAuthLog (orders)")
    }

    dispatch(waitingOff())
}
export const TCAuthLogout = ():ActionT<authReducerAction> => async (dispatch) => {
    dispatch(waitingOn())

    localStorage.removeItem('auth')
    dispatch(setIsAuth(false))
    dispatch(setUser(null))
    dispatch(setOrders([]))
    console.log('log from createThunk_authLogout')

    dispatch(waitingOff())
}

export const TCSendOrder = (order:Array<OrderItem>,basketProds:Array<ProductEntityClient>):ActionT<mainPageReducerAction | authReducerAction> => async (dispatch,getState) => {

    const res = await API.buy({order})
    const newProds = res.data.newProds
    for (let i = 0;i<basketProds.length;i++) {
        dispatch(setProd(basketProds[i].id,basketProds[i].category,newProds[i].count))
        dispatch(setToBasket(basketProds[i].id, basketProds[i].category))
    }

    const id = getState().auth.user?.id
    if (id) {
        const orders = await API.getUserOrders(id)

        if (orders.status === 200) {
            dispatch(setOrders(orders.data))
        }
    }
}