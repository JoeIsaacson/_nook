import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css'; // Import the CSS file

function SplashPage() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/app');
  };

  return (
    <div className="splash-page bg-light container mt-5 container-custom d-flex flex-column">
      <header className="text-center text-lg-start">
        <div className="container p-4">
        </div>
      </header>

      <div class="animation"></div>
      
      <div className="flex-grow-1 d-flex flex-column justify-content-center">
        <h1 className="mb-0  justify-content-center text-center">Welcome to NOOK</h1>
      </div>

      <footer className="text-center text-lg-start">
        <div className="container p-4">
          <button className="btn btn-primary mt-3" onClick={handleButtonClick}>Continue</button>
        </div>
      </footer>
    </div>
  );
}

export default SplashPage;