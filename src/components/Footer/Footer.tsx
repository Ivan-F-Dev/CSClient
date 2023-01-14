import React, {FC} from "react";
import s from "./Footer.module.scss";
import img from "./../../assets/images/titleFine.png"
import star from './../../assets/images/foot_star.png'
import clas from './../../assets/images/foot_class.png'
import vk from './../../assets/images/foot_vk.png'
import yt from './../../assets/images/foot_yt.png'

const Footer:FC = () => {

    return (
        <footer className={s.Footer}>
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
                        <div className={s.aboutTitle}>О магазине</div>
                        <div className={s.aboutItems}>Условия обмена и возврата</div>
                        <div className={s.aboutItems}>Каталог</div>
                        <div className={s.aboutItems}>О компании</div>
                        <div className={s.aboutItems}>Контакты</div>
                        <div className={s.aboutItems}>Доставка</div>
                        <div className={s.aboutItems}>Оплата</div>
                    </div>
                    <div className={s.aboutBlock}>
                        <div className={s.aboutTitle}>Клиентам</div>
                        <div className={s.aboutItems}>Личный кабинет</div>
                        <div className={s.aboutItems}>Блог</div>
                        <div className={s.aboutItems}>Обратная связь</div>
                    </div>
                    <div className={s.aboutBlock}>
                        <div className={s.aboutTitle}>Информация</div>
                        <div className={s.aboutItems}>Пользовательское соглашение</div>
                        <div className={s.aboutItems}>Политика конфиденциальности и оферта</div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer