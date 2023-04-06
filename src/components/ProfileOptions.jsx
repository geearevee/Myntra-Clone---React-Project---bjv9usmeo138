import React,{useContext} from 'react'
import {logoutUser} from "../Auth";
import {productContext} from "../App";

const ProfileOptions = ({position}) => {
  const {setUser} = useContext(productContext);
  const {x , bottom,right} = position;
  const style = {
    top : `${bottom + 5}px`,
    left : `${x}px`,
    width : `${right - x}px`,
  }
  const signOut = async () => {
    const isLoggedOut = await logoutUser();
    if(isLoggedOut){
        setUser(false);
        return null;
    }
    console.log("logging out failed")
  }
  return (
    <div style={style} className="profileOptions">
        <button onClick={signOut}>signout</button>
    </div>
  )
}

export default ProfileOptions