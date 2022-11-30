import React from "react";
import s from "./HeaderButton.module.scss";
//import img from './../../../../imgs/titleFine.png';



const HeaderButton = ({name}) => {

    return (
        <div className={s.HeaderButton}>
            <img src={require(`./../../../../imgs/${name}.svg`)}  alt=""/>
        </div>
    );
}

export default HeaderButton;