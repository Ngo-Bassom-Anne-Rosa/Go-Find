import React, { useState } from 'react';
import Modal from 'react-modal';
import './Register.css'

const Register = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    sexe: '',
    nom: '',
    age: '',
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [confirmationCode, setConfirmationCode] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    // Logique pour l'inscription de l'utilisateur et l'envoi du code de confirmation par email
    // Exemple :
    // api.register(formData).then(() => setIsModalOpen(true));
    setIsModalOpen(true);
  };

  const handleConfirmCode = (e) => {
    e.preventDefault();
    // Logique pour vérifier le code de confirmation
    // Exemple :
    // api.confirmCode(formData.email, confirmationCode).then(() => setIsRegistered(true));
    setIsRegistered(true);
    setIsModalOpen(false);
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <div>
          <label>Nom</label>
          <input type="text" className="form-control" name="nom" value={formData.nom} onChange={handleChange} required />
        </div>
        <div>
          <label>Email</label>
          <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label>Password</label>
          <input type="password" className="form-control" name="password" value={formData.password} onChange={handleChange} required />
        </div>
        <div>
          <label>Sexe</label>
          <select name="sexe" value={formData.sexe} onChange={handleChange} required>
            <option value="">Sélectionner</option>
            <option value="male">Homme</option>
            <option value="female">Femme</option>
            <option value="other">Autre</option>
          </select>
        </div>
        <div>
          <label>Âge</label>
          <input type="number" name="age" value={formData.age} onChange={handleChange} required />
        </div>
        <button type="submit">Register</button>
      </form>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        contentLabel="Confirm Code"
        style={{
          content: {
            width: '25rem',
            height: '15rem',
            margin: 'auto',
            padding: '1rem',
            top: '5%',
            left: '20%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
          },
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
          },
        }}
      >
        <h2>Confirm your email</h2>
        <form onSubmit={handleConfirmCode}>
          <div>
            <label>Confirmation Code</label>
            <input
              type="text"
              value={confirmationCode}
              onChange={(e) => setConfirmationCode(e.target.value)}
              required
            />
          </div>
          <button type="submit">Confirm</button>
        </form>
      </Modal>

      {isRegistered && <p>Registration successful!</p>}
    </div>
  );
};

export default Register;
