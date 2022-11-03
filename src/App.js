import React from "react";

// Components
import NavBar from "./comp/nav-bar";
import HeroSection from "./comp/hero-section";
import Card from "./comp/card";

// Import data
import data from "./data";

let appCards = data.map((item) => (
  <Card
    img={item.coverImg}
    rating={item.stats.rating}
    reviewCount={item.stats.reviewCount}
    title={item.title}
    price={item.price}
  />
));

const App = () => (
  <div>
    <NavBar />
    <HeroSection />
    <div className="card--list">{appCards}</div>
  </div>
);

export default App;
