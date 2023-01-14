import React, { FC } from 'react'
import s from './Modal.module.scss'
import ButtonFill from "../Button/ButtonFill";

interface Props {
    isVisible: boolean
    title:string
    onClose: () => void
    redirect: () => void
};

const Modal: FC<Props> = ({isVisible,title,onClose,redirect}) => {
    const keydownHandler = ({ key }:{key:string}) => {
        switch (key) {
            case 'Escape':
                onClose();
                break;
            default:
        }
    };

    React.useEffect(() => {
        document.addEventListener('keydown', keydownHandler);
        return () => document.removeEventListener('keydown', keydownHandler);
    });

    return !isVisible ? null : (
        <div className={s.modal} onClick={onClose}>
            <div className={s.modaldialog} onClick={e => e.stopPropagation()}>
                <div className={s.modalHeader}>
                    <div className={s.modaltitle}>{title}</div>
                    {/*<span className={s.modalclose} onClick={onClose}>&times;</span>*/}
                </div>
                <div className={s.modalbody}>
                    <ButtonFill text="Ок" callback={redirect}/>
                    <ButtonFill text="Назад" callback={onClose}/>
                </div>

            </div>
        </div>
    );
}

export default Modal