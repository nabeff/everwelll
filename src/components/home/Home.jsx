import React, { useState } from 'react';
import "./home.css";
import show1 from "../../assets/images/show1.svg";
import show2 from "../../assets/images/show2.svg";
import show3 from "../../assets/images/show3.svg";
import vita from "../../assets/images/vita.svg";
import min from "../../assets/images/min.svg";
import water3 from "../../assets/icons/water3.svg";
import arrow from "../../assets/images/arrow.svg";

const Home = () => {
  const [backgroundColorIndex, setBackgroundColorIndex] = useState(0);

  const toggleBackgroundColor = () => {
    const homeSection = document.querySelector('.home-section');
    const centerImage = document.querySelector('.home-card .size img'); // Ensure the selector matches your HTML
  
    // Reset opacity and add the transition class
    centerImage.style.opacity = 0;
    centerImage.classList.add('image-transition');
  
    setTimeout(() => {
      centerImage.style.opacity = 1; // Trigger the transition
    }, 600); // Short delay to ensure the transition starts
  
    setBackgroundColorIndex((prevIndex) => (prevIndex + 1) % 3);
  
    setTimeout(() => {
      homeSection.classList.add('clicked');
      setTimeout(() => {
        homeSection.classList.remove('clicked');
        centerImage.classList.remove('image-transition'); // Remove the transition class to reset state
      }, 700); // Delay to match the transition duration
    }, 1000);
  };
  
  

  const backgroundColors = [
    "rgb(72, 135, 187)",
    "rgb(249,229,141)",
    "rgb(255,178,255)",
  ];

  const gradientColors = [
    "linear-gradient(180deg, rgba(141,204,255,1) 0%, rgba(255,255,255,1) 100%)",
    "linear-gradient(180deg, rgba(249,229,141,1) 0%, rgba(255,255,255,1) 100%)",
    
    "linear-gradient(180deg, rgba(255,178,255,1) 0%, rgba(255,255,255,1) 100%)",
  ];

  const images = [show1, show3, show2];

  return (

    <section
      className='section home-section'
      id="home"
      style={{
        background: backgroundColors[backgroundColorIndex],
        backgroundImage: gradientColors[backgroundColorIndex],
      }}
    >
      <div className="green-blurred-div-home"></div>
      <div className="green-blurred-div-right-home"></div>

      <div className="water-container3 water index" data-aos="zoom-out-right" data-aos-duration="3000">
        <img src={water3} alt="Water" className="water-image" />
      </div>

      <div className='home-container'>

        <div className='home_intro' data-aos="zoom-out-right" data-aos-duration="1100">
          <h2 className='title-home m2'>Nurturing Wellness,<br /> Nourishing Lives.</h2>
          <p className='description'>Elevate Your Wellness Journey with EverWell, Where Mind, Body,
            <br /> and Spirit Unite for a Healthier You.</p>
          <button className='button'>Shop Now</button>
        </div>

        <div className='home_image' data-aos="zoom-in-right" data-aos-duration="800">
          <div className='home-card'>
            <div className='size' data-aos="zoom-in">
              <img className='image-transition' src={images[backgroundColorIndex]} alt="" />
            </div>
            <div className='text-center'>
              <h2 className='title_green'>Lung Cleanser</h2>
              <h3 className='price'>Only for $30</h3>
              <button className='button-outline'>Add to Cart</button>
            </div>
          </div>
        </div>

        <div className='products '>
          <div className='flex-col text-center' data-aos="zoom-in-left" data-aos-duration="900">
            <div className='image-home'>
              <img src={vita} alt="" />
            </div>
            <div className='container_price'>
              <h2 className='title_green'>Lung Cleanser</h2>
              <h3 className='price'>Only for $30</h3>
              <button className='button-outline'>Add to Cart</button>
            </div>
          </div>

          <div className='flex-col text-center' data-aos="zoom-in-left" data-aos-duration="1200">
            <div className='image-home'>
              <img src={min} alt="" />
            </div>
            <div className='container_price'>
              <h2 className='title_green'>Lung Cleanser</h2>
              <h3 className='price'>Only for $30</h3>
              <button className='button-outline'>Add to Cart</button>
            </div>
          </div>
        </div>

        <div className='arrow' onClick={toggleBackgroundColor}>
          <img src={arrow} alt="" />
        </div>
      </div>
    </section>
    
  );
};

export default Home;
