import React from 'react'
import cartImage from '../images/cart-shopping-solid.svg';
import myntraimge from '../images/myntra.webp';
// import cartImage from './src' cart-shopping-solid
const Navbar = () => {
  return (
    <div className='navbar'>
      <img className='logo' src={myntraimge}></img>
      <div className='buttons'>
        <p>Men</p>
        <p>Women</p>
        <p>Kid</p>
      </div>
      <div className='search'>
        <input type="text" placeholder='Type to search'/>
      </div>
      <div className='cart'>
        <img src={cartImage}></img>
      </div>

    </div>
  )
}

export default Navbar
/* 
    => img
    => nav Items
    => search bar
    => cart
*/