import React, { useState } from 'react';

const HouseForm = () => {
  const [house, setHouse] = useState({
    address: '',
    price: '',
    rooms: '',
    images: []
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setHouse({ ...house, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique pour soumettre la maison
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Address</label>
        <input type="text" name="address" value={house.address} onChange={handleChange} />
      </div>
      <div>
        <label>Price</label>
        <input type="text" name="price" value={house.price} onChange={handleChange} />
      </div>
      <div>
        <label>Rooms</label>
        <input type="text" name="rooms" value={house.rooms} onChange={handleChange} />
      </div>
      <div>
        <label>Images</label>
        <input type="text" name="images" value={house.images} onChange={handleChange} />
      </div>
      <button type="submit">Add House</button>
    </form>
  );
};

export default HouseForm;
