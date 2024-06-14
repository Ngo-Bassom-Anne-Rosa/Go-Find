import React from 'react';
import { useParams } from 'react-router-dom';
import ContactForm from './ContactForm';

const PhoneDetails = () => {
  const { id } = useParams();

  // Simulation des données du téléphone
  const data = {
    1: {
      id: 1,
      model: 'iPhone 12',
      image: 'iphone12.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero vel metus feugiat, vitae commodo ante condimentum.',
    },
    2: {
      id: 2,
      model: 'Samsung Galaxy S21',
      image: 'galaxy_s21.jpg',
      description: 'Integer rutrum, est id imperdiet pretium, dui est placerat elit, ac ultricies magna purus at arcu.',
    },
    // Ajoutez d'autres téléphones si nécessaire
  };

  const phone = data[id];

  if (!phone) return <div>Loading...</div>;

  return (
    <div>
      <h1>{phone.model}</h1>
      <img src={require(`../../assets/${phone.image}`).default} alt={phone.model} />
      <p>{phone.description}</p>
      <ContactForm />
    </div>
  );
};

export default PhoneDetails;
