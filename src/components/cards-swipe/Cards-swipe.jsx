import React from 'react';
import panel3 from "../../assets/images/panel3.png"
import focus from "../../assets/images/focus.png"
import panel2 from "../../assets/images/panel2.png"
import stars from "../../assets/images/stars.png"
import "./cards-swipe.css"

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { EffectCoverflow, Pagination } from 'swiper/modules';

const Cardswipe = () => {
  return (
    <section className='section cards'>
        
        <div className='section_title flex '>
            <h1 className='green'>Customer Favorites</h1>
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
          pagination={false}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
          initialSlide={1} // Set initial slide to the middle one
        >
          <div className='flex gap center '>

            <SwiperSlide className='cardswipe flex-col blue'>
                <img src={panel3} alt="" />
                <p className='desc'>Lung Detox: "Lung Cleanser"</p>
                <div className='flex-rate'>
                  <img src={stars} alt="" /><span className='rate'>4.5/5</span>
                </div>
                <div className='container_flex'>
                  <div className='bold'>$130</div><div className='bold gray'>$160</div><div className='discount'>-30%</div>
                </div>
            </SwiperSlide>

            <SwiperSlide className='cardswipe flex-col scale pink'>
                <img src={focus} alt="" />
                <p className='desc'>Lung Detox: "Lung Cleanser"</p>
                <div className='flex-rate'>
                  <img src={stars} alt="" /><span className='rate'>4.5/5</span>
                </div>
                <div className='container_flex space-between '>
                  <div className='bold'>$120</div>
                </div>
            </SwiperSlide>

            <SwiperSlide className='cardswipe flex-col yellow'>
                <img src={panel2} alt="" />
                <p className='desc'>Lung Detox: "Lung Cleanser"</p>
                <div className='flex-rate'>
                  <img src={stars} alt="" /><span className='rate'>4.5/5</span>
                </div>
                <div className='container_flex'>
                  <div className='bold'>$80</div>
                </div>
            </SwiperSlide>

          </div>


        </Swiper>

       
    </section>
  )
}

export default Cardswipe;
