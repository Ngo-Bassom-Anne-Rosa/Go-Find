import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import Header from './components/Common/Header';
import Footer from './components/Common/Footer';
import HomePage from './components/Home/HomePage';
import IdentificationPage from './pages/IdentificationPage';
import CovoituragePage from './pages/CovoituragePage';
import LocationPage from './pages/LocationPage';
import PhoneDetails from './components/Identification/PhoneDetails';
import TripDetails from './components/Covoiturage/TripDetails';
import HouseDetails from './components/location/HouseDetails';
import LoginForm from './components/Home/Login';
import SignupForm from './components/Home/Register';
import './App.css'; // Vous pouvez définir vos styles globaux ici

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/identification" element={<IdentificationPage />} />
          <Route path="/identification/:id" element={<PhoneDetails />} />
          <Route path="/covoiturage" element={<CovoituragePage />} />
          <Route path="/covoiturage/:id" element={<TripDetails />} />
          <Route path="/location" element={<LocationPage />} />
          <Route path="/location/:id" element={<HouseDetails />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
