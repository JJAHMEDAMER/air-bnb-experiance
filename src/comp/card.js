import React from "react";

//Images
import star from "../assets/star.png";

const Card = (props) => (
  <div className="card">
    <img
      src={require(`../assets/${props.item.coverImg}`)}
      alt="ManImage"
      className="card--img"
    />
    <div className="card--stats">
      <img src={star} alt="star" />
      <p className="card--reviews">
        {props.item.stats.rating} <span>({props.item.stats.reviewCount}).USA</span>
      </p>
    </div>
    <p>{props.item.title}</p>
    <p className="card--price">
      <span>From ${props.item.price}</span> / person
    </p>
  </div>
);

export default Card;
