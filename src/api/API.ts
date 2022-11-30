import axios from "axios";

const instance = axios.create({
    //withCredentials: true,
    baseURL: 'http://localhost:3000/',
    headers: {
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Miwicm9sZXMiOlsiVVNFUiJdLCJpYXQiOjE2Njk4MDAxMjcsImV4cCI6MTY2OTgwMzcyN30.Wd-n2sNAI9l0OPnJDynkb9JMVWXGxbphGq37UKhQtLw"
    }
});

type payload = {
    [key:string]: string
}

export const API = {
    loadMainPage: async (catName = 'smartphones') => {

        let prods = await instance.get(`products?category=${catName}`)
        let cats = await instance.get("categories")
        console.log(prods.data,cats.data)
        return {prods:prods.data,cats:cats.data}
    },
    auth: async (path:string, payload:payload|null = null) => {
        if (path === 'login') {
            let res = await instance.get(`auth/${path}`)
        } else if (path === 'registration') {
            let res = await instance.get(`auth/${path}`)
        }
    }

}