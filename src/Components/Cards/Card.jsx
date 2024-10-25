import React from "react";
import "./Cards.css";

function Card(props) {
  return (
    <div className="gym-card">
      <h3> {props.title} </h3>
      <div className="price">
        <h2> $ {props.price}.0 </h2>
        <span>SINGLE CLASS</span>
      </div>
      <ul>
        <li> Free riding </li>
        <li> Unlimited equipments </li>
        <li> Personal trainer </li>
        <li> Weight losing classes </li>
        <li> Month to mouth </li>
        <li> No time restriction </li>
      </ul>
      <button className="pricing-btn"> Enroll now</button>
    </div>
  );
}

export default Card;
