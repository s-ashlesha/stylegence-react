// src/App.js
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import TypewriterBridge from './components/TypewriterBridge';
import Features from './components/Features';
import Process from './components/Process';
import EarlyAdopters from './components/EarlyAdopters';
import CursorRing from './components/CursorRing';
import Preloader from './components/Preloader';
import './css/style.css';
import WaitlistModal from './components/WaitlistModal';

    

function App() {
  const [loading, setLoading] = useState(true);

  const handleLoadingComplete = () => {
    setLoading(false);
  };

  return (
    <div className="App">
      {/* Show preloader while loading */}
      {loading && <Preloader onComplete={handleLoadingComplete} />}
      
      {/* Main content - only render after loading complete */}
      {!loading && (
        <>
          <CursorRing />
          <Navbar />
          <Hero />
          <Experience />
          <TypewriterBridge />
  
          <Features />
          <Process />
          <EarlyAdopters />
        
        </>
      )}
    </div>
  );
}

export default App;