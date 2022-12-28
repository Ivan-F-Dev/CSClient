import React, {FC} from "react";
import s from "./HeaderLinks.module.scss"

interface HeaderLinksProps {
    links:Array<string>
}

const HeaderLinks:FC<HeaderLinksProps> = ({links}) => {

    return (
        <div className={s.links}>
            {links.map((el, i) => (
                <div key={i} className={s.linkWrapper}><a key={el + new Date()} className={s.link}>{`${el}`}</a></div>
            ))}
        </div>
    );
}

export default HeaderLinks;