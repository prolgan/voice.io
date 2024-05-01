import React from 'react';
import '../Pages/login.css';
import logo from '../Assets/logo_small.png'; 

function Login() {
  return (
    <div className="Login">
      <header className="Login-header two-tone-background">
        <div className="logo-container">
          <img src={logo} className="Login-logo" alt="logo" />
        </div>
        <form className="login-form">
          <input type="email" placeholder="E-pasts" required />
          <input type="password" placeholder="Parole" required />
          <button type="submit">PIESLĒGTIES</button>
        </form>
        <a href="/" className="forgot-password-link">Aizmirsāt paroli?</a>
      </header>
    </div>
  );
}

export default Login;
