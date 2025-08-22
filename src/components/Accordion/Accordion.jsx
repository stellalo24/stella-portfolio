import React, { useState } from "react";
import "./Accordion.css";

function Accordion({
  title,
  content,
  className = "",
  defaultOpen = false,
  iconOpen = "−",
  iconClosed = "+",
  headerClassName = "",
  contentClassName = "",
  onToggle = null,
  panelId = 0,
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const handleToggle = () => {
    setIsOpen((prevIsOpen) => {
      const newState = !prevIsOpen;

      if (onToggle) {
        onToggle(newState);
      }

      return newState;
    });
  };

  const headerId = `accordion-header-${panelId}`;
  const panelIdAttr = `accordion-panel-${panelId}`;

  return (
    <div className={`accordion-item ${className}`}>
      <h2 className="accordion-header">
        <button
          className={`accordion-button ${headerClassName} ${
            isOpen ? "expanded" : ""
          }`}
          aria-expanded={isOpen}
          aria-controls={panelIdAttr}
          id={headerId}
          onClick={handleToggle}
        >
          <span className="accordion-title">{title}</span>
          <span className="accordion-icon" aria-hidden="true">
            {isOpen ? iconOpen : iconClosed}
          </span>
        </button>
      </h2>

      <div
        id={panelIdAttr}
        className={`accordion-panel ${contentClassName} ${
          isOpen ? "expanded" : ""
        }`}
        role="region"
        aria-labelledby={headerId}
        hidden={!isOpen}
      >
        <div className="accordion-content">{content}</div>
      </div>
    </div>
  );
}

export default Accordion;
