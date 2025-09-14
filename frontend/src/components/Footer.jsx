import React from "react";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3 className="footer-title">Ahmad Alghooneh</h3>
            <p className="footer-subtitle">Full Stack Developer • PhD in Robotics • AI Expert</p>
          </div>
          
          <div className="footer-links">
            <div className="footer-section">
              <h4 className="footer-section-title">Quick Links</h4>
              <ul className="footer-nav">
                <li><a href="#about" className="footer-link">About</a></li>
                <li><a href="#skills" className="footer-link">Skills</a></li>
                <li><a href="#projects" className="footer-link">Projects</a></li>
                <li><a href="#experience" className="footer-link">Experience</a></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4 className="footer-section-title">Connect</h4>
              <div className="footer-social">
                <a href="https://www.linkedin.com/in/ahmad-alghooneh-176403169/" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                  <Linkedin size={20} />
                  <span>LinkedIn</span>
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                  <Github size={20} />
                  <span>GitHub</span>
                </a>
                <a href="mailto:ahmad@example.com" className="footer-social-link">
                  <Mail size={20} />
                  <span>Email</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>© {currentYear} Ahmad Alghooneh. All rights reserved.</p>
          </div>
          <div className="footer-made-with">
            <p>Made with <Heart size={16} className="heart-icon" /> and lots of coffee</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;