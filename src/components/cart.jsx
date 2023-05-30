import React, {useContext} from 'react'
import {productContext} from "../App";
import Payment from './payment';
import { Link } from 'react-router-dom';
import emptyCartImg from "../images/emptycart.png"
const Cart = () => {
  const {cart} = useContext(productContext);
  return (
    <>
      <h2 className="cart_page_h2">Selected products</h2>
    <div className="cart_page">
    <div className="cartItem_container">
      {
        cart.length === 0 ? <img className="cartImage" src={emptyCartImg}/> : (
          cart.map(item => {
            return (
              <div className="product_card">
                <p>Product : {item.title}</p>
                <p>Price : {item.discounted_price}₹</p>
                <p>quantity : {item.productCount}</p>
                <img src={item.images[0]} alt="product" />
              </div>
            )
          }) 
        ) 
      }
    </div>
        
    
      <div className="price_calculation">
      <div>
         <strong>YOUR SUB TOTAL</strong> 
        </div>
          
          {
            cart.length === 0 ? (<img className="cartImage" src={emptyCartImg}/>) : (
            <>
            <p>
              {cart.reduce((acc,current,index) => ((acc+Number(current.discounted_price))* Number(current.productCount)),0)}₹
            </p>
            <Link to="/checkout">Proceed to checkout </Link>
            </>
            )
          }
      </div>
    </div>
    </>
  )
}

export default Cart


/* 
   suppose after user clicks on a link button we don't want to page to change 
   instantly we want to change after 10 sec.$

  <a href="/checkout">dfdfd</a>
  <Link href="/checkout">dfdfd</Link>

  <button onclick={handleClick}>dfd</button>

  handleClick = {
    setTimeOUt(() => {
      navigate("/checkout")
    }, 10_000)
  }
*/