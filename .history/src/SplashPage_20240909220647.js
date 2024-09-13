import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function SplashPage() {
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => {
      navigate('/app');
    }, 3000); // 3 seconds delay

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="splash-container">
      <h1>Welcome to NOOK</h1>
      <p>Loading...</p>
    </div>
  );
}

export default SplashPage;