import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function NavBar() {
    const [openMenu, setMenu] = useState(false);

    return (
        <>
            <div className={`nav-bar ${openMenu ? 'show-menu' : ''}`}>
                <div className='links'>
                    <Link to='/'><button className='nav-btn'>HOME</button></Link>
                    <Link to='/about'><button className='nav-btn'>ABOUT</button></Link>
                    <Link to='/courses'><button className='nav-btn'>COURSES</button></Link>
                    <Link to='/coaches'><button className='nav-btn'>COACHES</button></Link>
                    <Link to='/pricing'><button className='nav-btn'>PRICING</button></Link>
                    <Link to='/contact'><button className='nav-btn'>CONTACT US</button></Link>
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
