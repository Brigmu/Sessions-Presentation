import React, { useState } from 'react';
import './styles.css';

const Navitem = (props) => {
    // const [selected, setSelected] = useState(false);
    // const handleNavClick = (e) => {
    //     props.handleNavClick(e);
    //     setSelected(true);
    // }
    return(
    <div className='nav-item'>
        <h3 onClick={props.handleNavClick}>{props.text}
        {props.selected === props.text ? <div className='selected'></div>: <></>}</h3>
        
    </div>
    )
}

export default Navitem;