import React, {FC} from "react";
import s from './ButtonText.module.scss'

interface ButtonTextProps {
    text:string
    callback: ()=>void
}

const ButtonText:FC<ButtonTextProps> = React.memo(({text, callback}) => {

    return (
        <button onClick={callback} className={s.Button}>
            {text}
        </button>
    )
})

export default ButtonText