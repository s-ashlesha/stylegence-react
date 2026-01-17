import React from 'react';
import Modal from 'react-modal';

// Set app element for accessibility
if (typeof window !== 'undefined') {
  Modal.setAppElement('#root');
}

function WaitlistModal({ isOpen, onClose }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="waitlist-modal"
      overlayClassName="waitlist-overlay"
      closeTimeoutMS={300}
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
        ></iframe>
      </div>
    </Modal>
  );
}

export default WaitlistModal;