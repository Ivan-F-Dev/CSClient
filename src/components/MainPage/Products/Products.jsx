import React, {useState} from 'react'
import s from './Products.module.scss'
import Card from "./Card/Card";

const Products = ({prods}) => {

    return (
        <div className={s.Products}>
            <div className={s.mainContainer}>
                <h2>Смартофоны и планшеты</h2>
                <div className={s.productsWrapper}>
                    {prods.map((el) => (
                        <Card key={el.id} phone={el}/>
                    ))}
                </div>
            </div>
        </div>

    )
}

export default Products;

