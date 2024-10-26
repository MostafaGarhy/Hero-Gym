import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './slider.css'

const Slider = ({ images }) => (
  <Swiper
    // install Swiper modules
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={410}
    slidesPerView={1}
    loop={true}
    pagination={{ clickable: true }}
    navigation
    autoplay={{ delay: 3000 }}
    effect="fade"
  >
    <div className='slider-shadow'></div>
    {images.map((image, index) => (
      <SwiperSlide key={index}>
        <div className='slider-info'>
          <div className='slider-text'>
            <h1>BE <strong>STRONG</strong> TRAINING HARD</h1>
          </div>
          <button className='slider-button'>GET INFO</button>
        </div>
        <div className='slider-content'>
          <img src={image} alt={`Slide ${index}`} style={{ width: '60%' }} />
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
);

export default Slider;