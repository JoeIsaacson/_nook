import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Controls from './Controls';
import App from './App';
import SplashPage from './SplashPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<Controls />}>
        <Route index element={<SplashPage />} />
        <Route path="app" element={<App />} />
      </Route>
    </Routes>
  </Router>,
  document.getElementById('root')
);