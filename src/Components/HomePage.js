import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import board from "../Assets/board_logo.png"
import Children from "../Assets/children.png"
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../CSS/Homepage.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

 function HomePage() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
       
        <SwiperSlide><img src= {board} /></SwiperSlide>
        <SwiperSlide><img src= {Children} /></SwiperSlide>
        <SwiperSlide><img src= {board} /></SwiperSlide>
        <SwiperSlide><img src= {board} /></SwiperSlide>
        <SwiperSlide><img src= {board} /></SwiperSlide>
    

     </Swiper>
    </>
  );
}
export default HomePage;
