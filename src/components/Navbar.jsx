import React, { useState, useEffect } from 'react';
import { FileText, Menu, X, Terminal, Sparkles, Send } from 'lucide-react';
import GithubIcon from './GithubIcon';

export default function Navbar({ onOpenResume, onOpenTerminal, activeSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleNavClick = (href) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`navbar-header ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="nav-container">
        {/* Brand Logo */}
        <a href="#hero" className="brand-logo" onClick={(e) => { e.preventDefault(); handleNavClick('#hero'); }}>
          <span className="logo-badge">SG</span>
          <span className="logo-text">
            Sharan<span className="logo-highlight">.dev</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`nav-link ${isActive ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
              >
                {link.name}
                {isActive && <span className="active-dot" />}
              </a>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="nav-actions">
          {/* Quick Terminal Launcher */}
          <button
            onClick={onOpenTerminal}
            className="icon-action-btn"
            title="Open Interactive CLI Terminal"
            aria-label="Open CLI Terminal"
          >
            <Terminal size={18} />
          </button>

          {/* GitHub Profile */}
          <a
            href="https://github.com/Sharan-iodev"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-action-btn github-btn"
            title="GitHub: Sharan-iodev"
            aria-label="GitHub Profile"
          >
            <GithubIcon size={18} />
          </a>

          {/* Resume CTA Button */}
          <button
            onClick={onOpenResume}
            className="resume-nav-btn glow-button"
            title="View & Download Resume"
          >
            <FileText size={16} />
            <span>Resume</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="mobile-drawer animate-fade-in">
          <div className="mobile-drawer-links">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="mobile-nav-link"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
              >
                {link.name}
              </a>
            ))}
            <div className="mobile-drawer-actions">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="resume-nav-btn w-full"
              >
                <FileText size={16} />
                <span>View Full Resume</span>
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenTerminal();
                }}
                className="terminal-mobile-btn w-full"
              >
                <Terminal size={16} />
                <span>Open Terminal</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
