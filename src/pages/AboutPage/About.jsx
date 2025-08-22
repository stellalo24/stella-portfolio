import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about">
      <div className="about-header">
        <h1 className="about-title">About Me</h1>
        <p className="about-description">
          Here you can explore my professional background and experience. Learn
          about my work history, education, and career progression.
        </p>
      </div>

      <div className="about-container">
        <section className="experience-section">
          <h2 className="section-title">Work Experience</h2>

          <div className="experience-entry">
            <div className="date">2024 - Present</div>
            <div className="content">
              <h3 className="title">Credit Analyst</h3>
              <p className="description">Scotiabank, Toronto, ON</p>
              <p className="description">
                Monitored market movements to detect limit breaches, scrutinized
                intraday Thomson Reuters and Bloomberg data to assess
                concentration and negative-equity risks, and aligned the firm's
                risk appetite via analysis and collateral management.
              </p>
            </div>
          </div>

          <div className="experience-entry">
            <div className="date">2022 - 2024</div>
            <div className="content">
              <h3 className="title">Investment Associate</h3>
              <p className="description">Scotiabank, Toronto, ON</p>
              <p className="description">
                Managed retention and asset growth of high-net-worth portfolios
                at Scotiabank and drove new business; performed margin call
                outreach and risk education; reviewed accounts for credit
                compliance; and collaborated to deliver strategic insights.
              </p>
            </div>
          </div>

          <div className="experience-entry">
            <div className="date">2021 - 2022</div>
            <div className="content">
              <h3 className="title">Personal Banking</h3>
              <p className="description">TD Canada Trust, London, ON</p>
              <p className="description">
                Provided personalized loan and credit advice, resolved service
                issues, promoted digital banking tools, led frontline operations
                to enhance client satisfaction and efficiency, and maintained
                full compliance with financial regulations and documentation
                standards.
              </p>
            </div>
          </div>
        </section>

        <section className="education-section">
          <h2 className="section-title">Education</h2>

          <div className="experience-entry">
            <div className="date">2025 - Present</div>
            <div className="content">
              <h3 className="title">
                Master of Science in Information Systems
              </h3>
              <p className="description">
                Northeastern University, Toronto, ON, Canada
              </p>
            </div>
          </div>

          <div className="experience-entry">
            <div className="date">2018 - 2019</div>
            <div className="content">
              <h3 className="title">Master of Education</h3>
              <p className="description">
                Western University, London, ON, Canada
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
