import React from 'react';
import './ThemeToggle.css';
import dayModeIcon from '@/assets/DayMode.png';
import nightModeIcon from '@/assets/NightMode.png';

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
            src={dayModeIcon} 
            alt="Switch to light mode" 
            width="20" 
            height="20"
          />
        ) : (
          <img 
            src={nightModeIcon} 
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