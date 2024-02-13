import React, { useState } from 'react';
import "./home.css";
import cleanser from "../../assets/images/cleanser.png";
import vita from "../../assets/images/vita.svg";
import min from "../../assets/images/min.svg";
import focus from "../../assets/images/focus.png";
import water3 from "../../assets/icons/water3.svg";
import arrow from "../../assets/images/arrow.svg";

const Home = () => {
  const [backgroundColorIndex, setBackgroundColorIndex] = useState(0);

  const toggleBackgroundColor = () => {
    setBackgroundColorIndex((prevIndex) => (prevIndex + 1) % 3);
    const homeSection = document.querySelector('.home-section');
    homeSection.classList.add('clicked');
    setTimeout(() => {
      homeSection.classList.remove('clicked');
    }, 700); // 300 milliseconds delay, same as transition duration
  };

  const backgroundColors = [
    "rgb(255,178,255)",
    "rgb(249,229,141)",
    "rgb(72, 135, 187)",
  ];

  const gradientColors = [
    "linear-gradient(180deg, rgba(255,178,255,1) 0%, rgba(255,255,255,1) 100%)",
    "linear-gradient(180deg, rgba(249,229,141,1) 0%, rgba(255,255,255,1) 100%)",
    "linear-gradient(180deg, rgba(141,204,255,1) 0%, rgba(255,255,255,1) 100%)",
  ];

  return (
    <section
      className='section home-section'
      id="home"
      style={{
        background: backgroundColors[backgroundColorIndex],
        backgroundImage: gradientColors[backgroundColorIndex],
      }}
    >
      <div className="water-container3 water" data-aos="zoom-out-right" data-aos-duration="3000">
        <img src={water3} alt="Water" className="water-image" />
      </div>

      <div className='home-container'>
        <div className='home_intro' data-aos="zoom-out-right" data-aos-duration="1100">
          <h2 className='title'>Nurturing Wellness,<br /> Nourishing Lives.</h2>
          <p className='description'>Elevate Your Wellness Journey with EverWell, Where Mind, Body,
            <br /> and Spirit Unite for a Healthier You.</p>
          <button className='button'>Shop Now</button>
        </div>

        <div className='home_image' data-aos="zoom-in-right" data-aos-duration="800">
          <div className='home-card'>
            <div className='size' data-aos="zoom-in">
              <img src={cleanser} alt="" />
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
