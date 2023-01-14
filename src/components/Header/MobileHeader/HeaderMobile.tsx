import React, {FC, useState} from "react";
import s from "./HeaderMobile.module.scss";
import img from "./../../../imgs/titleFine.png";
import menuIco from "./../../../assets/images/menu_ico.svg";
import HeaderButton from "./HeaderButton/HeaderButton";
import InputHeader from "../../Others/Input/InputHeader";
import {Link} from "react-router-dom";
import HintNumber from "../../Others/Hint/HintNumber";
import {useSelector} from "react-redux";
import {Store} from "../../../store/store";

const HeaderMobile:FC = () => {

    const auth = useSelector((state:Store)=> state.auth.isAuth)
    const mainPage = useSelector((state:Store)=> state.mainPage)
    const [input,setInput] = useState('')

    return (
        <header className={s.Header}>
            <div className={s.container}>
                <div className={s.topBox}>
                    <div className={s.ButtonsWrapper}>
                        <Link className={s.link} to="/profile/contactData">
                            <HintNumber radius={8} boolType={true} max={1} right={3} top={3} children={auth?1:2}/>
                            <HeaderButton path='person'/>
                        </Link>
                        <Link className={s.link} to="/compare">
                            <HintNumber max={4} right={3} top={3} children={mainPage.countOfCompareProds}/>
                            <HeaderButton path='bar_chart'/>
                        </Link>
                    </div>
                    <Link style={{display:"contents"}} to='/'>
                        <div className={s.titleWrapper}></div>
                    </Link>
                    <div className={s.ButtonsWrapper}>
                        <Link className={s.link} to="/favorites">
                            <HintNumber right={3} top={3} children={mainPage.countOfFavoriteProds}/>
                            <HeaderButton path='favorite'/>
                        </Link>
                        <Link className={s.link} to="/basket">
                            <HintNumber right={3} top={3} children={mainPage.countOfBasketProds}/>
                            <HeaderButton path='shopping_cart'/>
                        </Link>
                    </div>
                </div>
                <div className={s.middleBox}>
                    <div className={s.imgWrapper}>
                        <img src={menuIco} alt=""/>
                    </div>
                    <InputHeader width="calc(100% - 36px)" value={input} setValue={setInput}/>
                </div>
            </div>
        </header>
    );
}

export default HeaderMobile;
