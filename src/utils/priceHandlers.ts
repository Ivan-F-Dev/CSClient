import {ProductEntityClient} from "../types/Entities";

//приводит цены к нужному формату

export const getFormatPrice = (price:number) => {
    let st,nd,priceStr= price.toString()

    if (priceStr.length <= 3) return price + '.00 ₽'
    if (priceStr.length === 4) {
        st = priceStr.slice(0,1)
        nd = priceStr.slice(1,4)
        return st.concat(' ',nd,'.00 ₽')
    }
    if (priceStr.length === 5) {
        let st = priceStr.slice(0,2)
        nd = priceStr.slice(2,5)
        return st.concat(' ',nd,'.00 ₽')
    }
    if (priceStr.length === 6) {
        st = priceStr.slice(0,3)
        nd = priceStr.slice(3,6)
        return st.concat(' ',nd,'.00 ₽')
    }
    return priceStr
}

export const priceHandlers = (priceStr:string):string => {
    let oldPrice = (+priceStr.replace(' ','') + 7000)//.toString()
    return getFormatPrice(oldPrice)
}

export const getSumOfProdsArr = (prods:Array<ProductEntityClient>) => {
    let sum = prods.reduce((a,b ) => a + parseInt(b.price.replace(' ','')),0)
    return getFormatPrice(sum)
}
