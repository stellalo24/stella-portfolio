import React from 'react';
import NavItem from '../NavItem/NavItem';

function Navigation({ onNavClick }) {
  return (
    <>
      <NavItem text="Home" path="/" onNavClick={onNavClick} />
      <NavItem text="About" path="/About" onNavClick={onNavClick} />
      <NavItem text="Projects" path="/Projects" onNavClick={onNavClick} />
      <NavItem text="Gallery" path="/Gallery" onNavClick={onNavClick} />
      <NavItem text="Contact" path="/Contact" onNavClick={onNavClick} />
    </>
  );
}

export default Navigation; 