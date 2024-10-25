import React from 'react';
import "./Appointment.css";

function Appointment() {
  return (
    <div className="Appointment">
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-lg-12 text-center">
            <h2 className="text-black-900">Registration now to get more deals</h2>
            <p className='appointment-text'> Where health, beauty and fitness meet. </p>
            <button className=" text-white mt-3 ">Appointment</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Appointment;
