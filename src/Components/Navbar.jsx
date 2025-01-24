import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div>
      <nav>
      <li><Link to={`/`}>Clock</Link></li>
      <li>Alarm</li>
      <li><Link to={`/`}>Timer</Link></li>
      <li>Stop</li>

      </nav>
    </div>
  )
}

export default Navbar