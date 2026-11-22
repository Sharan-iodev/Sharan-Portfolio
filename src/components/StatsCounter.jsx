import React from 'react';
import { Award, Code2, FolderGit2, Sparkles, BookOpen } from 'lucide-react';

export default function StatsCounter() {
  const stats = [
    {
      icon: <Award className="text-amber-400" size={24} />,
      value: '8.68',
      label: 'Overall CGPA',
      subtext: 'Sem 2: 9.02 | TSEC Mumbai'
    },
    {
      icon: <FolderGit2 className="text-cyan-400" size={24} />,
      value: '2+',
      label: 'Featured Platforms',
      subtext: 'NexusPanel & RoleRadar'
    },
    {
      icon: <Code2 className="text-indigo-400" size={24} />,
      value: '4+',
      label: 'Core Languages',
      subtext: 'Java, Python, JS, C'
    },
    {
      icon: <Sparkles className="text-emerald-400" size={24} />,
      value: '100%',
      label: 'Passion & Drive',
      subtext: 'Software Dev & Agentic AI'
    }
  ];

  return (
    <section className="stats-section">
      <div className="stats-grid">
        {stats.map((stat, idx) => (
          <div key={idx} className="stat-card glass-panel">
            <div className="stat-icon-wrapper">{stat.icon}</div>
            <div className="stat-value">{stat.value}</div>
            <div className="stat-label">{stat.label}</div>
            <div className="stat-subtext">{stat.subtext}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
