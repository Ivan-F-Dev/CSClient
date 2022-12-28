import React, {FC} from "react";
import s from './ButtonFill.module.scss'

interface ButtonFillProps {
    text:string
    fontsize?: number
    height?: number
    callback?: (arg1?:any,arg2?:any,arg3?:any)=>any
}

const ButtonFill:FC<ButtonFillProps> = React.memo(({text,fontsize,height,callback}) => {

    return (
        <button onClick={callback} style={{fontSize:`${fontsize}px`,height:`${height}px`}} className={s.Button}>
            {text}
        </button>
    )
})

export default ButtonFill