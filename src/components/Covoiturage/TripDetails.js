import React from 'react';
import { useParams } from 'react-router-dom';

const TripDetails = () => {
  const { id } = useParams();

  // Simulation des données du voyage
  const data = {
    1: {
      id: 1,
      depart: 'Paris',
      arrive: 'Lyon',
      price: 30,
      seats: 3,
      image: 'renault_clio.jpg',
      contactEmail: 'john.doe@example.com',
      contactWhatsApp: '+1234567890',
    },
    2: {
      id: 2,
      depart: 'Lyon',
      arrive: 'Marseille',
      price: 40,
      seats: 2,
      image: 'peugeot_208.jpg',
      contactEmail: 'jane.smith@example.com',
      contactWhatsApp: '+1987654321',
    },
    // Ajoutez d'autres voyages si nécessaire
  };

  const trip = data[id];

  if (!trip) return <div>Loading...</div>;

  return (
    <div>
      <h1>{trip.depart} - {trip.arrive}</h1>
      <p>Price: {trip.price}</p>
      <p>Seats: {trip.seats}</p>
      <img src={require(`../../assets/${trip.image}`).default} alt="Car" />
      <p>Contact: {trip.contactEmail}</p>
      <p>WhatsApp: {trip.contactWhatsApp}</p>
    </div>
  );
};

export default TripDetails;
