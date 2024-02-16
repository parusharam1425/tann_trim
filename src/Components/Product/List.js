import React from 'react'
import Data from './Data'
import allBags from '../assects/ProductIcons/Frame 461.png'
import vanity from '../assects/ProductIcons/Frame 50.png'
import tote from '../assects/ProductIcons/Frame 49.png'
import duffle from '../assects/ProductIcons/Frame 13.png'
import laptop from '../assects/ProductIcons/Frame 49 (1).png'
import messenger from '../assects/ProductIcons/Frame 49 (2).png'
import sling from '../assects/ProductIcons/Frame 22.png'
import hand from '../assects/ProductIcons/Frame 20.png'
import buck from '../assects/ProductIcons/Frame 46.png'
import './Data.css'

const List = () => {

    const data = [
        {title : "All Bags", img: allBags},
        {title : "Vanity Pouch", img: vanity },
        {title : "Tote Bag", img: tote},
         {title : "Duffle Bag", img: duffle},
         {title : "Laptop Sleeve", img: laptop},
        {title : "Messenger Bags", img: messenger},
    {title : "Sling Bags", img:sling },
         {title : "Hand Bags", img: hand},
         {title : "Buck Bags", img: buck},
        
    ]

  return (
    <>
    <div className='producs'>
        {
            data.map((data, index) => {
                return <Data 
                title={data.title} 
                img={data.img} 
                key={index}/>
            })
        }
        
    </div>
    </>
  )
}

export default List
