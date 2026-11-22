import React from 'react';

export default function BackgroundGlow() {
  return (
    <div className="background-glow-wrapper" aria-hidden="true">
      {/* Dynamic ambient gradient orbs */}
      <div className="glow-orb orb-primary" />
      <div className="glow-orb orb-secondary" />
      <div className="glow-orb orb-accent" />
      
      {/* Subtle modern cyber grid */}
      <div className="grid-overlay" />
      {/* Noise texture overlay */}
      <div className="noise-overlay" />
    </div>
  );
}
