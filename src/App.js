import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FindPage from './pages/find';
import ExplorePage from './pages/explore';

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route exact path = {['/', '/find']} component={FindPage} />
        <Route exact path = '/explore' component={ExplorePage} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
