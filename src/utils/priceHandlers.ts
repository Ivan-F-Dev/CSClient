import {OrderItemWithPrice} from "../components/Basket/Basket";

//приводит цены к нужному формату

export const getFormatPrice = (price:number) => {
    let st,md,nd,priceStr= price.toString()

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
    if (priceStr.length === 7) {
        st = priceStr.slice(0,1)
        md = priceStr.slice(1,4)
        nd = priceStr.slice(4,7)
        return st.concat(' ',md,' ',nd,'.00 ₽')
    }
    if (priceStr.length === 8) {
        st = priceStr.slice(0,2)
        md = priceStr.slice(2,5)
        nd = priceStr.slice(5,8)
        return st.concat(' ',md,' ',nd,'.00 ₽')
    }
    return priceStr
}

export const priceHandlers = (priceStr:string):string => {
    let oldPrice = (+priceStr.replace(' ','') + 7000)//.toString()
    return getFormatPrice(oldPrice)
}

export const getSumOfProdsArr = (prods:Array<OrderItemWithPrice>) => {
    let sum = prods.reduce((a,b ) => a + parseInt(b.price.replace(' ',''))*b.buyCount,0)
    return getFormatPrice(sum)
}
