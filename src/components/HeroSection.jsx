import React from 'react';
import HeroImage from '../assets/veganhero2.jpg';

export default function HeroSection() {
  return (
    <div className="hero-section">
      <section className="hero-image">
        <img src={HeroImage} alt=" a Broccoli" />
        <h1 className="hero-text">REACT (this text need to be up)</h1>
      </section>
    </div>
  );
}
