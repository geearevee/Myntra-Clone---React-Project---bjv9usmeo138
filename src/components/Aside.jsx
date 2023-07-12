import React, {useState,useEffect,useContext} from 'react'
import { productContext } from '../App';

const Aside = ({changeData}) => {
  const {loader,setLoader, data,setData, setPageData} = useContext(productContext);
    const [gender, setGender] = useState({ gender: "" });
    const [isWhite, setIsWhite] = useState(true);
    const [isfoldedSleeve, setIsFoldedSleeve] = useState(true); 
    const changeGender = (event) => {
        setLoader(true);
        setGender({gender: event.target.value });
    };
    
    useEffect(() => {
      changeData({gender : gender.gender,isWhite,isfoldedSleeve})
    },[gender,isWhite,isfoldedSleeve])
    
    function greater(){
        let newData = data.filter(item => item.discounted_price>600);
        setPageData(newData);
      }
      
      function small(){
        let newData = data.filter(item => item.discounted_price<600);
        setPageData(newData);

    }
  return (
    <aside  className='aside' >
        <div className="form-groups" onChange={changeGender}>
            <h3>Gender:-</h3>
            <input defaultChecked={true} id="maleRadio" type='radio'  name='gender' value='Male'/>
            <label htmlFor='maleRadio'>Male</label>
            <br/>
            <input  id="femaleRadio" type='radio' name ='gender' value='Female'/>
            <label htmlFor='femaleRadio'>Female</label>
        </div>
        <div className="form-groups">
            <h3>Categories:-</h3>
            <input checked={isWhite}
                onChange={(e) => setIsWhite(e.target.checked)}  
                id="white" 
                type='checkbox'  
                name='clothsColor' 
                value='white'/>
            <label htmlFor='white'>White</label>
            <br/>
            <input checked={isfoldedSleeve}
                onChange={(e) => setIsFoldedSleeve(e.target.checked)}  
                id="foldedSleeve" 
                type='checkbox' 
                name ='clothsColor' 
                value='foldedSleeve'/>
            <label htmlFor='foldedSleeve'>Non White</label>
        </div>
        <button onClick={greater}>greater than 600</button>
        <button onClick={small}>small than 600</button>
    </aside>
    )
}

export default Aside
/* 
Gender :=
input type="radio" name="gender" value="male"
input type="radio" name="gender" value="female"
*/

/* 

import React, { useState } from "react";

export const Checkbox = () => {
  const [permission, setPermission] = useState(false);

  return (
    <input
      type="checkbox"
      checked={permission}
      onChange={(e) => setPermission(e.target.checked)}
    />
  );
};

*/

/* 

import React, { useState } from "react";

const App = () => {
  const [values, setValues] = useState({ gender: "" });
  const setGender = (event) => {
    setValues({ ...values, gender: event.target.value });
  };
  return (
    <div onChange={setGender}>
      <input type="radio" value="MALE" name="gender" /> Male
      <input type="radio" value="FEMALE" name="gender" /> Female
    </div>
  );
};

export default App;

*/