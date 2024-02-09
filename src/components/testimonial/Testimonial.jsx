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
        

      <div className='flex box-title'>
       
        <h1 className='title'>Echoes of Wellness: Dive <br/>into the EverWell Experience 
        <br/>through Customer Reviews"</h1>
        <button className='button-white'>View All</button>
        
      </div>

      <div className='grid grid-3'>

        <div className="flex-col box">     
            <img src={p5} alt="" />          
        </div> 

        <div className="flex-col box p2">
          <p>EverWell is a game-changer. Period.Their products are more than supplements; they're life enhancers. </p>
          <h4>Sarah Thompson</h4>
          <div className='flex-rate-center'>
            <img src={stars} alt="" /><span className='rate'>4.5/5</span>
            </div>
        </div>
        
        <div className=" flex-col box">     
            <img src={profile} alt="" />          
        </div> 
           
        <div className="flex-col box p2">
          <p>EverWell is a game-changer. Period.Their products are more than supplements; they're life enhancers. </p>
          <h4>Sarah Thompson</h4>
          <div className='flex-rate-center'>
            <img src={stars} alt="" /><span className='rate'>4.5/5</span>
            </div>
        </div>

        <div className="flex-col box">     
            <img src={p4} alt="" />          
        </div> 
           
        <div className="flex-col box p2">
          <p>EverWell is a game-changer. Period.Their products are more than supplements; they're life enhancers. </p>
          <h4>Sarah Thompson</h4>
          <div className='flex-rate-center'>
            <img src={stars} alt="" /><span className='rate'>4.5/5</span>
            </div>
        </div>

        <div className="flex-col box">     
            <img src={p2} alt="" />          
        </div> 
           
        <div className="flex-col box p2">
          <p>EverWell is a game-changer. Period.Their products are more than supplements; they're life enhancers. </p>
          <h4>Sarah Thompson</h4>
          <div className='flex-rate-center'>
            <img src={stars} alt="" /><span className='rate'>4.5/5</span>
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