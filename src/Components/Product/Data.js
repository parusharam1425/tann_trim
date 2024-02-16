import React from 'react'
import './Data.css'
const Data = ({title, img}) => {
  return (
    <>
    <div className='product-cart-container'>
      <div className='product-cart-box'>
        <img src={img} alt="" className='img' style={{ filter: 'brightness(0) invert(1)' }}  />
      </div>
      <div className="product-title">
        <p>{title}</p>
      </div>
    </div>
    </>
  )
}

export default Data
