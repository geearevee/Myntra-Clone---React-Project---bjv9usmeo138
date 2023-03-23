import {useEffect, useState, createContext} from "react";
import logo from './logo.svg';
import Navbar from './components/Navbar';
import './App.css';
import Aside from './components/Aside'
import ProductContainer from './components/ProductContainer';
import {Outlet, Link} from "react-router-dom"
function App() {
  return (
      <div className="App">
        <Navbar/>
        <div className="mainContainer"> 
            <Outlet/>
        </div>
      </div>
  );
}

export default App;


