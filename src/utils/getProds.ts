import {CategoriesNameEnum} from "../types/Enums";
import {OrderItem, ProductEntityClient} from "../types/Entities";
import {store} from "../store/store";
import {OrderItemWithPrice} from "../components/Basket/Basket";

//Достает из стора товары помеченные вкорзину/всравнение/визбранное и возваращает их одним массивом.

export const getProdsBCF = (prods:Record<CategoriesNameEnum, Array<ProductEntityClient>>, For:"toBasket"|"toCompare"|"favorite"):Array<ProductEntityClient> => {
    const result:Array<ProductEntityClient> = []
    for (let key  in prods) {
        result.push(...prods[key as CategoriesNameEnum].filter((el:ProductEntityClient) => el[For] === true))
    }
    return result
}

export const getProdsById = (Arr:Array<OrderItem>): { result:Array<ProductEntityClient>,supArr:Array<OrderItemWithPrice> }  => {

    const prods = store.getState().mainPage.prods

    const result:Array<ProductEntityClient> = []
    const supArr:Array<OrderItemWithPrice> = []
    const idArr = Arr.map(value => value.id)

    let key:CategoriesNameEnum
    for (key in prods) {
        result.push(...prods[key].filter((el:ProductEntityClient) => {
            if (idArr.includes(el.id)) {
               const buyCount = Arr.find(value => value.id === el.id)?.buyCount
               supArr.push({id:el.id,price:el.price,buyCount:buyCount as number})
            }
            return idArr.includes(el.id)
        }))
    }
    return {result, supArr}
}