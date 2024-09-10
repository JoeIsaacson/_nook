import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import CoinbaseWalletSDK from '@coinbase/wallet-sdk';
import 'bootstrap/dist/css/bootstrap.min.css';

const USDC_ADDRESS = '0x833589fCD6eDb6E08f4c65B81318D363E5D60589'; // BASE Sepolia USDC address
const RECIPIENT_ADDRESS = '0xcDeBcF59Ee33978320CA2ebCD433aCE6144C63C4'; // JMART
const TRANSFER_AMOUNT = '0.01';

function App() {
  const [web3, setWeb3] = useState(null);
  const [userAddress, setUserAddress] = useState(null);
  const [usdcBalance, setUsdcBalance] = useState(null);

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
    } catch (error) {
      console.error('Failed to connect Coinbase Wallet:', error);
    }
  };

  const updateUSDCBalance = async () => {
    if (!web3 || !userAddress) return;

    const usdcContract = new web3.eth.Contract([
      {
        "constant": true,
        "inputs": [{"name": "_owner", "type": "address"}],
        "name": "balanceOf",
        "outputs": [{"name": "balance", "type": "uint256"}],
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "decimals",
        "outputs": [{"name": "", "type": "uint8"}],
        "type": "function"
      }
    ], USDC_ADDRESS);

    try {
      const [balance, decimals] = await Promise.all([
        usdcContract.methods.balanceOf(userAddress).call(),
        usdcContract.methods.decimals().call()
      ]);
      
      const formattedBalance = (balance / Math.pow(10, decimals)).toFixed(6);
      setUsdcBalance(formattedBalance);
    } catch (error) {
      console.error('Error fetching USDC balance:', error);
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
      updateUSDCBalance();
    } catch (error) {
      console.error('Error in transfer:', error);
      alert('Error in transfer. Check console for details.');
    }
  };

  const clearMemory = () => {
    setWeb3(null);
    setUserAddress(null);
    setUsdcBalance(null);
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">NOOK</h1>
      <button className="btn btn-primary me-2" onClick={connectCoinbaseWallet}>Connect Coinbase Wallet</button>
      <button className="btn btn-secondary me-2" onClick={clearMemory}>Clear</button>
      <button className="btn btn-info me-2" onClick={updateUSDCBalance}>Show USDC Balance</button>
      {userAddress && <div className="mt-3">Connected: {userAddress}</div>}
      {usdcBalance && <div className="mt-3">USDC Balance: {usdcBalance} USDC</div>}
      
      <button className="btn btn-success mt-3" onClick={approveAndTransfer}>Approve and Transfer 0.01 USDC</button>
    </div>
  );
}

export default App;