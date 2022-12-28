import React, {FC, useState} from "react";
import s from "./FooterMobile.module.scss";
import img from "./../../../assets/images/titleFine.png"
import star from './../../../assets/images/foot_star.png'
import clas from './../../../assets/images/foot_class.png'
import vk from './../../../assets/images/foot_vk.png'
import yt from './../../../assets/images/foot_yt.png'


const FooterMobile:FC = () => {

    //Состояние и обработчик для сворачивания списков +
    const [activeArrows,setActiveArrows] = useState({1: false, 2: false, 3: false})

    const toggleList = (e:React.MouseEvent<HTMLElement,MouseEvent>,index:'1'|'2'|'3') => {
        //setActiveArrows(prev => ({...prev, [index]: !prev[index]}))
        setActiveArrows({...activeArrows, [index]: !activeArrows[index]})

        let list = document.getElementById(`footerList_${index}`)
        if (list && list.style.maxHeight) {
            list.style.maxHeight = ''//null;
        } else if (list) {
            list.style.maxHeight = list.scrollHeight + 'px'
        }
    }
    //Состояние и обработчик для сворачивания списков -
    return (
        <footer className={s.FooterMobile}>
            <div className={s.mainContainer}>
                <div className={s.titleContainer}>
                    <div className={s.title}>
                        <img src={img} alt=""/>
                    </div>
                    <div className={s.numbers}>
                        <div className={s.number}>
                            <div className={s.numberMain}>+7(800) 800-80-80</div>
                            <div>справочная служба</div>
                        </div>
                        <div className={s.number}>
                            <div className={s.numberMain}>+7(800) 800-80-80</div>
                            <div>интернет-магазин</div>
                        </div>
                    </div>
                    <div className={s.icons}>
                        <div className={s.iconsTitle}>Оставайтесь на связи</div>
                        <div className={s.iconsWrapper}>
                            <div className={s.icon}><img src={star} alt="star"/></div>
                            <div className={s.icon}><img src={clas} alt="clas"/></div>
                            <div className={s.icon}><img src={vk} alt="vk"/></div>
                            <div className={s.icon}><img src={yt} alt="yt"/></div>
                        </div>
                    </div>
                </div>
                <div className={s.aboutContainer}>
                    <div className={s.aboutBlock}>
                        <div onClick={ event => toggleList(event,'1')} className={s.aboutTitle}>
                            О магазине
                            <div className={activeArrows["1"]? s.shevron+' '+s.active: s.shevron}></div>
                        </div>
                        <div id='footerList_1' className={s.aboutItemsWrapper}>
                            <div className={s.aboutItems}>Условия обмена и возврата</div>
                            <div className={s.aboutItems}>Каталог</div>
                            <div className={s.aboutItems}>О компании</div>
                            <div className={s.aboutItems}>Контакты</div>
                            <div className={s.aboutItems}>Доставка</div>
                            <div className={s.aboutItems}>Оплата</div>
                        </div>
                    </div>
                    <div className={s.aboutBlock}>
                        <div onClick={event => toggleList(event,'2')} className={s.aboutTitle}>
                            Клиентам
                            <div className={activeArrows["2"]? s.shevron+' '+s.active: s.shevron}></div>
                        </div>
                        <div id='footerList_2' className={s.aboutItemsWrapper}>
                            <div className={s.aboutItems}>Личный кабинет</div>
                            <div className={s.aboutItems}>Блог</div>
                            <div className={s.aboutItems}>Обратная связь</div>
                        </div>
                    </div>
                    <div className={s.aboutBlock}>
                        <div onClick={event => toggleList(event,'3')} className={s.aboutTitle}>
                            Информация
                            <div className={activeArrows["3"]? s.shevron+' '+s.active: s.shevron}></div>
                        </div>
                        <div id='footerList_3' className={s.aboutItemsWrapper}>
                            <div className={s.aboutItems}>Пользовательское соглашение</div>
                            <div className={s.aboutItems}>Политика конфиденциальности и оферта</div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default FooterMobile
