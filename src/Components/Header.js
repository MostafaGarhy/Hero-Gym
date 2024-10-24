import React from 'react';
import NavBar from './../Components/NavBar';
import Logo from '../Components/Logo';
import '../App.css';

function Header() {
    return (
        <div className='header-part'>
            <Logo />
            <NavBar />
        </div>
    )
}

export default Header
