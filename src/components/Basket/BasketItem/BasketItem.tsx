import React, {FC, useState} from "react";
import s from "./BasketItem.module.scss";
import deleteIcon from '../../../assets/icons/delete.svg'
import {ProductEntityClient} from "../../../types/Entities";
import {getProductTitle} from "../../../utils/getProductTitle";
import {useDispatch} from "react-redux";
import {Dispatch} from "redux";
import {setFavorite, setToBasket, setToCompare} from "../../../store/actionCreators";
import {Link} from "react-router-dom";

interface BasketItemProps {
    product: ProductEntityClient
}

const BasketItem:FC<BasketItemProps> = ({product}) => {

    const [count,setCount] = useState(1)

    const dispatch = useDispatch<Dispatch<any>>()


    const setBasket = () => {
        dispatch(setToBasket(product.id, product.category))
    }

    return (
        <div className={s.BasketItem}>
            <Link className={s.wrapperLink} to={`/product/${product.id}/${product.category}`}>
                <div className={s.photoWrapper}>
                    <img className={s.photo} src={"http://localhost:3000/images/products/" + product.img + ".png"} alt="img"/>
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
                    <div className={s.setBtn} onClick={() => setCount((prevState) => prevState===1?prevState : prevState-1)}>–</div>
                    <div className={s.count}>{count}</div>
                    <div className={s.setBtn} onClick={() => setCount((prevState) => prevState+1)}>+</div>
                </div>
            </div>
        </div>
    )
}

export default BasketItem;