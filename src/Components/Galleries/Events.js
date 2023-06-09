import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import Event_img from "../Sub_Assets/events.jpg"



// import required modules
import { EffectCoverflow, Pagination,Autoplay } from "swiper";

 function Events() {
  return (
    <>
   <div className="Events">
   <div className="SubEvents1">
   <div className="Event_Info">
        <h1>Some Captured <span>Independence Day</span> Moments</h1>
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
        className="Event-slider"
      >
        <SwiperSlide className="Events-img">
        <img src={Event_img} />
        </SwiperSlide>
        <SwiperSlide className="Events-img">
        <img src={Event_img} />
        </SwiperSlide>
        <SwiperSlide className="Events-img">
        <img src={Event_img} />
        </SwiperSlide>
        <SwiperSlide className="Events-img">
        <img src={Event_img} />
        </SwiperSlide>
        <SwiperSlide className="Events-img">
        <img src={Event_img} />
        </SwiperSlide>
        <SwiperSlide className="Events-img">
        <img src={Event_img} />
        </SwiperSlide>
        <SwiperSlide className="Events-img">
        <img src={Event_img} />
        </SwiperSlide>
        <SwiperSlide className="Events-img">
        <img src={Event_img} />
        </SwiperSlide>
        <SwiperSlide className="Events-img">
        <img src={Event_img} />
        </SwiperSlide>
        <SwiperSlide className="Events-img">
        <img src={Event_img} />
        </SwiperSlide>
        <SwiperSlide className="Events-img">
        <img src={Event_img} />
        </SwiperSlide>
    
      </Swiper>
   </div>

   <div className="SubEvents2">
   <div className="Event_Info">
        <h1> <span>Ganesh Chaturthi</span> Festival</h1>
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
        className="Event-slider"
      >
        <SwiperSlide className="Events-img">
        <img src={Event_img} />
        </SwiperSlide>
        <SwiperSlide className="Events-img">
        <img src={Event_img} />
        </SwiperSlide>
        <SwiperSlide className="Events-img">
        <img src={Event_img} />
        </SwiperSlide>
        <SwiperSlide className="Events-img">
        <img src={Event_img} />
        </SwiperSlide>
        <SwiperSlide className="Events-img">
        <img src={Event_img} />
        </SwiperSlide>
        <SwiperSlide className="Events-img">
        <img src={Event_img} />
        </SwiperSlide>
        <SwiperSlide className="Events-img">
        <img src={Event_img} />
        </SwiperSlide>
        <SwiperSlide className="Events-img">
        <img src={Event_img} />
        </SwiperSlide>
        <SwiperSlide className="Events-img">
        <img src={Event_img} />
        </SwiperSlide>
        <SwiperSlide className="Events-img">
        <img src={Event_img} />
        </SwiperSlide>
        <SwiperSlide className="Events-img">
        <img src={Event_img} />
        </SwiperSlide>
    
      </Swiper>
   </div>
 <div className="SubEvents3">
   <div className="Event_Info">
        <h1> <span>Gokulashtmi</span> Celebration</h1>
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
        className="Event-slider"
      >
        <SwiperSlide className="Events-img">
        <img src={Event_img} />
        </SwiperSlide>
        <SwiperSlide className="Events-img">
        <img src={Event_img} />
        </SwiperSlide>
        <SwiperSlide className="Events-img">
        <img src={Event_img} />
        </SwiperSlide>
        <SwiperSlide className="Events-img">
        <img src={Event_img} />
        </SwiperSlide>
        <SwiperSlide className="Events-img">
        <img src={Event_img} />
        </SwiperSlide>
        <SwiperSlide className="Events-img">
        <img src={Event_img} />
        </SwiperSlide>
        <SwiperSlide className="Events-img">
        <img src={Event_img} />
        </SwiperSlide>
        <SwiperSlide className="Events-img">
        <img src={Event_img} />
        </SwiperSlide>
        <SwiperSlide className="Events-img">
        <img src={Event_img} />
        </SwiperSlide>
        <SwiperSlide className="Events-img">
        <img src={Event_img} />
        </SwiperSlide>
        <SwiperSlide className="Events-img">
        <img src={Event_img} />
        </SwiperSlide>
    
      </Swiper>
   </div>

   <div className="SubEvents4">
   <div className="Event_Info">
        <h1> <span>Teacher's Day</span> Celebration</h1>
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
        className="Event-slider"
      >
        <SwiperSlide className="Events-img">
        <img src={Event_img} />
        </SwiperSlide>
        <SwiperSlide className="Events-img">
        <img src={Event_img} />
        </SwiperSlide>
        <SwiperSlide className="Events-img">
        <img src={Event_img} />
        </SwiperSlide>
        <SwiperSlide className="Events-img">
        <img src={Event_img} />
        </SwiperSlide>
        <SwiperSlide className="Events-img">
        <img src={Event_img} />
        </SwiperSlide>
        <SwiperSlide className="Events-img">
        <img src={Event_img} />
        </SwiperSlide>
        <SwiperSlide className="Events-img">
        <img src={Event_img} />
        </SwiperSlide>
        <SwiperSlide className="Events-img">
        <img src={Event_img} />
        </SwiperSlide>
        <SwiperSlide className="Events-img">
        <img src={Event_img} />
        </SwiperSlide>
        <SwiperSlide className="Events-img">
        <img src={Event_img} />
        </SwiperSlide>
        <SwiperSlide className="Events-img">
        <img src={Event_img} />
        </SwiperSlide>
    
      </Swiper>
   </div>

   <div className="SubEvents5">
   <div className="Event_Info">
        <h1>Some <span>Cultural</span> Moments</h1>
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
        className="Event-slider"
      >
        <SwiperSlide className="Events-img">
        <img src={Event_img} />
        </SwiperSlide>
        <SwiperSlide className="Events-img">
        <img src={Event_img} />
        </SwiperSlide>
        <SwiperSlide className="Events-img">
        <img src={Event_img} />
        </SwiperSlide>
        <SwiperSlide className="Events-img">
        <img src={Event_img} />
        </SwiperSlide>
        <SwiperSlide className="Events-img">
        <img src={Event_img} />
        </SwiperSlide>
        <SwiperSlide className="Events-img">
        <img src={Event_img} />
        </SwiperSlide>
        <SwiperSlide className="Events-img">
        <img src={Event_img} />
        </SwiperSlide>
        <SwiperSlide className="Events-img">
        <img src={Event_img} />
        </SwiperSlide>
        <SwiperSlide className="Events-img">
        <img src={Event_img} />
        </SwiperSlide>
        <SwiperSlide className="Events-img">
        <img src={Event_img} />
        </SwiperSlide>
        <SwiperSlide className="Events-img">
        <img src={Event_img} />
        </SwiperSlide>
    
      </Swiper>
   </div>

   <div className="SubEvents6">
   <div className="Event_Info">
        <h1> <span>Ashadhi</span> Ekadashi</h1>
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
        className="Event-slider"
      >
        <SwiperSlide className="Events-img">
        <img src={Event_img} />
        </SwiperSlide>
        <SwiperSlide className="Events-img">
        <img src={Event_img} />
        </SwiperSlide>
        <SwiperSlide className="Events-img">
        <img src={Event_img} />
        </SwiperSlide>
        <SwiperSlide className="Events-img">
        <img src={Event_img} />
        </SwiperSlide>
        <SwiperSlide className="Events-img">
        <img src={Event_img} />
        </SwiperSlide>
        <SwiperSlide className="Events-img">
        <img src={Event_img} />
        </SwiperSlide>
        <SwiperSlide className="Events-img">
        <img src={Event_img} />
        </SwiperSlide>
        <SwiperSlide className="Events-img">
        <img src={Event_img} />
        </SwiperSlide>
        <SwiperSlide className="Events-img">
        <img src={Event_img} />
        </SwiperSlide>
        <SwiperSlide className="Events-img">
        <img src={Event_img} />
        </SwiperSlide>
        <SwiperSlide className="Events-img">
        <img src={Event_img} />
        </SwiperSlide>
    
      </Swiper>
   </div>



   </div>
     

    </>
  );
}
export default Events
