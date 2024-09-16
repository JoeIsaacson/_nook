import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import CoinbaseWalletSDK from '@coinbase/wallet-sdk';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Import the CSS file

function App() {
  const [web3, setWeb3] = useState(null);
  const [userAddress, setUserAddress] = useState(null);

  useEffect(() => {
    console.log('Coinbase Wallet SDK loaded successfully!');
  }, []);

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
      setWeb3(web3Instance);
      setUserAddress(accounts[0]);

      console.log(web3Instance);
    } catch (error) {
      console.error('Failed to connect Coinbase Wallet:', error);
    }
  };

  return (
    <div className="container mt-5 container-custom border">

      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">_NOOK</a>
          <button   className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>

      <div className="container mt-5">      
        <p>App Content Goes Here</p>
      </div>

      <footer className="text-center">
        <div className="container p-4">
          <button className="btn btn-primary" onClick={connectCoinbaseWallet}>Connect Coinbase Wallet</button>
        </div>
      </footer>

    </div>

  );
};

export default App;