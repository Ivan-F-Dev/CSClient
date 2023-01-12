import React, {useState} from "react";
import {Link} from "react-router-dom";
import s from "./Header.module.scss"
import HeaderLinks from "./HeaderLinks/HeaderLinks";
import img from "./../../assets/images/titleFine.png";
import ButtonHeader from "../Others/Button/ButtonHeader";
import InputHeader from "../Others/Input/InputHeader";
import HintNumber from "../Others/Hint/HintNumber";
import {useDispatch, useSelector} from "react-redux";
import {Store} from "../../store/store";
import {Dispatch} from "redux";

const Header = () => {

    const [links, setLinks] = useState(['Смартфоны и планшеты','Ноутбуки, планшеты и компьютеры','Техника для дома','Игры и развлечения','Фото и видеотехника'])
    const [input,setInput] = useState('')

    const dispatch = useDispatch<Dispatch<any>>()
    const mainPage = useSelector((state:Store)=> state.mainPage)
    const auth = useSelector((state:Store)=> state.auth.isAuth)

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
                        <Link className={s.link} to="/profile/contactData">
                            <HintNumber radius={8} boolType={true} max={1} right={3} top={3} children={auth?1:2}/>
                            <ButtonHeader imgPath='person' text='Профиль'/>
                        </Link>
                        <Link className={s.link} to="/compare">
                            <HintNumber max={4} right={3} top={3} children={mainPage.countOfCompareProds}/>
                            <ButtonHeader imgPath='bar_chart' text='Сравнение'/>
                        </Link>
                        <Link className={s.link} to="/favorites">
                            <HintNumber right={3} top={3} children={mainPage.countOfFavoriteProds}/>
                            <ButtonHeader imgPath='favorite' text='Избранное'/>
                        </Link>
                        <Link className={s.link} to="/basket">
                            <HintNumber right={3} top={3} children={mainPage.countOfBasketProds}/>
                            <ButtonHeader imgPath='shopping_cart' text='Корзина'/>
                        </Link>
                    </div>
                </div>
                {mainPage.cats.length > 0
                    ? (
                        <div className={s.bottomContainer}>
                            <HeaderLinks dispatch={dispatch} links={mainPage.cats}/>
                        </div>
                    )
                    : null
                }
            </div>
        </header>
    );
}

export default Header;