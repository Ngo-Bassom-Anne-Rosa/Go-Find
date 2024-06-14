import React, { useState } from 'react';
import HouseCard from '../components/location/HouseCard';
import SearchBar from '../components/location/SearchBar';

const LocationPage = () => {
  const [houses] = useState([
    {
      id: 1,
      address: '123 Rue de Rivoli, Paris',
      price: 1500,
      rooms: 3,
      images: ['house1.jpg', 'house1_1.jpg', 'house1_2.jpg'],
    },
    {
      id: 2,
      address: '456 Broadway, New York',
      price: 2500,
      rooms: 4,
      images: ['house2.jpg', 'house2_1.jpg', 'house2_2.jpg'],
    },
    // Ajoutez d'autres maisons si nécessaire
  ]);
  const [filteredHouses, setFilteredHouses] = useState([]);

  const handleSearch = (query) => {
    const result = houses.filter((house) =>
      house.address.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredHouses(result);
  };

  // Initialisation de filteredHouses avec les données au chargement
  useState(() => {
    setFilteredHouses(houses);
  }, [houses]);

  return (
    <div>
      <h1>Location - Maisons Disponibles</h1>
      <SearchBar onSearch={handleSearch} />
      <div className="house-list">
        {filteredHouses.map((house) => (
          <HouseCard key={house.id} house={house} />
        ))}
      </div>
    </div>
  );
};

export default LocationPage;
