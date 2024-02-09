import React from 'react'
import s1 from "../../assets/images/s1.png"
import s2 from "../../assets/images/s2.png"
import s3 from "../../assets/images/s3.png"
import s4 from "../../assets/images/s4.png"
import "./story.css"

const Stories = () => {
  return (
    <section className='section'>

        <div className='story_container '>
            <h1 className='title green'>Customer Favorites</h1>
            <div className='paragraph'>Read the real-life experiences of individuals who've embraced <br/>
            the EverWell journey and transformed their wellness.</div>
            <div className='grid grid-4'>
  <img src={s4} alt="" />  
  <img src={s3} alt="" />
  <img src={s2} alt="" />
  <div className="last-image-container">
    <img src={s1} alt="" className='opacity'/>
    <button className="button-middle">Read more</button>
  </div>
</div>
        </div>

    </section>
  )
}

export default Stories