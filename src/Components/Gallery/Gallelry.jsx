import React, { useState } from 'react';
import './Gallery.css';
import athletic1 from '../../Assets/fitness2.jpg';
import athletic2 from '../../Assets/fitness3.jpg';
import athletic3 from '../../Assets/fitness1.jpg';
import athletic4 from '../../Assets/athletic4.jpg';
import athletic5 from '../../Assets/athletic5.jpg';
import athletic6 from '../../Assets/athletic6.jpg';
import { Modal } from 'react-bootstrap';
import { FaRegImage, FaTimes } from 'react-icons/fa';

function Gallery() {
  const [show, setShow] = useState(false);
  const [activeImage, setActiveImage] = useState(null);

  const handleShow = (image) => {
    setActiveImage(image);
    setShow(true);
  };

  const handleClose = () => setShow(false);

  return (
    <div className='gallery-container' id='gallery'> 
      <div className='content-center'>
        <span className ="mb-2"> OUR GALLERY </span>
        <h2 className='text-center text-light mb-5'> Welcome to GYM Gallery </h2>
      </div>

      {/* First display section */}
      <div className='gallery-imgs w-100'>
        <div className='row'>
          <div className='col-lg-6 col-md-6 col-sm-12 mb-2'>
            <div className="image-container" onClick={() => handleShow(athletic3)}>
              <img src={athletic3} alt="Gallery 1" className="img-fluid" />
              <div className="hover-icon">
                <FaRegImage />
              </div>
            </div>
          </div>
          <div className='col-lg-3 col-md-3 col-sm-12 mb-2'>
            <div className="image-container" onClick={() => handleShow(athletic1)}>
              <img src={athletic1} alt="Gallery 2" className="img-fluid" />
              <div className="hover-icon">
                <FaRegImage />
              </div>
            </div>
          </div>
          <div className='col-lg-3 col-md-3 col-sm-12 mb-2'>
            <div className="image-container" onClick={() => handleShow(athletic2)}>
              <img src={athletic2} alt="Gallery 3" className="img-fluid" />
              <div className="hover-icon">
                <FaRegImage />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Second display section */}
      <div className='gallery-imgs w-100 mt-3'>
        <div className='row'>
          <div className='col-lg-3 col-md-3 col-sm-12 mb-2'>
            <div className="image-container" onClick={() => handleShow(athletic4)}>
              <img src={athletic4} alt="Gallery 4" className="img-fluid" />
              <div className="hover-icon">
                <FaRegImage />
              </div>
            </div>
          </div>
          <div className='col-lg-3 col-md-3 col-sm-12 mb-2'>
            <div className="image-container" onClick={() => handleShow(athletic5)}>
              <img src={athletic5} alt="Gallery 5" className="img-fluid" />
              <div className="hover-icon">
                <FaRegImage />
              </div>
            </div>
          </div>
          <div className='col-lg-6 col-md-6 col-sm-12 mb-2'>
            <div className="image-container" onClick={() => handleShow(athletic6)}>
              <img src={athletic6} alt="Gallery 6" className="img-fluid" />
              <div className="hover-icon">
                <FaRegImage />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Popup */}
      <Modal show={show} onHide={handleClose} centered dialogClassName="custom-modal">
        <button className="close-button" onClick={handleClose}>
          <FaTimes />
        </button>
        <Modal.Body className="p-0">
          <img src={activeImage} alt="Active" className="img-fluid" />
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Gallery;
