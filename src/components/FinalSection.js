import React from 'react';
import './FinalSection.css';

const FinalSection = () => {
  return (
    <div className="final-section" id="final">
      {/* Section image de l'affiche finale */}
      <div className="final-poster-section">
        <div className="final-poster-container">
          <img 
            src="/images/© 2025_PROGRAMME 1er ARR MDA (1).jpg" 
            alt="Affiche Finale UDB - 1er Arrondissement de Moanda"
            className="final-poster-image"
          />
        </div>
      </div>
    </div>
  );
};

export default FinalSection;
