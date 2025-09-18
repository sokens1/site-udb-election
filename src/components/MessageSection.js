import React from 'react';
import './MessageSection.css';

const MessageSection = () => {
  return (
    <div className="message-section" id="message">
      {/* Section image de l'affiche complète */}
      <div className="poster-image-section">
        <div className="poster-image-container">
          <img 
            src="/images/© 2025_PROGRAMME 1er ARR MDA.jpg" 
            alt="Affiche Programme UDB - 1er Arrondissement de Moanda"
            className="poster-image"
          />
        </div>
      </div>
    </div>
  );
};

export default MessageSection;
