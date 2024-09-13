import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function SplashPage() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/app');
  };

  return (
    <div className="splash-container">
      <h1>Welcome to NOOK</h1>
      <button className="btn btn-primary mt-3" onClick={handleButtonClick}>Go to App</button>
    </div>
  );
}

export default SplashPage;