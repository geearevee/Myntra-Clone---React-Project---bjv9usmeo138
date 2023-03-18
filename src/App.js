import {useEffect, useState} from "react";
import logo from './logo.svg';
import Navbar from './components/Navbar';
import './App.css';
import Aside from './components/Aside'
import ProductContainer from './components/ProductContainer';

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    (async function fetchData() {
      const query = await fetch("https://fakestoreapi.com/products?limit=40");
      const data = await query.json();
      setData(data);
    })()
  },[])
  return (
    <div className="App">
    <Navbar/>
    <div className="mainContainer">
        <Aside />
        <ProductContainer data={data}/> 
    </div>
    </div>
  );
}

export default App;


