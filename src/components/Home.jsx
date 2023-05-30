import React, {useState,useEffect, useContext} from 'react'
import ProductContainer from "./ProductContainer";
import Aside from "./Aside";
import { productContext } from '../App';
const Home = () => {
  const {data,changeData} = useContext(productContext);
  return (
    <div className='main'>
        <Aside changeData={changeData}/>
        <ProductContainer data={data}/>
    </div>
  )
}

export default Home