import React from 'react';
/* Components Imports */
import Header from '../Components/Header/Header';
import Slider from '../Components/Slider/Slider';
import Cards from '../Components/Cards/Cards';
import Appointment from '../Components/Appointment/Appointment';

/* Images Imports */
import Image1 from '../Assets/athletic-shirtless-young-male.png';
import Image2 from '../Assets/happy-smiling-bodybuilder.png';
import Image3 from '../Assets/attractive-muscular-bodybuilder.png';
// import Features from '../Components/Features/Features';

const images = [Image2, Image1, Image3];

function Landing() {
  return (
    <div>
      <Header />
      <Slider images={images} style={{ height: '100vh' }} />
      {/* <Features /> */}
      <Appointment />
      <Cards />
    </div>
  );
}

export default Landing;
