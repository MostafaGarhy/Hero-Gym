import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import './header.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function NavBar() {
    const [openMenu, setMenu] = useState(false);

    return (
        <>
            <div className={`nav-bar ${openMenu ? 'show-menu' : ''}`}>
                <div className='links'>
                    <a href='/' target='' rel="noopener noreferrer"><button className='nav-btn'>HOME</button></a>
                    <a href='#about'><button className='nav-btn'>ABOUT</button></a>
                    <a href='#offers'><button className='nav-btn'>OFFERS</button></a>
                    <a href='#pricing'><button className='nav-btn'>PRICING</button></a>
                    <a href='#gallery'><button className='nav-btn'>GALLERY</button></a>
                    <a href='#coaches'><button className='nav-btn'>COACHES</button></a>
                    <a href='#contact'><button className='nav-btn'>CONTACT US</button></a>
                </div>
                <div className='icons'>
                    <a href='/' target='_blank'><i className="fa-brands fa-facebook"></i></a>
                    <a href='/' target='_blank'><i className="fa-brands fa-twitter"></i></a>
                    <a href='/' target='_blank'><i className="fa-brands fa-instagram"></i></a>
                </div>
            </div>
            <div className={`nav-menu ${openMenu ? 'show-menu' : ''}`}>
                <button className='menu-icon' onClick={() => setMenu(!openMenu)}>
                    ▲
                </button>
            </div>
        </>
    );
}

export default NavBar;
