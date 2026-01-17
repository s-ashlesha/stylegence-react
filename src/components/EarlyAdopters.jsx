// src/components/EarlyAdopters.jsx
import React, { useState } from 'react';
import WaitlistModal from './WaitlistModal';

function EarlyAdopters() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <section className="early-adopters">
        <div className="early-content">
          <h2>For Early Adopters</h2>
          <p>
            Be the first to experience Stylegence, access exclusive features, and help shape the future of fashion technology.
          </p>
          <button 
            onClick={openModal}
            className="cta-button"
          >
            JOIN THE WAITLIST!
          </button>
        </div>

        <div className="early-cta-strip-wrapper">
          <div className="cta-strip">
            <div className="cta-track">
              <span>REDEFINE YOUR STYLE</span>
              <span>AI-POWERED FASHION</span>
              <span>LAUNCHING SOON</span>
              <span>EXCLUSIVE ACCESS</span>
              <span>REDEFINE YOUR STYLE</span>
              <span>AI-POWERED FASHION</span>
              <span>LAUNCHING SOON</span>
              <span>EXCLUSIVE ACCESS</span>
            </div>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        © 2025 Stylegence. All rights reserved.
      </footer>

      <WaitlistModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}

export default EarlyAdopters;