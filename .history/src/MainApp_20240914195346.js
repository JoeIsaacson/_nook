import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Web3 from 'web3';
import CoinbaseWalletSDK from '@coinbase/wallet-sdk';

function MainApp() {

  return (
    <div className="container mt-5">
      <Link to="/" className="btn btn-secondary mb-3">Back to Splash</Link>
      <h1 className="mb-4">NOOK</h1>
    </div>
  );
}

export default MainApp;