import React from 'react';
import './ThemeToggle.css';

function ThemeToggle({ theme, toggleTheme }) {
  const isDarkMode = theme === 'dark';
  
  return (
    <button 
      className="theme-toggle" 
      onClick={toggleTheme}
    >
      <div className="theme-toggle-icon">
        {isDarkMode ? (
          <img 
            src="/DayMode.png" 
            alt="Switch to light mode" 
            width="20" 
            height="20"
          />
        ) : (
          <img 
            src="/NightMode.png" 
            alt="Switch to dark mode" 
            width="20" 
            height="20"
          />
        )}
      </div>
    </button>
  );
}

export default ThemeToggle; 