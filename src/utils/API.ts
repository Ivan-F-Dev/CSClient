import axios from "axios";
import {CategoriesNameEnum} from "../types/Enums";
import {CategoryEntity, ProductEntity} from "../types/Entities";
import {payloadForLog, payloadForReg} from "../types/Payload";

const instance = axios.create({
    //withCredentials: true,
    baseURL: 'http://localhost:3000/',
    headers: {
        Authorization: localStorage.token
    },
    validateStatus: (status) => {
        return true//status < 500;
    }
});

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

        let prods = await instance.get<Array<ProductEntity> | TError>(`products?category=${catName}`)
        let cats = await instance.get<Array<CategoryEntity> | TError>("categories")

        if (prods.status === 403) return {...prods.data} as TError

        return {prods:prods.data,cats:cats.data} as Payload
    },
    login: async (payload:payloadForLog|payloadForReg) => {
        const res = await instance.post(`auth/login`, payload)
        return res
    },
    registration: async (payload:payloadForLog|payloadForReg) => {
        const res = await instance.post("auth/registration",payload)
        return res
    }

}