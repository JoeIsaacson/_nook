import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

function Layout() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    // Toggle between routes
    const currentPath = window.location.pathname;
    navigate(currentPath === '/' ? '/app' : '/');
  };

  return (
    <div className="app-container">
      <div className="route-content">
        <Outlet />
      </div>
      <button className="persistent-button" onClick={handleButtonClick}>
        Switch Page
      </button>
    </div>
  );
}

export default Controls;