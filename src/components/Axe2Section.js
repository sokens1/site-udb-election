import React from 'react';
import './Axe2Section.css';
import UDBLogo from './UDBLogo';
import quoteIcon from '../images/icone-grife.png';

const Axe2Section = () => {
  return (
    <div className="axe2-section" id="axe2" style={{'--quote-icon': `url(${quoteIcon})`}}>
      {/* Section blanche - Contenu principal */}
      <div className="content-section">
        <div className="container">
          <div className="content-header">
            <div className="title-section">
              <h1 className="main-title">
                AXE 2 - <span className="green-text">INFRASTRUCTURES ET MOBILITÉ</span>
              </h1>
              <p className="subtitle">
                *Vision nationale: Réseau routier national, Accès à l'eau et électricité partout*
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
                <strong>Réhabilitation des ruelles et trottoirs</strong> pour une circulation fluide et sûre.
              </div>
              <div className="action-item">
                <strong>Éclairage public solaire</strong> dans chaque rue et carrefour.
              </div>
              <div className="action-item">
                <strong>Organisation des transports urbains</strong> (arrêts, sécurité, régulation, accessibilité, etc.).
              </div>
              <div className="action-item">
                <strong>Eau propre & assainissement pour tous</strong> (eau potable, bornes-fontaines modernes, traitement des eaux usées etc.).
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Section citation et photo unifiée */}
      <div className="unified-section">
        <div className="quote-container">
          <div className="quote-marks"></div><div className="quote-text">Des infrastructures solides, un éclairage fiable, une eau saine et un assainissement durable : la base d'une ville moderne.</div>
        </div>
        <div className="photo-container">
          <img 
            src="/images/image-axe2.jpg" 
            alt="Infrastructures et mobilité - UDB"
            className="axe2-image"
          />
        </div>
      </div>
    </div>
  );
};

export default Axe2Section;
