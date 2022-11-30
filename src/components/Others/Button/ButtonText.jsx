import React from "react";
import s from './ButtonText.module.scss'

const ButtonText = React.memo(({text, callback}) => {

    return (
        <button onClick={callback} className={s.Button}>
            {text}
        </button>
    )
})

export default ButtonText