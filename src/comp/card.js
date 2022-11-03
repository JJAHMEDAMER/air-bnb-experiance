import React from "react";

//Images
import star from "../assets/star.png";

const Card = (props) => (
  <div className="card">
    <img
      src={require(`../assets/${props.img}`)}
      alt="ManImage"
      className="card--img"
    />
    <div className="card--stats">
      <img src={star} alt="star" />
      <p className="card--reviews">
        {props.rating} <span>({props.reviewCount}).USA</span>
      </p>
    </div>
    <p>{props.title}</p>
    <p className="card--price">
      <span>From ${props.price}</span> / person
    </p>
  </div>
);

export default Card;
