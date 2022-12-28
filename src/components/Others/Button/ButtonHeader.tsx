import React, {FC} from "react";
import s from './ButtonHeader.module.scss'

interface ButtonHeaderProps {
    text:string
    imgPath:string
}

const ButtonHeader:FC<ButtonHeaderProps> = React.memo(({text,imgPath}) => {

    return (
        <div className={s.ButtonHeader}>
            <img src={require(`../../../assets/images/${imgPath}.svg`)} alt=""/>
            <span className={s.text}>
                {text}
            </span>
        </div>
    )
})

export default ButtonHeader