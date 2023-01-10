import React, {FC} from "react";
import s from "./BasketItem.module.scss";
import config from "../../../config.json"
import deleteIcon from '../../../assets/icons/delete.svg'
import {ProductEntityClient} from "../../../types/Entities";
import {getProductTitle} from "../../../utils/getProductTitle";
import {useDispatch} from "react-redux";
import {Dispatch} from "redux";
import {setToBasket} from "../../../store/actionCreators";
import {Link} from "react-router-dom";
import {OrderItemWithPrice} from "../Basket";

interface BasketItemProps {
    product: ProductEntityClient
    orderItem: OrderItemWithPrice
    setOrder: (add:number) => any
    deleteOrder: (id:string) => any
}

const BasketItem:FC<BasketItemProps> = ({product,orderItem,setOrder,deleteOrder}) => {

    const dispatch = useDispatch<Dispatch<any>>()

    const setBasket = () => {
        deleteOrder(product.id)
        dispatch(setToBasket(product.id, product.category))
    }

    const add = () => {
        if (product.count > orderItem.buyCount) {
            setOrder(1)
        }
    }
    const remove = () => {
        if (orderItem.buyCount > 1) {
            setOrder(-1)
        }
    }

    return (
        <div className={s.BasketItem}>
            <Link className={s.wrapperLink} to={`/product/${product.id}/${product.category}`}>
                <div className={s.photoWrapper}>
                    <img className={s.photo} src={config.mainUrl + "images/products/" + product.img + ".png"} alt="img"/>
                </div>
            </Link>
            <div className={s.info}>
                <div className={s.title}>{`${getProductTitle(product.category)} ${product.producer} ${product.model}`}</div>
                <div className={s.memory}>(256GB)</div>
                <div className={s.deleteBtn} onClick={setBasket}><img className={s.deleteIcon} src={deleteIcon} alt=""/>Удалить</div>
            </div>
            <div className={s.panel}>
                <div className={s.price}>{product.price+'.00 ₽'}</div>
                <div className={s.counter}>
                    <div className={s.setBtn} onClick={remove}>–</div>
                    <div className={s.count}>{orderItem.buyCount}</div>
                    <div className={s.setBtn} onClick={add}>+</div>
                </div>
            </div>
        </div>
    )
}

export default BasketItem;