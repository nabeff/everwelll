import React from 'react'
import stars from "../../assets/images/stars.png"
import profile from "../../assets/images/profile.png"
import p2 from "../../assets/images/p2.png"
import p3 from "../../assets/images/p3.png"
import p4 from "../../assets/images/p4.png"
import p5 from "../../assets/images/p5.png"


import "./testimonial.css"

const Testimonial = () => {
  return (
    <div className='section'>

      <div className='container grid adjust'>
        

      <div className='flex box-title' >
       
        <h1 className='title-testimonial '>Echoes of Wellness: Dive <br/>into the EverWell Experience 
        through Customer Reviews"</h1>
        <button className='button-white'>View All</button>
        
      </div>

      <div className='grid grid-3 apple' data-aos="fade-left" data-aos-duration="1500">

        <div className="flex-col box">     
            <img src={p5} alt="" />          
        </div> 

        <div className="testimonial-padding flex-col box center gap4">
          <div >
          <p>EverWell is a game-changer. Period.Their products are more than supplements; they're life enhancers. </p>
          <p className='bold '>Sarah Thompson</p>
          </div>
          <div className='flex-rate-center align-items justify-center'>
            <img className='rate-img' src={stars} alt="" /><span className='rate'>4.5/5</span>
            </div>
        </div>
        
        <div className=" flex-col box">     
            <img src={profile} alt="" />          
        </div> 
           
        <div className="testimonial-padding flex-col box center  gap4">
          <div >
          <p>EverWell is a game-changer. Period.Their products are more than supplements; they're life enhancers. </p>
          <p className='bold '>Sarah Thompson</p>
          </div>
          <div className='flex-rate-center align-items justify-center'>
            <img className='rate-img' src={stars} alt="" /><span className='rate'>4.5/5</span>
            </div>
        </div>

        <div className="flex-col box">     
            <img src={p4} alt="" />          
        </div> 
           
        <div className="testimonial-padding flex-col box center  gap4">
          <div >
          <p>EverWell is a game-changer. Period.Their products are more than supplements; they're life enhancers. </p>
          <p className='bold '>Sarah Thompson</p>
          </div>
          <div className='flex-rate-center align-items justify-center'>
            <img className='rate-img' src={stars} alt="" /><span className='rate'>4.5/5</span>
            </div>
        </div>

        <div className="flex-col box">     
            <img src={p2} alt="" />          
        </div> 
           
        <div className="testimonial-padding flex-col box center  gap4">
          <div >
          <p>EverWell is a game-changer. Period.Their products are more than supplements; they're life enhancers. </p>
          <p className='bold '>Sarah Thompson</p>
          </div>
          <div className='flex-rate-center align-items justify-center'>
            <img className='rate-img' src={stars} alt="" /><span className='rate'>4.5/5</span>
            </div>
        </div>

        <div className="flex-col box">     
            <img src={p3} alt="" />          
        </div> 
           
       
      
      </div>

      </div>
      </div>
    
  )
}

export default Testimonial