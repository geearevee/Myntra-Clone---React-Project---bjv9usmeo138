import React from 'react'
import ProductCard from './ProductCard';
import { Link } from 'react-router-dom';
const ProductContainer = ({data}) => {
  return (
    <div className='ProductContainer'>
        {
            data.map(product => {
                return (
                  <Link key={product.id} to={`/product/${product.id}`}>
                    <ProductCard product={product}/>
                  </Link> 
                )
            })
        }
    </div>
  )
}

export default ProductContainer