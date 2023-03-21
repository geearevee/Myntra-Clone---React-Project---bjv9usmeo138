import {useEffect, useState, createContext} from "react";
import logo from './logo.svg';
import Navbar from './components/Navbar';
import './App.css';
import Aside from './components/Aside'
import ProductContainer from './components/ProductContainer';
import {Outlet, Link} from "react-router-dom"
export const productContext = createContext();
function App() {
  const [data, setData] = useState([]);
  const mensUrl = "https://classic-world.onrender.com/MensData";
  const womansUrl = "https://classic-world.onrender.com/WomensData";
  const childrenUrl = "https://classic-world.onrender.com/ChildrensData";
  useEffect(() => {
    (async function fetchData() {
      const query = await fetch("https://fakestoreapi.com/products?limit=40");
      const data = await query.json();
      setData(data);
    })()
  },[])
  return (
    <productContext.Provider value={{data,setData}}>
      <div className="App">
      <Navbar/>
      <div className="mainContainer"> 
          <Outlet/>
      </div>
      </div>
    </productContext.Provider>
  );
}

export default App;


