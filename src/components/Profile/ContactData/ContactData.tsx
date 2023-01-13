import React, {useCallback, useState} from 'react';
import s from './ContactData.module.scss';
import Input from "../../Others/Input/Input";
import {useSelector} from "react-redux";
import {Store} from "../../../store/store";
import ButtonFill from "../../Others/Button/ButtonFill";
import {useInput} from "../../Others/Hooks/useInput";
import HintString from "../../Others/Hint/HintString";
import {TCAuthLog} from "../../../store/thunkCreators";

const ContactData = () => {

    const auth = useSelector((state:Store) => state.auth)

    const [warning,setWarning] = useState(false)

    const surname = useInput(auth.user?.surname || '',{maxLength:20,isEmpty:true})
    const name = useInput(auth.user?.name || '',{maxLength:20,isEmpty:true})
    const phoneNumber = useInput(auth.user?.phoneNumber || '',{maxLength:20,isEmpty:true})
    const email = useInput(auth.user?.email || '',{maxLength:20,isEmpty:true})

    const onSubmit =  useCallback((error:boolean) => async () => {
        if (error) {
            setTimeout(() => setWarning(false),2000)
            setWarning(true)
        } else {
            alert("submit ok")
            //await dispatch(TCAuthLog({login:login.value,password:password.value}))
        }
    },[])

    const errorsMap = (array:Array<string>) => {
        return array.map(value => <HintString key={value} children={value}/>)
    }

    return (
        <div onResize={() => console.log("resize")} className={s.ContactData}>
            <div className={s.title}>Контактная информация</div>

            <div className={s.errorsWrapper}>{name.isDirty && errorsMap(name.errors)}</div>
            <Input width="350px" value={name.value} onChange={name.onChange} onBlur={name.onBlur}  title="Имя"/>

            <div className={s.errorsWrapper}>{surname.isDirty && errorsMap(surname.errors)}</div>
            <Input width="350px" value={surname.value} onChange={surname.onChange} onBlur={surname.onBlur} title="Фамилия"/>

            <div className={s.errorsWrapper}>{phoneNumber.isDirty && errorsMap(phoneNumber.errors)}</div>
            <Input width="350px" value={phoneNumber.value} onChange={phoneNumber.onChange} onBlur={phoneNumber.onBlur} title="Номер телефона"/>

            <div className={s.errorsWrapper}>{email.isDirty && errorsMap(email.errors)}</div>
            <Input width="350px" value={email.value} onChange={email.onChange} onBlur={email.onBlur} title="Фамилия"/>

            <div className={s.buttonWrapper}>
                <div style={{opacity: warning ? 1 : 0}} className={s.warning}>Форма не заполнена</div>
                <ButtonFill text='Сохранить изменения' callback={onSubmit(name.inputValid||surname.inputValid||phoneNumber.inputValid||email.inputValid)}/>
            </div>

        </div>
    );
}

export default ContactData;