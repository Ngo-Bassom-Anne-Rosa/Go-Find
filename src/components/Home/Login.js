import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <form className="login-form">
      <h2>Login</h2>
      <input type="text" placeholder="Username" required />
      <input type="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
