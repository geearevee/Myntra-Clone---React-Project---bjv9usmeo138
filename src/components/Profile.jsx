import React, { useContext, useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { productContext } from "../App";
import ProfileOptions from "./ProfileOptions";
const Profile = ({handleLogin}) => {
  // const [position, setPosition] = useState(null);
  // const { user, setUser, showNavOptions, setShowNavOptions } =
  //   useContext(productContext);
  // const { photoURL, displayName } = user;
  // const userProfile = useRef(null);
  // useEffect(() => {
  //   const position = userProfile.current.getBoundingClientRect();
  //   setPosition(position);
  // }, []);
  return (
    <>
      {/* <img className='nav-icons' onClick={handleLogin}  src="https://img.icons8.com/ios/30/gender-neutral-user--v1.png" alt="gender-neutral-user--v1"/> */}
      <img className='nav-icons'  src="https://img.icons8.com/ios/30/gender-neutral-user--v1.png" alt="gender-neutral-user--v1"/>
    </>
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
