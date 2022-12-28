import React, {useCallback, useState} from "react";
import s from './Auth.module.scss'
import ButtonFill from "../Others/Button/ButtonFill";
import Input from "../Others/Input/Input";
import ButtonText from "../Others/Button/ButtonText";
import {useDispatch} from "react-redux";
import {Dispatch} from "redux";
import {TCAuthLog, TCAuthReg} from "../../store/thunkCreators";

const Auth = () => {

    const dispatch = useDispatch<Dispatch<any>>()
    //state
    const [mode,setMode] = useState(true)//log-true or reg-false
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [dateOfBirth, setDateOfBirth] = useState('')
    //state

    //
    const setModeFalse = useCallback(() => setMode(false),[])
    const setModeTrue = useCallback(() => setMode(true),[])
    //

    const onReg =async () => {
        await dispatch(TCAuthReg({login,password,dateOfBirth,name,surname}))
    }
    const onLog =async () => {
        await dispatch(TCAuthLog({login,password}))
    }

    return (
        <div className={s.Auth}>
            <div className={s.mainContainer}>
                <div className={s.title}>{mode? "Вход в кабинет покупателя" : "Регистрация"}</div>
                {mode
                    ? <div className={s.inputsWrapper}>
                        <Input value={login} setValue={setLogin}  title="Логин"/>
                        <Input type="password" value={password} setValue={setPassword} title="Пароль"/>
                    </div>
                    : <div className={s.inputsWrapper}>
                        <Input value={login} setValue={setLogin}  title="Логин"/>
                        <Input type="password" value={password} setValue={setPassword} title="Пароль"/>
                        <Input value={name} setValue={setName}  title="Имя"/>
                        <Input value={surname} setValue={setSurname}  title="Фамилия"/>
                        <Input value={dateOfBirth} setValue={setDateOfBirth}  title="Дата рождения"/>
                    </div>}
                <div className={s.buttonsWrapper}>
                    {mode ? <ButtonFill callback={onLog} text='Войти'/> : <ButtonFill callback={onReg} text='Зарегистрироваться'/>}
                    {mode ? <ButtonText text='Зарегистрироваться' callback={setModeFalse}/> : <ButtonText text='Войти' callback={setModeTrue}/>}
                </div>
            </div>
        </div>
    )
}

export default Auth