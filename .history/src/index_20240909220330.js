import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';
import SplashPage from './SplashPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/" exact component={SplashPage} />
      <Route path="/app" component={App} />
    </Switch>
  </Router>,
  document.getElementById('root')
);