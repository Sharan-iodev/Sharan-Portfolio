import React, { useState, useEffect } from 'react';

export default function TypingEffect({ words, typingSpeed = 100, deletingSpeed = 50, pauseTime = 1800 }) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullWord = words[currentWordIndex];

    let timer;
    if (!isDeleting && currentText === fullWord) {
      timer = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    } else {
      const speed = isDeleting ? deletingSpeed : typingSpeed;
      timer = setTimeout(() => {
        setCurrentText((prev) =>
          isDeleting ? fullWord.substring(0, prev.length - 1) : fullWord.substring(0, prev.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, words, typingSpeed, deletingSpeed, pauseTime]);

  return (
    <span className="typing-container">
      <span className="gradient-text font-bold">{currentText}</span>
      <span className="typing-cursor">|</span>
    </span>
  );
}
