import React from 'react';
import { User, Code2, Bot, Target, Cpu, CheckCircle2, Award, BookOpen } from 'lucide-react';

export default function AboutSection() {
  const pillars = [
    {
      icon: <Code2 size={24} className="text-cyan-400" />,
      title: 'Full-Stack & React Engineering',
      description:
        'Crafting responsive web interfaces, reusable components with React Hooks, structured service layers, and stateful browser applications.'
    },
    {
      icon: <Bot size={24} className="text-purple-400" />,
      title: 'Artificial Intelligence & Agentic Systems',
      description:
        'Exploring agentic AI paradigms, intelligent workflow automation, automated candidate assessments, and intelligent data pipelines.'
    },
    {
      icon: <Cpu size={24} className="text-indigo-400" />,
      title: 'Robust Core Fundamentals',
      description:
        'Strong computer engineering foundations in Object-Oriented Programming (Java), Systems programming (C), and Python scripting.'
    },
    {
      icon: <Target size={24} className="text-emerald-400" />,
      title: 'Goal-Oriented Internship Seeker',
      description:
        'Eager to collaborate on practical industry codebases, solve real-world problems, and contribute immediate engineering value.'
    }
  ];

  return (
    <section id="about" className="section-wrapper">
      <div className="section-header">
        <div className="section-badge">
          <User size={14} />
          <span>About Me</span>
        </div>
        <h2 className="section-title">
          Engineering Tomorrow's Software with <span className="gradient-text">Precision & Passion</span>
        </h2>
        <p className="section-subtitle">
          A glimpse into my academic journey, engineering philosophy, and career aspirations.
        </p>
      </div>

      <div className="about-grid">
        {/* Story Text Box */}
        <div className="about-story-card glass-panel">
          <h3 className="story-title">Who I Am</h3>
          <p className="story-paragraph">
            I am a second-year Computer Engineering undergraduate at{' '}
            <strong>Thadomal Shahani Engineering College (TSEC)</strong>, Mumbai. My curiosity spans
            full-stack development, modern user interfaces, and the frontiers of Artificial Intelligence
            and Agentic AI.
          </p>
          <p className="story-paragraph">
            I believe the best way to master software engineering is by building practical systems that
            solve real friction. Whether it is architecting an end-to-end recruitment platform with
            multi-stage assessment simulations (<strong>NexusPanel</strong>) or engineering an intuitive
            career search tracker (<strong>RoleRadar</strong>), I take pride in clean code, robust logic,
            and intuitive user experiences.
          </p>

          <div className="story-highlight-box">
            <div className="highlight-icon-circle">
              <Award size={20} className="text-amber-400" />
            </div>
            <div>
              <h4 className="highlight-box-title">Academic Excellence at TSEC</h4>
              <p className="highlight-box-desc">
                Maintained a strong <strong>8.68 CGPA</strong> overall, scoring an impressive{' '}
                <strong>9.02 CGPA in Semester 2</strong>.
              </p>
            </div>
          </div>
        </div>

        {/* Pillars / Competencies */}
        <div className="about-pillars-grid">
          {pillars.map((pillar, idx) => (
            <div key={idx} className="pillar-card glass-panel">
              <div className="pillar-icon-box">{pillar.icon}</div>
              <h4 className="pillar-title">{pillar.title}</h4>
              <p className="pillar-desc">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
