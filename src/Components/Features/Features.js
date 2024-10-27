import React from 'react'
import './features.css'
import barbell from '../../Assets/barbell.png';

function Features() {
    return (
        <div className='features-container' id='about'>
            <div className='container'>
                <div className='features-header'>
                    <h4>WHY CHOSE US?</h4>
                    <h1>PUSH YOUR LIMITS FORWARD</h1>
                </div>
                <div className='features-cards'>
                    <div className='row'>
                        <div className='features-card col-lg-3 col-md-6 col-sm-12'>
                            <div className='features-card-img-container'>
                                <img src={barbell} alt='barbell' />
                            </div>
                            <h3>Modern equipment</h3>
                            <p>Our team of experts is dedicated to providing the highest quality products and services.</p>
                        </div>
                        <div className='features-card col-lg-3 col-md-6 col-sm-12'>
                            <div className='features-card-img-container'>
                                <img src={barbell} alt='barbell' />
                            </div>
                            <h2>Healthy nutrition plan</h2>
                            <p>We believe in building trust and transparency with our customers and partners.</p>
                        </div>
                        <div className='features-card col-lg-3 col-md-6 col-sm-12'>
                            <div className='features-card-img-container'>
                                <img src={barbell} alt='barbell' />
                            </div>
                            <h2>Proffesponal training plan</h2>
                            <p>We are a community of like-minded individuals who share a common passion for technology.</p>
                        </div>
                        <div className='features-card col-lg-3 col-md-6 col-sm-12'>
                            <div className='features-card-img-container'>
                                <img src={barbell} alt='barbell' />
                            </div>
                            <h2>Unique to your needs</h2>
                            <p>We are a community of like-minded individuals who share a common passion for technology.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features;
