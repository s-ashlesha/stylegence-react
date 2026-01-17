import React from 'react';

function Experience() {
  return (
    <section className="experience experience-page" id="experience">
      <video className="page-bg-video" autoPlay muted loop playsInline>
        <source src="/assets/video/bg-proximity.mp4" type="video/mp4" />
      </video>
      <div className="page-bg-overlay"></div>

      <div className="experience-visual">
        <div className="video-glow"></div>
        <div className="video-mask">
          <video className="mannequin-video" autoPlay muted loop playsInline>
            <source src="/assets/video/hero1.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      <div className="experience-content">
        <div className="orb"></div>

        <h1>Welcome to Stylegence</h1>

        <p>
          Stylegence is revolutionizing the way young India experiences fashion,
          blending cutting-edge artificial intelligence with personal style.
        </p>

        <p className="muted">
          Discover, experiment, and own your fashion story — effortlessly and uniquely.
        </p>
      </div>
    </section>
  );
}

export default Experience;