import React, { useState } from 'react';
import Web3 from 'web3';
import { Outlet, useNavigate } from 'react-router-dom';
import CoinbaseWalletSDK from '@coinbase/wallet-sdk';

function Controls() {
  const navigate = useNavigate();
  const [web3, setWeb3] = useState(null);
  const [userAddress, setUserAddress] = useState(null);
  const [ethBalance, setEthBalance] = useState(null);

  const connectCoinbaseWallet = async () => {
    const coinbaseWallet = new CoinbaseWalletSDK({
      appName: "_nook",
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

  const checkEthBalance = async () => {
    if (!web3 || !userAddress) return;

    try {
      const balance = await web3.eth.getBalance(userAddress);
      console.log(balance);
      const balanceInEth = web3.utils.fromWei(balance, 'ether');
      setEthBalance(balanceInEth);
      console.log(`ETH Balance: ${balanceInEth} ETH`);
    } catch (error) {
      console.error('Error fetching ETH balance:', error);
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
            <div className='container mt-5'>
              <div class="row justify-content-md-center">
                <div class="col col-sm-8">
                    <div class="vstack gap-3">
                      <button className="btn btn-secondary" onClick={connectCoinbaseWallet}>Connect Coinbase Wallet</button>
                      {userAddress && 
                        <div className='address-container'>
                          <p className="mt-3 label fs-6 text-uppercase">Connected</p>
                          <p className="text-break">{userAddress}</p>
                        </div>
                      }

                      <button className="btn btn-info" onClick={checkEthBalance}>Check ETH Balance</button>
                      {ethBalance !== null && 
                      <div className="balance-container">
                        <p className="mt-3 label fs-6 text-uppercase">ETH Balance</p>
                        <p className="text-break">{ethBalance} ETH</p>
                      </div>
                      }

                      {/* This does not clear it refreshes the app */}
                      <button className="btn btn-secondary" onClick={handleButtonClick}>Refresh</button>
                    </div>
                </div>    
              </div>
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