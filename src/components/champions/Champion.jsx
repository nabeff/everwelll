import React from 'react'
import "./champion.css"
import left from "../../assets/images/left.png"
import right from "../../assets/images/right.png"

const Champion = () => {
  return (
    <section>
        <div className='flex champion-container'>
            
            <div>
            <img src={right} alt="" className='opacity'/>
            </div>

            <div className='flex-col align-text gap2 champion-content'>
                <h1 className='big-title'>Meet Our <br/> Wellness <br/> Champions</h1>
                <button className='button'>View Reviews</button>
            </div>

            <div>
            <img src={left} alt="" className='opacity'/>
            </div>
        </div>
    </section>
  )
}

export default Champion