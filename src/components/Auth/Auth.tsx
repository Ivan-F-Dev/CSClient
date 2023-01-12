import React, {ReactNode, useCallback, useEffect, useState} from "react";
import s from './Auth.module.scss'
import ButtonFill from "../Others/Button/ButtonFill";
import Input from "../Others/Input/Input";
import ButtonText from "../Others/Button/ButtonText";
import {useDispatch, useSelector} from "react-redux";
import {Dispatch} from "redux";
import {TCAuthLog, TCAuthReg} from "../../store/thunkCreators";
import {Navigate,useNavigate} from "react-router-dom";
import {Store} from "../../store/store";
import {useInput} from "../Others/Hooks/useInput";
import HintString from "../Others/Hint/HintString";
import {setError} from "../../store/actionCreators";




const Auth = () => {

    const dispatch = useDispatch<Dispatch<any>>()
    const auth = useSelector((state:Store) => state.auth)
    const navigate = useNavigate()
    if (auth.isAuth) navigate("/profile/contactData")



    //state
    const [mode,setMode] = useState(true)//log-true or reg-false
    const [warning,setWarning] = useState<boolean>(false)
    const login = useInput('',{minLength:6,maxLength:20,isEmpty:true})
    const password = useInput('',{minLength:6,maxLength:12,isEmpty:true})
    const name = useInput('',{maxLength:20,isEmpty:true})
    const surname = useInput('',{maxLength:20,isEmpty:true})
    const [dateOfBirth, setDateOfBirth] = useState('')
    //state

    //
    const setModeFalse = useCallback(() => {
        dispatch(setError(''))
        setMode(false)
    },[])
    const setModeTrue = useCallback(() => {
        dispatch(setError(''))
        setMode(true)
    },[])
    //

    const onReg = (error:boolean) => async () => {
        console.log(login.inputValid,password.inputValid, name.inputValid , surname.inputValid)
        if (error) {
            setTimeout(() => setWarning(false),2000)
            setWarning(true)
            //alert("ошибка onReg")
        } else {
            await dispatch(TCAuthReg({login:login.value,password:password.value,dateOfBirth,name:name.value,surname:surname.value}))
        }
    }
    const onLog = (error:boolean) => async () => {
        if (error) {
            setTimeout(() => setWarning(false),2000)
            setWarning(true)
            //alert("ошибка onLog")
        } else {
            await dispatch(TCAuthLog({login:login.value,password:password.value}))
        }
    }

    const errorsMap = (array:Array<string>) => {
        return array.map(value => <HintString key={value} children={value}/>)
    }

    const dateOnChange = useCallback((e:React.ChangeEvent<HTMLInputElement>) => {
            setDateOfBirth(e.target.value)
    },[])

    return (
        <div className={s.Auth}>
            <div style={{opacity: warning ? 1 : 0}} className={s.warning}>Форма не заполнена</div>
            <div className={s.mainContainer}>
                <div className={s.title}>{mode ? "Вход в кабинет покупателя" : "Регистрация"}</div>
                {mode
                    ?<div className={s.inputsWrapper}>

                        <div className={s.errorsWrapper}>{login.isDirty && errorsMap(login.errors)}</div>
                        <Input value={login.value} onChange={login.onChange} onBlur={login.onBlur} title="Логин"/>

                        <div className={s.errorsWrapper}>{password.isDirty && errorsMap(password.errors)}</div>
                        <Input value={password.value} onChange={password.onChange} onBlur={password.onBlur} title="Пароль" type="password"/>
                    </div>
                    :<div className={s.inputsWrapper}>
                        <div className={s.errorsWrapper}>{login.isDirty && errorsMap(login.errors)}</div>
                        <Input value={login.value} onChange={login.onChange} onBlur={login.onBlur} title="Логин"/>

                        <div className={s.errorsWrapper}>{password.isDirty && errorsMap(password.errors)}</div>
                        <Input value={password.value} onChange={password.onChange} onBlur={password.onBlur} title="Пароль" type="password"/>

                        <div className={s.errorsWrapper}>{name.isDirty && errorsMap(name.errors)}</div>
                        <Input value={name.value} onChange={name.onChange} onBlur={name.onBlur}  title="Имя"/>

                        <div className={s.errorsWrapper}>{surname.isDirty && errorsMap(surname.errors)}</div>
                        <Input value={surname.value} onChange={surname.onChange} onBlur={surname.onBlur} title="Фамилия"/>

                        <div className={s.errorsWrapper}> </div>
                        <Input type="date" value={dateOfBirth} onChange={dateOnChange} title="Дата рождения"/>
                    </div>
                }
                {auth.error? <div className={s.error}>{auth.error}</div>:<div style={{height:'37px'}}> </div>}

                <div className={s.buttonsWrapper}>
                    {mode
                        ? <ButtonFill callback={onLog(!login.inputValid||!password.inputValid)} text='Войти'/>
                        : <ButtonFill callback={onReg(!login.inputValid||!password.inputValid|| !name.inputValid || !surname.inputValid)} text='Зарегистрироваться'/>}
                    {mode ? <ButtonText text='Зарегистрироваться' callback={setModeFalse}/> : <ButtonText text='Войти' callback={setModeTrue}/>}
                </div>
            </div>
        </div>
    )
}

export default Auth