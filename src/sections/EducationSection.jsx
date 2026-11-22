import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, CheckCircle, TrendingUp, BookOpen } from 'lucide-react';

export default function EducationSection() {
  const semesters = [
    {
      sem: 'Semester 1',
      cgpa: '8.34',
      status: 'Completed',
      notes: 'Strong foundations in Engineering Mathematics, Programming Fundamentals, and Systems.'
    },
    {
      sem: 'Semester 2',
      cgpa: '9.02',
      status: 'Outstanding',
      notes: 'Advanced problem solving, Object-Oriented concepts, Data structures, and Digital systems.'
    }
  ];

  const coursework = [
    'Object-Oriented Programming (Java)',
    'Data Structures & Algorithms',
    'Computer Architecture & Systems',
    'Database Management & SQL',
    'Discrete Mathematics',
    'Web Technologies & REST APIs',
    'Software Engineering Principles'
  ];

  return (
    <section id="education" className="section-wrapper">
      <div className="section-header">
        <div className="section-badge">
          <GraduationCap size={14} />
          <span>Education</span>
        </div>
        <h2 className="section-title">
          Academic <span className="gradient-text">Journey & Performance</span>
        </h2>
        <p className="section-subtitle">
          Continuous commitment to academic rigor, core computer science concepts, and practical application.
        </p>
      </div>

      <div className="education-main-card glass-panel">
        <div className="edu-top-row">
          <div className="edu-institution-info">
            <div className="edu-logo-wrapper">
              <GraduationCap size={32} className="text-primary" />
            </div>
            <div>
              <h3 className="edu-degree">Bachelor of Engineering (B.E.) – Computer Engineering</h3>
              <h4 className="edu-college">Thadomal Shahani Engineering College (TSEC)</h4>
              <div className="edu-meta">
                <span className="edu-meta-tag">
                  <MapPin size={14} />
                  <span>Bandra, Mumbai, India</span>
                </span>
                <span className="edu-meta-tag">
                  <Calendar size={14} />
                  <span>June 2025 – Present</span>
                </span>
                <span className="edu-meta-tag status-active">
                  <span className="pulse-indicator" />
                  <span>Current 2nd Year Student</span>
                </span>
              </div>
            </div>
          </div>

          <div className="edu-overall-badge">
            <div className="badge-cgpa-num">8.68</div>
            <div className="badge-cgpa-label">Overall CGPA</div>
            <div className="badge-cgpa-scale">Scale of 10.0</div>
          </div>
        </div>

        {/* Semester Performance Cards */}
        <div className="semester-grid">
          {semesters.map((item, idx) => (
            <div key={idx} className="semester-card">
              <div className="sem-header">
                <span className="sem-name">{item.sem}</span>
                <span className={`sem-tag ${item.status === 'Outstanding' ? 'tag-gold' : 'tag-blue'}`}>
                  {item.status}
                </span>
              </div>
              <div className="sem-cgpa-display">
                <span className="sem-cgpa-val">{item.cgpa}</span>
                <span className="sem-cgpa-denom">/ 10.0 CGPA</span>
              </div>
              <p className="sem-notes">{item.notes}</p>
            </div>
          ))}
        </div>

        {/* Key Academic Coursework */}
        <div className="coursework-section">
          <h4 className="coursework-heading">
            <BookOpen size={16} className="text-secondary" />
            <span>Key Academic Areas & Core Subjects</span>
          </h4>
          <div className="coursework-chips">
            {coursework.map((course, idx) => (
              <span key={idx} className="course-chip">
                <CheckCircle size={14} className="text-cyan-400" />
                <span>{course}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
