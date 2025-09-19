import React from 'react';
import './HeroSection.css';
import quoteIcon from '../images/icone-grife.png';

const HeroSection = () => {
  const colistiers = [
    "MBABIRI LINDJOMBI Gabriel",
    "BOUBATA NGOLET Magdalone", 
    "NGOSSANGA Faustin",
    "LEPEMANGOYE Jean Rémy",
    "LEBOMO Estime Pedox",
    "NDUNGU MULILI Steeve Alain",
    "MBOU MOUTETE Alfonse",
    "MAKOUNDJI MIVOUSSINI Christian",
    "LOBO Leon Paul",
    "DOKO Youbi Fabrice",
    "BOUNGDONZA Marcellin",
    "ABEGOU Owono Brigitte",
    "LEPEMANGOYE Jean Olivier",
    "LIPANGOU WAVENOULOUNI Virginie",
    "MAHANGA MBADINGA Jean",
    "MATCHIKA Estelle",
    "OKOMO Bernard Henri",
    "BOLO Wilfrid Pamphile",
    "MAPOBA MAGNI Daisy",
    "MIHINDJOU MVOUNGA T. Renault",
    "BOUKOPO Georges",
    "NDZIYA Aloise",
    "NDJOUMBANGOYE Eddy Charles"
  ];

  return (
    <div className="hero-section" id="accueil" style={{'--quote-icon': `url(${quoteIcon})`}}>
      {/* Section blanche - En-tête */}
      <div className="header-section" id="programme">
        <div className="container">
          <div className="header-content">
            <div className="title-section">
              <h1 className="main-title">ÉLECTIONS LOCALES 2025</h1>
              <div className="separator"></div>
              <span className="program-text">PROGRAMME*</span>
            </div>
            <div className="subtitle-section">
              <h2 className="subtitle">1ER ARRONDISSEMENT DE LA COMMUNE</h2>
              <h2 className="subtitle">DE MOANDA</h2>
            </div>
          </div>
        </div>
      </div>

      {/* Section bleue - Candidat principal */}
      <div className="candidate-section" id="candidat">
        <div className="container">
          <div className="candidate-content">
          <div className="candidate-photo">
            <img 
              src="/images/image-clobert-lebomo.jpg" 
              alt="LEBOMO Arnauld Clobert - Tête de liste UDB"
              className="candidate-image"
            />
          </div>
            <div className="candidate-info">
              <h3 className="candidate-name">LEBOMO Arnauld Clobert</h3>
              <p className="candidate-role">Tête de liste UDB</p>
              <div className="slogan">
                <span className="quote-mark"></span><span className="slogan-text">Allumons la flamme du renouveau</span><br /><span className="slogan-text">dans le 1er Arrondissement.</span>
              </div>
              <p className="program-summary">7 Axes, 32 Actions phares</p>
              <div className="separator-line"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Section bleue - Colistiers */}
      <div className="colistiers-section" id="colistiers">
        <div className="container">
          <h3 className="colistiers-title">Colistiers</h3>
          <div className="colistiers-grid">
            <div className="colistiers-column">
              {colistiers.slice(0, 12).map((name, index) => (
                <div key={index} className="colistier-item">
                  {index + 2}- {name}
                </div>
              ))}
            </div>
            <div className="colistiers-column">
              {colistiers.slice(12).map((name, index) => (
                <div key={index + 12} className="colistier-item">
                  {index + 14}- {name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
