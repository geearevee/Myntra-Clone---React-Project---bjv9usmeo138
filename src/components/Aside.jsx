import React, {useState} from 'react'

const Aside = () => {
    const [gender, setGender] = useState("male");
    const [isWhite, setIsWhite] = useState(true);
    const [isfoldedSleeve, setIsFoldedSleeve] = useState(true); 
    const handleChange = (e,btnType) => {
        e.preventDefault();
        if(btnType === "radio"){
            if(e.target.value === "Male"){
                setGender("male")
            }else{
                setGender("female");
            }
            return null;
        }

        if(e.target.checked){
            if(e.target.value === "white"){
                setIsWhite(true)
            }
            if(e.target.value === "foldedSleeve"){
                setIsFoldedSleeve(true);
            }
        }else{
            if(e.target.value === "white"){
                setIsWhite(false)
            }
            if(e.target.value === "foldedSleeve"){
                setIsFoldedSleeve(false);
            }
        }
        // console.log(e.target.value);
        // console.dir(e.target.checked);
        // console.log(e.target.value);
    }
  return (
    <form  className='aside'>
        <div className="form-group">
            <h3>Gender:-</h3>
            <input defaultChecked={true} onChange={(e) => handleChange(e, "radio")} id="maleRadio" type='radio'  name='gender' value='Male'/>
            <label htmlFor='maleRadio'>Male</label>
            <br/>
            <input onChange={(e) => handleChange(e, "radio")} id="femaleRadio" type='radio' name ='gender' value='Female'/>
            <label htmlFor='femaleRadio'>Female</label>
        </div>
        <div className="form-group">
            <h3>Categories:-</h3>
            <input defaultChecked={true} onChange={(e) => handleChange(e, "checkbox")} id="white" type='checkbox'  name='clothsColor' value='white'/>
            <label htmlFor='white'>White</label>
            <br/>
            <input defaultChecked={true} onChange={(e) => handleChange(e, "checkbox")} id="foldedSleeve" type='checkbox' name ='clothsColor' value='foldedSleeve'/>
            <label htmlFor='foldedSleeve'>Non White</label>
        </div>
    </form>
    )
}

export default Aside
/* 
Gender :=
input type="radio" name="gender" value="male"
input type="radio" name="gender" value="female"
*/