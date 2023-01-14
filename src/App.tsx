import React, {FC, useEffect, useRef} from "react";
import s from "./App.module.scss"
import {Route, Routes} from 'react-router-dom'
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import FooterMobile from "./components/Footer/FooterMobile/FooterMobile";
import HeaderMobile from "./components/Header/MobileHeader/HeaderMobile";
import MainPage from "./components/MainPage/MainPage";
import Auth from "./components/Auth/Auth";
import Product from "./components/Product/Product";
import Basket from "./components/Basket/Basket";
import Compare from "./components/Compare/Compare";
import Favorites from "./components/Favorites/Favorites";
import {useViewMode} from "./components/Others/Hooks/useViewMode";
import Profile from "./components/Profile/Profile";
import {TCAuthLog} from "./store/thunkCreators";
import {useDispatch} from "react-redux";
import {Dispatch} from "redux";

const App:FC = () => {

    const dispatch = useDispatch<Dispatch<any>>()

    const app = useRef<HTMLDivElement>(null);

    const isDesktop = useViewMode()

    useEffect(  () => {
        if (Object.hasOwn(localStorage,'auth')) {
            const auth:{token:string,login:string,password:string} = JSON.parse(localStorage.auth)
            dispatch(TCAuthLog({login:auth.login,password:auth.password}))
        }
    },[])

    return (
            <div ref={app} className={s.App}>
                {isDesktop ? <Header/> : <HeaderMobile/>}
            <main>
                <Routes>
                    <Route path='/' element={<MainPage/>}/>
                    <Route path='/profile/*' element={<Profile/>}/>
                    <Route path='/auth' element={<Auth/>}/>
                    <Route path='/product/:id/:cat' element={<Product scroll={app}/>}/>
                    <Route path='/basket' element={<Basket/>}/>
                    <Route path='/compare' element={<Compare/>}/>
                    <Route path='/favorites' element={<Favorites/>}/>
                </Routes>
            </main>
            {isDesktop ? <Footer/> : <FooterMobile/>}
        </div>
    );
}

export default App;