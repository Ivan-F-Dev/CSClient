import React from "react";
import s from "./Categories.module.scss";

const Categories = ({cats}) => {

    return (
        <div className={s.Categories}>
            <div className={s.mainContainer}>

                {cats.map((el,i)=> (
                    <div key={i} className={s.item}>
                        <div className={s.wrapper}>
                            <div className={s.itemImgWrapper}><img src={"http://localhost:3000/images/categories/" + el.img + ".png"} alt=""/></div>
                            <div className={s.itemTitle}>{el.title}</div>
                        </div>
                    </div>
                ))}

            </div>
        </div>

    )
}

export default Categories;