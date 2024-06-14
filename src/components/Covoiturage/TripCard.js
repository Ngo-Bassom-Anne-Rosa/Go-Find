import React from 'react';
import { Link } from 'react-router-dom';

const TripCard = ({ trip }) => {
  return (
    <div className="trip-card">
      <h3>{trip.depart} - {trip.arrive}</h3>
      <p>Price: {trip.price}</p>
      <Link to={`/covoiturage/${trip.id}`}>Details</Link>
    </div>
  );
};

export default TripCard;
