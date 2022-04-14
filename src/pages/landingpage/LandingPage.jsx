import React from "react";
import HeroHeader from "../../components/hero-header/HeroHeader";
import Navbar from "../../components/navbar/Navbar";
import "./landingpage.css";
import nikeShoes from "../../assets/MLP.jpg";

export default function LandingPage() {
  return (
    <div>
      <div className="home-container">
        <img
          src={nikeShoes}
          alt="landing"
          className="responsive-images landing-image"
        />
        <div className="landing-container">
          <Navbar />
          <HeroHeader />
        </div>
      </div>
    </div>
  );
}
