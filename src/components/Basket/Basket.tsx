import React, {FC, useState} from "react";
import s from "./Basket.module.scss";
import BasketItem from "./BasketItem/BasketItem";
import {useDispatch, useSelector} from "react-redux";
import {Dispatch} from "redux";
import {Store} from "../../store/store";
import {getProdsBCF} from "../../utils/getProds";
import {getSumOfProdsArr} from "../../utils/priceHandlers";
import {OrderItem} from "../../types/Entities";
import Modal from "../Others/Modal/Modal";
import {TCSendOrder} from "../../store/thunkCreators";
import { useNavigate } from "react-router-dom";

export interface OrderItemWithPrice extends OrderItem {
    price: string
}

const Basket:FC = () => {

    const nav = useNavigate();
    const dispatch = useDispatch<Dispatch<any>>()
    const isAuth = useSelector((state:Store) => state.auth.isAuth)
    const prods = useSelector((state:Store) => state.mainPage.prods)
    const basketProds = getProdsBCF(prods,'toBasket')

    const [order, setOrder] = useState<Array<OrderItemWithPrice>>(basketProds.map(el => ({id: el.id, buyCount: 1,price: el.price})))
    const [modal, setModal] = useState<boolean>(false)

    const sum = getSumOfProdsArr(order)

    const setOrderItem = (i:number, add:number) => {
        setOrder((prev) => {
           prev[i] = {...prev[i],buyCount: prev[i].buyCount + add}
           return [...prev]
        })
    }
    const deleteOrderItem = (id:string) => {
        setOrder((prev) => prev.filter(value => value.id !== id))
    }

    const sendOrder = () => {
        if (isAuth) {
            const mapOrd = order.map(value => ({id:value.id,buyCount:value.buyCount}))
            dispatch(TCSendOrder(mapOrd,basketProds))
        } else {
            setModal(true)
        }
    }

    const redirect = () => {
        nav('/auth')
    }

    return (
        <div className={s.Basket}>
            <Modal title='Для отправки заказа нужно авторизоваться. Перейти на страницу авторизации?' isVisible={modal} onClose={() => setModal(false)} redirect={redirect}/>
            <div className={s.mainContainer}>
                <div className={s.title}>
                    Корзина
                </div>
                {basketProds.length>0
                    ?<div className={s.content}>
                        <div className={s.list}>
                            {basketProds.map( (el,i) => <BasketItem key={el.id} product={el} deleteOrder={(id:string) => deleteOrderItem(id)} setOrder={ (add:number) => setOrderItem(i,add) } orderItem={order[i]}/>)}
                        </div>
                        <div className={s.panel}>
                            <div className={s.panelInfo}>
                                <div className={s.panelTitle}>В корзине</div>
                                <div className={s.count}>Товаров: {basketProds.length}</div>
                                <div className={s.sum}>{sum}</div>
                            </div>
                            <button className={s.orderBtn} onClick={sendOrder}>Оформить заказ</button>
                        </div>
                    </div>
                    :<div className={s.placeholder}>Корзина пуста</div>
                }


            </div>
        </div>
    )}

export default Basket;