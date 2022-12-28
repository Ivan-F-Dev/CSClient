import React, {FC} from "react";
import s from './Column.module.scss'

interface ColumnProps {
    value: string
}

const Column:FC<ColumnProps> = ({value}) => {
    return (

        <div className={s.Column}>
            {value?value: "—"}
        </div>

    )
}

export default Column