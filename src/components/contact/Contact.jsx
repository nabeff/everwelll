import React from 'react'
import contact from "../../assets/images/contact.png";
import "./contact.css"

const Contact = () => {
  return (
    <section className='section'>
        <div className='flex  center contact-container '>

            <div className='flex'>
                <img src={contact} alt="" />
            </div>

            <div className='flex-col gap contact-content p5'>
                <h2 className='title green'>Join Our<br/>Community</h2>
                
                <p className='paragraph green'>Receive exclusive deals, discounts and many offers.</p>
                <div className='searchBox'><input className="searchInput" placeholder='Enter your email' type="text"/><button className='searchButton' >Join</button></div>
            </div>
        </div>
    </section>
  )
}

export default Contact