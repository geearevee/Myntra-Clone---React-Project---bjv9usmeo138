import React from 'react'

const ProductCard = ({product}) => {
  
  return (
      <div className='ProductCard'>
        <img alt='produtimage' src={product.images[0]}/>
        <p className='product-title'>{product.title}</p>
        <p className='product-brand'>{product.brand}</p>
        <div className="card-group">
          <p className='product-discounted_price'>{product.discounted_price}₹</p>
          <p className='product-strike_price'>{product.strike_price}</p>
          <p className='product-discount'>{product.discount}</p>
        </div>
        <p className='product-rating'>{product.rating} ⭐</p>
      </div>
    )

}

export default ProductCard


/* "discounted_price": 494,
"strike_price": 1499,
"discount": "(67% OFF)", */
