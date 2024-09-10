import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import CoinbaseWalletSDK from '@coinbase/wallet-sdk';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const USDC_ADDRESS = '0x036CbD53842c5426634e7929541eC2318f3dCF7e'; // BASE Sepolia USDC address
const RECIPIENT_ADDRESS = '0xcDeBcF59Ee33978320CA2ebCD433aCE6144C63C4'; // JMART
const TRANSFER_AMOUNT = '0.01';

function App() {
  const [web3, setWeb3] = useState(null);
  const [userAddress, setUserAddress] = useState(null);
  const [ethBalance, setEthBalance] = useState(null);

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

  const approveAndTransfer = async () => {
    if (!web3 || !userAddress) return;

    const usdcContract = new web3.eth.Contract([
      {
        "constant": false,
        "inputs": [
          {"name": "_to", "type": "address"},
          {"name": "_value", "type": "uint256"}
        ],
        "name": "transfer",
        "outputs": [{"name": "", "type": "bool"}],
        "type": "function"
      }
    ], USDC_ADDRESS);

    const amountInWei = web3.utils.toWei(TRANSFER_AMOUNT, 'mwei');

    try {
      await usdcContract.methods.transfer(RECIPIENT_ADDRESS, amountInWei).send({ from: userAddress });
      alert('Transfer of 0.01 USDC successful!');
    } catch (error) {
      console.error('Error in transfer:', error);
      alert('Error in transfer. Check console for details.');
    }
  };

  const clearMemory = () => {
    setWeb3(null);
    setUserAddress(null);
    setEthBalance(null);
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

  return (
    <div className="container mt-5">
      <h1 className="mb-4">NOOK</h1>
      <button className="btn btn-primary me-2" onClick={connectCoinbaseWallet}>Connect Coinbase Wallet</button>
      <button className="btn btn-secondary me-2" onClick={clearMemory}>Clear</button>
      {userAddress && <div className="mt-3">Connected: {userAddress}</div>}
      
      <button className="btn btn-success mt-3" onClick={approveAndTransfer}>Approve and Transfer 0.01 USDC</button>
      
      <button className="btn btn-info mt-3 ms-2" onClick={checkEthBalance}>Check ETH Balance</button>
      {ethBalance !== null && <div className="mt-3">ETH Balance: {ethBalance} ETH</div>}
    </div>
  );
}

export default App;