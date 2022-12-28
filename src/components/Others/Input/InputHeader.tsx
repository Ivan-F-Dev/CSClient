import React, { FC } from "react";
import s from './InputHeader.module.scss'

interface InputHeaderProps {
    title?:string
    value:string
    setValue: (str:string)=>void
    type?:string
    width?:string
}

const InputHeader:FC<InputHeaderProps> = React.memo(({title,value, setValue, type, width}) => {

    return (
        <div  className={s.inputWrapper}>

            {title ? <h5 className={s.title}>{title}</h5>: null}
            <input style={{width:width}} className={s.Input} type={type || "text"} value={value} onChange={(e) => setValue(e.target.value)}/>

        </div>
    )
})

export default InputHeader