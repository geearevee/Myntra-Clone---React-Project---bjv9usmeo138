import React from 'react'
import ProductCard from './ProductCard';
const ProductContainer = ({data}) => {
  console.log(typeof data,data);
  return (
    <div className='ProductContainer'>
        {
            data.map(product => {
                return <ProductCard key={product.id} product={product}/>
            })
        }
    </div>
  )
}

export default ProductContainer