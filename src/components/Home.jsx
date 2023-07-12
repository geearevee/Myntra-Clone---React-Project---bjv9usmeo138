import React, {useState,useEffect, useContext} from 'react'
import ProductContainer from "./ProductContainer";
import Aside from "./Aside";
import SecondaryNav from "./SecondaryNav";	
import { productContext } from '../App';
const Home = () => {
  const {data,changeData, pageData, setPageData} = useContext(productContext);
  return (
    <>
      <SecondaryNav />
      <div className='main'>
          <Aside changeData={changeData}/>
          <ProductContainer data={pageData}/>
      </div>
    </>
  )
}

export default Home