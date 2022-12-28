import React, {FC, useEffect, useRef, useState} from "react";
import s from './Compare.module.scss'
import CompareItem from "./CompareItem/CompareItem";
import {useSelector} from "react-redux";
import {Store} from "../../store/store";
import {getProdsFor} from "../../utils/getProdsFor";
import CompareLine from "./CompareLine/CompareLine";
import {evaluateAmountOfProperties} from "../../utils/evaluateAmountOfProperties";
import debounce from "lodash/debounce";




const Compare:FC = () => {

    const prods = useSelector((state:Store) => state.mainPage.prods)
    const compareProds = getProdsFor(prods,'toCompare')
    const propsList = evaluateAmountOfProperties(compareProds)

    return (
        <div className={s.Compare}>
            <div className={s.mainContainer}>
                <div className={s.title}>Сравнение</div>
                <div className={s.content}>
                    {compareProds.map( (el)=> <CompareItem key={el.id} product={el}/>)}
                </div>
                {propsList.resultArr
                    .map( (el,index) => <CompareLine key={el} indexProp={index} propsList={propsList} title={el} compareProds={compareProds}/>)}
            </div>
        </div>
    )
}

export default Compare