// src/components/Preloader.jsx
import React, { useState, useEffect } from 'react';
import '../css/preloader.css';

const Preloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          // Start exit animation
          setTimeout(() => {
            setIsExiting(true);
            // Call onComplete after exit animation
            setTimeout(onComplete, 800);
          }, 300);
          return 100;
        }
        // Random increment for realistic loading feel
        return prev + Math.random() * 15;
      });
    }, 150);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className={`preloader ${isExiting ? 'preloader-exit' : ''}`}>
      <div className="preloader-content">
        {/* Logo/Brand */}
        <div className="preloader-brand-wrapper">
          <h2 className="preloader-brand-name">STYLING INDIA</h2>
         
        </div>

        {/* Animated Orb */}
        <div className="preloader-orb-container">
          <div className="preloader-orb"></div>
          <div className="preloader-orb-ring"></div>
          <div className="preloader-orb-ring preloader-ring-delay-1"></div>
          <div className="preloader-orb-ring preloader-ring-delay-2"></div>
        </div>

        {/* Progress Bar */}
        <div className="preloader-progress-container">
          <div className="preloader-progress-bar">
            <div 
              className="preloader-progress-fill" 
              style={{ width: `${Math.min(progress, 100)}%` }}
            />
            <div className="preloader-progress-glow" />
          </div>
          <div className="preloader-progress-text">
            {Math.floor(Math.min(progress, 100))}%
          </div>
        </div>

        {/* Loading Dots */}
        <div className="preloader-loading-text">
          <span className="preloader-loading-dot">.</span>
          <span className="preloader-loading-dot">.</span>
          <span className="preloader-loading-dot">.</span>
        </div>
      </div>
    </div>
  );
};

export default Preloader;