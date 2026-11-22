import React from 'react';
import { FolderGit2, Sparkles, ExternalLink } from 'lucide-react';
import GithubIcon from '../components/GithubIcon';
import ProjectCard from '../components/ProjectCard';

export default function ProjectsSection() {
  const projects = [
    {
      title: 'NexusPanel',
      subtitle: 'Interview & Candidate Assessment Platform',
      category: 'Full-Stack & Recruitment Tech',
      badge: 'Assessment Suite',
      overview:
        'A comprehensive web platform engineered with dedicated Admin and Candidate portals to streamline technical interviews, multi-stage skill assessments, and recruitment pipeline telemetry.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Python', 'REST APIs', 'Local Storage', 'Audit Logging'],
      githubUrl: 'https://github.com/Sharan-iodev',
      mockWidgets: [
        { label: 'Assessment Stages', value: '4 Modules' },
        { label: 'Dashboard Polling', value: 'Live 5s' },
        { label: 'Role-Based Access', value: 'Admin & Candidate' }
      ],
      highlights: [
        'Developed a web-based candidate assessment platform with separate Admin and Candidate portals.',
        'Built an Admin Dashboard to monitor registrations, assessment metrics and interview progress in real-time.',
        'Implemented searchable candidate records, role-based filtering, and detailed candidate profiles.',
        'Created a multi-stage assessment workflow with progress tracking and interactive interview simulation.',
        'Added API polling for near-real-time dashboard updates and a searchable technical interview Q&A module.',
        'Developed authentication interfaces, audit logging, and secure candidate data management functionality.'
      ]
    },
    {
      title: 'RoleRadar',
      subtitle: 'Career & Job Application Management Platform',
      category: 'React Application & Career Tech',
      badge: 'Career Tracker',
      overview:
        'A student-centric career platform designed to simplify opportunity discovery, structure the application lifecycle, and guide students with actionable skill development roadmaps.',
      technologies: ['React.js', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Local Storage', 'React Hooks'],
      githubUrl: 'https://github.com/Sharan-iodev',
      mockWidgets: [
        { label: 'Discovery Filters', value: 'Multi-criteria' },
        { label: 'Application Pipeline', value: 'End-to-End' },
        { label: 'Roadmap Tracking', value: 'Interactive' }
      ],
      highlights: [
        'Developed a responsive career platform to help students discover opportunities and organize job searches.',
        'Built a job discovery dashboard with search and filters for job categories, employment types, and work modes.',
        'Implemented comprehensive application tracking for statuses, interviews, assessments, and job offers.',
        'Designed skill-development roadmaps and progress dashboards to track career preparation milestones.',
        'Added authentication interfaces, profile management, and persistent browser-based storage.',
        'Structured the application with modular React components, custom React Hooks, and service-based architecture.'
      ]
    }
  ];

  return (
    <section id="projects" className="section-wrapper">
      <div className="section-header">
        <div className="section-badge">
          <FolderGit2 size={14} />
          <span>Featured Work</span>
        </div>
        <h2 className="section-title">
          Engineering Impact Through <span className="gradient-text">Practical Projects</span>
        </h2>
        <p className="section-subtitle">
          Real-world web applications built with clean component architecture, APIs, and intuitive workflows.
        </p>
      </div>

      <div className="projects-container">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>

      {/* GitHub Callout Banner */}
      <div className="github-callout glass-panel">
        <div className="callout-left">
          <div className="callout-icon-box">
            <GithubIcon size={24} className="text-white" />
          </div>
          <div>
            <h3 className="callout-title">Explore More Code on GitHub</h3>
            <p className="callout-desc">
              Check out my repositories, source code commits, algorithms, and experiments on my GitHub profile.
            </p>
          </div>
        </div>
        <a
          href="https://github.com/Sharan-iodev"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          <span>Visit @Sharan-iodev</span>
          <ExternalLink size={16} />
        </a>
      </div>
    </section>
  );
}
