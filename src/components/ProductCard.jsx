import React from "react"

const ProductCard = ({ id, title, price, description, category, image }) => {
  return (
    <>
      <div className='card'>
        <div className='box'>
          <div className='img'>
            <img src={image} alt='' />
          </div>
          <div className='details'>
            <h2>{title}</h2>
            <div className='flex'>
              <span>{category}</span>
              <h3>${price}</h3>
            </div>
            <p>{description.substring(0, 80)}...</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductCard
