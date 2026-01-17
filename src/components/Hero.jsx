import React from 'react';

function Hero() {
  const handleScrollClick = () => {
    const experienceSection = document.getElementById('experience');
    if (experienceSection) {
      experienceSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero" id="hero">
      <video className="hero-video" autoPlay muted loop playsInline>
        <source src="/assets/video/hero.mp4" type="video/mp4" />
      </video>

      <div className="hero-overlay"></div>

      <div className="hero-content">

        <h1 className="brand smash-title">STYLEGENCE</h1>
        
        <p className="tagline smash-fade">Where Style meets Intelligence</p>
        
        <div className="hero-journey smash-fade">
          <span className="journey-item">TRY</span>
          <span className="journey-divider"></span>
          <span className="journey-item">DISCOVER</span>
          <span className="journey-divider"></span>
          <span className="journey-item">EXPRESS</span>
        </div>

        <div className="launching-soon">Launching Soon!</div>
      </div>

      <div className="scroll-indicator" onClick={handleScrollClick}>
        <span></span>
      </div>
    </section>
  );
}

export default Hero;