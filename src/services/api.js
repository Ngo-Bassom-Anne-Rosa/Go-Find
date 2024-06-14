const API_URL = 'http://http://localhost:8080/api';

export const fetchPhones = async () => {
  const response = await fetch(`${API_URL}/objets-voles`);
  return response.json();
};

export const fetchPhoneDetails = async (id) => {
  const response = await fetch(`${API_URL}/objets-voles/${id}`);
  return response.json();
};

export const fetchTrips = async () => {
  const response = await fetch(`${API_URL}/trajets`);
  return response.json();
};

export const fetchTripDetails = async (id) => {
  const response = await fetch(`${API_URL}/trajets/${id}`);
  return response.json();
};

export const fetchHouses = async () => {
  const response = await fetch(`${API_URL}/maisons`);
  return response.json();
};

export const fetchHouseDetails = async (id) => {
  const response = await fetch(`${API_URL}/maisons/${id}`);
  return response.json();
};
