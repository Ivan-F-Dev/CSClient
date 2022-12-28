import React, {FC, useEffect, useRef, useState} from "react";
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

const App:FC = () => {

    const app = useRef<HTMLDivElement>(null);

//Переход десктоп/мобайл ++
    const [isDesktop,setIsDesktop] = useState(true)

    const resizeListener = () => {
        if (window.innerWidth > 715 && localStorage.isDesktop === 'false') {
            localStorage.isDesktop = 'true'
            setIsDesktop(true)
        }
        if (window.innerWidth <= 715 && localStorage.isDesktop === 'true') {
            localStorage.isDesktop = 'false'
            setIsDesktop(false)
        }
    }
    useEffect(() => {
        window.innerWidth > 715 ? localStorage.isDesktop = 'true' : localStorage.isDesktop = 'false'
        window.addEventListener("resize", resizeListener)
    },[])
//Переход десктоп/мобайл --



    return (
        <div ref={app} className={s.App}>
            {isDesktop ? <Header/> : <HeaderMobile/>}
            <main>
                {/*<button onClick={mainHeightControl}>control</button>*/}
                <Routes>
                    <Route path='/' element={<MainPage/>}/>
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