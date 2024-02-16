import React from 'react';
import search from '../assects/Frame 51.png'
import profile from '../assects/Frame 52.png'
import logo from '../assects/Frame 53.png'
import bag from '../assects/Frame 54.png'

import './Navbar.css'

const Navbar = () => {
  return (
    <>
    <div className='nav'>
      <div className="logo">
        <p>TANN TRIM</p>
      </div>

      <div className="icons">
        <div className="icon">
            <img alt='search' src={search}/>
        </div>

        <div className="icon">
        <img alt='search' src={profile}/>
        </div>
        
        <div className="icon">
        <img alt='search' src={logo}/>
        </div>

        <div className="icon">
        <img alt='search' src={bag}/>
        </div>

      </div>
    </div>

    <div className="menu">
        <div>Bags</div>
        <div>Travel</div>
        <div>Accesories</div>
        <div>Gifting</div>
        <div>Jewelery</div>
      </div>
    </>
  )
}

export default Navbar
