import React from 'react'
import './styles.css';

const Dropdown = (props) => {
    return (
        <select>
            <option value='errortags'>Error Tags</option>
            <option value='email'>Email/Alias</option>
            <option value='clientid'>Client ID</option>
            <option value='sessionid'>Session ID</option>
            <option value='watson'>Watson Failure ID</option>
            <option value='ocv'>OCV Feedback ID</option>
            <option value='support'>Support Ticket ID</option>
            <option value='back'>Bag Number</option>
        </select>
    )
}

export default Dropdown;