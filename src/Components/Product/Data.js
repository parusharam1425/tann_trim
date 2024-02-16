import React from 'react'
import './Data.css'
const Data = (props) => {
  const {title, img} = props
  return (
    <>
    <div className='product-cart-container'>
      <div className='product-cart-box'>
        <img src={img} alt="" className='img'/>
      </div>
      <div className="product-title">
        <p>{title}</p>
      </div>
    </div>
    </>
  )
}

export default Data
