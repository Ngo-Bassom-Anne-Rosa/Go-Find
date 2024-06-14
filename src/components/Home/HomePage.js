import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-container">
      <div className="banner">
        <h1>Welcome to Our Service</h1>
      </div>
      <div className="services">
        <div className="service-card">
          <h2>Identification</h2>
          <Link to="/identification">Go to Identification</Link>
        </div>
        <div className="service-card">
          <h2>Covoiturage</h2>
          <Link to="/covoiturage">Go to Covoiturage</Link>
        </div>
        <div className="service-card">
          <h2>Location</h2>
          <Link to="/location">Go to Location</Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
