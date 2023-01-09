import React, {FC, useEffect, useRef, useState} from "react";
import s from './Compare.module.scss'
import CompareItem from "./CompareItem/CompareItem";
import {useSelector} from "react-redux";
import {Store} from "../../store/store";
import {getProdsBCF} from "../../utils/getProds";
import CompareLine from "./CompareLine/CompareLine";
import {evaluateAmountOfProperties} from "../../utils/evaluateAmountOfProperties";
import debounce from "lodash/debounce";




const Compare:FC = () => {

    const prods = useSelector((state:Store) => state.mainPage.prods)
    let compareProds = getProdsBCF(prods,'toCompare')
    let warning = false
    if (compareProds.length >= 5) {
        compareProds = compareProds.slice(0, 4)
        warning = true
    }
    console.log(compareProds)
    const propsList = evaluateAmountOfProperties(compareProds)

    return (
        <div className={s.Compare}>
            <div className={s.mainContainer}>
                <div className={s.title}>Сравнение</div>
                {compareProds.length > 0
                    ?<div className={s.content}>
                        {compareProds.map( (el)=> <CompareItem key={el.id} product={el}/>)}
                    </div>
                    :<div className={s.placeholder}>Список товаров для сравнения пуст</div>}
                {compareProds.length > 0
                    ?propsList.resultArr
                        .map( (el,index) => <CompareLine key={el} indexProp={index} propsList={propsList} title={el} compareProds={compareProds}/>)
                    :<div> </div>}
            </div>
        </div>
    )
}

export default Compare