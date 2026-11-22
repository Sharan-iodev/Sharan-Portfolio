import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Copy, Check, Sparkles, FileText } from 'lucide-react';
import GithubIcon from '../components/GithubIcon';
import LinkedinIcon from '../components/LinkedinIcon';
import confetti from 'canvas-confetti';

export default function ContactSection({ onOpenResume }) {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const email = 'sharankannan1234@gmail.com';
  const phone = '+91 98339 59315';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    // Create mailto link as fallback to send directly from user's email client
    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(
      formState.subject || `Inquiry from ${formState.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
    )}`;

    window.open(mailtoUrl, '_blank');
    setSubmitted(true);

    try {
      confetti({ particleCount: 80, spread: 60, origin: { y: 0.6 } });
    } catch (err) {}
  };

  return (
    <section id="contact" className="section-wrapper">
      <div className="section-header">
        <div className="section-badge">
          <Mail size={14} />
          <span>Get in Touch</span>
        </div>
        <h2 className="section-title">
          Let's Build Something <span className="gradient-text">Exceptional Together</span>
        </h2>
        <p className="section-subtitle">
          I am actively seeking software engineering and AI-focused internship opportunities. My inbox is always open!
        </p>
      </div>

      <div className="contact-grid">
        {/* Contact Info Cards */}
        <div className="contact-info-panel">
          <div className="contact-card glass-panel">
            <div className="contact-card-icon bg-indigo-500/20 text-indigo-400">
              <Mail size={22} />
            </div>
            <div className="contact-card-content">
              <div className="contact-card-label">Email Address</div>
              <a href={`mailto:${email}`} className="contact-card-value">
                {email}
              </a>
              <div className="contact-card-action">
                <button onClick={handleCopyEmail} className="copy-action-btn">
                  {copied ? (
                    <>
                      <Check size={14} className="text-emerald-400" />
                      <span className="text-emerald-400">Copied to clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={14} />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          <div className="contact-card glass-panel">
            <div className="contact-card-icon bg-cyan-500/20 text-cyan-400">
              <Phone size={22} />
            </div>
            <div className="contact-card-content">
              <div className="contact-card-label">Phone & WhatsApp</div>
              <a href={`tel:${phone.replace(/\s+/g, '')}`} className="contact-card-value">
                {phone}
              </a>
              <div className="contact-card-action">
                <span className="text-sm text-slate-400">Available Mon – Sat (IST)</span>
              </div>
            </div>
          </div>

          <div className="contact-card glass-panel">
            <div className="contact-card-icon bg-purple-500/20 text-purple-400">
              <MapPin size={22} />
            </div>
            <div className="contact-card-content">
              <div className="contact-card-label">Location</div>
              <div className="contact-card-value">Dombivli, Maharashtra, India</div>
              <div className="contact-card-action">
                <span className="text-sm text-slate-400">College: TSEC Bandra, Mumbai</span>
              </div>
            </div>
          </div>

          <div className="contact-card glass-panel">
            <div className="contact-card-icon bg-emerald-500/20 text-emerald-400">
              <GithubIcon size={22} />
            </div>
            <div className="contact-card-content">
              <div className="contact-card-label">GitHub Profile</div>
              <a
                href="https://github.com/Sharan-iodev"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card-value hover:underline"
              >
                github.com/Sharan-iodev
              </a>
              <div className="contact-card-action">
                <span className="text-sm text-slate-400">Repositories, commits & projects</span>
              </div>
            </div>
          </div>

          <div className="contact-card glass-panel">
            <div className="contact-card-icon bg-cyan-500/20 text-cyan-400">
              <LinkedinIcon size={22} />
            </div>
            <div className="contact-card-content">
              <div className="contact-card-label">LinkedIn Profile</div>
              <a
                href="https://www.linkedin.com/in/sharan-gounder-27b0b733a/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card-value hover:underline"
              >
                linkedin.com/in/sharan-gounder-27b0b733a
              </a>
              <div className="contact-card-action">
                <span className="text-sm text-slate-400">Professional networking & career discussions</span>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Direct Message Form */}
        <div className="contact-form-panel glass-panel">
          <h3 className="form-title">Send Me a Direct Message</h3>
          <p className="form-subtitle">
            Recruiter, collaborator, or fellow engineer? Drop a note and I'll respond promptly.
          </p>

          {submitted ? (
            <div className="success-banner">
              <Sparkles size={28} className="text-emerald-400 mb-2" />
              <h4 className="success-heading">Message Triggered!</h4>
              <p className="success-desc">
                Your email client was opened with your message pre-filled. You can also reach me directly at{' '}
                <strong>{email}</strong>.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="btn-secondary mt-4"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="e.g. Jane Doe"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Your Email</label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="e.g. jane@company.com"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject / Opportunity</label>
                <input
                  id="subject"
                  type="text"
                  placeholder="e.g. Software Engineering Internship Opportunity"
                  value={formState.subject}
                  onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  placeholder="Hi Sharan, I'd like to discuss an opportunity or project with you..."
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                />
              </div>

              <div className="form-actions">
                <button type="submit" className="btn-primary w-full glow-button">
                  <Send size={16} />
                  <span>Send Message</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
