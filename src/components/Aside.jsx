import React from 'react'

const Aside = () => {
//   const handleChange = (e) => {
//     e.preventDefault();
//     console.log(e.target.value);
//     console.log(e.target.value);
//   }
  return (
    <form  className='aside'>
        <div className="form-group">
            <h3>Gender:-</h3>
            <input id="maleRadio" type='radio'  name='gender' value='Male'/>
            <label htmlFor='maleRadio'>Male</label>
            <br/>
            <input id="femaleRadio" type='radio' name ='gender' value='Female'/>
            <label htmlFor='femaleRadio'>Female</label>
        </div>
        <div className="form-group">
            <h3>Categories:-</h3>
            <input id="white" type='checkbox'  name='clothsColor' value='white'/>
            <label htmlFor='white'>White</label>
            <br/>
            <input id="foldedSleeve" type='checkbox' name ='clothsColor' value='foledSleeve'/>
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