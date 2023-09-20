import React from 'react'
import "./header.css"

import iss_model from "../../Images/ISS_spacecraft_animation.gif"

const Header = () => {
  return (
    <div className='header'>
        <h1>International Space Station Tracker</h1>
        <img src={iss_model} alt="ISS model icon with color"/>
    </div>
  )
}

export default Header