import React, {useState} from 'react';
// import styles from './BaseSelect.module.scss'

const BaseSelect = ({value, label, options, ...props}) => {
    const defaultValue = value ? value : ''
    const [selectedValue, setValue] = useState(defaultValue)
    const handlerSelect = ({target}) => setValue(target.value)

    return (
        <div>
            <label>
                <select
                    value={selectedValue}
                    onInput={() => setValue((prev) => !prev)}
                    onChange={handlerSelect}
                    {...props}
                >
                    {options.map(({ value, label }) => <option value={value}>{label}</option>)}
                </select>
                <span>{label}</span>
            </label>
        </div>
    );
};

export default BaseSelect;