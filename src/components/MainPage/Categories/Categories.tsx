import React, {FC} from "react";
import s from "./Categories.module.scss";
import {CategoryEntity} from "../../../types/Entities";
import {CategoriesNameEnum} from "../../../types/Enums";
import {changeCatAction} from "../../../store/actionCreators";

interface CategoriesProps {
    cats:Array<CategoryEntity>
    setCurCat: (newCat: CategoriesNameEnum) => void//undefined
}

const Categories:FC<CategoriesProps> = ({cats,setCurCat}) => {

    //console.log('Categories')

    return (
        <div className={s.Categories}>
            <div className={s.mainContainer}>

                {cats.map((el,i)=> (
                    <div onClick={() =>setCurCat(el.categoryName)} key={i} className={s.item}>
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