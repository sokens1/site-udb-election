import React from 'react';
import './Axe5Section.css';
import UDBLogo from './UDBLogo';

const Axe5Section = () => {
  return (
    <div className="axe5-section" id="axe5">
      {/* Section blanche - Contenu principal */}
      <div className="content-section">
        <div className="container">
          <div className="content-header">
            <div className="title-section">
              <h1 className="main-title">
                AXE 5 - <span className="green-text">ÉCONOMIE LOCALE, FEMMES ET EMPLOI</span>
              </h1>
              <p className="subtitle">
                *Vision nationale : Employabilité et entrepreneuriat (BCEG, incubateurs) & Souveraineté alimentaire, pôles agricoles*
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
                <strong>Modernisation des marchés</strong> (hygiène, eau, stands organisés).
              </div>
              <div className="action-item">
                <strong>Microcrédits</strong> pour les femmes commerçantes, les jeunes et les artisans.
              </div>
              <div className="action-item">
                <strong>Incubateur local</strong> pour les projets innovants et le commerce numérique.
              </div>
              <div className="action-item">
                <strong>Valorisation des produits agricoles et artisanaux.</strong>
              </div>
            </div>

            <div className="women-section">
              <h3 className="women-title">Point d'honneur : les femmes</h3>
              <div className="women-actions">
                <div className="women-item">
                  Création d'un <strong>Fonds "Femmes de Moanda"</strong> pour les commerçantes, coopératives et associations solidaires.
                </div>
                <div className="women-item">
                  Formations en gestion, digitalisation des activités commerciales.
                </div>
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
            Les femmes sont le moteur de l'économie de proximité et de la souveraineté alimentaire.
          </div>
        </div>
        <div className="photo-container">
          <img 
            src="/images/image-axe5.jpg" 
            alt="Économie locale, Femmes et Emploi - UDB"
            className="axe5-image"
          />
        </div>
      </div>
    </div>
  );
};

export default Axe5Section;
