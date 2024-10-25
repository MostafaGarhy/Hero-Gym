import React from 'react';
import NavBar from './NavBar';
import Logo from './Logo';
import './header.css';

function Header() {
    return (
        <div className='header-part'>
            <Logo />
            <NavBar />
        </div>
    )
}

export default Header
