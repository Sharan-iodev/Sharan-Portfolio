import React from 'react';
import { Download, Terminal, Mail, Phone, MapPin, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import GithubIcon from '../components/GithubIcon';
import LinkedinIcon from '../components/LinkedinIcon';
import TypingEffect from '../animations/TypingEffect';
import confetti from 'canvas-confetti';

export default function HeroSection({ onOpenResume, onOpenTerminal }) {
  const titles = [
    'Computer Engineering Student',
    'Software Developer',
    'Agentic AI Enthusiast',
    'Full-Stack Web Builder'
  ];

  const handleResumeClick = () => {
    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 }
      });
    } catch (e) {}
    onOpenResume();
  };

  return (
    <section id="hero" className="hero-section">
      <div className="hero-container">
        {/* Left Column: Headline, Bio, CTAs */}
        <div className="hero-content">
          {/* Status Badge */}
          <div className="availability-pill">
            <span className="pulse-indicator" />
            <span className="pill-text">Seeking Software & AI Internship Opportunities</span>
          </div>

          <h1 className="hero-heading">
            Hi, I'm <span className="highlight-name">Sharan Gounder</span>
            <br />
            <span className="hero-role-line">
              <TypingEffect words={titles} typingSpeed={80} deletingSpeed={40} pauseTime={2000} />
            </span>
          </h1>

          <p className="hero-summary">
            Second-year Computer Engineering student at <strong>Thadomal Shahani Engineering College (TSEC)</strong>,
            Mumbai. Passionate about building robust web applications, AI-assisted automation, and scalable
            dashboards with hands-on experience across React, Python, Java, and modern web architectures.
          </p>

          {/* Quick info row */}
          <div className="hero-meta-row">
            <div className="meta-item">
              <MapPin size={16} className="text-primary" />
              <span>Dombivli, Mumbai, India</span>
            </div>
            <div className="meta-item">
              <Sparkles size={16} className="text-secondary" />
              <span>CGPA: 8.68 / 10.0</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="hero-cta-group">
            <a href="#projects" className="btn-primary glow-button">
              <span>Explore Projects</span>
              <ArrowRight size={18} />
            </a>

            <button onClick={handleResumeClick} className="btn-secondary">
              <Download size={18} />
              <span>Get Resume</span>
            </button>

            <button
              onClick={onOpenTerminal}
              className="btn-outline terminal-launcher-btn"
              title="Launch interactive shell"
            >
              <Terminal size={18} />
              <span>Run CLI</span>
            </button>
          </div>

          {/* Social Links */}
          <div className="hero-social-row">
            <span className="social-label">Connect:</span>
            <a
              href="https://github.com/Sharan-iodev"
              target="_blank"
              rel="noopener noreferrer"
              className="social-pill"
            >
              <GithubIcon size={16} />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/sharan-gounder-27b0b733a/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-pill"
            >
              <LinkedinIcon size={16} />
              <span>LinkedIn</span>
            </a>
            <a
              href="mailto:sharankannan1234@gmail.com"
              className="social-pill"
            >
              <Mail size={16} />
              <span>Email</span>
            </a>
            <a
              href="tel:+919833959315"
              className="social-pill"
            >
              <Phone size={16} />
              <span>+91 98339 59315</span>
            </a>
          </div>
        </div>

        {/* Right Column: Profile Portrait & Floating Accent Badges */}
        <div className="hero-avatar-area">
          <div className="avatar-frame-wrapper">
            {/* Ambient Backlight Glow */}
            <div className="avatar-glow-ring" />

            {/* Profile Image */}
            <div className="avatar-image-container">
              <img
                src="/images/profile.png"
                alt="Sharan Gounder"
                className="profile-img"
              />
            </div>

            {/* Floating Info Badges */}
            <div className="floating-badge badge-top-right glass-panel">
              <div className="badge-icon-box bg-indigo-500/20 text-indigo-400">
                ⚡
              </div>
              <div>
                <div className="badge-small-title">Overall CGPA</div>
                <div className="badge-strong-val">8.68 / 10</div>
              </div>
            </div>

            <div className="floating-badge badge-bottom-left glass-panel">
              <div className="badge-icon-box bg-cyan-500/20 text-cyan-400">
                💻
              </div>
              <div>
                <div className="badge-small-title">Engineering</div>
                <div className="badge-strong-val">TSEC Bandra</div>
              </div>
            </div>

            <div className="floating-badge badge-bottom-right glass-panel">
              <div className="badge-icon-box bg-purple-500/20 text-purple-400">
                🤖
              </div>
              <div>
                <div className="badge-small-title">Focus Area</div>
                <div className="badge-strong-val">Agentic AI & Web</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
