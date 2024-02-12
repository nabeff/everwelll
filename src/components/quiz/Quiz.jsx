import React from 'react'
import quiz from "../../assets/images/quiz.svg"
import "./quiz.css"

const Quiz = () => {
  return (
    <section className='section'>
        <div className='container-quiz  center '>
            <div className='quiz-container flex center '> 
            <div className='quiz-content flex-col'>
                <h1 className='title white'>Discover Your Ideal <br/>EverWell Product</h1>
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