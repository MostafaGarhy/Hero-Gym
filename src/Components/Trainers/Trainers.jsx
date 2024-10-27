import React from 'react';
import Slider from "react-slick";
import athletic1 from '../../Assets/fitness2.jpg';
import athletic2 from '../../Assets/coach2.png';
import athletic3 from '../../Assets/coach1.png';
import athletic4 from '../../Assets/athletic4.jpg';
import athletic5 from '../../Assets/coach3.png';
import athletic6 from '../../Assets/athletic6.jpg';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Trainers.css';

function Trainers() {
  const trainers = [
    { id: 1, name: "Trainer 1", role: "GYM TRAINER", image: athletic1 },
    { id: 2, name: "Trainer 2", role: "GYM TRAINER", image: athletic2 },
    { id: 3, name: "Trainer 3", role: "GYM TRAINER", image: athletic3 },
    { id: 4, name: "Trainer 4", role: "GYM TRAINER", image: athletic4 },
    { id: 5, name: "Trainer 5", role: "GYM TRAINER", image: athletic5 },
    { id: 6, name: "Trainer 6", role: "GYM TRAINER", image: athletic6 },
  ];

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 992, 
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576, 
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="trainers-team" id='coaches'>
      <div className="container">
      <div className='content-center'>
        <span className ="mb-2"> OUR COACHES</span>
        <h2 className='text-center text-light mb-5'> GYM Coaches </h2>
      </div>
        <Slider {...settings}>
          {trainers.map((trainer) => (
            <div className="item" key={trainer.id}>
              <div className="trainer-container mx-auto mb-4">
                <img src={trainer.image} className="trainer-image " alt={trainer.name} />
                <div className="trainer-overlay">
                  <h5 className="trainer-name">{trainer.name}</h5>
                  <p className="trainer-role">{trainer.role}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Trainers;
