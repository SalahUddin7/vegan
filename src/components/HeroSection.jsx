import HeroImage from "../assets/veganhero2.jpg";

export default function HeroSection() {
  return (
    <div className="hero-section">
      {/* no need to have both div and section here */}
      <section className="hero-image">
        <img src={HeroImage} alt=" a Broccoli" />
        <div className="hero-Section-Text">
          <h1> Veganaaan</h1>
          <p>Best vegan restaurent in the town.</p>
        </div>
      </section>
    </div>
  );
}
