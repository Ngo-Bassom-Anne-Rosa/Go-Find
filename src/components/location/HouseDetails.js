import React from 'react';
import { useParams } from 'react-router-dom';

const HouseDetails = () => {
  const { id } = useParams();

  // Simulation des données de la maison
  const data = {
    1: {
      id: 1,
      address: '123 Rue de Rivoli, Paris',
      price: 1500,
      rooms: 3,
      images: ['house1.jpg', 'house1_1.jpg', 'house1_2.jpg'],
    },
    2: {
      id: 2,
      address: '456 Broadway, New York',
      price: 2500,
      rooms: 4,
      images: ['house2.jpg', 'house2_1.jpg', 'house2_2.jpg'],
    },
    // Ajoutez d'autres maisons si nécessaire
  };

  const house = data[id];

  if (!house) return <div>Loading...</div>;

  return (
    <div>
      <h1>{house.address}</h1>
      <img src={require(`../../assets/${house.images[0]}`).default} alt="House" />
      <p>Price: {house.price}</p>
      <p>Rooms: {house.rooms}</p>
    </div>
  );
};

export default HouseDetails;
