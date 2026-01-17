import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import TypewriterBridge from './components/TypewriterBridge';
import Features from './components/Features';
import Process from './components/Process';
import EarlyAdopters from './components/EarlyAdopters';
import CursorRing from './components/CursorRing';
import WaitlistModal from './components/WaitlistModal';

function App() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  const openWaitlist = () => setIsWaitlistOpen(true);
  const closeWaitlist = () => setIsWaitlistOpen(false);

  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="App">
      <Navbar onOpenWaitlist={openWaitlist} />
      <Hero />
      <Experience />
      <TypewriterBridge />
      <Features />
      <Process />
      <EarlyAdopters onOpenWaitlist={openWaitlist} />
      <CursorRing />
      <WaitlistModal isOpen={isWaitlistOpen} onClose={closeWaitlist} />
    </div>
  );
}

export default App;