import React, {useState} from "react";
import {Link} from "react-router-dom";
import s from "./Header.module.scss"
import HeaderLinks from "./HeaderLinks/HeaderLinks";
import img from "./../../assets/images/titleFine.png"
import ButtonFill from "../Others/Button/ButtonFill";
import ButtonHeader from "../Others/Button/ButtonHeader";
import InputHeader from "../Others/Input/InputHeader";

const Header = () => {

    const [links, setLinks] = useState(['Смартфоны и планшеты','Ноутбуки, планшеты и компьютеры','Техника для дома','Игры и развлечения','Фото и видеотехника'])
    const [input,setInput] = useState('')

    return (
        <header className={s.Header}>
            <div className={s.mainContainer}>
                <div className={s.topContainer}>
                    <div className={s.title_menuContainer}>
                        <div className={s.title}>
                            <Link className={s.link} to='/'>
                                <img src={img} alt="lorem"/>
                            </Link>
                        </div>
                        <div className={s.menu}>
                            Каталог
                        </div>
                    </div>
                    <div className={s.search}>
                        <InputHeader value={input} setValue={setInput}/>
                    </div>
                    <div className={s.buttonsContainer}>
                        <Link className={s.link} to="/profile">
                            <ButtonHeader imgPath='person' text='Профиль'/>
                        </Link>
                        <Link className={s.link} to="/compare">
                            <ButtonHeader imgPath='bar_chart' text='Сравнение'/>
                        </Link>
                        <Link className={s.link} to="/favorites">
                            <ButtonHeader imgPath='favorite' text='Избранное'/>
                        </Link>
                        <Link className={s.link} to="/basket">
                            <ButtonHeader imgPath='shopping_cart' text='Корзина'/>
                        </Link>
                    </div>
                </div>
                {links.length > 0
                    ? (
                        <div className={s.bottomContainer}>
                            <HeaderLinks links={links}/>
                        </div>
                    )
                    : null
                }
            </div>
        </header>
    );
}

export default Header;