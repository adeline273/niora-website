import Navigation from './components/Navigation';
import Hero from './components/Hero';
import WhatWeDo from './components/WhatWeDo';
import PartnerPerspectives from './components/PartnerPerspectives';
import OurTeam from './components/OurTeam';
import LearnMore from './components/LearnMore';
import ContactUs from './components/ContactUs';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <WhatWeDo />
      <PartnerPerspectives />
      <OurTeam />
      <LearnMore />
      <ContactUs />
    </div>
  );
}

export default App;
