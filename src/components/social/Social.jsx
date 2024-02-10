import React from 'react'
import social from "../../assets/images/social.png"
import so2 from "../../assets/images/so2.png"
import so3 from "../../assets/images/so3.png"
import so4 from "../../assets/images/so4.png"
import "./social.css"

const Social = () => {
  return (
    <section className='section'>
         <div className='section_title flex '>
            <h1>Stay Connected: Dive into Our Social Media Feed</h1>
        </div>

        <div className='social-container flex  center m2'>
            <div className="img">
                <img src={so4} alt="" />
                <button className='button-outline'>View Post</button>
                
            </div>
            <div className="img">
                <img src={social} alt="" />
                <button className='button-outline'>View Post</button>
                
            </div>
            <div className="img">
                <img src={so2} alt="" />
                <button className='button-outline'>View Post</button>
            </div>
            <div className="img">
                <img src={so3} alt="" />
                <button className='button-outline'>View Post</button>
            </div>
        </div>

<div className='flex center '><button className='button'>Follow us</button></div>
        

    </section>
  )
}

export default Social