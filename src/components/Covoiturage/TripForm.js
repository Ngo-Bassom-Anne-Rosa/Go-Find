import React, { useState } from 'react';

const TripForm = () => {
  const [trip, setTrip] = useState({
    depart: '',
    arrive: '',
    price: '',
    seats: '',
    image: '',
    contactEmail: '',
    contactWhatsApp: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTrip({ ...trip, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique pour soumettre le voyage
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Depart</label>
        <input type="text" name="depart" value={trip.depart} onChange={handleChange} />
      </div>
      <div>
        <label>Arrive</label>
        <input type="text" name="arrive" value={trip.arrive} onChange={handleChange} />
      </div>
      <div>
        <label>Price</label>
        <input type="text" name="price" value={trip.price} onChange={handleChange} />
      </div>
      <div>
        <label>Seats</label>
        <input type="text" name="seats" value={trip.seats} onChange={handleChange} />
      </div>
      <div>
        <label>Image</label>
        <input type="text" name="image" value={trip.image} onChange={handleChange} />
      </div>
      <div>
        <label>Contact Email</label>
        <input type="email" name="contactEmail" value={trip.contactEmail} onChange={handleChange} />
      </div>
      <div>
        <label>WhatsApp</label>
        <input type="text" name="contactWhatsApp" value={trip.contactWhatsApp} onChange={handleChange} />
      </div>
      <button type="submit">Add Trip</button>
    </form>
  );
};

export default TripForm;
