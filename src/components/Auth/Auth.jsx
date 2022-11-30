import React, {useCallback, useState} from "react";
import s from './Auth.module.scss'
import ButtonFill from "../Others/Button/ButtonFill";
import Input from "../Others/Input/Input";
import ButtonText from "../Others/Button/ButtonText";



const Auth = () => {
    //state
    const [mode,setMode] = useState(true)//log-true or reg-false
    const [login, setLogin] = useState('')
    const [pass, setPass] = useState('')
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [dateOfBirth, setDateOfBirth] = useState('')
    //state



    //
    const setModeFalse = useCallback(() => setMode(false),[])
    const setModeTrue = useCallback(() => setMode(true),[])
    //



    return (
        <div className={s.Auth}>
            <div className={s.mainContainer}>
                <h1>{mode? "Вход в кабинет покупателя" : "Регистрация"}</h1>
                {mode
                    ? <div className={s.inputsWrapper}>
                        <Input value={login} setValue={setLogin}  title="Логин"/>
                        <Input type="password" value={pass} setValue={setPass}  title="Пароль"/>
                    </div>
                    : <div className={s.inputsWrapper}>
                        <Input value={login} setValue={setLogin}  title="Логин"/>
                        <Input type="password" value={pass} setValue={setPass}  title="Пароль"/>
                        <Input value={name} setValue={setName}  title="Имя"/>
                        <Input value={surname} setValue={setSurname}  title="Фамилия"/>
                        <Input value={dateOfBirth} setValue={setDateOfBirth}  title="Дата рождения"/>
                    </div>}
                <div className={s.buttonsWrapper}>
                    {mode ? <ButtonFill text='Войти'/> : <ButtonFill text='Зарегистрироваться'/>}
                    {mode ? <ButtonText text='Зарегистрироваться' callback={setModeFalse}/> : <ButtonText text='Войти' callback={setModeTrue}/>}
                </div>
            </div>
        </div>
    )
}

export default Auth