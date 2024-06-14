import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  // État local pour gérer l'état de connexion
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Fonction pour gérer la déconnexion
  const handleLogout = () => {
    // Mettre à jour l'état de connexion à false
    setIsLoggedIn(false);
    // Vous pouvez également implémenter ici la déconnexion de votre backend si nécessaire
  };

  return (
    <header className="header">
      <nav>
        <ul className="nav-links">
          <li><Link to="/" className="logo">GOFIND</Link></li>
          <li><Link to="/identification">Identification</Link></li>
          <li><Link to="/location">Location</Link></li>
          <li><Link to="/covoiturage">Covoiturage</Link></li>
          {!isLoggedIn && (
            <>
              <li className="auth-button">
                <Link to="/login" className="auth-link">Login</Link>
              </li>
              <li className="auth-button">
                <Link to="/signup" className="auth-link">Signup</Link>
              </li>
            </>
          )}
          {isLoggedIn && (
            <li>
              <button onClick={handleLogout} className="auth-link">Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
