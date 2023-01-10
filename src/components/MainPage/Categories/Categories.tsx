import React, {FC} from "react";
import s from "./Categories.module.scss";
import config from "../../../config.json"
import {CategoryEntity} from "../../../types/Entities";
import {CategoriesNameEnum} from "../../../types/Enums";

interface CategoriesProps {
    cats:Array<CategoryEntity>
    setCurCat: (newCat: CategoriesNameEnum) => void//undefined
}

const Categories:FC<CategoriesProps> = ({cats,setCurCat}) => {

    return (
        <div className={s.Categories}>
            <div className={s.mainContainer}>

                {cats.map((el,i)=> (
                    <div onClick={() =>setCurCat(el.categoryName)} key={i} className={s.item}>
                        <div className={s.wrapper}>
                            <div className={s.itemImgWrapper}><img src={config.mainUrl + "images/categories/" + el.img + ".png"} alt=""/></div>
                            <div className={s.itemTitle}>{el.title}</div>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Categories;