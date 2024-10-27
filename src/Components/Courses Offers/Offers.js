import React from 'react'
// import weightlifting from '../../Assets/weightlifting.png';
import course_1 from '../../Assets/course-1.jpg';
import course_2 from '../../Assets/course-2.jpg';
import course_3 from '../../Assets/course-3.jpg';
import course_4 from '../../Assets/course-4.jpg';
import course_5 from '../../Assets/course-5.jpg';

import './offers.css';

function Offers() {
    return (
        <div className='offers-container'>
            <div className='container'>
                <div className='offers-header'>
                    <h4>OUR CLASSES</h4>
                    <h1>WHAT WE CAN OFFER</h1>
                </div>
                <div className='offers-cards'>
                    <div className='offer-row'>
                        <div className='offers-card card-1'>
                            <img src={course_1} alt='Course 1' />
                            <div className='card-text'>
                                <small>Strength</small>
                                <p>Weightlifting</p>
                                <div className='card-action'>
                                    <i className='fa fa-angle-right'></i>
                                </div>
                            </div>
                        </div>
                        <div className='offers-card card-2'>
                            <img src={course_2} alt='Course 2' />
                            <div className='card-text'>
                                <small>Cardio</small>
                                <p>Indoor cycling</p>
                                <div className='card-action'>
                                    <i className='fa fa-angle-right'></i>
                                </div>
                            </div>
                        </div>
                        <div className='offers-card card-3'>
                            <img src={course_3} alt='Course 3' />
                            <div className='card-text'>
                                <small>STRENGTH</small>
                                <p>Kettlebell power</p>
                                <div className='card-action'>
                                    <i className='fa fa-angle-right'></i>
                                </div>
                            </div>
                        </div>
                        <div className='offers-card card-4'>
                            <img src={course_4} alt='Course 4' />
                            <div className='card-text'>
                                <small>Cardio</small>
                                <p>Indoor cycling</p>
                                <div className='card-action'>
                                    <i className='fa fa-angle-right'></i>
                                </div>
                            </div>
                        </div>
                        <div className='offers-card card-5'>
                            <img src={course_5} alt='Course 5' />
                            <div className='card-text'>
                                <small>Training</small>
                                <p>Boxing</p>
                                <div className='card-action'>
                                    <i className='fa fa-angle-right'></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Offers
