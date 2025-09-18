import React from 'react';
import './UDBPoster.css';
import UDBLogo from './UDBLogo';

const UDBPoster = () => {
  const colistiers = [
    "Mbabiri Lindjombi Gabriel",
    "Boubata Ngolet Magdalone", 
    "Ngossanga Faustin",
    "Lepemangoye Jean Rémy",
    "Lebomo Estime Pedox",
    "Ndungu Mulili Steeve Alain",
    "Mbou Moutete Alfonse",
    "Makoundji Mivoussini Christian",
    "Lobo Leon Paul",
    "Doko Youbi Fabrice",
    "Boungondza Marcellin",
    "Abegue Owono Brigitte",
    "Lepemangoye Jean Olivier",
    "Lipangou Wavenoulouni Virginie",
    "Mahanga Mbadinga Jean",
    "Matchika Estelle",
    "Okomo Bernard Henri",
    "Bolo Wilfrid Pamphile",
    "Mapoba Magni Daisy",
    "Mihindjou Mvounga T. Renault",
    "Boukopo Georges",
    "Ndziya Aloise",
    "Ndjoumbangoye Eddy Charles"
  ];

  return (
    <div className="udb-poster">
      {/* Section blanche - En-tête */}
      <div className="header-section">
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
        <div className="logo-container">
          <UDBLogo />
        </div>
      </div>

      {/* Section bleue - Candidat principal */}
      <div className="candidate-section">
        <div className="candidate-content">
          <div className="candidate-photo">
            <div className="photo-placeholder">
              <div className="photo-icon">👤</div>
            </div>
          </div>
          <div className="candidate-info">
            <h3 className="candidate-name">LEBOMO Arnauld Clobert</h3>
            <p className="candidate-role">Tête de liste UDB</p>
            <div className="slogan">
              <span className="quote-mark">"</span>
              <span className="slogan-text">Allumons la flamme du renouveau</span>
              <br />
              <span className="slogan-text">dans le 1er Arrondissement.</span>
            </div>
            <p className="program-summary">7 Axes, 32 Actions phares</p>
            <div className="separator-line"></div>
          </div>
        </div>
      </div>

      {/* Section bleue - Colistiers */}
      <div className="colistiers-section">
        <h3 className="colistiers-title">Colistiers</h3>
        <div className="colistiers-grid">
          <div className="colistiers-column">
            {colistiers.slice(0, 11).map((name, index) => (
              <div key={index} className="colistier-item">
                {index + 2}- {name}
              </div>
            ))}
          </div>
          <div className="colistiers-column">
            {colistiers.slice(11).map((name, index) => (
              <div key={index + 11} className="colistier-item">
                {index + 13}- {name}
              </div>
            ))}
          </div>
        </div>
        <div className="copyright">
          ©2025 Impact Com. Tous droits réservés
        </div>
      </div>
    </div>
  );
};

export default UDBPoster;
