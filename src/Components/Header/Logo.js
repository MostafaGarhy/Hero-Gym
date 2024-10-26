import React from 'react';
import logo_img from '../../Assets/logo-no-background-edited.png';
import './header.css';

function Logo() {
  return (
    <div>
      <img src={logo_img} alt="logo" className='logo-img' />
    </div>
  )
}

export default Logo
