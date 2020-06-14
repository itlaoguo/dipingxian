import React from 'react';
import { Button } from 'react-bootstrap';
import routes from './router/router';
import ComputeRoute from './router/ComputeRoute';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        {routes.map((route, i) => (
          <ComputeRoute key={i} {...route} />
        ))}
      </Switch>
    </Router>
  );
}

export default App;
