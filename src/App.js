import React from "react";

// Components
import NavBar from "./comp/nav-bar";
import HeroSection from "./comp/hero-section";
import Card from "./comp/card"


const App = () => (

  <div>
    <NavBar />
    <HeroSection/>
    <Card 
        img="man.png" 
        rating = "5.0"
        reviewCount = "6"
        title = "Life Lessons with Katie Zaferes"
        price = "136"
    />
  </div>
);

export default App;
