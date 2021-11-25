import React from "react";
import "./LandingPageStyles.css";
import Footer from "../../components/Footer/Index";
import Header from "../../components/Header/index";
import Feature from "../../components/MainSection/Feature/Index";
import HeroSection from "../../components/MainSection/HeroSection/index";
import { homeObjOne, homeObjTwo } from "../../data/Data-HeroSection.js";
import {
  featureObjOne,
  featureObjTwo,
  featureObjThree,
  featureObjFour,
} from "../../data/Data-Features.js";

const LandingPage = () => {
  return (
    //FCFBFD
    <div className="block_1">
      <Header />
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjTwo} />
      <div className="features">
        <div className="row-1">
          <h2 className="section-heading">Express Functionality</h2>
          <p className="section-subheading">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum
            obcaecati
            <br /> dignissimos quae quo ad iste ipsum officiis deleniti
            asperiores sit.
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

export default LandingPage;
