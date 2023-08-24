import React from 'react'
import { Link } from 'react-router-dom'


function Navbar() {
  return (
    <div className='navbar'>
        <h1>Paliga.com</h1>
        <div className='main-content-links'>
            <div className='link-container'>
                <Link to="/">News</Link>
            </div>
            <div className='link-container'>
                <Link to="/schedule">Schedule</Link>
            </div>

            <div className='link-container'>
                <Link to="/players">Players</Link>
            </div>
            <div className='link-container'>
                <Link to="/create-game">Live Gaming</Link>
            </div>
        </div>
        <button className='login-button'>Login</button>
    </div>
  )
}

export default Navbar