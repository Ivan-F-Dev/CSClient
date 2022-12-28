import React, {FC, useRef, useState} from "react";
import s from './Favorites.module.scss'
import {useSelector} from "react-redux";
import {Store} from "../../store/store";
import {getProdsFor} from "../../utils/getProdsFor";
import FavItem from "./FavItem/FavItem";
import arrowLeft from "../../assets/icons/arrow_left.svg"
import arrowRight from "../../assets/icons/arrow_right.svg"
import {throttle} from 'lodash'
import {useSizeElement} from "../Others/Hooks/useSizeElement";


const Favorites:FC = () => {

    const prods = useSelector((state:Store) => state.mainPage.prods)
    const favProds = getProdsFor(prods,'favorite')


    const content = useRef<HTMLDivElement | null>(null)
    const contentSize = useSizeElement(content.current)
    const stackSize = 4
    const maxShift = -(favProds.length>stackSize? favProds.length - 4: 0) * 300
    const [X,setX] = useState(0)


    const [x,setx] = useState(1)



    console.log(contentSize)


    return (
        <div className={s.Favorites}>
            <button onClick={() => setx(prevState => prevState+1)}>add</button>
            <div className={s.title}>Избранное</div>
            <div className={s.mainContainer}>
                <div style={{visibility: X>=0?"hidden":"inherit"}} onClick={() => setX(prev => prev+300)} className={s.shevronWrapperL}><img src={arrowLeft} alt=""/></div>
                <div ref={content} className={s.content}>
                    <div style={{transform: `translateX(${X}px)`}} className={s.carousel}>
                        {favProds.map( (el) => <FavItem key={el.id} product={el}/>)}
                    </div>
                </div>
                <div style={{visibility: X<=maxShift?"hidden":"inherit"}} onClick={() => setX(prev => prev-300)} className={s.shevronWrapperR}><img src={arrowRight} alt=""/></div>
            </div>
        </div>
    )
}

export default Favorites