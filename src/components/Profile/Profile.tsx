import React, {useState} from 'react';
import s from './Profile.module.scss';
import {useSelector} from "react-redux";
import {Store} from "../../store/store";
import {Link, Navigate, NavLink, Route, Routes} from 'react-router-dom'

import ContactData from "./ContactData/ContactData";
import OrdersHistory from "./OrdersHistory/OrdersHistory";
import ConfirmExit from "./ConfirmExit/ConfirmExit";


const Profile = () => {

    // useEffect(() => {
    //
    // },[])
    const [activeLink,setActiveLink] = useState(1)
    const auth = useSelector((state:Store) => state.auth)

    return (
        auth.isAuth
        ?<div className={s.Profile}>
            <div className={s.mainContainer}>
                <div className={s.title}>Профиль покупателя</div>
                <div className={s.contentWrapper}>
                    <div className={s.linksWrapper}>
                        <Link className={s.link} to='/profile/contactData'>Контактные данные</Link>
                        <Link className={s.link} to='/profile/ordersHistory'>История заказов</Link>
                        <Link className={s.link} to='/profile/confirmExit'>Выход</Link>
                    </div>
                    <div className={s.content}>
                        <Routes>
                            <Route path='/contactData' element={<ContactData/>}/>
                            <Route path='/ordersHistory' element={<OrdersHistory/>}/>
                            <Route path='/confirmExit' element={<ConfirmExit/>}/>
                        </Routes>
                    </div>
                </div>
            </div>
         </div>
        :<Navigate to="/auth" />
    );
}

export default Profile;