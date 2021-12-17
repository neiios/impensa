import React from "react";
// components
import Footer from "../../components/Footer/index";
import Header from "../../components/Header/header";
import Feature from "../../components/MainSection/Feature/index.jsx";
import HeroSection from "../../components/MainSection/HeroSection";
import { homeObjOne, homeObjTwo } from "../../data/Data-HeroSection.js";
import {
  featureObjOne,
  featureObjTwo,
  featureObjThree,
  featureObjFour,
} from "../../data/Data-Features.js";
// styles
import "./LandingPageStyles.css";

const Homepage = () => {
  document.title = "Impensa";
  return (
    //FCFBFD
    <div className="block_1">
      <Header />
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjTwo} />
      <div className="features">
        <div className="row-1">
          <h2 className="section-heading">Why choose us?</h2>
          <p className="section-subheading">
            In the modern capitalistic society financial literacy means a lot,
            <br /> we are happily providing you with the best tools available to
            optimize your day-to-day financial decisions.
          </p>
        </div>
        <div className="row-2">
          <Feature {...featureObjOne} />
          <Feature {...featureObjTwo} />
          <Feature {...featureObjThree} />
          <Feature {...featureObjFour} />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Homepage;
