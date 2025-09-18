import React from 'react';
import './Axe3Section.css';
import UDBLogo from './UDBLogo';

const Axe3Section = () => {
  return (
    <div className="axe3-section" id="axe3">
      {/* Section blanche - Contenu principal */}
      <div className="content-section">
        <div className="container">
          <div className="content-header">
            <div className="title-section">
              <h1 className="main-title">
                AXE 3 – <span className="green-text">SOCIAL, SANTÉ ET BIEN-ÊTRE</span>
              </h1>
              <p className="subtitle">
                *Vision nationale : Santé souveraine & hôpitaux modernes*
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
                Réhabilitation des centres de santé avec équipements modernes.
              </div>
              <div className="action-item">
                Maisons médicales de proximité.
              </div>
              <div className="action-item">
                Pharmacies communautaires avec médicaments essentiels.
              </div>
              <div className="action-item">
                Espaces culturels de proximité.
              </div>
              <div className="action-item">
                Accompagnement des personnes âgées et personnes en situation de handicap.
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
            Une population en bonne santé, active et épanouie est la véritable richesse du 1er arrondissement.
          </div>
        </div>
        <div className="photo-container">
          <img 
            src="/images/image-axe3.jpg" 
            alt="Social, Santé et Bien-être - UDB"
            className="axe3-image"
          />
        </div>
      </div>
    </div>
  );
};

export default Axe3Section;
