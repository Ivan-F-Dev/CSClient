import {ProductEntityClient} from "../types/Entities";
import {ProductEntityPropsRu, indexesOfProductEntityPropsRu} from "../types/Enums";

interface returnObj {
        resultArr: Array<string>
        supportArr: Array<string>
}

export const evaluateAmountOfProperties = (prodsArr:Array<ProductEntityClient>):returnObj => {
        let supportArr:Array<indexesOfProductEntityPropsRu> = []
        let supportSet:Set<indexesOfProductEntityPropsRu>
        let resultArr:Array<ProductEntityPropsRu>

        for (let prod of prodsArr) {
                supportArr.push(...Object.keys(prod) as Array<indexesOfProductEntityPropsRu>)
        }
        supportSet = new Set<indexesOfProductEntityPropsRu>(supportArr)
        supportSet.delete('id')
        supportSet.delete('category')
        supportSet.delete('producer')
        supportSet.delete('model')
        supportSet.delete('price')
        supportSet.delete('img')
        supportSet.delete('count')
        supportSet.delete('toCompare')
        supportSet.delete('toBasket')
        supportSet.delete('favorite')
        supportArr = Array.from(supportSet)


//export type propNames = keyof ProductEntityPropsRu

        resultArr = supportArr.map( (value) => ProductEntityPropsRu[value] )

        return {resultArr,supportArr}
}