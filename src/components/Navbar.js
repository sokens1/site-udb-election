import React, { useState, useEffect } from 'react';
import './Navbar.css';
import UDBLogo from './UDBLogo';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <UDBLogo />
        </div>
        
        <div className={`navbar-menu ${isMobileMenuOpen ? 'active' : ''}`}>
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
            Liste UDB
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

        <button 
          className="mobile-menu-toggle"
          onClick={toggleMobileMenu}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
