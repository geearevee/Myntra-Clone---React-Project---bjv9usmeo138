import React from 'react'

const ProductCard = ({product}) => {
  return (
    <div className='ProductCard'>
        <img src={product.image}/>
        <p>{product.title}</p>
        <p>{product.description}</p>
        <p>{product.price}</p>
        <p>{product.rating.rate}</p>
    </div>
  )
}

export default ProductCard