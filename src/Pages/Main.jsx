import React from 'react';
import '../css/Main.css'; // Make sure this path is correct
import logo from '../Assets/TavaBalss.png';
import voice from '../Assets/voice.io.png';
import guy from '../Assets/guy.png';

function Main() {
  return (
    <div className="Main">
      <div className="Main-background"></div>
      <div className="Main-navigation">
        <img src={voice} className="voice" alt="voice.io" />
        <div className="Main-links">
          <a href="/">BALSOŠANA</a>
          <a href="/">TĒMAS</a>
          <a href="/">INFORMĀCIJA</a>
          <a href="/">KONTAKTI</a>
        </div>
      </div>
      <div className="button-top-container"> {}
        <button className="green-button">PIESLĒGTIES</button>
        <button className="green-button">REĢISTRĀCIJA</button>
      </div>  
      <header className="Main-header">
        <div className="Main-logo-container">
          <img src={logo} alt="Tava Balss" className="small-logo" />
          <button className="large-vote-button">BALSOT</button> {}
        </div>
      </header>
      <div className="right-image-container">
        <img src={guy} alt="Guy" className="right-side-image" />
      </div>
    </div>
  );
}

export default Main;
