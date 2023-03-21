import React from 'react'
import ProductContainer from "./ProductContainer";
import Aside from "./Aside";
const Home = () => {
  return (
    <div className='main'>
        <Aside />
        <ProductContainer data={[]}/>
    </div>
  )
}

export default Home