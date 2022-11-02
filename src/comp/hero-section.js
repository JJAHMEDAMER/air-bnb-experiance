import React from "react";

//Images
import heroImg from "../assets/heroImage.png";

const HeroSection = () => (
  <div className="hero-section">
    <img src={heroImg} alt="HeroImage" className="hero-img" />
    <h1 className="title">Online Experiences</h1>
    <p>
      Join unique interactive activities led by one-of-a-kind hosts—all without
      leaving home.
    </p>
  </div>
);

export default HeroSection
