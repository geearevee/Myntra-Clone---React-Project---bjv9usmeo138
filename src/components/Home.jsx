import React, {useState,useEffect} from 'react'
import ProductContainer from "./ProductContainer";
import Aside from "./Aside";
import productContext from "../App";
const Home = () => {
  const [data, setData] = useState([]);
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
  
  return (
    <div className='main'>
        <Aside changeData={changeData}/>
        <ProductContainer data={data}/>
    </div>
  )
}

export default Home