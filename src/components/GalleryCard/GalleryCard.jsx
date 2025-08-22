import React from 'react';
import './GalleryCard.css';

function GalleryCard({ 
  title, 
  category, 
  image, 
  description
}) {
  return (
    <div className="gallery-card">
      <div className="card-image">
        <img 
          src={image} 
          alt={`${title} - ${description}`} 
        />
        <div className="card-overlay">
        </div>
      </div>
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
}

export default GalleryCard; 