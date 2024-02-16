import React from 'react'
import Data from './Data'

import './Data.css'

const List = () => {

    const data = [
        {title : "All Bag", img: `https://cdn.iconscout.com/icon/premium/png-512-thumb/shopping-bags-2224132-1862785.png?f=webp&w=512`},
        {title : "Vanity Pouch", img: `https://cdn4.iconfinder.com/data/icons/types-of-bags-5/504/bag-vanity-cosmetic-case-beautician-1024.png`},
        {title : "Tote Bag", img: `https://cdn.iconscout.com/icon/premium/png-512-thumb/tote-bag-1629456-1382977.png?f=webp&w=512`},
        {title : "Duffle Bag", img: `https://cdn.iconscout.com/icon/premium/png-512-thumb/duffle-bag-9318117-7601177.png?f=webp&w=512`},
        {title : "Laptop Sleeve", img: `https://cdn.iconscout.com/icon/free/png-512/free-laptop-computer-graph-chart-company-statics-performance-2-12564.png?f=webp&w=512`},
        {title : "Messenger Bags", img: `https://cdn.iconscout.com/icon/premium/png-512-thumb/messenger-bag-1629533-1383004.png?f=webp&w=512`},
        {title : "Sling Bags", img: `https://cdn.iconscout.com/icon/premium/png-512-thumb/sling-bag-3341129-2783294.png?f=webp&w=512`},
        {title : "Hand Bags", img: `https://cdn.iconscout.com/icon/premium/png-512-thumb/hand-bag-1700288-1445196.png?f=webp&w=512`},
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
