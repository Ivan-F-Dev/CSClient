import React, {FC} from "react";
import s from "./HeaderButton.module.scss";
//import img from '../../../../assets/images/bar_chart.svg';

interface HeaderButtonProps {
    path: string
}

const HeaderButton:FC<HeaderButtonProps> = ({path}) => {

    return (
        <div className={s.HeaderButton}>
            <img src={require(`../../../../assets/images/${path}.svg`)}  alt=""/>
        </div>
    );
}

export default HeaderButton;