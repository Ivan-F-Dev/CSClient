import React, { FC } from 'react'
import s from './OrderItem.module.scss'
import {OrderEntity} from "../../../../types/Entities";

interface Props {
    order: OrderEntity
    sum:string
};

const OrderItem: FC<Props> = ({order,sum}) => {

    const date = new Date(order.date).toLocaleDateString()

 return (
  <div className={s.OrderItem}>
      <div className={s.column}>{date}</div>
      <div className={s.column}><span className={s.id}>{order.id}</span></div>
      <div className={s.column}>Принят</div>
      {/*<div className={s.column}>Не оплачен</div>*/}
      <div className={s.column}>{sum}</div>
  </div>
 )
}

export default OrderItem