import React, {Dispatch, FC} from "react";
import s from "./HeaderLinks.module.scss"
import {CategoryEntity} from "../../../types/Entities";
import {Link} from "react-router-dom";
import {changeCat} from "../../../store/actionCreators";
import {CategoriesNameEnum} from "../../../types/Enums";

interface HeaderLinksProps {
    links:Array<CategoryEntity>
    dispatch:Dispatch<any>
}

const HeaderLinks:FC<HeaderLinksProps> = ({links,dispatch}) => {

    const onClick = (newCat:CategoriesNameEnum) => {
        dispatch(changeCat(newCat))
    }

    return (
        <div className={s.links}>
            {links.map((el, i) => (
                <div key={i} className={s.linkWrapper}><Link onClick={() => onClick(el.categoryName)} to='/' key={el.title + new Date()} className={s.link}>{`${el.title}`}</Link></div>
            ))}
        </div>
    );
}

export default HeaderLinks;