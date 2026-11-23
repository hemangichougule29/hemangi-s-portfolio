import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import '../components.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  
  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    alert("Thanks for reaching out! I'll get back to you soon.");
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Get in <span className="gradient-text">Touch</span></h2>
        
        <div className="contact-layout">
          <div className="contact-info glass-card">
            <h3>Let's start a conversation</h3>
            <p className="contact-subtitle">
              Whether you have a question, a project idea, or just want to say hi, my inbox is always open.
            </p>
            
            <div className="info-items">
              <a href="hemangichougule29@gmail.com" className="info-item">
                <div className="info-icon"><Mail size={20} /></div>
                <span>hemangichougule29@gmail.com</span>
              </a>
              <a href="tel:8080013426" className="info-item">
                <div className="info-icon"><Phone size={20} /></div>
                <span>8080013426</span>
              </a>
              <div className="info-item">
                <div className="info-icon"><MapPin size={20} /></div>
                <span>Kolhapur</span>
              </div>
            </div>
          </div>
          
          <form className="contact-form glass-card" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                required 
                placeholder="Name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                required 
                placeholder="name@example.com"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea 
                id="message" 
                name="message" 
                value={formData.message} 
                onChange={handleChange} 
                required 
                placeholder="Tell me about your project..."
                rows="5"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary submit-btn">
              Send Message <Send size={18} />
            </button>
          </form>
        </div>
      </div>
      
      <footer className="footer">
        <div className="container">
          <p>© {new Date().getFullYear()} Hemangi. Built with React & Passion.</p>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
