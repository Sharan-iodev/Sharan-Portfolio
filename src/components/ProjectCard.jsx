import React, { useState } from 'react';
import { ExternalLink, CheckCircle2, ChevronDown, ChevronUp, Layers, Activity, Users, Search } from 'lucide-react';
import GithubIcon from './GithubIcon';

export default function ProjectCard({ project, index }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={`project-card glass-panel ${index % 2 === 1 ? 'project-reverse' : ''}`}>
      {/* Visual / Preview Block */}
      <div className="project-visual-container">
        <div className="project-preview-mockup">
          <div className="mockup-header">
            <span className="mockup-dot bg-rose-500" />
            <span className="mockup-dot bg-amber-500" />
            <span className="mockup-dot bg-emerald-500" />
            <span className="mockup-address">
              https://{project.title.toLowerCase().replace(/\s+/g, '')}.app
            </span>
          </div>

          <div className="mockup-content">
            <div className="mockup-hero-badge">
              <span className="pulse-circle" />
              <span>{project.badge}</span>
            </div>
            <h4 className="mockup-title">{project.title}</h4>
            <p className="mockup-subtitle">{project.subtitle}</p>

            {/* Simulated UI Widgets inside the mockup */}
            <div className="mockup-widgets">
              {project.mockWidgets.map((w, idx) => (
                <div key={idx} className="mockup-mini-card">
                  <div className="mockup-widget-title">{w.label}</div>
                  <div className="mockup-widget-val">{w.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Project Content / Details Block */}
      <div className="project-info-container">
        <div className="project-type-tag">
          <Layers size={14} />
          <span>{project.category}</span>
        </div>

        <h3 className="project-heading">{project.title}</h3>
        <p className="project-tagline">{project.subtitle}</p>
        <p className="project-description">{project.overview}</p>

        {/* Tech Stack Pills */}
        <div className="project-tags">
          {project.technologies.map((tech, idx) => (
            <span key={idx} className="tech-chip">
              {tech}
            </span>
          ))}
        </div>

        {/* Bullet Key Points */}
        <div className="project-bullets">
          {(expanded ? project.highlights : project.highlights.slice(0, 3)).map((item, idx) => (
            <div key={idx} className="project-bullet-item">
              <CheckCircle2 size={16} className="bullet-icon text-cyan-400" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        {project.highlights.length > 3 && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="expand-btn"
          >
            {expanded ? (
              <>
                <span>Show less highlights</span>
                <ChevronUp size={16} />
              </>
            ) : (
              <>
                <span>View all {project.highlights.length} technical highlights</span>
                <ChevronDown size={16} />
              </>
            )}
          </button>
        )}

        {/* Action Links */}
        <div className="project-actions">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="project-btn-primary"
          >
            <GithubIcon size={16} />
            <span>GitHub Repository</span>
          </a>
          <button
            onClick={() => setExpanded(!expanded)}
            className="project-btn-secondary"
          >
            <span>{expanded ? 'Collapse Details' : 'Full Architecture'}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
