import React from 'react';
import './Card.css';

function Card(props) {
  const { title, dateRange, establishment, degree, description, className } = props;

  return (
    <div className={`card ${className}`}>
      <div className="card-header">
        <h3 className="card-title">{title}</h3>
      </div>
      
      <div className="card-content">
        <div className="card-date-column">
          <span className="card-date">{dateRange}</span>
        </div>
        <div className="card-details-column">
          <div className="card-degree-info">
            <span className="card-establishment">{establishment}</span>
            <span className="card-separator"> | </span>
            <span className="card-degree">{degree}</span>
          </div>
          <p className="card-description">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default Card; 