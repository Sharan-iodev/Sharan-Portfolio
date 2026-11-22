import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, X, Maximize2, Minimize2, CornerDownLeft, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function InteractiveTerminal({ isOpen, onClose, onOpenResume }) {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    {
      type: 'system',
      text: '⚡ SharanOS v2.4 Interactive Developer Shell initialized.'
    },
    {
      type: 'info',
      text: 'Type "help" to see available commands or click quick action buttons below.'
    }
  ]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [commandHistory, setCommandHistory] = useState([]);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (cmdText) => {
    const rawCmd = (cmdText || input).trim();
    if (!rawCmd) return;

    setCommandHistory((prev) => [...prev, rawCmd]);
    setHistoryIndex(-1);

    const parts = rawCmd.split(' ');
    const cmd = parts[0].toLowerCase();
    const arg = parts.slice(1).join(' ').toLowerCase();

    const newEntries = [{ type: 'input', text: `$ ${rawCmd}` }];

    switch (cmd) {
      case 'help':
        newEntries.push({
          type: 'output',
          text: `Available Commands:
  • about       : Quick bio & professional summary
  • skills      : Technical skills breakdown
  • projects    : Highlighted projects (NexusPanel, RoleRadar)
  • education   : Academic journey & TSEC Mumbai CGPA
  • contact     : Phone, email, LinkedIn & GitHub details
  • linkedin    : Open official LinkedIn profile
  • resume      : Launch resume PDF viewer
  • hire        : Fast-track message for recruiters & companies
  • clear       : Clear terminal window
  • exit / close: Close interactive terminal`
        });
        break;

      case 'about':
        newEntries.push({
          type: 'output',
          text: `Sharan Gounder
• Computer Engineering Student at Thadomal Shahani Engineering College (TSEC), Mumbai
• Passionate about Software Development, Artificial Intelligence & Agentic AI
• Hands-on experience developing responsive web applications, dashboards & interactive workflows
• Seeking an internship to contribute to practical software projects and strengthen engineering skills.`
        });
        break;

      case 'skills':
        newEntries.push({
          type: 'output',
          text: `Technical Skills Matrix:
  [Languages]   : Java, C, JavaScript, Python
  [Frontend]    : React.js, HTML5, CSS3, Modern UI/UX
  [Backend/API] : REST APIs, Python, API Polling, Local Storage
  [Tools]       : Antigravity, VS Code, Git & GitHub, WordPress
  [Core Skills] : Agentic AI, Component Architecture, React Hooks, Audit Logging`
        });
        break;

      case 'projects':
        newEntries.push({
          type: 'output',
          text: `Featured Projects:
1. NexusPanel – Interview & Candidate Assessment Platform
   Tech: HTML5, CSS3, JavaScript, Python, REST APIs, Local Storage
   Features: Admin/Candidate portals, metrics dashboard, multi-stage assessment, real-time polling.

2. RoleRadar – Career & Job Application Management Platform
   Tech: React.js, JavaScript, HTML5, CSS3, Local Storage
   Features: Job discovery dashboard, advanced filters, status tracker, career preparation roadmaps.`
        });
        break;

      case 'education':
        newEntries.push({
          type: 'output',
          text: `Education:
  • Degree   : Bachelor of Engineering (B.E.) – Computer Engineering
  • College  : Thadomal Shahani Engineering College (TSEC), Bandra, Mumbai
  • Timeline : June 2025 – Present
  • Semester 1 CGPA : 8.34
  • Semester 2 CGPA : 9.02
  • Overall CGPA    : 8.68 / 10.0`
        });
        break;

      case 'contact':
        newEntries.push({
          type: 'output',
          text: `Contact Information:
  • Email    : sharankannan1234@gmail.com
  • Phone    : +91 98339 59315
  • LinkedIn : https://www.linkedin.com/in/sharan-gounder-27b0b733a/
  • GitHub   : https://github.com/Sharan-iodev
  • Location : Dombivli, Maharashtra, India`
        });
        break;

      case 'linkedin':
        newEntries.push({
          type: 'success',
          text: 'Opening LinkedIn profile: https://www.linkedin.com/in/sharan-gounder-27b0b733a/ ...'
        });
        window.open('https://www.linkedin.com/in/sharan-gounder-27b0b733a/', '_blank', 'noopener,noreferrer');
        break;

      case 'resume':
        newEntries.push({
          type: 'success',
          text: 'Opening resume preview modal...'
        });
        onOpenResume();
        break;

      case 'hire':
        try {
          confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
        } catch (e) {}
        newEntries.push({
          type: 'success',
          text: `🎉 Thank you for your interest!
Sharan is actively seeking software development & AI-focused internship opportunities.
Direct contact:
  - Email : sharankannan1234@gmail.com
  - Phone : +91 98339 59315
Looking forward to discussing how I can add immediate value to your team!`
        });
        break;

      case 'clear':
        setHistory([]);
        setInput('');
        return;

      case 'exit':
      case 'close':
        onClose();
        return;

      default:
        newEntries.push({
          type: 'error',
          text: `Command not recognized: "${rawCmd}". Type "help" to view all available commands.`
        });
    }

    setHistory((prev) => [...prev, ...newEntries]);
    setInput('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleCommand();
    } else if (e.key === 'ArrowUp') {
      if (commandHistory.length > 0) {
        const nextIdx = historyIndex + 1 < commandHistory.length ? historyIndex + 1 : historyIndex;
        setHistoryIndex(nextIdx);
        setInput(commandHistory[commandHistory.length - 1 - nextIdx] || '');
      }
    } else if (e.key === 'ArrowDown') {
      if (historyIndex > 0) {
        const nextIdx = historyIndex - 1;
        setHistoryIndex(nextIdx);
        setInput(commandHistory[commandHistory.length - 1 - nextIdx] || '');
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput('');
      }
    }
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="terminal-window" onClick={(e) => e.stopPropagation()}>
        {/* Terminal Header */}
        <div className="terminal-topbar">
          <div className="terminal-dots">
            <span className="dot dot-red" onClick={onClose} />
            <span className="dot dot-yellow" />
            <span className="dot dot-green" />
          </div>
          <div className="terminal-title">
            <TerminalIcon size={14} className="terminal-title-icon" />
            <span>sharan@dev-portfolio: ~ (bash)</span>
          </div>
          <button className="terminal-close" onClick={onClose} aria-label="Close terminal">
            <X size={16} />
          </button>
        </div>

        {/* Quick Command Pills */}
        <div className="terminal-quick-actions">
          {['help', 'about', 'skills', 'projects', 'education', 'contact', 'linkedin', 'resume', 'hire', 'clear'].map((cmd) => (
            <button
              key={cmd}
              onClick={() => handleCommand(cmd)}
              className="quick-cmd-chip"
            >
              {cmd}
            </button>
          ))}
        </div>

        {/* Terminal Output Area */}
        <div className="terminal-output" onClick={() => inputRef.current?.focus()}>
          {history.map((item, idx) => (
            <div key={idx} className={`terminal-line terminal-${item.type}`}>
              <pre className="terminal-text">{item.text}</pre>
            </div>
          ))}
          <div ref={bottomRef} />

          {/* Prompt line */}
          <div className="terminal-prompt-line">
            <span className="prompt-symbol">sharan@portfolio:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="terminal-input"
              spellCheck="false"
              autoComplete="off"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
