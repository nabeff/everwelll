import React from 'react'
import botle from "../../assets/images/botle.png"
import everwell from "../../assets/images/everwell.png"
import "./infine.css"

const Infinite = () => {
  return (
    <div class="logos">

      <div class="logos-slide flex-col ">
        
      <img src={botle} alt="" />
      <img className='above' src={everwell} alt="" />
        <img src={botle} alt="" />
        <img className='above' src={everwell} alt="" />
        <img src={botle} alt="" />
        <img className='above' src={everwell} alt="" />
        <img src={botle} alt="" />
        <img className='above' src={everwell} alt="" />
        <img src={botle} alt="" />
        <img className='above' src={everwell} alt="" />
        <img src={botle} alt="" />
        <img className='above' src={everwell} alt="" />
              </div>

      <div class="logos-slide flex-col">
      <img src={botle} alt="" />
      <img className='above' src={everwell} alt="" />
        <img src={botle} alt="" />
        <img className='above' src={everwell} alt="" />
        <img src={botle} alt="" />
        <img className='above' src={everwell} alt="" />
        <img src={botle} alt="" />
        <img className='above' src={everwell} alt="" />
        <img src={botle} alt="" />
        <img className='above' src={everwell} alt="" />
        <img src={botle} alt="" />
        <img className='above' src={everwell} alt="" />
      </div>

    </div>
  )
}

export default Infinite
