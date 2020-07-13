import React, { useState } from 'react';
import './styles.css';
import Navitem from '../../components/Navitem';
import { useHistory } from 'react-router-dom';

const ExplorePage = (props) => {
    const [content, setContent] = useState('Select search criteria');
    const [selected, setSelected] = useState('none')

    const handleNavClick = (e) => {
        // console.log(e.target.textContent);
        const clicked = e.target.textContent;
        setContent(clicked);
        setSelected(clicked);
    }

    const history = useHistory();
    const handlePageReturn = () => {
        history.push('/');
    }
    return (
        <div className='find-page'>
            <div className='container'>
                <div className='left-nav-wrapper'>
                    <div className='nav-btn'>
                        <button className='btn return-btn' onClick={handlePageReturn}>Find Another Session</button>
                    </div>
                    <Navitem handleNavClick={handleNavClick} selected={selected} text='Session Metadata' />
                    <Navitem handleNavClick={handleNavClick} selected={selected} text='Feature Gates' />
                    <Navitem handleNavClick={handleNavClick} selected={selected} text='Telemetry' />
                    <Navitem handleNavClick={handleNavClick} selected={selected} text='Diagnostic Logs' />
                    <Navitem handleNavClick={handleNavClick} selected={selected} text='Crashes' />
                    <Navitem handleNavClick={handleNavClick} selected={selected} text='Dumps' />
                </div>
                <div className='content-wrapper'>
                    <h1>{content}</h1>
                    <hr></hr>
                </div>
            </div>
        </div>
    )
}

export default ExplorePage;