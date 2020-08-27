import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Landing from './containers/Landing/Landing';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={Landing} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
