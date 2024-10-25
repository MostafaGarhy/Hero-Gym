import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Slider = ({ images }) => (
  <Swiper
    // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={10}
    slidesPerView={1}
    loop={true}
    pagination={{ clickable: true }}
    navigation
    autoplay={{ delay: 3000 }}
    effect="fade"
  >
    {images.map((image, index) => (
      <SwiperSlide key={index}>
        <img src={image} alt={`Slide ${index}`} style={{ width: '60%'}} />
      </SwiperSlide>
    ))}
  </Swiper>
);

export default Slider;
