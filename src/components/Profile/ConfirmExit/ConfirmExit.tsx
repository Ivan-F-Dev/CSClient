import React from 'react';
import s from './ConfirmExit.module.scss';
import ButtonFill from "../../Others/Button/ButtonFill";
import {TCAuthLogout} from "../../../store/thunkCreators";
import {useDispatch} from "react-redux";
import {Dispatch} from "redux";

const ConfirmExit = () => {

    const dispatch = useDispatch<Dispatch<any>>()
    const onLogout = () => {
        dispatch(TCAuthLogout())
    }

    return (
        <div className={s.ConfirmExit}>
            <div className={s.title}>Выйти из профиля?</div>
            <ButtonFill text='Да' callback={onLogout}/>
        </div>
    );
}

export default ConfirmExit;