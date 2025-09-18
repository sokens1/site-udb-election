import React, { useState, useEffect } from 'react';
import './Navbar.css';
import UDBLogo from './UDBLogo';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <UDBLogo />
        </div>
        
        <div className="navbar-menu">
          <a 
            href="#accueil" 
            className="navbar-link"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('accueil');
            }}
          >
            Accueil
          </a>
          <a 
            href="#candidat" 
            className="navbar-link"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('candidat');
            }}
          >
            Candidat
          </a>
          <a 
            href="#axe1" 
            className="navbar-link"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('axe1');
            }}
          >
            Programme
          </a>
          <a 
            href="#message" 
            className="navbar-link"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('message');
            }}
          >
            Message
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
