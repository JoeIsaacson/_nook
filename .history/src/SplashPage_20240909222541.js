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
      <footer className="bg-light text-center text-lg-start mt-auto">
        <div className="container p-4">
          <button className="btn btn-primary mt-3" onClick={handleButtonClick}>Continue</button>
        </div>
      </footer>
    </div>
  );
}

export default SplashPage;