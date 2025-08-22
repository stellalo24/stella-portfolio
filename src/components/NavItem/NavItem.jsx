import React from 'react';

function NavItem({ text, path, onNavClick }) {
  const handleClick = (e) => {
    e.preventDefault();
    onNavClick(path);
  };

  return (
    <li className="nav-item">
      <a 
        href="#"
        className="nav-link"
        onClick={handleClick}
      >
        {text}
      </a>
    </li>
  );
}

export default NavItem; 