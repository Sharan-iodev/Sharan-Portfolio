import React, { useState } from 'react';
import { Code, Layout, Server, Wrench, Shield, Check, Cpu } from 'lucide-react';

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Skills' },
    { id: 'languages', label: 'Languages' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend & APIs' },
    { id: 'tools', label: 'Tools & Architecture' }
  ];

  const skillGroups = [
    {
      category: 'languages',
      title: 'Programming Languages',
      icon: <Code size={20} className="text-indigo-400" />,
      skills: [
        { name: 'Java', level: 'Intermediate / Core', desc: 'Object-Oriented design, multithreading, data structures' },
        { name: 'Python', level: 'Advanced / Scripts', desc: 'Automation, data parsing, backend logic & AI integration' },
        { name: 'JavaScript (ES6+)', level: 'Advanced', desc: 'Asynchronous JS, promises, DOM manipulation, modern syntax' },
        { name: 'C', level: 'Fundamental', desc: 'Pointers, memory management, low-level data structures' }
      ]
    },
    {
      category: 'frontend',
      title: 'Frontend Development',
      icon: <Layout size={20} className="text-cyan-400" />,
      skills: [
        { name: 'React.js', level: 'Proficient', desc: 'Functional components, custom hooks, state management' },
        { name: 'HTML5', level: 'Mastery', desc: 'Semantic markup, accessibility, modern web standards' },
        { name: 'CSS3 & Modern Styling', level: 'Proficient', desc: 'Flexbox, CSS Grid, Glassmorphism, animations' },
        { name: 'Responsive Web Design', level: 'Proficient', desc: 'Mobile-first layouts, adaptive views across devices' }
      ]
    },
    {
      category: 'backend',
      title: 'Backend & APIs',
      icon: <Server size={20} className="text-purple-400" />,
      skills: [
        { name: 'REST APIs', level: 'Proficient', desc: 'Endpoint design, request lifecycle, JSON contracts' },
        { name: 'API Polling', level: 'Hands-on', desc: 'Near-real-time state synchronization, cadence management' },
        { name: 'Local Storage & Persistence', level: 'Proficient', desc: 'Client-side data persistence, caching mechanisms' },
        { name: 'Authentication Workflows', level: 'Hands-on', desc: 'Role-based access, candidate vs admin portals' }
      ]
    },
    {
      category: 'tools',
      title: 'Tools & Engineering Concepts',
      icon: <Wrench size={20} className="text-emerald-400" />,
      skills: [
        { name: 'Antigravity', level: 'Specialized', desc: 'AI-assisted development workflows and agentic capabilities' },
        { name: 'VS Code', level: 'Primary IDE', desc: 'Productive development environment, extensions, debugging' },
        { name: 'Git & GitHub', level: 'Proficient', desc: 'Version control, branch management, repo hosting' },
        { name: 'Audit Logging', level: 'Hands-on', desc: 'Action tracking, candidate activity history, security' },
        { name: 'WordPress', level: 'Familiar', desc: 'CMS architecture, theme modification, content workflows' }
      ]
    }
  ];

  const filteredGroups = activeCategory === 'all'
    ? skillGroups
    : skillGroups.filter((g) => g.category === activeCategory);

  return (
    <section id="skills" className="section-wrapper">
      <div className="section-header">
        <div className="section-badge">
          <Cpu size={14} />
          <span>Technical Toolkit</span>
        </div>
        <h2 className="section-title">
          Skills & <span className="gradient-text">Technologies</span>
        </h2>
        <p className="section-subtitle">
          Core programming languages, frontend frameworks, APIs, and modern development tooling.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="skill-tabs-container">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`skill-tab-btn ${activeCategory === cat.id ? 'active' : ''}`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="skills-group-grid">
        {filteredGroups.map((group, idx) => (
          <div key={idx} className="skill-group-card glass-panel">
            <div className="skill-group-header">
              <div className="skill-group-icon">{group.icon}</div>
              <h3 className="skill-group-title">{group.title}</h3>
            </div>

            <div className="skill-items-list">
              {group.skills.map((skill, sIdx) => (
                <div key={sIdx} className="skill-item">
                  <div className="skill-item-top">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-level-badge">{skill.level}</span>
                  </div>
                  <p className="skill-item-desc">{skill.desc}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
