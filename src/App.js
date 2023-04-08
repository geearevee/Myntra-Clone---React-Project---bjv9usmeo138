import {useEffect, useState, createContext} from "react";
import logo from './logo.svg';
import Navbar from './components/Navbar';
import './App.css';
import Aside from './components/Aside'
import ProductContainer from './components/ProductContainer';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import Cart from "./components/cart";
import Home from "./components/Home";
import Root from "./components/root";
import ProductDetails from "./components/ProductDetails";
export const productContext = createContext();
const router = createBrowserRouter([
  {
      path : "/",
      element : <Root/>,
      errorElement : <ErrorPage />, 
      children : [
          {
              path : "/",
              element : <Home />
          },
          {
              path : "/cart",
              element : <Cart/>,
          },
          {
            path : "/product/:productId",
            element : <ProductDetails/>,
          }
      ]
  }
])
function App() {
  const [data, setData] = useState([]);
  const [user,setUser] = useState(null);
  const [showNavOptions, setShowNavOptions] = useState(false);
  const [cart , setCart] = useState([]);
  const mensUrl = "https://classic-world.onrender.com/MensData";
  const womansUrl = "https://classic-world.onrender.com/WomensData";
  const childrenUrl = "https://classic-world.onrender.com/ChildrensData";
  const fetchData = async (url) => {
    const query = await fetch(url);
    return query.json();
  }
  useEffect(() => {
    fetchData(mensUrl).then(data => setData(data));
  },[])
  const changeData = async (target) => {
    if(target.gender === "Female"){
      const data = await fetchData(womansUrl);
      setData(data);
    }else{
      const data = await fetchData(mensUrl);
      setData(data);
    }
  }
  const[cartvalue, setCartvalue] = useState(0);
  const value = {
    data,
    setData,
    changeData,
    user,
    setUser,
    showNavOptions,
    setShowNavOptions,
    cart,
    setCart,
    cartvalue,
    setCartvalue
  }
  return (
    <productContext.Provider value={value}>
      <RouterProvider router={router} />
    </productContext.Provider>
  );
}

export default App;


