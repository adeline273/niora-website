import { useState, useEffect } from 'react';
import './Navigation.css';

function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className={`navigation ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo" onClick={() => scrollToSection('hero')}>
          Niora Systems
        </div>
        <ul className="nav-links">
          <li><button onClick={() => scrollToSection('what-we-do')}>What We Do</button></li>
          <li><button onClick={() => scrollToSection('partner-perspectives')}>Partner Perspectives</button></li>
          <li><button onClick={() => scrollToSection('our-team')}>Our Team</button></li>
          <li><button onClick={() => scrollToSection('learn-more')}>Learn More</button></li>
          <li><button onClick={() => scrollToSection('contact-us')}>Contact Us</button></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;

