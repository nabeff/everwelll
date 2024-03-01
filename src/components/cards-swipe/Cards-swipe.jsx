import React from 'react';
import panel3 from "../../assets/images/panel3.png"
import focus from "../../assets/images/focus.png"
import panel2 from "../../assets/images/panel2.png"
import stars from "../../assets/images/stars.png"
import "./cards-swipe.css"

import { Swiper, SwiperSlide } from 'swiper/react'; // Import Swiper and SwiperSlide
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { EffectCoverflow } from 'swiper/modules'; // Import EffectCoverflow from modules

const Cardswipe = () => {
  return (
    <section className=' cards'>
        
        <div className='section_title flex' data-aos="fade-up">
            <h1 className='title green'>Customer Favorites</h1>
            <div className='green-bluered'></div>
        </div>

        <Swiper
  effect={'coverflow'}
  grabCursor={true}
  centeredSlides={true}
  slidesPerView={'auto'}
  coverflowEffect={{
    rotate: -10,
    stretch: 0,
    depth: 300,
    modifier: 1,
    slideShadows: false,
  }}
// Enable navigation arrows
  pagination={false}
  modules={[EffectCoverflow]} // Include EffectCoverflow module
  className="mySwiper"
  initialSlide={1} // Set initial slide to the middle one
>
          <div className='flex gap center' data-aos="fade-up">

            <SwiperSlide className='cardswipe flex-col blue apple'>
                <img src={panel3} alt="" />
                <h3 className='desc'>Lung Detox: "Lung Cleanser"</h3>

                <div className='flex-rate'>
                  <img src={stars} alt="" /><span className='rate'>4.5/5</span>
                </div>

                <div className='container_flex'>
                  <div className='bold'>$130</div><div className='bold gray'>$160</div><div className='discount'>-30%</div>
                </div>
            </SwiperSlide>

            <SwiperSlide className='cardswipe flex-col scale pink apple'>
                <img src={focus} alt="" />
                <h3 className='desc'>Lung Detox: "Lung Cleanser"</h3>

                <div className='flex-rate'>
                  <img src={stars} alt="" /><span className='rate'>4.5/5</span>
                </div>
                <div className='container_flex space-between '>
                  <div className='bold'>$120</div>
                </div>
            </SwiperSlide>

            <SwiperSlide className='cardswipe flex-col yellow apple'>
                <img src={panel2} alt="" />
                <h3 className='desc'>Lung Detox: "Lung Cleanser"</h3>
                <div className='flex-rate'>
                  <img src={stars} alt="" /><span className='rate'>4.5/5</span>
                </div>
                <div className='container_flex'>
                  <div className='bold'>$80</div>
                </div>
            </SwiperSlide>

          </div>


        </Swiper>

        <div className='button-center center' data-aos="zoom-in" >
        <button className='button'>View All</button>
      </div>

       
    </section>
  )
}

export default Cardswipe;
