import React from 'react'
import "./champion.css"
import left from "../../assets/images/left.png"
import right from "../../assets/images/right.png"
import water4 from "../../assets/icons/water4.svg"

const Champion = () => {
  return (
    <section>
        <div className='flex champion-container'>
            
            
            <div className="water-container4 water" data-aos="zoom-out-right" data-aos-duration="2000">
              <img className='water-image4' src={water4}  />
          </div>

            <div className='panel-display zindex' data-aos="zoom-out-right" data-aos-duration="1100">
            <img src={right} alt="" className='opacity'/>
            </div>

            <div className='flex-col align-text gap2 champion-content' data-aos="zoom-in" data-aos-duration="1000">
                <h1 className='champion-title green'>Meet Our <br/> Wellness <br/> Champions</h1>
                <button className='button'>View Reviews</button>
            </div>

            <div className='panel-display zindex' data-aos="zoom-out-left" data-aos-duration="1100">
            <img src={left} alt="" className='opacity'/>
            </div>
        </div>
    </section>
  )
}

export default Champion