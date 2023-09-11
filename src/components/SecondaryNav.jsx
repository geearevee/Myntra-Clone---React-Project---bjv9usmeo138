import React from "react";
import sale from "../images/sale33333.jpg";
const DropDown = ({ options }) => {
  return <div className="dropDownContainer"></div>;
};

const SecondaryNav = () => {
  const dropDownOptions = [
    "Recommended",
    "New Arrivals",
    "Popularity",
    "Price: Low to High",
    "Price: High to Low",
    "Rating: High to Low",
  ];
  return (
    <div className="secondary-nav">
      {/* <h2 className="secondaryNavHeader"> */}
      <img className="saleimage" src={sale} alt="saleimg" />
      {/* </h2> */}
      {/* <div className="secondaryNav">
                <DropDown options={dropDownOptions} />
            </div> */}
    </div>
  );
};

export default SecondaryNav;
