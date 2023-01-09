import React, {useEffect} from 'react';
import s from './OrdersHistory.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {Store} from "../../../store/store";
import OrderItem from "./OrderItem/OrderItem";
import {TCLoadMainPage} from "../../../store/thunkCreators";
import {Dispatch} from "redux";
import {CategoriesNameEnum} from "../../../types/Enums";
import {getProdsById} from "../../../utils/getProds";
import {getFormatPrice, getSumOfProdsArr} from "../../../utils/priceHandlers";

const OrdersHistory = () => {

    const dispatch = useDispatch<Dispatch<any>>()
    const orders = useSelector((state:Store) => state.auth.orders)
    const prods = useSelector((state:Store) => state.mainPage.prods)

    useEffect( () => {
        for (let cat in CategoriesNameEnum) {
            if (!prods[cat as CategoriesNameEnum]) {
                dispatch(TCLoadMainPage(cat as CategoriesNameEnum))
            }
        }
    },[] )

    let totalSum = 0

    const orderItems = orders.map(value => {

        let sum = getSumOfProdsArr(getProdsById(value.prods).supArr)
        totalSum = totalSum + Number(sum.replace(" ","").replace("₽","").slice(0,-3))
        return <OrderItem sum={sum} order={value}/>
    })

    return (
        <div className={s.OrdersHistory}>
            <div className={s.title}>История заказов</div>
            <div className={s.orders}>
                <div className={s.header}>
                    <div className={s.column}>Дата оформления</div>
                    <div className={s.column}>Номер заказа</div>
                    <div className={s.column}>Статус</div>
                    {/*<div className={s.column}>Оплата</div>*/}
                    <div className={s.column}>Сумма заказа</div>
                </div>
                {orderItems}
                <div className={s.footer}>Общая сумма: <b>{getFormatPrice(totalSum)}</b> </div>
            </div>
        </div>
    );
}

export default OrdersHistory;