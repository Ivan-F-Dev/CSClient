import React, {FC, useState} from "react";
import s from "./Basket.module.scss";
import BasketItem from "./BasketItem/BasketItem";
import {useDispatch, useSelector} from "react-redux";
import {Dispatch} from "redux";
import {Store} from "../../store/store";
import {getProdsFor} from "../../utils/getProdsFor";
import {getSumOfProdsArr} from "../../utils/priceHandlers";



const Basket:FC = () => {

    const dispatch = useDispatch<Dispatch<any>>()
    const prods = useSelector((state:Store) => state.mainPage.prods)
    const basketProds = getProdsFor(prods,'toBasket')
    const [countOfProductToSale, setCountOfProductToSale] = useState()
    const sum = getSumOfProdsArr(basketProds)


    return (
        <div className={s.Basket}>
            <div className={s.mainContainer}>
                <div className={s.title}>
                    Корзина
                </div>
                <div className={s.content}>
                    <div className={s.list}>
                        {basketProds.map( (el) => <BasketItem key={el.id} product={el}/>)}
                    </div>
                    <div className={s.panel}>
                        <div className={s.panelInfo}>
                            <div className={s.panelTitle}>В корзине</div>
                            <div className={s.count}>Товаров: {basketProds.length}</div>
                            <div className={s.sum}>{sum}</div>
                        </div>
                        <button className={s.orderBtn}>Оформить заказ</button>
                    </div>
                </div>

            </div>
        </div>
    )}

export default Basket;