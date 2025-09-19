import React from 'react';
import './Axe1Page.css';
import UDBLogo from './UDBLogo';
import quoteIcon from '../images/icone-grife.png';

const Axe1Page = () => {
  return (
    <div className="axe1-page" style={{'--quote-icon': `url(${quoteIcon})`}}>
      {/* Section blanche - Contenu principal */}
      <div className="content-section">
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
            <div className="action-icon">👆📡</div>
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

          <div className="quote-section">
            <div className="quote-marks"></div><p className="quote-text">Une mairie ouverte, moderne et connectée, qui rend des comptes et agit au plus près des citoyens.</p>
          </div>
        </div>
      </div>

      {/* Section photo */}
      <div className="photo-section">
        <div className="photo-placeholder">
          <div className="photo-content">
            <div className="people-icon">👥💻</div>
            <p className="photo-description">
              Collaboration citoyenne et digitalisation des services
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Axe1Page;
