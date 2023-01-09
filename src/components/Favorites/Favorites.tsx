import React, {FC, useEffect, useRef, useState} from "react";
import s from './Favorites.module.scss'
import {useSelector} from "react-redux";
import {Store} from "../../store/store";
import {getProdsBCF} from "../../utils/getProds";
import FavItem from "./FavItem/FavItem";
import arrowLeft from "../../assets/icons/arrow_left.svg";
import arrowRight from "../../assets/icons/arrow_right.svg";
import {useSlider} from "../Others/Hooks/useSlider";


const Favorites:FC = () => {

    const prods = useSelector((state:Store) => state.mainPage.prods)
    const favProds = getProdsBCF(prods,'favorite')

//slider
    const slider = useSlider(favProds)
//slider

    return (
        <div className={s.Favorites}>
            <div className={s.title}>Избранное</div>
            {favProds.length>0
                ?<div className={s.mainContainer}>
                    <div style={{visibility: slider.XShift>=-299?"hidden":"inherit"}} onClick={() => slider.setX(300)} className={s.shevronWrapperL}><img src={arrowLeft} alt=""/></div>
                    <div ref={slider.ref} className={s.content}>
                        <div style={{transform: `translateX(${slider.XShift}px)`}} className={s.carousel}>
                            {favProds.map( (el) => <FavItem key={el.id} product={el}/>)}
                        </div>
                    </div>
                    <div style={{visibility: slider.XShift<=slider.maxXShift?"hidden":"inherit"}} onClick={() => slider.setX(-300)} className={s.shevronWrapperR}><img src={arrowRight} alt=""/></div>
                </div>
                :<div className={s.placeholder}>Список избранных товаров пуст</div>
            }
        </div>
    )
}

export default Favorites