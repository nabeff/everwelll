import React, { useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './home.css';
import { Navigation } from 'swiper/modules';
import cleanser from "../../assets/images/cleaner.svg";
import vitality from "../../assets/images/mind.svg";
import mind from "../../assets/images/vitality.svg";

import bb1 from "../../assets/images/bb1.png";
import bb2 from "../../assets/images/bb2.png";
import bb3 from "../../assets/images/bb3.png";

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };

  const updateBackgroundColor = () => {
    const colors = [
      'background: rgb(141,204,255); background: linear-gradient(180deg, rgba(141,204,255,1) 0%, rgba(255,255,255,1) 100%);',
      'background: rgb(255,178,255); background: linear-gradient(180deg, rgba(255,178,255,1) 0%, rgba(255,255,255,1) 100%);',
      'background: rgb(249,229,141); background: linear-gradient(180deg, rgba(249,229,141,1) 0%, rgba(255,255,255,1) 100%);'
    ];
    const container = document.querySelector('.container-home');
    if (container) {
      container.style = colors[activeIndex % colors.length];
    }
  };

  useEffect(() => {
    updateBackgroundColor();
  }, [activeIndex]);

  const handleNextClick = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  // Define the slides array
  const slides = [
    { id: 1, image: cleanser },
    { id: 2, image: vitality },
    { id: 3, image: mind },
    { id: 1, image: cleanser },
    { id: 2, image: vitality },
  ];

  // Map product IDs to their names
  const productNames = {
    1: 'Cleanser',
    2: 'Vitality',
    3: 'Mind',
  };

  return (

    <section className='home ' id="home">

      <div className='container-home'>

        <div className='home_intro'>
          <h2 className='title'>Nurturing Wellness,<br/> Nourishing Lives.</h2>
          <p className='description'>Elevate Your Wellness Journey with EverWell, Where Mind, Body,
            <br/> and Spirit Unite for a Healthier You.</p>
          <button className='button'>Shop Now</button>
        </div>
        
        <div className='swiper-container'>
        <Swiper 
          navigation={{ nextEl: '.swiper-button-next' }}
          modules={[Navigation]} 
          onSlideChange={handleSlideChange}
          ref={swiperRef}
          loop={true}
          slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView: 1,
            },
            1340: {
                slidesPerView: 3,
              },
            1024: {
              slidesPerView: 2,
            },
          }}
        >
         {slides.map((slide, index) => (

            <SwiperSlide key={index} className={`produit ${activeIndex === index ? 'active' : ''}`}>

                <div className='size'>
                     <img 
                        src={slide.image} 
                        alt="" 
                        className={`product-image${swiperRef.current 
                        && swiperRef.current.swiper.realIndex === index ?
                        ' active' : ''} ${slide.id === 1 || slide.id === 2 
                        || slide.id === 3 ? 'scaled-image' : ''}`}
        
      />
    
      {(activeIndex === index && slide.id === 1) && (
        <img className="bb1" src={bb1} alt="" />
      )}

      {(swiperRef.current && swiperRef.current.swiper.realIndex === index) && (
        <>
          {slide.id === 2 && (
            <img className="bb2" src={bb2} alt="" />
          )}
          {slide.id === 3 && (
            <img className="bb3" src={bb3} alt="" />
          )}
        </>
      )}
                </div>
    
    <div className='text-center'>
      <h2 className='title_green'>Product {productNames[slide.id]}</h2>
      <h3 className='price'>Only for $30</h3>
      <button className='button-outline'>Add to Cart</button>
    </div>

            </SwiperSlide>
))}
        </Swiper>
        </div>
       
      </div>
      <div className="swiper-button-next" onClick={handleNextClick}></div>
    </section>
  );
}

export default Home;