import React, {FC} from "react";
import s from './CompareLine.module.scss'
import Column from "./Column/Column";
import {ProductEntityClient} from "../../../types/Entities";


interface CompareLineProps {
    indexProp:number
    title: string
    propsList: {resultArr:Array<string>,supportArr:Array<string>}
    compareProds:Array<ProductEntityClient>
}

const CompareLine:FC<CompareLineProps> = ({title,indexProp,compareProds,propsList}) => {

    return (
        <div className={s.CompareLine}>
            <div className={s.title}>{title}</div>
            <div className={s.columnsWrapper}>
                {compareProds.map( (el,index) => <Column value={el[propsList.supportArr[indexProp]] as string}/>)}
            </div>
        </div>
    )
}

export default CompareLine