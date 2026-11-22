import React from 'react';
import { X, Download, ExternalLink, FileText, CheckCircle2, Award, Briefcase, GraduationCap } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handleDownload = () => {
    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.7 }
      });
    } catch (e) {
      // fallback if canvas not available
    }
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="modal-header">
          <div className="modal-title-group">
            <div className="modal-icon-badge">
              <FileText size={20} className="text-primary" />
            </div>
            <div>
              <h3 className="modal-title">Sharan Gounder — Resume</h3>
              <p className="modal-subtitle">Computer Engineering Student • TSEC, Mumbai</p>
            </div>
          </div>

          <div className="modal-header-actions">
            <a
              href="/resume/Sharan_Gounder_Resume.pdf"
              download="Sharan_Gounder_Resume.pdf"
              onClick={handleDownload}
              className="action-btn-primary"
            >
              <Download size={16} />
              <span>Download PDF</span>
            </a>
            <a
              href="/resume/Sharan_Gounder_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="action-btn-secondary"
              title="Open full PDF in new tab"
            >
              <ExternalLink size={16} />
            </a>
            <button className="close-btn" onClick={onClose} aria-label="Close modal">
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Modal Body: PDF Viewer with fallback preview */}
        <div className="modal-body">
          <div className="pdf-frame-wrapper">
            <iframe
              src="/resume/Sharan_Gounder_Resume.pdf#view=FitH"
              title="Sharan Gounder Resume"
              className="pdf-iframe"
            />
          </div>

          <div className="modal-footer-notice">
            <p>
              Having trouble viewing the PDF preview?{' '}
              <a
                href="/resume/Sharan_Gounder_Resume.pdf"
                download="Sharan_Gounder_Resume.pdf"
                onClick={handleDownload}
                className="text-highlight underline"
              >
                Click here to download directly
              </a>{' '}
              or{' '}
              <a
                href="/resume/Sharan_Gounder_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-highlight underline"
              >
                open in a new browser tab
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
