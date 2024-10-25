import React from 'react';
import Header from '../Components/Header/Header';
import Slider from '../Components/Slider/Slider';

import Image1 from '../Assets/athletic-shirtless-young-male.png';
import Image2 from '../Assets/happy-smiling-bodybuilder.png';
import Image3 from '../Assets/attractive-muscular-bodybuilder.png';

const images = [Image2, Image1, Image3];

function Landing() {
  return (
    <div>
      <Header />
      <Slider images={images} style={{ height: '100vh'}}/>
    </div>
  );
}

export default Landing;
