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
        <p>MEN</p>
        <p>WOMEN</p>
        <p>KIDS</p>
        <p>HOME & LIVING</p>
        <p>BEAUTY</p>
        <p>STUDIO</p>
      </div>
      {/* //search functionailty */}
      <div className='search'>
        
        <form onSubmit={searchResult}>
          <img className='nav-icons'  src="https://img.icons8.com/ios/28/search--v1.png" alt="search--v1"/>
          <input  value={searchvalue} onInput={(e)=> setSearchValue(e.target.value)}  type="text" placeholder='Search for products, brands and more'/>
        </form>
        
      </div>
      <div className='nav-left-items'>
        <Profile handleLogin={handleLogin}/>
        <img className='nav-icons'  src="https://img.icons8.com/small/32/shopping-bag.png" alt="shopping-bag"/>
        <Link to="/cart">
          <img className='nav-icons'  src="https://img.icons8.com/small/32/like--v1.png" alt="like--v1"/>
        </Link>
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

