import { useEffect, useState, createContext } from "react";
import logo from "./logo.svg";
import Navbar from "./components/Navbar";
import "./App.css";
import Aside from "./components/Aside";
import ProductContainer from "./components/ProductContainer";
import {
  createBrowserRouter,
  RouterProvider,
  useAsyncError,
} from "react-router-dom";

import ErrorPage from "./components/ErrorPage";
import Cart from "./components/cart";
import Home from "./components/Home";
import Root from "./components/root";
import ProductDetails from "./components/ProductDetails";
import Payment from "./components/payment";
export const productContext = createContext();
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/product/:productId",
        element: <ProductDetails />,
      },
      {
        path: "/checkout",
        element: <Payment />,
      },
    ],
  },
]);
function App() {
  const [loader, setLoader] = useState(true);
  const [data, setData] = useState([]);
  // const [currentPage, setCurrentPage] = useState(1)
  const [pageData, setPageData] = useState([]);
  const [user, setUser] = useState(null);
  const [showNavOptions, setShowNavOptions] = useState(false);
  const [cart, setCart] = useState([]);
  const [searchvalue, setSearchValue] = useState(""); // you are storing search string so inital value can be "" empty string
  const mensUrl = "https://classic-world.onrender.com/MensData";
  const womansUrl = "https://classic-world.onrender.com/WomensData";

  const fetchData = async (url) => {
    const query = await fetch(url);
    return query.json();
  };
  useEffect(() => {
    const homePageData = async () => {
      let data = await fetchData(mensUrl);
      setData(data);
      setLoader(false);
    };
    homePageData();
  }, []);
  // pagination
  useEffect(() => {
    if (data.length > 10) {
      setPageData(data.slice(0, 10));
    } else {
      setPageData(data);
    }
  }, [data]);

  const changeData = async (target) => {
    if (target.gender === "Female") {
      const data = await fetchData(womansUrl);
      //const data = arr1.map(items => items.discounted_price > 600);
      setData(data);
      setLoader(false);
    } else {
      const data = await fetchData(mensUrl);

      // let slicedData = data;
      // if(data.length > 10){
      //   slicedData = data.slice(0,10)
      // }
      // setData(slicedData);
      console.log(data);
      setData(data);
      setLoader(false);
    }
  };
  function searchResult(e) {
    e.preventDefault();
    if (searchvalue === "") {
      changeData("male");
      return null;
    }
    let filteredResults = data.filter((result) =>
      result.brand.toLowerCase().includes(searchvalue.toLowerCase())
    );
    setData(filteredResults);
  }
  // setLoader(false);
  const [cartvalue, setCartvalue] = useState(0);
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
    setCartvalue,
    loader,
    setLoader,
    searchvalue,
    setSearchValue,
    searchResult,
    pageData,
    setPageData,
  };
  return (
    <productContext.Provider value={value}>
      <RouterProvider router={router} />
    </productContext.Provider>
  );
}

export default App;
