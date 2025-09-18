import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Axe1Section from './components/Axe1Section';
import Axe2Section from './components/Axe2Section';
import Axe3Section from './components/Axe3Section';
import Axe4Section from './components/Axe4Section';
import Axe5Section from './components/Axe5Section';
import Axe6Section from './components/Axe6Section';
import Axe7Section from './components/Axe7Section';
import MessageSection from './components/MessageSection';
import FinalSection from './components/FinalSection';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <Axe1Section />
      <Axe2Section />
      <Axe3Section />
      <Axe4Section />
      <Axe5Section />
      <Axe6Section />
      <Axe7Section />
      <MessageSection />
      <FinalSection />
    </div>
  );
}

export default App;
