import React, {FC, RefObject, useLayoutEffect, useRef, useState} from "react";
import s from "./Product.module.scss";
import config from "../../config.json"
import { useParams } from "react-router-dom";
import favoriteFill from "../../assets/images/favorite_fill.svg";
import favorite from "../../assets/images/favorite.svg";
import barChartGreen from "../../assets/images/bar_chartGreen.svg";
import barChart from "../../assets/images/bar_chart.svg";
import Cart from "../../assets/images/shopping_cartWhite.svg";
import {useDispatch, useSelector} from "react-redux";
import {Store} from "../../store/store";
import {priceHandlers} from "../../utils/priceHandlers";
import {getProductTitle} from "../../utils/getProductTitle";
import {renderNeededCharacteristics} from "../../utils/renderNeededCharacteristics";
import {Dispatch} from "redux";
import {setFavorite, setToBasket, setToCompare} from "../../store/actionCreators";
import {CategoriesNameEnum} from "../../types/Enums";

const iconSize = {
    height:'22px',
    width:'22px'
}

interface ProductProps {
    scroll: RefObject<HTMLDivElement>
}

const Product:FC<ProductProps> = ({scroll}) => {

    useLayoutEffect(() => {
        if (scroll.current != null) {
            scroll.current.scrollIntoView();
        }
    }, []);

    const {id,cat} = useParams()

    const category:CategoriesNameEnum = cat  as CategoriesNameEnum
    const product = useSelector((state:Store) => state.mainPage.prods)[category].find(el => el.id === id)// as SmartphoneEntity

    const dispatch = useDispatch<Dispatch<any>>()

    const setFav = () => {
        if (product) dispatch(setFavorite(product.id, category))
    }
    const setCompare = () => {
        if (product) dispatch(setToCompare(product.id, category))
    }
    const setBasket = () => {
        if (product) dispatch(setToBasket(product.id, category))
    }

    const [activeFav, setActiveFav] = useState<boolean>(false)
    const [activeChart, setActiveChart] = useState<boolean>(false)

    if (typeof product === "undefined") return (<div>Product = Undefined</div>)

    return (
        <div className={s.Product}>
            <div className={s.mainContainer}>
                <div className={s.title}>{`${getProductTitle(product.category)} ${product.producer} ${product.model}`}</div>
                <div className={s.menu}>
                    <div className={s.leftItem}>
                        <div onClick={setFav} className={s.favorite}>
                            {product.favorite
                            ? <img style={iconSize} src={favoriteFill}/>
                            : <img style={iconSize} src={favorite} onClick={() => setActiveFav(!activeFav)}/>
                            }
                            {product.favorite ? " В избранном": " В избранное"}
                        </div>
                        <div onClick={setCompare} className={s.chart}>
                            {product.toCompare
                                ? <img style={iconSize} src={barChartGreen} />
                                : <img style={iconSize} src={barChart} onClick={() => setActiveChart(!activeChart)}/>
                            }
                            {product.toCompare ? " В сравнении": " В сравнение"}
                        </div>
                    </div>
                    <div className={s.rightItem}>
                        <span>ост.</span> {product.count}
                    </div>
                </div>
                <div className={s.mainContent}>
                    <div className={s.photo}>
                        <img src={config.mainUrl + "images/products/" + product.img + ".png"} alt=""/>
                    </div>
                    <div className={s.info}>
                        {product.rom
                            ?<div className={s.memory}>
                                <span>Объем памяти</span>
                                <div>{product.rom}</div>
                            </div>
                            :null}
                        <div className={s.about}>
                            <div className={s.aboutTitle}>Характеристики</div>
                            {renderNeededCharacteristics(product).map( el => (
                                <div key={el.name} className={s.aboutItem}><span>{el.name}: </span>{el.value}</div>
                            ))}
                        </div>
                    </div>
                    <div className={s.basket}>
                        <div className={s.oldPrice}>
                            {priceHandlers(product.price)}
                        </div>
                        <div className={s.newPrice}>
                            <div className={s.price}>{product.price+'.00 ₽'}</div>
                            <div className={s.discount}>-9%</div>
                        </div>
                        <div className={product.toBasket?s.basketBtnF:s.basketBtn} onClick={setBasket}>
                            {product.toBasket
                                ? 'Убрать из корзины'
                                : 'Добавить в корзину'}
                            <img src={Cart}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;