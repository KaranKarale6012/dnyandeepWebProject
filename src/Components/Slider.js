import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import FirstDay from "../Assets/Firstday.jpg"

import "../CSS/Slider.css"

// import required modules
import { EffectCoverflow, Pagination,Autoplay } from "swiper";

 function Slider() {
  return (
    <>

     <div className="slider_Info">
        <h1>Some <span>Captured</span> Moments</h1>
     </div>
      <Swiper
       autoplay={{
        delay: 1500,
        disableOnInteraction: false,
      }}
        grabCursor={true}
        centeredSlides={false}
        slidesPerView={"auto"}
       
        pagination={false}
        modules={[Autoplay,EffectCoverflow, Pagination]}
        className="mySlider"
      >
        <SwiperSlide className="slider_img">
        <img src={FirstDay} />
        </SwiperSlide>
        <SwiperSlide className="slider_img">
        <img src={FirstDay} />
        </SwiperSlide>
        <SwiperSlide className="slider_img">
        <img src={FirstDay} />
        </SwiperSlide>
        <SwiperSlide className="slider_img">
        <img src={FirstDay} />
        </SwiperSlide>
        <SwiperSlide className="slider_img">
        <img src={FirstDay} />
        </SwiperSlide>
        <SwiperSlide className="slider_img">
        <img src={FirstDay} />
        </SwiperSlide>
        <SwiperSlide className="slider_img">
        <img src={FirstDay} />
        </SwiperSlide>
        <SwiperSlide className="slider_img">
        <img src={FirstDay} />
        </SwiperSlide>
        <SwiperSlide className="slider_img">
        <img src={FirstDay} />
        </SwiperSlide>
        <SwiperSlide className="slider_img">
        <img src={FirstDay} />
        </SwiperSlide>
        <SwiperSlide className="slider_img">
        <img src={FirstDay} />
        </SwiperSlide>
    
      </Swiper>

    </>
  );
}
export default Slider
