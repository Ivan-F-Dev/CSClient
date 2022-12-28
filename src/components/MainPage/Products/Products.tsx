import React, {FC} from 'react'
import s from './Products.module.scss'
import Card from "./Card/Card";
import {ProductEntity, ProductEntityClient} from "../../../types/Entities";
import {Link} from "react-router-dom";
import {CategoriesNameEnum} from "../../../types/Enums";

// interface ProductsProps {
//     prods:Array<ProductEntity>
//     curCat: CategoriesNameEnum
// }
interface ProductsProps {
    prods:Record<CategoriesNameEnum, Array<ProductEntityClient>>
    curCat: CategoriesNameEnum
}

enum CategoriesNameEnumRu {
    videoCameras='Видеокамеры',
    gameStations='Игровые станции',
    televisors='Телевизоры',
    pads='Планшеты',
    laptops='Ноутбуки',
    photoVideo='Фото техника',
    smartphones='Смартфоны'
}

const Products:FC<ProductsProps> = ({prods,curCat}) => {

    //console.log('Products')

    return (
        <div className={s.Products}>
            <div className={s.mainContainer}>
                <div className={s.title}>{CategoriesNameEnumRu[curCat]}</div>
                <div className={s.productsWrapper}>
                    {prods[curCat].map((el) => (
                        <Card key={el.id} product={el}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Products