import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import '../components.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          <div className="badge">👋 Welcome to my portfolio</div>
          <h1 className="hero-title">
            Web <span className="gradient-text">Developer</span> <br />

          </h1>
          <p className="hero-subtitle">
            Specializing in building clean, responsive, and secure web applications using React, PHP, MySQL, and JavaScript
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View Work <ArrowRight size={20} />
            </a>
            {/* <a href="#contact" className="btn btn-outline">
              Download CV <Download size={20} />
            </a> */}
          </div>
        </div>

        <div className="hero-visual">
          <div className="visual-circle">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Developer working"
              style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
