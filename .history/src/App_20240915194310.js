import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css'; // Import the CSS file

function App() {

  return (
    <div className="container mt-5 container-custom border">

      <nav className="navbar">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">_NOOK</a>
          
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <svg className="bi" aria-hidden="true">
              <use xlinkHref="#box-seam"></use>
            </svg>
          </button>
        </div>
      </nav>

      <div className="container mt-5 p-4">      
        <h1>$550.00</h1>
        <p>9.6% APY · Next payout in 4h</p>
        <i className="bi bi-box-seam"></i>

        <div className="row">
          <div className="col-6">
            <div className="btn btn-primary">Withdraw</div>
          </div>
          <div className="col-6">
            <div className="btn btn-secondary">Details</div>
          </div>
        </div>
      </div>

      <footer className="text-center">
        <div className="container p-4">
          <button className="btn btn-primary">Deposit</button>
        </div>
      </footer>

    </div>

  );
}

export default App;