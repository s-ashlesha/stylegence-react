import React, { useEffect, useRef } from 'react';

function Process() {
  const stepsRef = useRef([]);
  const intervalRef = useRef(null);
  const currentRef = useRef(0);

  useEffect(() => {
    // Clear all active states initially
    stepsRef.current.forEach((step) => {
      if (step) step.classList.remove('active');
    });

    // Activate first step
    if (stepsRef.current[0]) {
      stepsRef.current[0].classList.add('active');
    }

    // Cycle through steps
    intervalRef.current = setInterval(() => {
      currentRef.current = (currentRef.current + 1) % stepsRef.current.length;
      
      stepsRef.current.forEach((step) => {
        if (step) step.classList.remove('active');
      });
      
      if (stepsRef.current[currentRef.current]) {
        stepsRef.current[currentRef.current].classList.add('active');
      }
    }, 1800);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <section className="process">
      <video className="page-bg-video" autoPlay muted loop playsInline>
        <source src="/assets/video/bg-proximity.mp4" type="video/mp4" />
      </video>
      <div className="page-bg-overlay"></div>

      <div className="process-container">
        <div className="process-steps">
          <h2 className="journey-heading">Your Style Journey Simplified</h2>
          
          <div className="process-step" ref={(el) => (stepsRef.current[0] = el)}>
            <span className="step-index">01</span>
            <h3>DISCOVER</h3>
            <p>
              Our AI learns your unique style and curates a personalized feed of outfits and items just for you.
            </p>
          </div>

          <div className="process-step" ref={(el) => (stepsRef.current[1] = el)}>
            <span className="step-index">02</span>
            <h3>EXPERIMENT</h3>
            <p>
              Use our Virtual Try-On to see how anything looks on you. Mix, match and share with friends.
            </p>
          </div>

          <div className="process-step" ref={(el) => (stepsRef.current[2] = el)}>
            <span className="step-index">03</span>
            <h3>OWN IT</h3>
            <p>
              Shop your favourite looks directly from top brands, guided by smart recommendations.
            </p>
          </div>
        </div>

        <div className="process-visual">
          <div className="video-glow"></div>
          <div className="video-mask">
            <video className="mannequin-video" autoPlay muted loop playsInline>
              <source src="/assets/video/hero2.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Process;