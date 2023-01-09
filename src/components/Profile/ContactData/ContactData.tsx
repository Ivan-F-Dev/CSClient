import React, {useState} from 'react';
import s from './ContactData.module.scss';
import Input from "../../Others/Input/Input";
import {useSelector} from "react-redux";
import {Store} from "../../../store/store";
import ButtonFill from "../../Others/Button/ButtonFill";

const ContactData = () => {

    const auth = useSelector((state:Store) => state.auth)

    const [surname,setSurname] = useState(auth.user?.surname)
    const [name,setName] = useState(auth.user?.name)
    const [phoneNumber,setPhoneNumber] = useState(auth.user?.phoneNumber)
    const [email,setEmail] = useState(auth.user?.email)

    return (
        <div onResize={() => console.log("resize")} className={s.ContactData}>
            <div className={s.title}>Контактная информация</div>
            <Input width="350px" value={surname?surname:'нет данных'} setValue={setSurname} title='Фамилия'/>
            <Input width="350px" value={name?name:'нет данных'} setValue={setName} title='Имя'/>
            <Input width="350px" value={phoneNumber?phoneNumber:'нет данных'} setValue={setPhoneNumber} title='Номер телефона'/>
            <Input width="350px" value={email?email:'нет данных'} setValue={setEmail} title='Email'/>
            <div className={s.buttonWrapper}>
                <ButtonFill text='Сохранить изменения'/>
            </div>

        </div>
    );
}

export default ContactData;