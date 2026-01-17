// src/components/Navbar.jsx
import React, { useState } from 'react';
import WaitlistModal from './WaitlistModal';

function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <nav className="navbar">
        <div className="nav-logo">STYLEGENCE</div>
        <button 
          onClick={openModal}
          className="waitlist-btn"
        >
          JOIN THE WAITLIST
        </button>
      </nav>

      <WaitlistModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}

export default Navbar;