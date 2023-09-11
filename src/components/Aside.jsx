import React, { useState, useEffect, useContext } from "react";
import { productContext } from "../App";

const Aside = ({ changeData }) => {
  const { loader, setLoader } = useContext(productContext);
  const [gender, setGender] = useState({ gender: "" });
  const [isWhite, setIsWhite] = useState(true);
  const [isfoldedSleeve, setIsFoldedSleeve] = useState(true);
  const changeGender = (event) => {
    setLoader(true);
    setGender({ gender: event.target.value });
  };

  useEffect(() => {
    changeData({ gender: gender.gender, isWhite, isfoldedSleeve });
  }, [gender, isWhite, isfoldedSleeve]);
  return (
    <aside className="aside">
      <div className="form-groups" onChange={changeGender}>
        <h3>Type</h3>
        <input
          defaultChecked={true}
          id="maleRadio"
          type="radio"
          name="gender"
          value="Male"
        />
        <label htmlFor="maleRadio">Men's</label>
        <br />
        <input
          defaultChecked={true}
          id="maleRadio"
          type="radio"
          name="gender"
          value="Male"
        />
        <label htmlFor="maleRadio">Boy's</label>
        <br />
        <input id="femaleRadio" type="radio" name="gender" value="Female" />
        <label htmlFor="femaleRadio">Women's</label>
        <br />
        <input id="femaleRadio" type="radio" name="gender" value="Female" />
        <label htmlFor="femaleRadio">Girl's</label>
      </div>
      {/* price */}
      <div className="form-groups">
        <h3>Discount</h3>
        <input
          // checked={isWhite}
          // onChange={(e) => setIsWhite(e.target.checked)}
          id="white"
          type="checkbox"
          name="Discount"
          value="white"
        />
        <label htmlFor="white">upto 50% discount</label>
        <br />
        <input
          // checked={isfoldedSleeve}
          // onChange={(e) => setIsFoldedSleeve(e.target.checked)}
          id="foldedSleeve"
          type="checkbox"
          name="Discount"
          value="60"
        />
        <label htmlFor="foldedSleeve">upto 60% discount</label>
        <br />
        <input
          // checked={isfoldedSleeve}
          // onChange={(e) => setIsFoldedSleeve(e.target.checked)}
          id="foldedSleeve"
          type="checkbox"
          name="Discount"
          value="70"
        />
        <label htmlFor="foldedSleeve">upto 70% discount</label>
        <br />
        <input
          // checked={isfoldedSleeve}
          // onChange={(e) => setIsFoldedSleeve(e.target.checked)}
          id="foldedSleeve"
          type="checkbox"
          name="Discount"
          value="80"
        />
        <label htmlFor="foldedSleeve">upto 80% discount</label>
      </div>
      <div className="form-groups">
        <h3>Categories</h3>
        <input
          checked={isWhite}
          onChange={(e) => setIsWhite(e.target.checked)}
          id="white"
          type="checkbox"
          name="clothsColor"
          value="white"
        />
        <label htmlFor="white">White</label>
        <br />
        <input
          checked={isfoldedSleeve}
          onChange={(e) => setIsFoldedSleeve(e.target.checked)}
          id="foldedSleeve"
          type="checkbox"
          name="clothsColor"
          value="foldedSleeve"
        />
        <label htmlFor="foldedSleeve">Non White</label>
      </div>

      {/* // color */}
      <div className="form-groups">
        <h3>Color</h3>
        <input
          // checked={isWhite}
          // onChange={(e) => setIsWhite(e.target.checked)}
          id="pink"
          type="checkbox"
          name="clothsColor"
          value="white"
        />
        <label htmlFor="pink">Pink</label>
        <br />
        <input
          // checked={isfoldedSleeve}
          // onChange={(e) => setIsFoldedSleeve(e.target.checked)}
          id="foldedSleeve"
          type="checkbox"
          name="clothsColor"
          value="foldedSleeve"
        />
        <label htmlFor="foldedSleeve">Red</label>
        <br />

        <input
          // checked={isfoldedSleeve}
          // onChange={(e) => setIsFoldedSleeve(e.target.checked)}
          id="foldedSleeve"
          type="checkbox"
          name="clothsColor"
          value="foldedSleeve"
        />
        <label htmlFor="foldedSleeve">Magenta</label>
        <br />

        <input
          // checked={isfoldedSleeve}
          // onChange={(e) => setIsFoldedSleeve(e.target.checked)}
          id="foldedSleeve"
          type="checkbox"
          name="clothsColor"
          value="foldedSleeve"
        />
        <label htmlFor="foldedSleeve">Green</label>
        <br />

        <input
          // checked={isfoldedSleeve}
          // onChange={(e) => setIsFoldedSleeve(e.target.checked)}
          id="foldedSleeve"
          type="checkbox"
          name="clothsColor"
          value="foldedSleeve"
        />
        <label htmlFor="foldedSleeve">Yellow</label>
      </div>
    </aside>
  );
};

export default Aside;
