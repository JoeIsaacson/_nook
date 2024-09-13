import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import SplashPage from './SplashPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<SplashPage />} />
      <Route path="/app" element={<App />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);