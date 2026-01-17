import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import TypewriterBridge from './components/TypewriterBridge';
import Features from './components/Features';
import Process from './components/Process';
import EarlyAdopters from './components/EarlyAdopters';
import CursorRing from './components/CursorRing';

function App() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Experience />
      <TypewriterBridge />
      <Features />
      <Process />
      <EarlyAdopters />
      <CursorRing />
    </div>
  );
}

export default App;