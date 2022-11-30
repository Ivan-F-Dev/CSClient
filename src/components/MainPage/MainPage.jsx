import React, {useEffect} from "react";

import Categories from "./Categories/Categories";
import {useDispatch, useSelector} from "react-redux";
import {createThunk_loadMainPage} from "../../store/thunkCreators";
import Products from "./Products/Products";

const MainPage = () => {

    const dispatch = useDispatch()
    const prods = useSelector((state) => state.mainPage.prods)
    const cats = useSelector((state) => state.mainPage.cats)
    //console.log(prods,cats)

    useEffect( () => {
      console.log(prods.length,cats.length)
      if (prods.length === 0 || cats.length === 0) {
          dispatch(createThunk_loadMainPage("smartphones"))
      }
    },[] )

    //console.log(prods,cats)

    return (
        <div>
            <Categories cats={cats}/>
            <Products prods={prods} />
        </div>
    )
}

export default MainPage