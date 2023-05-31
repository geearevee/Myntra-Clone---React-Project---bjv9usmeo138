import React, {useContext} from 'react'
import cartImage from '../images/cart-shopping-solid.svg';
import myntraimge from '../images/myntra.webp';
import {productContext} from "../App";
import {signInWithGoogle} from "../Auth.js";
import Profile from "./Profile"
// import cartImage from './src' cart-shopping-solid
import {Link} from "react-router-dom";
const Navbar = () => {
  const {user,setUser, cartvalue,searchvalue,setSearchValue,searchResult} = useContext(productContext);
  const handleLogin = async () => {
    const user = await signInWithGoogle();
    if(user){
      setUser(user)
    }
  }
  
  return (
    <div className='navbar'>

      <Link to="/">
        <img className='logo' src={myntraimge} alt='myntraimage'></img>
      </Link>
      <div className='buttons'>
        <p>Men</p>
        <p>Women</p>
        <p>Kid</p>
      </div>
      {/* //search functionailty */}
      <div className='search'>
        
        <form onSubmit={searchResult}>
          <input value={searchvalue} onInput={(e)=> setSearchValue(e.target.value)}  type="text" placeholder='Type to search'/>
        </form>
        
      </div>

      <div className='nav-left-items'>
        {
          user ? (<Profile/>) : (<button onClick={handleLogin}>Login With Google</button>)
        }
        <Link to="/cart">
          <img src={cartImage} alt='cartimage'></img>
        </Link>
        <div>{cartvalue}</div>
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
    =>hi
*/