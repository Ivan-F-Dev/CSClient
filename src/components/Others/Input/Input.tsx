import React, { FC } from "react";
import s from './Input.module.scss'

interface InputProps {
    title?:string
    value:string
    onChange: (e:React.ChangeEvent<HTMLInputElement>) => void
    onBlur?: () => void
    type?:string
    width?: string
}

const Input:FC<InputProps> = React.memo(({title,value, onChange,onBlur, type, width}) => {


    return (
        <div className={s.inputWrapper}>
            {title ? <h5 className={s.title}>{title}</h5>: null}
            <input style={{width: width? width :'600px'}}
                   className={s.Input} type={type || "text"}
                   value={value}
                   onChange={(e)=>onChange(e)}
                   onBlur={onBlur}
            />
        </div>
    )
})

export default Input