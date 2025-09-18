import React from 'react';
import './Axe1Section.css';
import UDBLogo from './UDBLogo';

const Axe1Section = () => {
  return (
    <div className="axe1-section" id="axe1">
      {/* Section blanche - Contenu principal */}
      <div className="content-section">
        <div className="container">
          <div className="content-header">
            <div className="title-section">
              <h1 className="main-title">
                AXE 1 – GOUVERNANCE CITOYENNE ET{' '}
                <span className="green-text">TRANSPARENCE</span>
              </h1>
              <p className="subtitle">
                *Vision nationale : Digitalisation & Lutte contre la corruption*
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
                <strong>Guichet unique digital</strong> pour impulser le développement du 1er arrondissement et améliorer les services publics ainsi que la qualité de vie des habitants.
              </div>
              <div className="action-item">
                <strong>Comités de quartier</strong> pour associer les habitants à toutes les décisions.
              </div>
              <div className="action-item">
                <strong>Transparence budgétaire</strong> avec publication régulière des dépenses et réalisations.
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
            Une mairie ouverte, moderne et connectée, qui rend des comptes et agit au plus près des citoyens.
          </div>
        </div>
        <div className="photo-container">
          <img 
            src="/images/image-axe1.jpg" 
            alt="Gouvernance citoyenne et transparence - UDB"
            className="axe1-image"
          />
        </div>
      </div>
    </div>
  );
};

export default Axe1Section;
