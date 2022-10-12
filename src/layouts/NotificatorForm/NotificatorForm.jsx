import React from 'react';
import BaseCheckbox from "../../components/CheckBox/BaseCheckbox/BaseCheckbox";
import BaseSelect from "../../components/CheckBox/BaseSelect/BaseSelect";
import {useTelegram} from "../../hooks/useTelegram";
// import styles from './NotificatorForm.module.scss'

const NotificatorForm = () => {
    const {user, onClose, onToggleMainButton} = useTelegram()

    return (
        <div>
            <span>{user}</span>
            <BaseCheckbox label={'Выбрать всех участников'}/>
            <BaseSelect label={'Выберите некоторых участников'} options={[{value: 'Ivanov', label:'Иванов'}]}/>
            <button
                onClick={onClose}>
                Закрыть форму
            </button>
            <button
                onClick={onToggleMainButton}>
                toggle
            </button>
        </div>
    );
};

export default NotificatorForm;