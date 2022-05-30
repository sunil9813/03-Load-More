import React, { useState } from "react"
import ProductCard from "./ProductCard"

const Product = ({ data }) => {
  const [viewMore, setViewMore] = useState(false)

  return (
    <>
      <section>
        <div className='title'>
          <h2>Our Product Items</h2>
        </div>
        {viewMore ? (
          <div className='items'>
            {data.map((val) => (
              <ProductCard key={val.id} {...val} />
            ))}
          </div>
        ) : (
          <div className='items'>
            {data.slice(0, 6).map((val) => (
              <ProductCard key={val.id} {...val} />
            ))}
          </div>
        )}
        <div className='viewMore'>
          <button onClick={() => setViewMore(!viewMore)}>{viewMore ? "View Less" : "  View More"}</button>
        </div>
      </section>
    </>
  )
}

export default Product
