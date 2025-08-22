import React from 'react';
import Accordion from '../../components/Accordion/Accordion';
import './Projects.css';

function Projects() {
  const handleAccordionToggle = (projectName, isOpen) => {
    console.log(`Project ${projectName} toggled. Is open: ${isOpen}`);
  };

  return (
    <div className="projects">
      <div className="projects-container">
        <h1 className="projects-title">My Projects</h1>
        <p className="projects-description">
          Here you can explore my work and accomplishments. Click on any project to learn more details.
        </p>
        
        <div className="projects-accordions">
          <Accordion 
            title="Cross-Border Healthcare Communication Ecosystem"
            content={
              <>
                <div className="project-description">
                  <p>An OOP-driven Java healthcare platform connecting Outpatient, Clinical Lab, Pharmacy, and Billing enterprises. Designed with a modular, role-based architecture, it enables seamless coordination of appointments, lab tests, prescriptions, and payments, reducing delays and improving the patient care cycle.</p>
                </div>
                
                <div className="project-technologies">
                  <h3>Technologies Used:</h3>
                  <ul className="technology-list">
                    <li className="technology-item">Java (Swing UI)</li>
                    <li className="technology-item">DB4O (Object Database)</li>
                    <li className="technology-item">Java Collections Framework</li>
                    <li className="technology-item">Faker Library</li>
                    <li className="technology-item">AI Analyzer Module</li>
                  </ul>
                </div>
                
                <div className="project-details">
                  <h3>Project Details:</h3>
                  <p>Developed using core Object-Oriented Programming principles—encapsulation, inheritance, and polymorphism—the system organizes functionality into domain objects like Ecosystem, Network, Enterprise, Organization, and WorkRequest. Design patterns such as Singleton (Ecosystem instance), Factory (Enterprise creation), MVC (UI separation), and Observer (real-time UI updates) ensure maintainability and scalability.</p>
                  <p>Each enterprise contains role-specific Swing panels for Doctors, Nurses, Receptionists, Lab Assistants/Managers, Pharmacists/Technicians, Billing Clerks/Data Analysts, System Admin, and Patients. Communication flows through a typed WorkRequest system, moving tasks between objects and enterprises. Data persistence is handled via DB4O, storing Java objects directly without manual mapping. The AI Analyzer module uses object data to generate real-time billing and performance reports, demonstrating Java-based OOP design applied to a complete, end-to-end healthcare ecosystem.</p>
                </div>
              </>
            }
            defaultOpen={false}
            iconOpen="▼"
            iconClosed="▶"
            headerClassName="project-header"
            contentClassName="project-content"
            panelId={0}
            onToggle={(isOpen) => handleAccordionToggle("Cross-Border Healthcare Communication Ecosystem", isOpen)}
          />

          <Accordion 
            title="Tetris"
            content={
              <>
                <div className="project-description">
                  <p>A classic Tetris game built in Python with Pygame. It includes all seven Tetrimino pieces, smooth movement/rotation, line clears, next-piece preview, score tracking, and a clean dark UI running on a 300×600 window with a 20×20 grid.</p>
                  
                </div>
                
                <div className="project-technologies">
                  <h3>Technologies Used:</h3>
                  <ul className="technology-list">
                    <li className="technology-item">Python</li>
                    <li className="technology-item">Pygame</li>
                  </ul>
                </div>
                
                <div className="project-details">
                  <h3>Project Details:</h3>
                  <p>The project is organized into clear modules: main.py (game loop), settings.py (constants), tetrimino.py and shape.py (piece definitions and movement), and board.py (grid state and line-clear logic). Controls include arrow keys for movement/rotation and space for hard drop. Game over is detected when a new piece can't be placed at the top. Open-sourced under MIT.</p>
                </div>
              </>
            }
            iconOpen="▼"
            iconClosed="▶"
            headerClassName="project-header"
            contentClassName="project-content"
            panelId={1}
            onToggle={(isOpen) => handleAccordionToggle("Tetris", isOpen)}
          />

          <Accordion 
            title="CatWorld — Responsive Cat Profile Website (React)"
            content={
              <>
                <div className="project-description">
                  <p>A playful Single Page App where users browse a Home view and manage a cat-themed Profile. Navigation is instant (no reloads) via a clickable logo and a profile-picture dropdown.</p>
                </div>
                
                <div className="project-technologies">
                  <h3>Technologies Used:</h3>
                  <ul className="technology-list">
                    <li className="technology-item">React</li>
                    <li className="technology-item">Vite</li>
                    <li className="technology-item">JavaScript</li>
                    <li className="technology-item">Semantic HTML</li>
                    <li className="technology-item">CSS</li>
                  </ul>
                </div>
                
                <div className="project-details">
                  <h3>Project Details (Features):</h3>
                  <p><strong>Home:</strong> Cat-themed landing section with readable layout for mobile → desktop.</p>
                  <p><strong>Profile:</strong> Inline edit for Username, Actual Name, Profile Picture (choose from preset cat images), and Verified Dog-Free checkbox.</p>
                  <p><strong>Validation:</strong> Prevents empty/whitespace usernames and blocks "dog" with a friendly message; saves empty actual name as the username.</p>
                  <p><strong>Profile Menu:</strong> Profile picture opens a dropdown showing the username and Profile Settings link.</p>
                  <p><strong>State-Driven UX:</strong> All edits save instantly to state; page switches via conditional rendering.</p>
                  <p><strong>Accessibility & Styling:</strong> Labeled controls, semantic structure, and responsive custom CSS (no external UI libs).</p>
                </div>
              </>
            }
            iconOpen="▼"
            iconClosed="▶"
            headerClassName="project-header"
            contentClassName="project-content"
            panelId={2}
            onToggle={(isOpen) => handleAccordionToggle("CatWorld — Responsive Cat Profile Website (React)", isOpen)}
          />
        </div>
      </div>
    </div>
  );
}

export default Projects; 