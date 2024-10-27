import React from 'react';
import './Footer.css';
import { FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import { IoPhonePortrait } from 'react-icons/io5';

const FooterHead = () => {
    return (
        <div className='footer-head'>
            <div className='container mb-5'>
                <h2 className='text-light p-2 text-center m-4'> You Can Find Us Here </h2>
                <div className='row justify-content-center'>
                    <div className='col-lg-4 col-md-4 col-12 text-center mb-4'>
                        <div className='footer-icon'>
                            <span>
                                <FaMapMarkerAlt size={24} color="#fff" />
                            </span>
                            <b className='text-info'> Our Location</b>
                            <p>Cairo || Beni Suef || Fayoum</p>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-4 col-12 text-center mb-4'>
                        <div className='footer-icon'>
                            <span>
                                <IoPhonePortrait size={24} color="#fff" />
                            </span>
                            <i><b className='text-info'> Mostafa</b> phone: +201143839858</i>
                            <i><b className='text-info'> Bassem</b> phone: +201141879511</i>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-4 col-12 text-center mb-4'>
                        <div className='footer-icon'>
                            <span>
                                <FaEnvelope size={24} color="#fff" />
                            </span>
                            <i><b className='text-info'> Bassem</b> mail: <a href='mailto:bh1160@fayoum.edu.eg'>bh1160@fayoum.edu.eg</a></i>
                            <i><b className='text-info'> Mostafa</b> mail: <a href='mailto:ma4812@fayoum.edu.eg'>ma4812@fayoum.edu.eg</a></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FooterHead;
