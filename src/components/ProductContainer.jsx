import React,{useContext} from 'react'
import ProductCard from './ProductCard';
import { Link } from 'react-router-dom';
import { productContext } from '../App';
import load from '../images/Bean Eater-1s-200px.gif'
const ProductContainer = ({data}) => {
  const {loader,setLoader} = useContext(productContext);
  return (
<div className='ProductContainer'>
        {
            loader ? (
              <img className='loadingGif' src={load}/>
            ) : (
              data.map(product => {
                  return (
                    <Link key={product.id} to={`/product/${product.id}`}>
                      <ProductCard product={product}/>
                    </Link> 
                  )
              })
            )
        }
    </div>
  )
}

export default ProductContainer