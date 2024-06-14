import React from 'react';
import { Link } from 'react-router-dom';

const HouseCard = ({ house }) => {
  return (
    <div className="house-card">
      <h3>{house.address}</h3>
      <p>Price: {house.price}</p>
      <Link to={`/location/${house.id}`}>Details</Link>
    </div>
  );
};

export default HouseCard;
