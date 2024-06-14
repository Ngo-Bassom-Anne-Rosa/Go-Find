import React from 'react';
import './PhoneCard.css';

const PhoneCard = ({ phone }) => {
  return (
    <div className="phone-card">
      <img src={phone.imageUrl} alt={phone.model} />
      <h3>{phone.model}</h3>
      <p>ID: {phone.id}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default PhoneCard;
