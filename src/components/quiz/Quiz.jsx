import React from 'react'
import quiz from "../../assets/images/quiz.svg"
import "./quiz.css"

const Quiz = () => {
  return (
    <section className='section'>
      
        <div className='container-quiz  center ' data-aos="zoom-in" data-aos-duration="1000">
            <div className='quiz-container flex center '> 

            <div className='quiz-content flex-col'>
                <h2 className='quiz-title'><span className='font-thin'>Discover Your Ideal </span>  <br/>EverWell Product</h2>
                
                <button className='button-white'>Take the Quiz</button>
            </div>

            <div className='flex '>
                <img src={quiz} alt="" />
            </div>
            </div>
        </div>
    </section>
  )
}

export default Quiz