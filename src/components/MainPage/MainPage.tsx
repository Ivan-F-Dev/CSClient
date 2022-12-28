import React, {FC, useEffect} from "react";
import {Dispatch} from "redux";
import Categories from "./Categories/Categories";
import {useDispatch, useSelector} from "react-redux";
import {TCLoadMainPage} from "../../store/thunkCreators";
import Products from "./Products/Products";
import {Store} from "../../store/store";
import {CategoriesNameEnum} from "../../types/Enums";
import {changeCat} from "../../store/actionCreators";

const MainPage:FC = () => {

    const dispatch = useDispatch<Dispatch<any>>()
    const prods = useSelector((state:Store) => state.mainPage.prods)
    const cats = useSelector((state:Store) => state.mainPage.cats)
    const curCat = useSelector((state:Store) => state.mainPage.currentCategory)

    const setCurCat = (newCat: CategoriesNameEnum) => {
        dispatch(changeCat(newCat))
        return undefined
    }

    useEffect( () => {
        if (!prods[curCat]) {
            dispatch(TCLoadMainPage(curCat))
        }

    },[curCat] )

    return (
        <div>
            <Categories setCurCat={setCurCat} cats={cats}/>
            {Object.hasOwn(prods,curCat) && prods[curCat].length > 0
                ?<Products curCat={curCat} prods={prods} />
                :<h3>Нет товара</h3>}
        </div>
    )
}

export default MainPage