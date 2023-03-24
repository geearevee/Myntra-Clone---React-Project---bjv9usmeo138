import React, {useContext, useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom';
import { productContext } from '../App';
const ProductDetails = () => {
  const [productData, setProductData] = useState(null);
  const {data} = useContext(productContext);
  const {productId} = useParams();
  useEffect(() => {
    const [singleProductData] = data.filter(product => product.id === productId) 
    singleProductData.images = singleProductData.images.slice(0,4);
    setProductData(singleProductData);
    // console.log("look here")
    // console.log(singleProductData.images)
    // console.log(singleProductData.images.slice(1,3));
    // console.log(singleProductData);
  },[]) 
  
  return (
    <div className='productDetailsContainer'>
      {
        productData && (
          <>
            <div className='product-images'>
              {
                productData.images.map((image, index) => {
                  return <img key={index} src={image} alt="product"/>
                })
              }
            </div>
            <div className='product-details'>
              <h2 className="product-details-title">{productData.title}</h2>
              <h3 className="product-details-brand">{productData.brand}</h3>
              <div className="rating-wrapper">
                <p className="product-details-rating_count">{productData.rating_count}k</p>
                <p className="product-details-rating">{productData.rating}k</p>
              </div>
              <div className="price-wrapper">
                <p className="product-details-discounted_price">{productData.discounted_price} </p>
                <p className="product-details-strike_price"> MRP {productData.strike_price}</p>
                <p className="product-details-discount">{productData.discount}</p>
              </div>
              <p className='green-text'>inclusive of all taxes</p>
              <div className="product-details-sizes">
                {productData.size.map((item, index) => {
                  return <div key={index} className='size-circle'>{item}</div>
                })}
              </div>
            </div>
          </>
        )
      }
    </div>
  )
}

export default ProductDetails