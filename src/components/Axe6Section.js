import React from 'react';
import './Axe6Section.css';
import UDBLogo from './UDBLogo';

const Axe6Section = () => {
  return (
    <div className="axe6-section" id="axe6">
      {/* Section blanche - Contenu principal */}
      <div className="content-section">
        <div className="container">
          <div className="content-header">
            <div className="title-section">
              <h1 className="main-title">
                AXE 6 - <span className="green-text">ENVIRONNEMENT ET CADRE DE VIE</span>
              </h1>
              <p className="subtitle">
                *Vision nationale: Développement durable (environnement vert, transition) & Logements sociaux, réforme foncière*
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
                Collecte et tri des déchets avec sensibilisation citoyenne.
              </div>
              <div className="action-item">
                Plantation d'arbres et création d'espaces verts et d'un parc citoyen.
              </div>
              <div className="action-item">
                Urbanisme durable: habitat organisé et respectueux du vivre ensemble.
              </div>
              <div className="action-item">
                Condition animale: cohabitation responsable avec les animaux.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section citation et photo unifiée */}
      <div className="unified-section">
        <div className="quote-container">
          <div className="quote-marks">"</div>
          <div className="quote-text">
            Un environnement sain, c'est une santé meilleure et un cadre de vie plus attractif pour tous.
          </div>
        </div>
        <div className="photo-container">
          <img 
            src="/images/image-axe6.jpg" 
            alt="Environnement et Cadre de Vie - UDB"
            className="axe6-image"
          />
        </div>
      </div>
    </div>
  );
};

export default Axe6Section;
