import React, {useState} from 'react';
// import styles from './BaseCheckbox.module.scss'

const BaseCheckbox = ({value, label, ...props}) => {
    const defaultChecked = value ? value : false
    const [isChecked, setIsChecked] = useState(defaultChecked)

    return (
        <div>
            <label>
                <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => setIsChecked((prev) => !prev)}
                    {...props}
                />
                <span>{label}</span>
            </label>
        </div>
    );
};

export default BaseCheckbox;