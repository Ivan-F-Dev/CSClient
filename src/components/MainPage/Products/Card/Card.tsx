import React, {FC, useState} from "react";
import s from "./Card.module.scss";
import {Link} from "react-router-dom";

import {ProductEntityClient} from "../../../../types/Entities";
import cross_white from '../../../../assets/icons/сross_white.svg'
import favoriteFill from "../../../../assets/images/favorite_fill.svg"
import favorite from "../../../../assets/images/favorite.svg"
import shoppingCartWhite from "../../../../assets/images/shopping_cartWhite.svg"
import barChart from "../../../../assets/images/bar_chart.svg"
import barChartGreen from "../../../../assets/images/bar_chartGreen.svg"
import {useDispatch} from "react-redux";
import {Dispatch} from "redux";
import {CategoriesNameEnum} from "../../../../types/Enums";
import {setFavorite, setToBasket, setToCompare} from "../../../../store/actionCreators";


interface CardProps {
    product:ProductEntityClient
    //curCat: CategoriesNameEnum
}

const iconSize = {
    height:'32px',
    width:'32px'
}

const Card:FC<CardProps> = ({product}) => {


    const dispatch = useDispatch<Dispatch<any>>()

    const setFav = () => {
        dispatch(setFavorite(product.id, product.category))
    }
    const setCompare = () => {
        dispatch(setToCompare(product.id, product.category))
    }
    const setBasket = () => {
        dispatch(setToBasket(product.id, product.category))
    }



    return (
        <div key={product.id} className={s.Card}>
            <Link className={s.wrapperLink} to={`/product/${product.id}/${product.category}`}>
                <div className={s.photo}>
                    <img src={"http://localhost:3000/images/products/" + product.img + ".png"} alt=""/>
                </div>
                <div className={s.description}>{product.producer} {product.model}</div>
            </Link>
            <div className={s.price}>{product.price} ₽</div>
            <div className={s.icons}>
                <div className={s.topIcons}>
                    <div className={s.fav}>
                        {product.favorite
                            ? <img style={iconSize} src={favoriteFill} onClick={setFav}/>
                            : <img style={iconSize} src={favorite} onClick={setFav}/>}
                    </div>
                    <div className={s.comp}>
                        {product.toCompare
                            ? <img style={iconSize} src={barChartGreen} onClick={setCompare}/>
                            : <img style={iconSize} src={barChart} onClick={setCompare}/>}
                    </div>

                </div>
                <div className={s.bottomIcon}>
                    {product.toBasket
                        ? <img style={iconSize} src={cross_white} onClick={setBasket}/>
                        : <img style={iconSize} src={shoppingCartWhite} onClick={setBasket}/>}
                </div>
            </div>
        </div>
    )}


export default Card;