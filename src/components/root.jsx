import React, { useEffect, useContext } from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import { productContext } from "../App";
import { authChecker } from "../Auth";
import Footer from "./Footer";
const Root = () => {
  const { setUser } = useContext(productContext);
  useEffect(() => {
    authChecker((user) => {
      if (user) {
        setUser(user);
      } else {
        console.log("user is signed out");
      }
    });
  }, []);
  return (
    <div className="app">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
