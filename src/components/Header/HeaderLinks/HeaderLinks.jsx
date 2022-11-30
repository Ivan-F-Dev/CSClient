import React from "react";
import s from "./HeaderLinks.module.scss"

const HeaderLinks = (props) => {

    return (
        <div className={s.links}>
            {props.linkList.map((el,i) => (
                <div key={i} className={s.linkWrapper}><a key={el + new Date()} className={s.link}>{`${el}`}</a></div>
            ))}
        </div>
    );
}

export default HeaderLinks;