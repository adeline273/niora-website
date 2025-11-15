import './Hero.css';
import heroImage from '../assets/others/ppp.png';

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-image-container">
        <img src={heroImage} alt="Bustling market street in emerging market" className="hero-image" />
        <div className="hero-overlay">
          <div className="hero-title">Ending drug stockouts globally.</div>
        </div>
      </div>
      <div className="hero-intro">
        <p>
          Niora is building procurement infrastructure that helps hospitals in emerging markets 
          eliminate drug stockouts through de-risking the procurement market with subscription 
          contracting and intelligent demand forecasting.
        </p>
      </div>
    </section>
  );
}

export default Hero;

