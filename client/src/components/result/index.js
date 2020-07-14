import React from 'react';
import './styles.css';
import { useHistory } from 'react-router-dom';

const Result = (props) => {
    const history = useHistory();
    const handleBtnClick = (e) => {
        history.push('/explore');
    }
    return (
        <div className='result'>
            <p className='col-1'>{props.date}</p>
            <p className='col-2'>{props.sessionID}</p>
            <p className='col-3'>{props.platform}</p>
            <p className='col-4'>{props.app}</p>
            <p className='col-5'>{props.version}</p>
            <button className='btn open-btn' onClick={handleBtnClick}>Open</button>
        </div>
    )
}

export default Result;