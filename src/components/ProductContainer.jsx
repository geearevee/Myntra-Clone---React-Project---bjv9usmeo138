import React, { useContext,useEffect,useState } from "react";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";
import { productContext } from "../App";
import load from "../images/Bean Eater-1s-200px.gif";
const ProductContainer = () => {
  const { loader, setLoader,setData,setPageData, pageData, data } = useContext(productContext);
  const [buttons, setButtons] = useState([])
  useEffect(() => {
    const tempButtons = [];
    let numberOfButtons = Math.floor(data.length / 10);
    // console.log("no. of buttons", numberOfButtons);
    for (let i = 0; i < numberOfButtons - 1; i++) {
      let start = i*10;
      let end = i*10+10;
      // console.log("start and end",start, end, data.slice(start,end))
      tempButtons.push(<button onClick={() => setPageData(data.slice(start,end))} key={i}> {i + 1}</button>);
    }
    // [<div><div>, <div><div>]
    setButtons(tempButtons)
  },[data])
  return (
    <div className="ProductContainer">
      {loader ? (
        <img className="loadingGif" src={load} />
      ) : (
        <>
          {
            pageData.map((product) => {
              return (
                <Link key={product.id} to={`/product/${product.id}`}>
                  <ProductCard product={product} />
                </Link>
              );
            })
          }
          <div className="pagination-buttons">{buttons}</div>
        </>
      )}
    </div>
  );
};

export default ProductContainer;