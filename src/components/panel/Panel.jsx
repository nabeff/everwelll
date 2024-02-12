import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/navigation';
import panel from "../../assets/images/panel.png"
import pan2 from "../../assets/images/pan2.svg"
import pan3 from "../../assets/images/pan3.svg"

import './panel.css';


import { Navigation } from 'swiper/modules';


const Panel = () => {
  return (
   <section>
    
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

        <SwiperSlide className='bg-ye'>

        <div className='flex container-panel'>

             <div className='flex-col container-panel-desc'>
                <h1 className='big-title'>Immunity:<br/> Immune Vitality</h1>
                <p className='paragraph black'>Meet the superhero of your well-being journey:
                 'Immune Vitality.' It's your trusty sidekick in the battle 
                 for a strong and robust immune system. 
                 Whether you're facing the sneezes or just want to stay in your prime,
                  'Immune Vitality' has your back. With 'Immune Vitality,
                  ' you're not just well; you're invincible!</p>
                  <button className='button-big'>Buy Now</button>
            </div>

            <div className='flex flex-panel'>
                <img src={panel} alt="" />
            </div>
        </div>

        </SwiperSlide>

        <SwiperSlide className='bg-blue'>

             <div className='flex container-panel'>

             <div className='flex-col container-panel-desc'>
        <h1 className='big-title'>Immunity:<br/> Immune Vitality</h1>
        <p className='paragraph black'>Meet the superhero of your well-being journey:
         'Immune Vitality.' It's your trusty sidekick in the battle 
         for a strong and robust immune system. 
         Whether you're facing the sneezes or just want to stay in your prime,
          'Immune Vitality' has your back. With 'Immune Vitality,
          ' you're not just well; you're invincible!</p>
          <button className='button-big'>Buy Now</button>
    </div>

    <div className='flex flex-panel'>
        <img src={pan3} alt="" />
    </div>
        </div>

        </SwiperSlide>

        <SwiperSlide className='bg-pink'>

        <div className='flex container-panel'>

             <div className='flex-col container-panel-desc'>
                <h1 className='big-title'>Immunity:<br/> Immune Vitality</h1>
                <p className='paragraph black'>Meet the superhero of your well-being journey:
                 'Immune Vitality.' It's your trusty sidekick in the battle 
                 for a strong and robust immune system. 
                 Whether you're facing the sneezes or just want to stay in your prime,
                  'Immune Vitality' has your back. With 'Immune Vitality,
                  ' you're not just well; you're invincible!</p>
                  <button className='button-big'>Buy Now</button>
            </div>

            <div className='flex flex-panel'>
                <img src={pan2} alt="" />
            </div>
        </div>

        </SwiperSlide>

        
        
      </Swiper>
      </section>
  )
}

export default Panel