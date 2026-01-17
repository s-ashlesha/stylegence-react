import React, { useEffect, useRef } from 'react';

function CursorRing() {
  const ringRef = useRef(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });
  const animationFrameId = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseLeave = () => {
      if (ringRef.current) {
        ringRef.current.style.opacity = '0';
      }
    };

    const handleMouseEnter = () => {
      if (ringRef.current) {
        ringRef.current.style.opacity = '1';
      }
    };

    // Smooth follow animation
    const animateCursor = () => {
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * 0.18;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * 0.18;

      if (ringRef.current) {
        ringRef.current.style.left = `${ringPos.current.x}px`;
        ringRef.current.style.top = `${ringPos.current.y}px`;
      }

      animationFrameId.current = requestAnimationFrame(animateCursor);
    };

    // Hover state handlers
    const hoverTargets = document.querySelectorAll(
      'a, button, .feature-card, .cta-strip, .scroll-indicator'
    );

    const handleMouseEnterTarget = () => {
      if (ringRef.current) {
        ringRef.current.classList.add('hover');
      }
    };

    const handleMouseLeaveTarget = () => {
      if (ringRef.current) {
        ringRef.current.classList.remove('hover');
      }
    };

    // Add event listeners
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    hoverTargets.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnterTarget);
      el.addEventListener('mouseleave', handleMouseLeaveTarget);
    });

    // Start animation
    animateCursor();

    // Cleanup
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);

      hoverTargets.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnterTarget);
        el.removeEventListener('mouseleave', handleMouseLeaveTarget);
      });

      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  return <div className="cursor-ring" ref={ringRef}></div>;
}

export default CursorRing;