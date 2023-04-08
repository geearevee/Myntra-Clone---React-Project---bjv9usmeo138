import React, {useContext, useState} from 'react'
import cartImage from '../images/cart-shopping-solid.svg';
import myntraimge from '../images/myntra.webp';
import {productContext} from "../App";
import {signInWithGoogle} from "../Auth.js";
import Profile from "./Profile"
// import cartImage from './src' cart-shopping-solid
import {Link} from "react-router-dom";
const Navbar = () => {
  const {user,setUser} = useContext(productContext);
  const handleLogin = async () => {
    const user = await signInWithGoogle();
    if(user){
      setUser(user)
    }
  }
  
  return (
    <div className='navbar'>

      <Link to="/">
        <img className='logo' src={myntraimge}></img>
      </Link>
      <div className='buttons'>
        <p>Men</p>
        <p>Women</p>
        <p>Kid</p>
      </div>
      <div className='search'>
        <input type="text" placeholder='Type to search'/>
      </div>

      <div className='nav-left-items'>
        {
          user ? (<Profile/>) : (<button onClick={handleLogin}>Login With Google</button>)
        }
        <Link to="/cart">
          <img src={cartImage}></img>
        </Link>
        <div>0</div>
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