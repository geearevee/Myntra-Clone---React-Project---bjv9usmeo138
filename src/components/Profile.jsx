import React, { useContext, useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { productContext } from "../App";
import ProfileOptions from "./ProfileOptions";
const Profile = ({handleLogin}) => {
  const { user, setUser, showNavOptions, setShowNavOptions } =
    useContext(productContext);
  // const { photoURL, displayName } = user;
  return (
    <div className="profileIconContainer">
      {/* <img className='nav-icons' onClick={handleLogin}  src="https://img.icons8.com/ios/30/gender-neutral-user--v1.png" alt="gender-neutral-user--v1"/> */}
      <img onClick={() => setShowNavOptions(prev => !prev)} className='nav-icons'  src="https://img.icons8.com/ios/30/gender-neutral-user--v1.png" alt="gender-neutral-user--v1"/>
      {
        showNavOptions && (
          <ProfileOptions />
        )
      }
    </div>
  );
};

export default Profile;

/*

  <div
        ref={userProfile}
        onClick={() => setShowNavOptions((prev) => !prev)}
        className="userProfile"
      >
        {/* <img src={photoURL} alt="profile" referrerPolicy="no-referrer" />
        <p>{displayName}</p> 
        <img className='nav-icons' onClick={handleLogin}  src="https://img.icons8.com/ios/30/gender-neutral-user--v1.png" alt="gender-neutral-user--v1"/>
      </div>
      {showNavOptions &&
        position &&
        createPortal(
          <ProfileOptions position={position} />,
          document.getElementById("protalRoot")
        )}
*/
