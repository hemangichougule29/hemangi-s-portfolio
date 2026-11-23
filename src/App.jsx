import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="app-container">
      {/* Background blobs for aesthetic effect */}
      <div className="blob" style={{ top: '-10%', left: '-10%', width: '500px', height: '500px', background: 'var(--accent-primary)', borderRadius: '50%' }}></div>
      <div className="blob" style={{ top: '40%', right: '-10%', width: '400px', height: '400px', background: 'var(--accent-secondary)', borderRadius: '50%', animationDelay: '2s' }}></div>
      <div className="blob" style={{ bottom: '-10%', left: '20%', width: '600px', height: '600px', background: 'var(--accent-primary)', borderRadius: '50%', animationDelay: '4s', opacity: 0.2 }}></div>

      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
