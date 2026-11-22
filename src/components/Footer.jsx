import React from 'react';
import { ArrowUp, Mail, Phone, MapPin, Heart, Code2 } from 'lucide-react';
import GithubIcon from './GithubIcon';
import LinkedinIcon from './LinkedinIcon';

export default function Footer({ onOpenResume }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-grid">
          {/* Col 1: Bio */}
          <div className="footer-col">
            <div className="footer-brand">
              <span className="logo-badge">SG</span>
              <span className="logo-text">Sharan Gounder</span>
            </div>
            <p className="footer-desc">
              Computer Engineering Student at TSEC Bandra, Mumbai. Passionate about engineering high-impact
              web applications, artificial intelligence, and agentic workflows.
            </p>
            <div className="footer-social-row">
              <a
                href="https://github.com/Sharan-iodev"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-box"
                aria-label="GitHub"
              >
                <GithubIcon size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/sharan-gounder-27b0b733a/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-box"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={18} />
              </a>
              <a
                href="mailto:sharankannan1234@gmail.com"
                className="social-icon-box"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
              <a
                href="tel:+919833959315"
                className="social-icon-box"
                aria-label="Phone"
              >
                <Phone size={18} />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="footer-col">
            <h4 className="footer-heading">Quick Navigation</h4>
            <ul className="footer-links">
              <li><a href="#hero">Home</a></li>
              <li><a href="#about">About Me</a></li>
              <li><a href="#education">Education & Academics</a></li>
              <li><a href="#skills">Technical Skills</a></li>
              <li><a href="#projects">Featured Projects</a></li>
              <li><a href="#contact">Contact Me</a></li>
            </ul>
          </div>

          {/* Col 3: Direct Contact */}
          <div className="footer-col">
            <h4 className="footer-heading">Direct Contact</h4>
            <div className="footer-contact-items">
              <div className="footer-contact-item">
                <Mail size={16} className="text-primary" />
                <a href="mailto:sharankannan1234@gmail.com">sharankannan1234@gmail.com</a>
              </div>
              <div className="footer-contact-item">
                <Phone size={16} className="text-primary" />
                <a href="tel:+919833959315">+91 98339 59315</a>
              </div>
              <div className="footer-contact-item">
                <MapPin size={16} className="text-primary" />
                <span>Dombivli, Maharashtra, India</span>
              </div>
              <button
                onClick={onOpenResume}
                className="footer-resume-link"
              >
                Download Official Resume (PDF)
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom-bar">
          <p className="copyright-text">
            © {new Date().getFullYear()} Sharan Gounder. Crafted with React, Vite & Modern CSS.
          </p>
          <button
            onClick={scrollToTop}
            className="back-to-top-btn"
            title="Scroll back to top"
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
