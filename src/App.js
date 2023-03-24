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
          }
      ]
  }
])
function App() {
  return (
    <productContext.Provider value={[]}>
      <RouterProvider router={router} />
    </productContext.Provider>
  );
}

export default App;


