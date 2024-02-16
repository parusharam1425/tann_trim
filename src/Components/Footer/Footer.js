import React from 'react';
import './Footer.css'

const Footer = () => {

    let date = new Date();
    let year = date.getFullYear();
  return (
    <div className='footer'>
      <p className='footer_name'>
        Design and developed by Parusharam
      </p>
        
    <p className='footer_span'>Copyright @ {year}</p>
  </div>
  )
}

export default Footer
