import axios from "axios";
import {CategoriesNameEnum} from "../types/Enums";
import {CategoryEntity, OrderEntity, OrderItem, ProductEntity, UserEntity} from "../types/Entities";
import {payloadForLog, payloadForReg} from "../types/Payload";

const getInstance = () => {

    const instance = axios.create({
        //withCredentials: true,
        //baseURL: 'http://localhost:3000/',
        baseURL: 'https://pacific-sea-60785.herokuapp.com/',
        headers: {
            Authorization: Object.hasOwn(localStorage,'auth')? JSON.parse(localStorage.auth).token : undefined
        },
        validateStatus: (status) => {
            return true//status < 500;
        }
    });
    return instance
}

export type Payload = {
    prods: Array<ProductEntity>
    cats: Array<CategoryEntity>
}
export type TError = {
    message: string
    error: {
        name: "TokenExpiredError"
        message: "jwt expired"
        expiredAt: "2022-12-01T14:07:24.000Z"
    }
}

export const API = {
    loadMainPage: async (catName:CategoriesNameEnum = CategoriesNameEnum.smartphones):Promise<Payload | TError> => {

        const instance = getInstance()


        let prods = await instance.get<Array<ProductEntity> | TError>(`products?category=${catName}`)
        let cats = await instance.get<Array<CategoryEntity> | TError>("categories")

        if (prods.status === 403) return {...prods.data} as TError

        return {prods:prods.data,cats:cats.data} as Payload
    },
    login: async (payload:payloadForLog|payloadForReg) => {
        const instance = getInstance()

        type expectedData = {
            message:string
            token:string
            user: UserEntity
        }

        const res = await instance.post<expectedData>(`auth/login`, payload)
        console.log("LOGIN",res.data)
        return res
    },
    registration: async (payload:payloadForLog|payloadForReg) => {
        const instance = getInstance()
        type expectedData = {
            message:string
            newUser: UserEntity
        }
        const res = await instance.post<expectedData>("auth/registration",payload)
        return res
    },
    buy: async (payload: { order:Array<OrderItem> }) => {
        const instance = getInstance()
        const res = await instance.post("products",payload)
        return res
    },
    getUserOrders: async (id:string|number) => {
        const instance = getInstance()
        const res = await instance.get<Array<OrderEntity>>(`orders?id=${id}`)
        return res
    }
}