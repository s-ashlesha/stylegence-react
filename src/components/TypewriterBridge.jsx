import React, { useState, useEffect, useRef } from 'react';

const typewriterPhrases = [
  "First, we analyse billions of style data points.",
  "Then we understand your unique identity.",
  "Finally, we craft your new look."
];

function TypewriterBridge() {
  const [displayText, setDisplayText] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const sectionRef = useRef(null);
  const phraseIndexRef = useRef(0);
  const charIndexRef = useRef(0);
  const isTypingRef = useRef(true);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.45 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    const typingSpeed = 45;
    const deletingSpeed = 28;
    const pauseAfterTyping = 1800;
    const pauseAfterDeleting = 600;

    const animate = () => {
      const currentPhrase = typewriterPhrases[phraseIndexRef.current];

      if (isTypingRef.current) {
        // TYPING MODE
        if (charIndexRef.current === 0) {
          setIsVisible(true);
        }

        if (charIndexRef.current <= currentPhrase.length) {
          setDisplayText(currentPhrase.substring(0, charIndexRef.current));
          charIndexRef.current++;
          
          if (charIndexRef.current > currentPhrase.length) {
            // Finished typing, pause then switch to deleting
            timeoutRef.current = setTimeout(() => {
              isTypingRef.current = false;
              animate();
            }, pauseAfterTyping);
          } else {
            timeoutRef.current = setTimeout(animate, typingSpeed);
          }
        }
      } else {
        // DELETING MODE
        if (charIndexRef.current > 0) {
          charIndexRef.current--;
          setDisplayText(currentPhrase.substring(0, charIndexRef.current));
          timeoutRef.current = setTimeout(animate, deletingSpeed);
        } else {
          // Finished deleting, pause then move to next phrase
          setIsVisible(false);
          timeoutRef.current = setTimeout(() => {
            phraseIndexRef.current = (phraseIndexRef.current + 1) % typewriterPhrases.length;
            isTypingRef.current = true;
            charIndexRef.current = 0;
            animate();
          }, pauseAfterDeleting);
        }
      }
    };

    // Start the animation
    phraseIndexRef.current = 0;
    charIndexRef.current = 0;
    isTypingRef.current = true;
    animate();

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [hasStarted]);

  return (
    <section className="typewriter-bridge" id="typewriter" ref={sectionRef}>
      <div className="typewriter-container">
        <div className="typewriter-glow"></div>
        
        <div className="typewriter-content">
          <span className={`typewriter-text ${isVisible ? 'visible' : ''}`}>
            {displayText}
          </span>
          <span className="typewriter-cursor">|</span>
        </div>
      </div>
    </section>
  );
}

export default TypewriterBridge;