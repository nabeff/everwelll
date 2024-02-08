import React from 'react'
import "./home.css"
import cleanser from "../../assets/images/cleanser.png"
import vitality from "../../assets/images/mind.png"
import mind from "../../assets/images/vitality.png"


const Home = () => {
  return (
    <section className='home section' id="home">

        <div className='container'>

            <div className='home_intro'>
                <h2 className='title'>Nurturing Wellness,<br/> Nourishing Lives.</h2>
                <p className='description'>Elevate Your Wellness Journey with EverWell, Where Mind, Body,
                <br/> and Spirit Unite for a Healthier You.</p>
                <button className='button'>Shop Now</button>
            </div>

            <div className='home_image'>
                <div className='size'>
                <img src={cleanser} alt="" />
                </div>
                <div className='text-center'>
                    <h2 className='title_green'>Lung Cleanser</h2>
                    <h3 className='price'>Only for $30</h3>
                    <button className='button-outline'>Add to Cart</button>
                </div>
            </div>

            <div className='products flex'>

               <div className='text-center'>
                
                <div className='image'>
                <img src={vitality} alt="" />
                </div>

                <div className='container_price'>
                <h2 className='title_green'>Lung Cleanser</h2>
                    <h3 className='price'>Only for $30</h3>
                    <button className='button-outline'>Add to Cart</button>
                </div>
                
               </div> 

               <div className='text-center'>
                <div>
                <img src={mind} alt="" />
                </div>
                <div className='container_price'>
                <h2 className='title_green'>Lung Cleanser</h2>
                    <h3 className='price'>Only for $30</h3>
                    <button className='button-outline'>Add to Cart</button>
                </div>
               </div>

            </div>

        </div>
    </section>
  )
}

export default Home