import axios from "axios";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faBookmark } from '@fortawesome/free-solid-svg-icons';

import './Card.css'

const Card = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products`, {
          params: {
            title: 'test product',
            price: 13.5,
            description: 'lorem ipsum set',
            image: 'https://i.pravatar.cc',
            category: 'electronics'
          }
        });
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="card-container">
      {data.map(({ title, price, id, image }) => {
        const Title = title.substring(0, 25);
        return (
          <div className='card-box' key={id}>
            <span className="bookmark"><FontAwesomeIcon icon={faBookmark} /></span>
            <div className="card-img">
              <img src={image} alt="Product_image" />
            </div>
            <div className="card-textarea">
              <p className='title'>{Title.length > 15 ? `${Title}...` : Title}</p>
              <span className='price'>Rs. {price}</span>
              <span className='off'>(30% off)</span>
              <span className="cart-logo">
                <FontAwesomeIcon icon={faCartPlus} />
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Card;
