import React, {useState} from "react";
import s from "./HeaderMobile.module.scss";
import HeaderLinks from "../HeaderLinks/HeaderLinks";
import img from "./../../../imgs/titleFine.png";
import menuIco from "./../../../imgs/menu_ico.svg";
import HeaderButton from "./HeaderButton/HeaderButton";
//import TextField from "@material-ui/core/TextField";



const HeaderMobile = () => {

    const [Links, setLinks] = useState(['Смартфоны и планшеты','Ноутбуки, планшеты и компьютеры','Техника для дома','Игры и развлечения','Фото и видеотехника'])

    return (
        <div className={s.Header}>
            <div className={s.container}>
                <div className={s.topBox}>
                    <div className={s.ButtonsWrapper}>
                        <HeaderButton name='person'/>
                        <HeaderButton name='bar_chart'/>
                    </div>
                    <div className={s.titleWrapper}></div>
                    <div className={s.ButtonsWrapper}>
                        <HeaderButton name='favorite'/>
                        <HeaderButton name='shopping_car'/>
                    </div>
                </div>
                <div className={s.middleBox}>
                    <div className={s.imgWrapper}>
                        <img src={menuIco} alt=""/>
                    </div>
                    {/*<TextField fullWidth id="outlined-basic"  variant="outlined" />*/}
                </div>
                {Links.length > 0
                    ? (
                        <div className={s.bottomBox}>
                            <HeaderLinks linkList={Links}/>
                        </div>
                    )
                    : null
                }
            </div>
        </div>
    );
}

export default HeaderMobile;