import React from 'react';
import './Header.css';

function Hamburger({ isOpen, toggleMenu }) {
  return (
    <div className="hamburger" onClick={toggleMenu}>
      <span className={`hamburger-line ${isOpen ? 'open' : ''}`}></span>
      <span className={`hamburger-line ${isOpen ? 'open' : ''}`}></span>
      <span className={`hamburger-line ${isOpen ? 'open' : ''}`}></span>
    </div>
  );
}

export default Hamburger; 