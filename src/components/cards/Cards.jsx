import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import detox from "../../assets/images/detox.png";
import focus from "../../assets/images/focus.png";
import imunity from "../../assets/images/imunity.png";
import newi from "../../assets/icons/New.png";
import stars from "../../assets/images/stars.png";
import water from "../../assets/images/water.png";
import water2 from "../../assets/icons/water2.svg";



import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

import "./cards.css";

const Cards = () => {
  

  return (
    <section className='section cardd'>
      
      <div className="water-container water" >
        <img src={water} alt="Water" className="water-image" data-aos="zoom-out-left" data-aos-duration="1100" />
      </div>

      <div className="water-container2 water" data-aos="zoom-out-left" data-aos-duration="1100" >
        <img src={water2} alt="Water" className="water-image" />
      </div>

      <div className='section_title flex' data-aos="zoom-in">

        <h1  >Wellness Wonders: Explore Our Collection</h1>
      </div>
       

      <Swiper data-aos="zoom-in"
        cssMode={true}
        navigation={true}
        
        
        mousewheel={true}
        keyboard={true}
        spaceBetween={20}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="card-container flex  center"
        breakpoints={{
          // When window width is >= 700px
          850: {
            slidesPerView: 1,
          },
          950: {
            slidesPerView: 2,
          },
          // When window width is >= 1024px
          1350: {
            slidesPerView: 3,
          },
        }}
      >
        <SwiperSlide className=' flex-col '>

          <div className='radius blue p2 hover'>

          <div>
            <img src={detox} alt="" />
          </div>
          
          <div className='flex-col card-content'>
           
            <p>
               Lung Detox: "Lung Cleanser"
            </p>

            <div className='flex-rating gap1 align-items'>
                  <img src={stars} alt="" /><span className='rate'>4.5/5</span>
                </div>

                <div className='container_flex'>
                  <div className='bold'>$130</div><div className='bold gray'>$160</div><div className='discount'>-30%</div>
                </div>
          </div>

          </div>

        </SwiperSlide>

        <SwiperSlide className=' flex-col scale '>

        <div className='radius pink p4 hover'>

          <div>
            <img src={focus} alt="" />
          </div>

          <div className='flex-col card-content'>
            
            <p>
               Lung Detox: "Lung Cleanser"
            </p>

            <div className='flex-rating gap1 align-items'>
        <img src={stars} alt="" /><span className='rate'>4.5/5</span>
      </div>
    
                <div className='container_flex space-between'>
                  <div className='bold'>$120</div><div><button className='button-outline'>Add to Cart</button></div>
                </div>
          </div>
          </div>

        </SwiperSlide>

        <SwiperSlide className='flex-col'>
  <div className='radius yellow p2 hover relative-position'>
    <div className='corner-image-container'>
      <img src={newi} alt="" className='card-corner-image' />
    </div>
    <div>
      <img src={imunity} alt="" />
    </div>
    <div className='flex-col card-content'>
      <p>Lung Detox: "Lung Cleanser"</p>
      <div className='flex-rating gap1 align-items'>
        <img src={stars} alt="" /><span className='rate'>4.5/5</span>
      </div>
      <div className='container_flex'>
        <div className='bold'>$80</div>
      </div>
    </div>
  </div>
      </SwiperSlide>




        </Swiper>

  
      <div className='button-center center' data-aos="zoom-in">
        <button className='button'>Shop Now</button>
      </div>

      
    </section>
  )
}

export default Cards;
