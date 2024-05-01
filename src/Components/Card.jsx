import React from 'react'
import imgVoice from '../Assets/testVoice.png'
import watched from '../Assets/watched.svg'
import '../css/Card.css'

function Card() {
  return (
    <div class="card">
      <div class="CardIMG">
        <img src={imgVoice}></img>
      </div>
      <div class="CardNAME">TĒMA</div>
      <div class="CardDescriptionContainer">
        <div className="CardWatched">
          21
          <img src={watched}></img>
        </div>
        <div class="cardButton">
          <button>BALSOT</button>
        </div>
      </div>
    </div>
  )
}

export default Card
