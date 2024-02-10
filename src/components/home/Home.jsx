import React, { useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './home.css';
import { Navigation } from 'swiper/modules';
import cleanser from "../../assets/images/cleaner.svg";
import vitality from "../../assets/images/mind.svg";
import mind from "../../assets/images/vitality.svg";
import bb2 from "../../assets/images/bb1.png";
import bb1 from "../../assets/images/bb2.png";
import bb3 from "../../assets/images/bb3.png";

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };

  const updateBackgroundColor = () => {
    const colors = ['red', 'pink', 'green'];
    const container = document.querySelector('.container-home');
    if (container) {
      container.style.backgroundColor = colors[activeIndex % colors.length];
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

  // Add the last two slides at the beginning and the first two slides at the end
  const slides = [
    { id: 1, image: cleanser },
    { id: 2, image: vitality },
    { id: 3, image: mind },
    { id: 1, image: cleanser },
    { id: 2, image: vitality },
  ];

  return (
    <section className='home section' id="home">
      <div className='container-home'>
        <div className='home_intro'>
          <h2 className='title'>Nurturing Wellness,<br/> Nourishing Lives.</h2>
          <p className='description'>Elevate Your Wellness Journey with EverWell, Where Mind, Body,
            <br/> and Spirit Unite for a Healthier You.</p>
          <button className='button'>Shop Now</button>
        </div>
        <Swiper 
          navigation={{ nextEl: '.swiper-button-next' }} // Show only one arrow for pagination
          modules={[Navigation]} 
          onSlideChange={handleSlideChange}
          ref={swiperRef}
          loop={true} // Make navigation infinite
          slidesPerView={3} // Show three slides per view on PC viewport
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index} className='produit'>
              <div className='size'>
                <img src={slide.image} alt="" />
              </div>
              <div className='text-center'>
                <h2 className='title_green'>Product {slide.id}</h2>
                <h3 className='price'>Only for $30</h3>
                <button className='button-outline'>Add to Cart</button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-button-next" onClick={handleNextClick}></div> {/* Arrow element for pagination */}
      </div>
    </section>
  );
}

export default Home;
