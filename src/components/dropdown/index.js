import React from 'react'
import './styles.css';

const Dropdown = (props) => {
    return (
        <select>
            {props.options.map(item => (
                <option value={item}>{item}</option>
            ))}
        </select>
    )
}

export default Dropdown;