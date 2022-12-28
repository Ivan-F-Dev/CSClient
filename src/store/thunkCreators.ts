import {API, Payload, TError} from "../utils/API";
import {addCats, addProds, setIsAuth, waitingOff, waitingOn} from "./actionCreators";
import {mainPageReducerAction} from "./reducers/mainPageReducer";
import {ActionT} from "../types/Redux";
import {CategoriesNameEnum} from "../types/Enums";
import {authReducerAction} from "./reducers/authReducer";
import {payloadForLog, payloadForReg} from "../types/Payload";
import {ProductEntityClient} from "../types/Entities";

export const TCLoadMainPage = (category:CategoriesNameEnum):ActionT<mainPageReducerAction> => async (dispatch) => {

    let data = await API.loadMainPage(category)
    data = data as TError
    if (data.error?.name === 'TokenExpiredError') {
        dispatch(setIsAuth(false))
        console.log("Токен просрочен")
        return
    }
    data = data as unknown as Payload
    //
    const prodsForClient:Array<ProductEntityClient> = data.prods.map( (value):ProductEntityClient => ({...value, toCompare:false,toBasket:false,favorite:false}))
    //
    dispatch(addProds(prodsForClient))
    dispatch(addCats(data.cats))
}
export const TCAuthReg = (payload:payloadForReg):ActionT<authReducerAction> => async (dispatch) => {
    dispatch(waitingOn())

    const data = await API.registration(payload)
    console.log('log from createThunk_authReg',data)

    dispatch(waitingOff())
}
export const TCAuthLog = (payload:payloadForLog):ActionT<authReducerAction> => async (dispatch) => {
    dispatch(waitingOn())

    const res = await API.login(payload)
    if (res.status === 200) {
        localStorage.token = "Bearer " + res.data.token
    }
    dispatch(setIsAuth(true))
    console.log('log from createThunk_authReg',res)

    dispatch(waitingOff())
}