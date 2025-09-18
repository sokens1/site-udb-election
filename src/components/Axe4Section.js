import React from 'react';
import './Axe4Section.css';
import UDBLogo from './UDBLogo';

const Axe4Section = () => {
  return (
    <div className="axe4-section" id="axe4">
      {/* Section blanche - Contenu principal */}
      <div className="content-section">
        <div className="container">
          <div className="content-header">
            <div className="title-section">
              <h1 className="main-title">
                AXE 4 – <span className="green-text">ÉDUCATION ET JEUNESSE</span>
              </h1>
              <p className="subtitle">
                *Vision nationale : Éducation & capital humain (bourses, écoles, numérique)*
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
                Rénovation des écoles (bâtiments, bancs, cantines)
              </div>
              <div className="action-item">
                Pôle éducatif (bibliothèque et espace numérique avec accès Internet gratuit).
              </div>
              <div className="action-item">
                Programme « Un métier pour chaque jeune » (formation professionnelle et numérique).
              </div>
              <div className="action-item">
                Offre sportive municipale (Réhabilitation de terrains multisports, Organisation de tournois et événements sportifs communautaires, écoles municipales de sport).
              </div>
              <div className="action-item">
                Espaces éducatifs et ludiques pour la petite enfance.
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
            Aucun enfant, aucun jeune ne doit rester sans formation ni opportunité professionnelle.
          </div>
        </div>
        <div className="photo-container">
          <img 
            src="/images/image-axe4.jpg" 
            alt="Éducation et Jeunesse - UDB"
            className="axe4-image"
          />
        </div>
      </div>
    </div>
  );
};

export default Axe4Section;
