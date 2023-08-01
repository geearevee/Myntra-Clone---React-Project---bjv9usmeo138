import React,{useContext} from 'react'
import {logoutUser} from "../Auth";
import {productContext} from "../App";
import {signInWithGoogle} from "../Auth";
const ProfileOptions = ({position}) => {
  const { user, setUser, showNavOptions, setShowNavOptions } =
    useContext(productContext);
  const signOut = async () => {
    const isLoggedOut = await logoutUser();
    if(isLoggedOut){
        setUser(null);
        return null;
    }
    console.log("logging out failed")
  }
  async function handleLogin() {
    const user = await signInWithGoogle();
    setUser(user);
    // setShowNavOptions(!showNavOptions);
  }
  return (
    <div className="profileOptions">
        {
          user ? (
            <>
              <div className='profileOptions_profile'>
                <img src={user.photoURL} alt='profileImg' />
                <p> Hi, {user.displayName}</p>
              </div>
              <button onClick={signOut}>Signout</button>
            </>
          ) : (
            <>
              <p className='welcome_message'>Hi, Welcome to Myntra, Have a good day !</p>
              <button onClick={handleLogin}>Login/Signup</button>
            </>
          )    
        }
    </div>
  )
}

export default ProfileOptions