import React from "react";
import s from './Input.module.scss'

const Input = React.memo(({title,value, setValue, type}) => {


    return (
        <div className={s.inputWrapper}>
            <h5 className={s.title}>{title}</h5>
            <input className={s.Input} type={type || "text"} value={value} onChange={(e) => setValue(e.target.value)}/>
        </div>
    )
})

export default Input