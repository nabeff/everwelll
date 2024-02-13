import React from 'react'
import contact from "../../assets/images/contact.png";
import "./contact.css"

const Contact = () => {
  return (
    <section className='section'>
        <div className='flex  center contact-container '>

            <div className='flex image-contact'>
                <img src={contact} alt="" />
            </div>

            <div className='flex-col contact-content p4'>
                <h2 className='contact-title green'><span className='font-thin'>Join Our</span><br/>Community</h2>
                
                <p className='paragraph green'>Receive exclusive deals, discounts and many offers.</p>
                <div className='searchBox'><input className="searchInput apple" placeholder='Enter your email' type="text"/><button className='searchButton' >Join</button></div>
            </div>
        </div>
    </section> 
  )
}

export default Contact