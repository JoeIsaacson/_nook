import React, { useState } from 'react';
import Web3 from 'web3';
import { Outlet, useNavigate } from 'react-router-dom';
import CoinbaseWalletSDK from '@coinbase/wallet-sdk';

function Controls() {
  const navigate = useNavigate();
  const [web3, setWeb3] = useState(null);
  const [userAddress, setUserAddress] = useState(null);

  const connectCoinbaseWallet = async () => {
    const coinbaseWallet = new CoinbaseWalletSDK({
      appName: "NOOK",
      appLogoUrl: "https://example.com/logo.png",
      darkMode: true
    });
  
    const provider = coinbaseWallet.makeWeb3Provider("https://sepolia.base.org", 84532);
  
    try {
      const accounts = await provider.request({ method: 'eth_requestAccounts' });
      const web3Instance = new Web3(provider);
      // reset
      setWeb3(web3Instance);
      setUserAddress(accounts[0]);
  
      console.log(web3Instance);
    } catch (error) {
      console.error('Failed to connect Coinbase Wallet:', error);
    }
  };

  const handleButtonClick = () => {
    // Toggle between routes
    const currentPath = window.location.pathname;
    navigate(currentPath === '/' ? '/App' : '/');
  };

  return (
    <div className="app-container">
      <div className='row'>
        <div className='col-6'>
        <div className="route-content">

          <div className='container mt-5 vstak gap-3'>
            
            <button className="btn btn-secondary" onClick={handleButtonClick}>Refresh</button>
            <button className="btn btn-secondary" onClick={connectCoinbaseWallet}>Connect Coinbase Wallet</button>
          </div>

          </div>
        </div>

        <div className='col-6'>
          <div className="route-content">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Controls;