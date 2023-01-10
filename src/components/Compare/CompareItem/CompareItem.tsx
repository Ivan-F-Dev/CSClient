import React, {FC} from "react";
import s from './CompareItem.module.scss'
import config from "../../../config.json"
import {ProductEntityClient} from "../../../types/Entities";
import {getProductTitle} from "../../../utils/getProductTitle";
import deleteIcon from "../../../assets/icons/delete.svg"
import {useDispatch} from "react-redux";
import {Dispatch} from "redux";
import {setToCompare} from "../../../store/actionCreators";
import {Link} from "react-router-dom";

interface CompareItemProps {
    product: ProductEntityClient
}

const CompareItem:FC<CompareItemProps> = ({product}) => {
    //console.log(itemWidth.current.getBoundingClientRect())//ref
    const dispatch = useDispatch<Dispatch<any>>()

    const setCompare = () => {
        dispatch(setToCompare(product.id, product.category))
    }

    return (
        <div className={s.CompareItem}>
            <Link className={s.wrapperLink} to={`/product/${product.id}/${product.category}`}>
                <div className={s.photoWrapper}>
                    <img src={config.mainUrl + `images/products/${product.img}.png`} alt="" className={s.photo}/>
                </div>
            </Link>
            <div className={s.title}>{`${getProductTitle(product.category)} ${product.producer} ${product.model}`}</div>
            <div className={s.panel}>
                <div className={s.price}>{product.price+'.00 ₽'}</div>
                <div className={s.delete} onClick={setCompare}><img className={s.deleteIcon} src={deleteIcon} alt=""/></div>
            </div>
        </div>
    )
}

export default CompareItem