import React from "react";

// Components
import NavBar from "./comp/nav-bar";
import HeroSection from "./comp/hero-section";
import Card from "./comp/card";

// Import data
import data from "./data";

let appCards = data.map((item) => (
  <Card
    item = {item}
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
