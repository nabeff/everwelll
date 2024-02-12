import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import c3 from "../../assets/images/c3.png";
import c2 from "../../assets/images/c2.png";
import c1 from "../../assets/images/c1.png";
import water5 from "../../assets/icons/water5.svg";
import water6 from "../../assets/icons/water7.svg";

import "./comment.css";

import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

const Comment = () => {
  return (
    <section className='section comment-sections'>

        <div className="water-container5 water" data-aos="zoom-out-left" data-aos-duration="3000" >
        <img src={water5} alt="Water" className="water-image" />
      </div>

      <div className="water-container6 water7" data-aos="zoom-out-left" data-aos-duration="3000" >
        <img src={water6} alt="Water" className="water-image" />
      </div>

      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper bg-tr apple"
        breakpoints={{
          // When window width is >= 700px
          600: {
            slidesPerView: 1,
          },
          1050: {
            slidesPerView: 2,
          },
          // When window width is >= 1024px
          1400: {
            slidesPerView: 3,
          },
        }}
      >
        <SwiperSlide>
          <div className='comment-container flex-col shadow'>
            <img src={c3} alt="" />
            <div className='flex-col comment p2'>
              <div className='flex space-between m1 '><h4>By admin</h4><span><p>27/10/2023</p></span></div>
              <div><p className='bold black text-start'>The Healing Power of Mindful Nutrition: A Holistic Approa...</p></div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='comment-container flex-col shadow'>
            <img src={c2} alt="" />
            <div className='flex-col comment p2'>
              <div className='flex space-between m1'><h4>By admin</h4><span><p>27/10/2023</p></span></div>
              <div><p className='bold black text-start'>The Healing Power of Mindful Nutrition: A Holistic Approa...</p></div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='comment-container flex-col shadow'>
            <img src={c1} alt="" />
            <div className='flex-col comment p2'>
              <div className='flex space-between m1'><h4>By admin</h4><span><p>27/10/2023</p></span></div>
              <div><p className='bold black text-start'>The Healing Power of Mindful Nutrition: A Holistic Approa...</p></div>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>
    </section>
  )
}

export default Comment;
