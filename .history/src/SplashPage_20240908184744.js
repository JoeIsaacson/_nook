import React from 'react';
import { Link } from 'react-router-dom';

function SplashPage() {
  return (
    <div className="container mt-5 text-center">
      <h1 className="mb-4">Welcome to NOOK</h1>
      <p className="mb-4">Your gateway to USDC transfers on BASE Sepolia Testnet</p>
      <Link to="/app" className="btn btn-primary btn-lg">Continue</Link>
    </div>
  );
}

export default SplashPage;