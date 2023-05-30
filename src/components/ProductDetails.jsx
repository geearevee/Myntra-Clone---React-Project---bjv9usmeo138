import React, {useContext, useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom';
import { productContext } from '../App';
import Navbar from './Navbar';
const ProductDetails = () => {
  const [productData, setProductData] = useState(null);
  const {data, setCartvalue,cart, setCart} = useContext(productContext);
  // http://ecommerc.com/product/2323
  const {productId} = useParams();
  const [count, setCount] = useState(0);
  useEffect(() => {
    const [singleProductData] = data.filter(product => product.id === productId) 
    singleProductData.images = singleProductData.images.slice(0,4);
    setProductData(singleProductData);

    /* 
      const fruits = [ "Apple", "Mango", "Kiwi"];
      fruits.splice(0, 2);
      // At position 0, remove 2 items:
      https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_splice2
    */
    // console.log("look here")
    // console.log(singleProductData.images)
    // console.log(singleProductData.images.slice(1,3));
    // console.log(singleProductData);
  },[])

  // add iems to cart
  const add = () =>{
      setCount(count+1);
  }
  const subtract = () =>{
    if(count<=0)
    {setCount(0);}
    else{
      setCount(count-1);
    }
  }
  const cartg = ()=>{
    setCartvalue(count);
    setCart(prevState => ([...prevState, {...productData, productCount : count }]))
  }
  // add items to cart
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
              <div><button onClick={add}>+</button> <span>{count}</span> <button onClick={subtract}>-</button></div>
              <div><button onClick={cartg}>Add to cart</button></div>
            </div>
          </>
        )
      }
    </div>
  )
}

export default ProductDetails