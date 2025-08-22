import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Phone</h3>
          <p>+1 (519) 282-9345</p>
        </div>
        
        <div className="footer-section">
          <h3>Email</h3>
          <p>stella.xiaoxinlao@gmail.com</p>
        </div>
        
        <div className="footer-section">
          <h3>Follow Me</h3>
          <div className="social-links">
            <a 
              href="https://linkedin.com/in/stella-lao" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
            >
              <span className="linkedin-icon">In</span>
            </a>
          </div>
        </div>
        
        <div className="footer-section">
          <p>&copy; Stella's Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;