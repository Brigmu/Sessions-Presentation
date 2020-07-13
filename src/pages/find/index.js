import React, { useState } from 'react';
import './styles.css';
import Dropdown from '../../components/dropdown';
import Result from '../../components/result';

const FindPage = (props) => {
  const [results, setResults] = useState({status: 'blank', results: []});

  const handleSearch = (e) => {
    setResults({status: 'loaded', results: [{date: '9 Jul 23:00', sessionID: 'b8549970-693f-4a0a-ae60-53b9ed64422a', platform: 'Win 32', app: 'Excel', version: '16.0.13029.20126'}]})
  }
    return (
        <div className='find-page'>
            <div className='container'>
        <h1>Find Sessions</h1>
        <div className='page-wrapper'>
          <div className='category-wrapper'>
            <Dropdown />
            <input></input>
            <button className='btn search-btn' onClick={handleSearch}>Search</button>
          </div>
          <hr></hr>
          {/* <div className='results-wrapper'>
            <div className='labels'>
              <p className='col-1'>Date</p>
              <p className='col-2'>Session ID</p>
              <p className='col-3'>Platform</p>
              <p className='col-4'>App</p>
              <p className='col-5'>Version</p>
              <p>Go to</p>
            </div>
            {results.results.map(result => (
              <Result />
            ))}
          </div> */}
            {/* <Result date='Date' sessionID='Session ID' platform='Platform' app='App' version='Version' /> */}
            {results.status === 'loading' ? <div className='loading'><h2>Searching ...</h2></div> 
            : results.status === 'loaded' ? <div className='results-wrapper'>
            <div className='labels'>
              <p className='col-1'>Date</p>
              <p className='col-2'>Session ID</p>
              <p className='col-3'>Platform</p>
              <p className='col-4'>App</p>
              <p className='col-5'>Version</p>
              <p>Go to</p>
            </div>
            {results.results.map(result => (
              <Result date={result.date} sessionID={result.sessionID} platform={result.platform} app={result.platform} version={result.version}/>
            ))}
          </div> : <div className='unsearched'><h2>No results yet</h2></div>}
            {/* <Result date='9 Jul 23:00' sessionID='b8549970-693f-4a0a-ae60-53b9ed64422a' platform='Win 32' app='Excel' version='16.0.13029.20126' /> */}
        </div>
      </div>
        </div>
    )
}

export default FindPage;