import React from 'react';
import './Footer.css';
import UDBLogo from './UDBLogo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-logo">
            <UDBLogo />
            <p className="footer-description">
              Union Démocratique des Bâtisseurs
            </p>
          </div>
          
          <div className="footer-links">
            <div className="footer-section">
              <h4>Navigation</h4>
              <ul>
                <li><a href="#accueil">Accueil</a></li>
                <li><a href="#candidat">Liste</a></li>
                <li><a href="#axe1">Programme</a></li>
                <li><a href="#message">Message</a></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>Contact</h4>
               <ul>
                 <li>
                   <span className="contact-icon">✉</span>
                   directeurcampagne.mda@gmail.com
                 </li>
                 {/* <li>Téléphone: +241 </li> */}
                 <li>
                   <span className="contact-icon">
                     <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                       <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                     </svg>
                   </span>
                   Commune de Moanda
                 </li>
               </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} UDB - Union Démocratique des Bâtisseurs. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
