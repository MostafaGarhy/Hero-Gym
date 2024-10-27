import React from 'react';
/* Components Imports */
import Header from '../Components/Header/Header';
import Slider from '../Components/Slider/Slider';
import Cards from '../Components/Cards/Cards';
import Appointment from '../Components/Appointment/Appointment';
import Gallelry from '../Components/Gallery/Gallelry';
import Trainers from '../Components/Trainers/Trainers';
import Footer from '../Components/Footer/Footer';

/* Images Imports */
import Image1 from '../Assets/athletic-shirtless-young-male.png';
import Image2 from '../Assets/happy-smiling-bodybuilder.png';
import Image3 from '../Assets/attractive-muscular-bodybuilder.png';
import Features from '../Components/Features/Features';
import Offers from '../Components/Courses Offers/Offers';

/* Landing Style Import */
import './landing.css';
import ScrollToTopButton from './ScrollToTopButton';

const images = [Image2, Image1, Image3];

function Landing() {
  return (
    <div>
      <div className='landing-container'>
        <Header />
        <Slider images={images} />
        <Features />
        <Offers />
        <Appointment />
        <Cards />
        <Gallelry />
        <Trainers />
        <Footer />
        <ScrollToTopButton />
      </div>
    </div>
  );
}

export default Landing;
