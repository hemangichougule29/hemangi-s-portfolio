import React, { useState } from 'react';
import { Download } from 'lucide-react';
import '../components.css';

const About = () => {
  const [activeTab, setActiveTab] = useState('education');



  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">About <span className="gradient-text">Me</span></h2>

        <div className="about-layout">
          {/* Left Column */}
          <div className="about-text glass-card">
            <h3>Hi, I'm Hemangi.</h3>
            <p>

              Hi, I’m Hemangi Chougule, a passionate Web Developer with a strong interest in creating modern and responsive websites. I have knowledge of HTML, CSS, JavaScript, React, Node.js, and MongoDB. I enjoy building practical projects and learning new technologies. I am a quick learner, hardworking, and always interested in improving my skills. I am looking for an opportunity to start my career and grow as a professional Web Developer.

            </p>
            {/* <a href="#contact" className="btn btn-primary" style={{ marginTop: '20px' }}>
              Download Resume <Download size={20} />
            </a> */}
          </div>

          {/* Right Column: Terminal Card */}
          <div className="terminal-card">
            <div className="terminal-header">
              <div className="window-dot dot-red"></div>
              <div className="window-dot dot-yellow"></div>
              <div className="window-dot dot-green"></div>
            </div>
            <div className="terminal-body">
              <span className="code-keyword">const</span> <span className="code-variable">developer</span> <span className="code-punctuation">=</span> <span className="code-punctuation">{'{'}</span><br />
              &nbsp;&nbsp;<span className="code-property">name</span><span className="code-punctuation">:</span> <span className="code-string">"Hemangi"</span><span className="code-punctuation">,</span><br />
              &nbsp;&nbsp;<span className="code-property">role</span><span className="code-punctuation">:</span> <span className="code-string">"Full Stack Web Developer"</span><span className="code-punctuation">,</span><br />
              &nbsp;&nbsp;<span className="code-property">passions</span><span className="code-punctuation">:</span> <span className="code-punctuation">[</span><span className="code-string">"Clean Code"</span><span className="code-punctuation">, </span><span className="code-string">"Modern UI"</span><span className="code-punctuation">, </span><span className="code-string">"Problem Solving"</span><span className="code-punctuation">]</span><span className="code-punctuation">,</span><br />
              &nbsp;&nbsp;<span className="code-property">status</span><span className="code-punctuation">:</span> <span className="code-string">"Ready to Innovate"</span><br />
              <span className="code-punctuation">{'}'}</span><span className="code-punctuation">;</span>
            </div>
          </div>
        </div>

        {/* Interactive Tabs */}
        <div className="about-tabs-section glass-card" style={{ marginTop: '50px', padding: '40px' }}>
          <div className="tab-pills">
            <button
              className={`tab-pill ${activeTab === 'education' ? 'active' : ''}`}
              onClick={() => setActiveTab('education')}
            >
              Education
            </button>
            <button
              className={`tab-pill ${activeTab === 'whatIDo' ? 'active' : ''}`}
              onClick={() => setActiveTab('whatIDo')}
            >
              What I Do
            </button>
            <button
              className={`tab-pill ${activeTab === 'interests' ? 'active' : ''}`}
              onClick={() => setActiveTab('interests')}
            >
              Interests
            </button>
          </div>
          <div className="tab-content" style={{ marginTop: '30px', minHeight: '120px' }}>
            {activeTab === 'education' && (
              <div className="tab-pane animate-on-scroll">
                <ul className="tab-list">
                  <li className="tab-list-item">
                    <span>▹</span> Master of Computer Applications (MCA)
                  </li>
                  <li className="tab-list-item">
                    <span>▹</span> Bachelor of Computer Applications (BCA)
                  </li>
                </ul>
              </div>
            )}
            {activeTab === 'whatIDo' && (
              <div className="tab-pane animate-on-scroll">
                <ul className="tab-list">
                  <li className="tab-list-item">
                    <span>▹</span> Web Development
                  </li>
                  <li className="tab-list-item">
                    <span>▹</span> Frontend Development
                  </li>
                  <li className="tab-list-item">
                    <span>▹</span> Backend Development
                  </li>
                  <li className="tab-list-item">
                    <span>▹</span> Responsive Website Design
                  </li>
                </ul>
              </div>
            )}
            {activeTab === 'interests' && (
              <div className="tab-pane animate-on-scroll">
                <ul className="tab-list">
                  <li className="tab-list-item">
                    <span>▹</span> Learning New Technologies
                  </li>
                  <li className="tab-list-item">
                    <span>▹</span> Web Development
                  </li>
                  <li className="tab-list-item">
                    <span>▹</span> Building Projects
                  </li>
                  {/* <li className="tab-list-item">
                    <span>▹</span> UI/UX Design
                  </li> */}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
