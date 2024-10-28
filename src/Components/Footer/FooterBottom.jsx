import React from "react";
import GymLogo from '../../Assets/logo-no-background-edited.png';
import '@fortawesome/fontawesome-free/css/all.min.css';

function FooterBottom() {
    return (
        <div className="footer-bottom p-4">
            <div className="container mt-5 text-start">
                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-4  col-sm-6 mb-4 text-start">
                        <img src={GymLogo} className="mb-2" width="50%" height="50px" alt="Gym Logo" />
                        <p>Hero GYM offers top-notch facilities and expert trainers dedicated to helping you achieve your fitness goals. We provide personalized workout plans, modern equipment, and a supportive community to keep you motivated.</p>
                        <div className="social-icons">
                            <a href='/' target='_blank' rel="noopener noreferrer"><i className="fa-brands fa-facebook"></i></a>
                            <a href='/' target='_blank' rel="noopener noreferrer"><i className="fa-brands fa-twitter"></i></a>
                            <a href='/' target='_blank' rel="noopener noreferrer"><i className="fa-brands fa-youtube"></i></a>
                            <a href='/' target='_blank' rel="noopener noreferrer"><i className="fa-brands fa-instagram"></i></a>
                            <a href='/' target='_blank' rel="noopener noreferrer"><i className="fa-solid fa-envelope"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-3 mb-4 text-start">
                        <h3>Useful Links</h3>
                        <ul>
                            <li><a href='/' target='' rel="noopener noreferrer"> About</a></li>
                            <li><a href='/' target='' rel="noopener noreferrer"> Blog</a></li>
                            <li><a href='/' target='' rel="noopener noreferrer"> Classes</a></li>
                            <li><a href='/' target='' rel="noopener noreferrer"> Contact</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-2 col-md-2  col-sm-3 mb-4 text-start">
                        <h3>Support</h3>
                        <ul>
                            <li > <a href='/' target='' rel="noopener noreferrer"> Login</a> </li>
                            <li> <a href='/' target='' rel="noopener noreferrer"> My account</a></li>
                            <li> <a href='/' target='' rel="noopener noreferrer"> Subscribe</a></li>
                            <li><a href='/' target='' rel="noopener noreferrer"> Contact</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6 mb-4 text-start footer-tips">
                        <h3>Tips & Guides</h3>
                        <p>Physical fitness may help prevent depression, anxiety</p>
                        <span>  3 min read  |  20 Comments </span>
                        <hr className="text-light" />
                        <p>Fitness: The best exercise to lose belly fat and tone up...</p>
                        <span>  3 min read  |  20 Comments </span>
                        
                    </div>
                </div>
                <hr className="text-light mb-4" />
                <p className="copyright text-center"> Copyright ©2024 All rights reserved || This Work is Done By <span>Bassem Hussein </span>  & <span> Mostafa Ahmed ...... ✅❤️</span> </p>
            </div>
        </div>
    );
}

export default FooterBottom;
