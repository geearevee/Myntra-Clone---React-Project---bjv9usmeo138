import React, {useContext} from 'react'
import {productContext} from "../App";
import Payment from './payment';
const Cart = () => {
  const {cart} = useContext(productContext);
  return (
    <>
      <h2 className="cart_page_h2">Selected products</h2>
    <div className="cart_page">
    <div className="cartItem_container">
      {
        cart.map(item => {
          return (
            <div className="product_card">
              <p>{item.title}</p>
              <p>{item.discounted_price}</p>
              <p>{item.productCount}</p>
              <img src={item.images[0]} alt="product" />
            </div>
          )
        }) 
      }
    </div>
    <div className="price_calculation">
      <p>
        {cart.reduce((acc,current,index) => ((acc+Number(current.discounted_price))* Number(current.productCount)),0)}
      </p>
      <button>Proceed to checkout</button>
    </div>
    </div>
    <Payment/>
      </>
  )
}

export default Cart