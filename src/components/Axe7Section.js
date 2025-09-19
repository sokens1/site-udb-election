import React from 'react';
import './Axe7Section.css';
import UDBLogo from './UDBLogo';
import quoteIcon from '../images/icone-grife.png';

const Axe7Section = () => {
  return (
    <div className="axe7-section" id="axe7" style={{'--quote-icon': `url(${quoteIcon})`}}>
      {/* Section blanche - Contenu principal */}
      <div className="content-section">
        <div className="container">
          <div className="content-header">
            <div className="title-section">
              <h1 className="main-title">
                AXE 7 - <span className="green-text">SÉCURITÉ ET COHÉSION SOCIALE</span>
              </h1>
              <p className="subtitle">
                *Vision nationale: Justice sociale et inclusion*
              </p>
            </div>
            <div className="logo-container">
              <UDBLogo />
            </div>
          </div>

          <div className="actions-section">
            <div className="actions-header">
              <span className="material-symbols-outlined action-icon">campaign</span>
              <h2 className="actions-title">ACTIONS PHARES</h2>
            </div>
            
            <div className="actions-list">
              <div className="action-item">
                Agents de proximité et caméras solaires dans les zones sensibles.
              </div>
              <div className="action-item">
                Réinsertion des jeunes en difficulté grâce au sport, à la formation et au volontariat.
              </div>
              <div className="action-item">
                Espaces de dialogue intergénérationnel pour renforcer l'unité du quartier.
              </div>
              <div className="action-item">
                Interface police pour monitorer les conditions sécuritaires dans le 1er Arrondissement.
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Section citation et photo unifiée */}
      <div className="unified-section">
        <div className="quote-container">
          <div className="quote-marks"></div><div className="quote-text">La sécurité est une responsabilité partagée qui renforce la fraternité et la confiance.</div>
        </div>
        <div className="photo-container">
          <img 
            src="/images/image-axe7.jpg" 
            alt="Sécurité et Cohésion Sociale - UDB"
            className="axe7-image"
          />
        </div>
      </div>
    </div>
  );
};

export default Axe7Section;
