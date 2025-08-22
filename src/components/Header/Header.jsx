import React from "react";
import Hamburger from "./Hamburger";
import Navigation from "../Navigation/Navigation";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import "./Header.css";

function Header(props) {
  const { setPage, isOpen, toggleMenu, theme, toggleTheme } = props;

  const handleNavClick = (pageId) => {
    setPage(pageId);

    if (isOpen) {
      toggleMenu();
    }
  };

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <header className="header">
        <nav className="nav">
          <div className="nav-brand">
            <h1>Stella Lao</h1>
          </div>

          <ul className="nav-list desktop-menu">
            <Navigation onNavClick={handleNavClick} />
          </ul>

          <div className="nav-controls">
            <Hamburger isOpen={isOpen} toggleMenu={toggleMenu} />
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          </div>

          <ul className={`nav-list mobile-menu ${isOpen ? "open" : ""}`}>
            <Navigation onNavClick={handleNavClick} />
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
