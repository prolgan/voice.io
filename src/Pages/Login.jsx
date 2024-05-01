import React from 'react';
import '../index.css';
import logo from '../Assets/logo_small.png';
import voice from '../Assets/voice.io.png';

function Login() {
  return (
    <div className="Login">
      <div className="background"></div>
      <div className="navigation">
        <img src={voice} className="voice" alt="voice.io" />
        <div className="links">
          <a href="/">BALSOŠANA</a>
          <a href="/">TĒMAS</a>
          <a href="/">INFORMĀCIJA</a>
          <a href="/">KONTAKTI</a>
        </div>
      </div>
      <header className="Login-header">
        <div className="logo-container">
          <img src={logo} className="Login-logo" alt="logo" />
        </div>
        <form className="login-form">
          <input type="email" placeholder="E-pasts" required />
          <input type="password" placeholder="Parole" required />
          <a href="/" className="forgot-password-link">Aizmirsāt paroli?</a>
          <button type="submit">PIESLĒGTIES</button>
        </form>
      </header>
    </div>
  );
}

export default Login;
