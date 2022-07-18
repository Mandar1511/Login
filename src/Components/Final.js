import React from 'react';
import '../Styling/Final.css'
import Email from './Email.js'
import InputAdornments from './Password';
import img1 from "../Images/img1.png";
const Final =()=>{
return(
    <>
    <div className='main'>
    <div className='div1'>
    <Email/>
    <InputAdornments/>
    <br></br>
    <button className='btn'>Login</button>
    <p className='conti'>or continue with</p>
    <div className='comimages'>
    <img src="https://img.icons8.com/color/48/000000/facebook-circled--v1.png"/>
    <img src="https://img.icons8.com/ios-filled/50/000000/mac-os.png"/>
    <img src="https://img.icons8.com/fluency/48/000000/google-logo.png"/>
    </div>
    </div>
    <div className='div2'>
        <img className="img1" src={img1} />
    </div>
    </div>
    </>
)
}
export default Final;