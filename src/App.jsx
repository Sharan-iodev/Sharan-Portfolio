import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './sections/HeroSection';
import StatsCounter from './components/StatsCounter';
import AboutSection from './sections/AboutSection';
import EducationSection from './sections/EducationSection';
import SkillsSection from './sections/SkillsSection';
import ProjectsSection from './sections/ProjectsSection';
import ContactSection from './sections/ContactSection';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import InteractiveTerminal from './components/InteractiveTerminal';
import BackgroundGlow from './animations/BackgroundGlow';
import { Terminal, FileText, ChevronUp } from 'lucide-react';
import './App.css';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'education', 'skills', 'projects', 'contact'];
      const scrollY = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="portfolio-app">
      {/* Dynamic Animated Ambient Background */}
      <BackgroundGlow />

      {/* Navigation Header */}
      <Navbar
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenTerminal={() => setIsTerminalOpen(true)}
        activeSection={activeSection}
      />

      {/* Main Content Sections */}
      <main className="main-content">
        <HeroSection
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenTerminal={() => setIsTerminalOpen(true)}
        />
        <StatsCounter />
        <AboutSection />
        <EducationSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection onOpenResume={() => setIsResumeOpen(true)} />
      </main>

      {/* Footer */}
      <Footer onOpenResume={() => setIsResumeOpen(true)} />

      {/* Modals & Overlays */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      <InteractiveTerminal
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
        onOpenResume={() => {
          setIsTerminalOpen(false);
          setIsResumeOpen(true);
        }}
      />

      {/* Floating Interactive Dock / Action Pill */}
      <div className="floating-quick-dock">
        <button
          onClick={() => setIsTerminalOpen(true)}
          className="dock-btn"
          title="Open interactive terminal"
        >
          <Terminal size={18} />
          <span className="dock-label">CLI Terminal</span>
        </button>
        <button
          onClick={() => setIsResumeOpen(true)}
          className="dock-btn dock-btn-highlight"
          title="Open resume PDF"
        >
          <FileText size={18} />
          <span className="dock-label">Resume PDF</span>
        </button>
      </div>
    </div>
  );
}
