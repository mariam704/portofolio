import React from 'react'
import './Portofilo.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import capture2  from "../../img/Capture2.PNG";
import Capture6  from "../../img/Capture6.PNG";
import capture3  from "../../img/Capture3.PNG";
import capture4  from "../../img/Capture4.PNG";
import capture7  from "../../img/Capture7.PNG";

const Portofilo = ({items}) => {
  return (
    <div className='portfolio'>
        <span>Recent project</span>
        <span>portfolio</span>
        <Swiper 
          spaceBetween={30}
           slidesPerView={3}
           grabCursor={true}
           className="portfolio-slider">
        <SwiperSlide>
            
        <img src={capture7} alt=""/>
        <a href='https://drive.google.com/file/d/1WH_8_9N4bkJTXhCOZ7NjpI7HY4m3IxBR/view?usp=sharing'>Show demo</a>
        </SwiperSlide>
        <SwiperSlide>
        <img src={capture2} alt=""/>
        <a href='https://mariam704.github.io/e-commerec/'>Show demo</a>
        </SwiperSlide>
        <SwiperSlide>
        <img src={capture4} alt=""/>
        <a href=''>Show demo</a>
        </SwiperSlide>
        <SwiperSlide>
        <img src={Capture6} alt=""/>
        <a href='https://mariam704.github.io/-signup-form/'>Show demo</a>
        </SwiperSlide>
        
        <SwiperSlide>
        <img src={capture3} alt=""/>
        <a href='https://mariam704.github.io/booking-systym/'>Show demo</a>
        </SwiperSlide>
        </Swiper>

    
    </div>
  )
}

export default Portofilo