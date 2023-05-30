import React,{useContext,useState,useEffect,useRef} from 'react'
import {createPortal} from "react-dom";
import {productContext} from "../App";
import ProfileOptions from "./ProfileOptions"
const Profile = () => {
  const [position,setPosition] = useState(null)
  const {user,setUser,showNavOptions,
    setShowNavOptions} = useContext(productContext);
  const {
    photoURL,
    displayName
  }= user  
  const userProfile  = useRef(null);
  useEffect(() => {
    const position  = userProfile.current.getBoundingClientRect();
    setPosition(position);
  },[])
  return (
    <>
        <div ref={userProfile} onClick={() => setShowNavOptions(prev => !prev)} className="userProfile">
            <img src={photoURL} alt="profile" referrerpolicy="no-referrer"/>
            <p>{displayName}</p>
        </div>
        {
            (showNavOptions && position) && createPortal(<ProfileOptions position={position}/>,document.getElementById("protalRoot"))
        }
    </>
  )
}

export default Profile