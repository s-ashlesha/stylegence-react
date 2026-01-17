import React from 'react';

function Navbar({ onOpenWaitlist }) {
  return (
    <header className="navbar">
      <div className="nav-logo">STYLEGENCE</div>
      <button className="waitlist-btn" onClick={onOpenWaitlist}>
        JOIN THE WAITLIST
      </button>
    </header>
  );
}

export default Navbar;