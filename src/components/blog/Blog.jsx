import React from 'react'
import b2 from "../../assets/images/b2.png"
import b1 from "../../assets/images/b1.png"
import "./blog.css"

const Blog = () => {
  return (
    <section className='section'>
        
        <div className='flex container-blog'>
        <div className='grid grid-2'>

        <div className='content_container flex-col p5'>
            <h1 className='title'>A Wellness Revolution in Liquid Form</h1>
            <p className='paragraph'>Step into a wellness revolution with EverWell's liquid vitamins. 
            We're redefining the way you nurture your health, one dropper at a time.
             Our expertly blended formulas target your mind, body, and spirit, 
             providing support where you need it most. Easy to use, easy to love.</p>
             <button className='button'>Shop Now</button>
        </div>

        <div className='flex center'>
    <img src={b2} alt="" />
</div>
       

        <div className='content_container flex-col p5'>
            <h1 className='title'>Your Path to Total Wellness Begins Here</h1>
            <p className='paragraph'>Discover a world of well-being at EverWell, 
            where we're on a mission to enhance every aspect of your health.
             We believe that true wellness encompasses the harmony of mind,
              body, and spirit. That's why we've carefully 
              crafted a range of organic and rejuvenating products.</p>
             <button className='button'>Shop Now</button>
        </div>

        <div className='flex center'>
    <img src={b1} alt="" />
</div>
       
       

        </div>
        </div>
    </section>
    
  )
}

export default Blog