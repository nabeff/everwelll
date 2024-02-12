import React from 'react'
import s1 from "../../assets/images/s1.png"
import s2 from "../../assets/images/s2.png"
import s3 from "../../assets/images/s3.png"
import s4 from "../../assets/images/s4.png"
import "./story.css"

const Stories = () => {
  return (
    <section className='section'>
         <div className='social_title flex-col center '>
            <h1 className='title'>Success Stories</h1>
            <p className='paragraph'>Read the real-life experiences of individuals who've embraced <br/> the EverWell journey and transformed their wellness.</p>
        </div>

<div className='social-content flex '>
        <div className='story-container flex  center '>
            <div className="img">
                <img src={s4} alt="" />
                <button className='button-outline'>View Post</button>
                
            </div>
            <div className="img">
                <img src={s2} alt="" />
                <button className='button-outline'>View Post</button>
                
            </div>
            
        </div>
        <div className='story-container flex  center '>
            <div className="img">
                <img src={s3} alt="" />
                <button className='button-outline'>View Post</button>
                
            </div>
            <div className="img">
                <img src={s1} alt="" />
                <button className='button-outline'>View Post</button>
                
            </div>
            
        </div>
        </div>

        

    </section>
  )
}

export default Stories