import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import detox from "../../assets/images/detox.png";
import focus from "../../assets/images/focus.png";
import imunity from "../../assets/images/imunity.png";
import stars from "../../assets/images/stars.png";
import { Navigation } from 'swiper/modules';
import "./cards.css";

const Cards = () => {
  const [isSwiperActive, setIsSwiperActive] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSwiperActive(window.innerWidth < 880);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className='cards'>
      <div className='section_title flex'>
        <h1>Wellness Wonders: Explore Our Collection</h1>
      </div>
      {isSwiperActive ? (
        <Swiper
        
          slidesPerView={1}
          spaceBetween={20}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide className='card flex-col blue'>
            <img src={detox} alt="" />
            <p className='desc'>Lung Detox: "Lung Cleanser"</p>
            <div className='flex-rate-center'>
              <img className='rate-img' src={stars} alt="" /><span className='rate'>4.5/5</span>
            </div>
            <div className='container_flex'>
              <div className='bold'>$130</div><div className='bold gray'>$160</div><div className='discount'>-30%</div>
            </div>
          </SwiperSlide>
          <SwiperSlide className='card flex-col  pink'>
            <img src={focus} alt="" />
            <p className='desc'>Lung Detox: "Lung Cleanser"</p>
            <div className='flex-rate-center'>
              <img className='rate-img' src={stars} alt="" /><span className='rate'>4.5/5</span>
            </div>
            <div className='container_flex space-between '>
              <div className='bold'>$120</div><button className='button-outline'>Add to Cart</button>
            </div>
          </SwiperSlide>
          <SwiperSlide className='card flex-col yellow'>
            <img src={imunity} alt="" />
            <p className='desc'>Lung Detox: "Lung Cleanser"</p>
            <div className='flex-rate-center'>
              <img className='rate-img' src={stars} alt="" /><span className='rate'>4.5/5</span>
            </div>
            <div className='container_flex'>
              <div className='bold'>$80</div>
            </div>
          </SwiperSlide>
        </Swiper>
      ) : (
        <div className='flex gap center'>
          <div className='card flex-col blue'>
            <img src={detox} alt="" />
            <p className='desc'>Lung Detox: "Lung Cleanser"</p>
            <div className='flex-rate-center'>
              <img className='rate-img' src={stars} alt="" /><span className='rate'>4.5/5</span>
            </div>
            <div className='container_flex'>
              <div className='bold'>$130</div><div className='bold gray'>$160</div><div className='discount'>-30%</div>
            </div>
          </div>
          <div className='card flex-col scale pink'>
            <img src={focus} alt="" />
            <p className='desc'>Lung Detox: "Lung Cleanser"</p>
            <div className='flex-rate-center'>
              <img className='rate-img' src={stars} alt="" /><span className='rate'>4.5/5</span>
            </div>
            <div className='container_flex space-between '>
              <div className='bold'>$120</div><button className='button-outline'>Add to Cart</button>
            </div>
          </div>
          <div className='card flex-col yellow'>
            <img src={imunity} alt="" />
            <p className='desc'>Lung Detox: "Lung Cleanser"</p>
            <div className='flex-rate-center'>
              <img className='rate-img' src={stars} alt="" /><span className='rate'>4.5/5</span>
            </div>
            <div className='container_flex'>
              <div className='bold'>$80</div>
            </div>
          </div>
        </div>
      )}
      <div className='button-center center'>
        <button className='button'>Shop Now</button>
      </div>
    </section>
  )
}

export default Cards;
