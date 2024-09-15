import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function MainApp() {

  return (
    <div className="container mt-5">
      <Link to="/" className="btn btn-secondary mb-3">WTF</Link>
      <h1 className="mb-4">NOOK</h1>
    </div>
  );
}

export default MainApp;