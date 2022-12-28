import {CategoriesNameEnum} from "../types/Enums";
import {ProductEntityClient} from "../types/Entities";

//Достает из стора товары помеченные вкорзину/всравнение/визбранное и возваращает их одним массивом.

export const getProdsFor = (prods:Record<CategoriesNameEnum, Array<ProductEntityClient>>, For:"toBasket"|"toCompare"|"favorite"):Array<ProductEntityClient> => {
    const result:Array<ProductEntityClient> = []
    for (let key  in prods) {
        result.push(...prods[key as CategoriesNameEnum].filter((el:ProductEntityClient) => el[For] === true))
    }
    return result
}