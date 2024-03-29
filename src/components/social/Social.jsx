import React from 'react'
import social from "../../assets/images/social.png"
import so2 from "../../assets/images/so2.png"
import so3 from "../../assets/images/so3.png"
import so4 from "../../assets/images/so4.png"
import "./social.css"

const Social = () => {
  return (
    <section className='section'>
         <div className=' flex center m2'>
            <h1 className='title'>Stay Connected: Dive into Our Social Media Feed</h1>
        </div>

<div className='social-content flex gap1'>
        <div className='social-container flex  center m2'>
            <div className="img">
                <img src={so4} alt="" />
                <button className='button-outline'>View Post</button>
                
            </div>
            <div className="img">
                <img src={social} alt="" />
                <button className='button-outline'>View Post</button>
                
            </div>
            
        </div>
        <div className='social-container flex  center m2'>
            <div className="img">
                <img src={so2} alt="" />
                <button className='button-outline'>View Post</button>
                
            </div>
            <div className="img">
                <img src={so3} alt="" />
                <button className='button-outline'>View Post</button>
                
            </div>
            
        </div>
        </div>
<div className='social-button flex center '><button className='button'>Follow us</button></div>
        

    </section>
  )
}

export default Social