import React from "react";
import s from './ButtonFill.module.scss'

const ButtonFill = React.memo(({text}) => {

    return (
        <button className={s.Button}>
            {text}
        </button>
    )
})

export default ButtonFill