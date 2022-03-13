import React from 'react';
import HeroImage from '../assets/veganhero2.jpg';

export default function HeroSection() {
  return (
    <div className="hero-section">
      <section className="hero-image">
        <img src={HeroImage} alt=" a Broccoli" />
        <div className="hero-Section-Text">
          {' '}
          <h1> Veganaaan Stockholm</h1>
          <p>Best vegan restaurent in the town.</p>
          <p>* * * * * * * * * * * * * * </p>
        </div>
      </section>
    </div>
  );
}
