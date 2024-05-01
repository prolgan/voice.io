import React from 'react'
import '../css/VotesList.css'
import logo from '../Assets/voice.io.png'
import Card from '../Components/Card'

function VotesList() {
  return (
    <div class="VotesList">
      <div class="Header">
        <div class="HeaderImg">
          <a href="Login">
            <img src={logo}></img>
          </a>
        </div>
        <div class="HeaderText">
          <a href="Login">BALSOŠANA</a>
          <a href="Login">TĒMAS</a>
          <a href="Login">INFORMĀCIJA</a>
          <a href="Login">KONTAKTI</a>
        </div>
      </div>
      <div class="container">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}

export default VotesList
