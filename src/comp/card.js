import React from "react";

//Images
import manImg from "../assets/man.png";
import star from "../assets/star.png";

const Card = () => (
  <div className="card">
    <img src={manImg} alt="ManImage" className="card--img"/>
    <div className="card--stats">
      <img src={star} alt="star" />
      <p className="card--reviews">
        5.0 <span>(6).USA</span>
      </p>
    </div>
    <p>Life lessons with Katie Zaferes</p>
    <p className="card--price">
      <span>From $136</span> / person
    </p>
  </div>
);

export default Card;
