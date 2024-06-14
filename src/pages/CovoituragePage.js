import React, { useState } from 'react';
import TripCard from '../components/Covoiturage/TripCard';
import SearchBar from '../components/Covoiturage/SearchBar';

const CovoituragePage = () => {
  const [trips] = useState([
    {
      id: 1,
      depart: 'Paris',
      arrive: 'Lyon',
      prix: 30,
      places: 3,
      voiture: 'Renault Clio',
      imageVoiture: 'renault_clio.jpg',
    },
    {
      id: 2,
      depart: 'Lyon',
      arrive: 'Marseille',
      prix: 40,
      places: 2,
      voiture: 'Peugeot 208',
      imageVoiture: 'peugeot_208.jpg',
    },
    // Ajoutez d'autres voyages si nécessaire
  ]);
  const [filteredTrips, setFilteredTrips] = useState([]);

  const handleSearch = (query) => {
    const result = trips.filter((trip) =>
      trip.depart.toLowerCase().includes(query.toLowerCase()) ||
      trip.arrive.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredTrips(result);
  };

  // Initialisation de filteredTrips avec les données au chargement
  useState(() => {
    setFilteredTrips(trips);
  }, [trips]);

  return (
    <div>
      <h1>Covoiturage - Voyages Disponibles</h1>
      <SearchBar onSearch={handleSearch} />
      <div className="trip-list">
        {filteredTrips.map((trip) => (
          <TripCard key={trip.id} trip={trip} />
        ))}
      </div>
    </div>
  );
};

export default CovoituragePage;
