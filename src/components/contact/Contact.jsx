import React from 'react'
import contact from "../../assets/images/contact.png";
import "./contact.css"

const Contact = () => {
  return (
    <section className='section'>
        <div className='flex gap center contact-container '>
            <div className='flex-1'>
                <img src={contact} alt="" />
            </div>
            <div className='flex-col flex-1 gap contact-content p5'>
                <h2 className='title'>Join Our<br/>Community</h2>
                
                <p>Receive exclusive deals, discounts and many offers.</p>
                <div><input type="text" className='input'/><button className='button'>Join</button></div>
            </div>
        </div>
    </section>
  )
}

export default Contact