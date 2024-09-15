import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import CoinbaseWalletSDK from '@coinbase/wallet-sdk';
import 'bootstrap/dist/css/bootstrap.min.css';


function Controls() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    // Toggle between routes
    const currentPath = window.location.pathname;
    navigate(currentPath === '/' ? '/App' : '/');
  };

  return (
    <div className="app-container">
      <div className="route-content">
        <Outlet />
      </div>
      <button className="persistent-button" onClick={handleButtonClick}>
        Clear 
      </button>
    </div>
  );
}

export default Controls;