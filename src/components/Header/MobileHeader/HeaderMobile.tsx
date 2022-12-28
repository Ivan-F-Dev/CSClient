import React, {FC, useState} from "react";
import s from "./HeaderMobile.module.scss";
import HeaderLinks from "../HeaderLinks/HeaderLinks";
import img from "./../../../imgs/titleFine.png";
import menuIco from "./../../../assets/images/menu_ico.svg";
import HeaderButton from "./HeaderButton/HeaderButton";
import InputHeader from "../../Others/Input/InputHeader";
import {Link} from "react-router-dom";

const HeaderMobile:FC = () => {

    const [links, setLinks] = useState(['Смартфоны и планшеты','Ноутбуки, планшеты и компьютеры','Техника для дома','Игры и развлечения','Фото и видеотехника'])
    const [input,setInput] = useState('')


    return (
        <header className={s.Header}>
            <div className={s.container}>
                <div className={s.topBox}>
                    <div className={s.ButtonsWrapper}>
                        <HeaderButton path='person'/>
                        <HeaderButton path='bar_chart'/>
                    </div>
                    <Link style={{display:"contents"}} to='/'>
                        <div className={s.titleWrapper}></div>
                    </Link>

                    <div className={s.ButtonsWrapper}>
                        <HeaderButton path='favorite'/>
                        <HeaderButton path='shopping_cart'/>
                    </div>
                </div>
                <div className={s.middleBox}>
                    <div className={s.imgWrapper}>
                        <img src={menuIco} alt=""/>
                    </div>
                    <InputHeader width="calc(100% - 36px)" value={input} setValue={setInput}/>
                </div>
                {links.length > 0
                    ? (
                        <div className={s.bottomBox}>
                            <HeaderLinks links={links}/>
                        </div>
                    )
                    : null
                }
            </div>
        </header>
    );
}

export default HeaderMobile;