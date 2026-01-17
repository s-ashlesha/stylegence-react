// src/components/WaitlistModal.jsx
import React, { useEffect } from 'react';
import Modal from 'react-modal';

// Set app element for accessibility
if (typeof window !== 'undefined') {
  Modal.setAppElement('#root');
}

function WaitlistModal({ isOpen, onClose }) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="waitlist-modal"
      overlayClassName="waitlist-overlay"
      closeTimeoutMS={300}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
    >
      <div className="modal-content">
        <button 
          onClick={onClose} 
          className="close-modal-button" 
          aria-label="Close modal"
        >
          ✕
        </button>
        <iframe
          src="https://form.typeform.com/to/CaZB9eCx"
          width="100%"
          height="100%"
          frameBorder="0"
          title="Stylegence Waitlist Form"
          allow="camera; microphone; autoplay; encrypted-media;"
        ></iframe>
      </div>
    </Modal>
  );
}

export default WaitlistModal;