import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css'; // Import the CSS file

function SplashPage() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/app');
  };

  return (
    <div className="container mt-5 container-custom">
      <h1>Welcome to NOOK</h1>
      <button className="btn btn-primary mt-3" onClick={handleButtonClick}>Continue</button>
    </div>
  );
}

export default SplashPage;