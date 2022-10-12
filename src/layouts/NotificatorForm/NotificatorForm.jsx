import React, {useEffect} from 'react';
import BaseCheckbox from "../../components/CheckBox/BaseCheckbox/BaseCheckbox";
import BaseSelect from "../../components/CheckBox/BaseSelect/BaseSelect";
import {useTelegram} from "../../hooks/useTelegram";
import styles from './NotificatorForm.module.scss'

const NotificatorForm = () => {
    const {tg, user, onClose, onToggleMainButton} = useTelegram()

    useEffect(() => {
        tg.ready()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className={styles.NotificatorForm}>
            <span>{user}</span>
            <BaseCheckbox label={'Выбрать всех участников'}/>
            <BaseSelect label={'Выберите некоторых участников'} options={[{value: 'Ivanov', label:'Иванов'}]}/>
            <button
                className={styles.CloseButton}
                onClick={onClose}>
                Закрыть форму
            </button>
            <button
                className={styles.ToggleButton}
                onClick={onToggleMainButton}>
                toggle
            </button>
        </div>
    );
};

export default NotificatorForm;