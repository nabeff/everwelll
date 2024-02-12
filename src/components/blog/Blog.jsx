import React from 'react'
import b2 from "../../assets/images/b3.png"
import b1 from "../../assets/images/b1.png"
import "./blog.css"

const Blog = () => {
  return (
    <section className='section '>

         <div className='blog-container flex-col'>


         <div className='flex blog-card '>
               <div className='blog-content flex-col radius-left'>
                <h1 >A Wellness Revolution in Liquid Form</h1>
                <p className='paragraph'>Step into a wellness revolution with EverWell's liquid vitamins. We're redefining the way you nurture your health, one dropper at a time. Our expertly blended formulas target your mind, body, and spirit, providing support where you need it most. Easy to use, easy to love.</p>
            <button className='button'>Shop Now</button>
          </div>

        <div className="img-container ">
            <img className='radius-right-top' src={b2} alt="" />
         </div>

        </div>

        <div className='flex reverse blog-card-right '>
  <div className='blog-content flex-col radius-right'>
    <h1 >A Wellness Revolution in Liquid Form</h1>
    <p className='paragraph'>Step into a wellness revolution with EverWell's liquid vitamins. We're redefining the way you nurture your health, one dropper at a time. Our expertly blended formulas target your mind, body, and spirit, providing support where you need it most. Easy to use, easy to love.</p>
    <button className='button'>Shop Now</button>
  </div>
  <div className="img-container">
    <img className='radius-right-bot' src={b1} alt="" />
  </div>
        </div>


         </div>

</section>
    
  )
}

export default Blog
