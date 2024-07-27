"use client";
import React from "react";
import { Button } from "react-bootstrap";
import "../../assets/CSS/HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-section">
      <h1 className="ms-5" style={{ fontWeight: "bold" }}>
        Freshly handpicked from
        <br /> Farmers To you
      </h1>
      <p className="ms-5">
        Healthy Lifestyle is not a dream now, because we will help you get
        organic food fast!
      </p>
      <Button className="ms-5" variant="danger">
        Join Us
      </Button>
    </div>
  );
}

export default HeroSection;
