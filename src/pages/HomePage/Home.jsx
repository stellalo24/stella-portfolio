import React from 'react';
import './Home.css';

function Home({ setPage }) {
  const handleNavClick = (pageId) => {
    setPage(pageId);
  };

  return (
    <div className="home">
      <div className="home-container">
        <div className="home-left">
          <div className="portrait-container">
            <div className="portrait">
              <img 
                src="/Portrait.jpg" 
                alt="Professional headshot portrait of Stella, a Master's student in Information Systems at Northeastern University. She appears confident and approachable, representing her professional identity for her portfolio website." 
                className="portrait-image"
              />
            </div>
          </div>
        </div>
        
        <div className="home-right">
          <div className="content">
            <h1 className="main-heading">Hello</h1>
            <h2 className="sub-heading">A Bit About Me</h2>
            <p className="description">
            I'm a Master's student in Information Systems at Northeastern University with a finance background. I enjoy building applications using Python, Java, HTML, CSS, JavaScript, and React, combining technical skills with analytical problem-solving.
            </p>
            
            <div className="action-buttons">
              <button className="action-btn resume-btn" onClick={() => handleNavClick('/About')}>
                About
              </button>
              <button className="action-btn projects-btn" onClick={() => handleNavClick('/Projects')}>
                Projects
              </button>
              <button className="action-btn gallery-btn" onClick={() => handleNavClick('/Gallery')}>
                Gallery
              </button>
              <button className="action-btn contact-btn" onClick={() => handleNavClick('/Contact')}>
                Contact
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;