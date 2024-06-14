import React, { useEffect, useState } from 'react';
import PhoneCard from '../components/Identification/PhoneCard';
import SearchBar from '../components/Identification/Searchbar';
import './IdentificationPage.css';

const IdentificationPage = () => {
  const [phones, setPhones] = useState([]);
  const [filteredPhones, setFilteredPhones] = useState([]);

  useEffect(() => {
    // Fetch phones from API
    // Example usage:
    // fetchPhones().then(data => {
    //   setPhones(data);
    //   setFilteredPhones(data);
    // });
    // For demonstration purpose, using static data
    const data = [
      { id: 1, model: 'Phone 1', imageUrl: '/phone1.jpg' },
      { id: 2, model: 'Phone 2', imageUrl: '/phone2.jpg' },
      { id: 3, model: 'Phone 3', imageUrl: '/phone3.jpg' },
    ];
    setPhones(data);
    setFilteredPhones(data);
  }, []);

  const handleSearch = (query) => {
    const result = phones.filter(phone =>
      phone.model.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredPhones(result);
  };

  return (
    <div className="identification-page">
      <h1>Identification - Telephones Volés</h1>
      <SearchBar onSearch={handleSearch} />
      <div className="phone-list">
        {filteredPhones.map(phone => (
          <PhoneCard key={phone.id} phone={phone} />
        ))}
      </div>
    </div>
  );
};

export default IdentificationPage;
