import React from 'react';
import { FileText, Shirt, Car, Leaf, ShoppingBag, Monitor, Film } from 'lucide-react';
import '../components.css';

const Projects = () => {
  const projectList = [
    {
      title: "CV Craft",
      icon: FileText,
      description: "An AI-powered resume builder web application that helps users create, customize, and export clean, ATS-friendly resumes effortlessly.",
      tags: ["React", "Node.js", "Express", "MongoDB"],
      liveUrl: "#",
      githubUrl: "https://github.com/hemangichougule29"
    },
    {
      title: "StyleMate",
      icon: Shirt,
      description: "A smart wardrobe and outfit planner web application allowing users to organize clothing items, plan daily outfits, and manage styles seamlessly.",
      tags: ["React", "Node.js", "Express", "MongoDB"],
      liveUrl: "#",
      githubUrl: "https://github.com/hemangichougule29"
    },
    {
      title: "Kolhapur Ride",
      icon: Car,
      description: "A local ride-booking and transport web application tailored for Kolhapur, featuring route selection, fare estimation, and easy booking management.",
      tags: ["HTML", "CSS", "javascript", "PHP"],
      liveUrl: "#",
      githubUrl: "https://github.com/hemangichougule29"
    },
    {
      title: "Green World",
      icon: Leaf,
      description: "A full-stack web application designed for environmental awareness/sustainability. Features responsive design, REST APIs, and dynamic content.",
      // image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=1974&auto=format&fit=crop",
      tags: ["React", "Node.js", "Express", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Saree E-commerce Showcase",
      icon: ShoppingBag,
      description: "An elegant web platform for showcasing and browsing saree collections with product details, filters, and a clean, responsive layout.",
      // image: "https://images.unsplash.com/photo-1610030469983-98e55081b7e4?q=80&w=1974&auto=format&fit=crop",
      tags: ["React", "CSS", "JavaScript"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Personal Portfolio Website",
      icon: Monitor,
      description: "A modern, responsive personal portfolio website showcasing my skills, projects, and contact triggers, built with clean code and interactive UI.",
      // image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=1974&auto=format&fit=crop",
      tags: ["HTML", "CSS", "JavaScript", "React"],
      liveUrl: "#",
      githubUrl: "#"
    },
    // {
    //   title: "Netflix Clone",
    //   icon: Film,
    //   description: "A responsive streaming platform clone featuring dynamic movie browsing, category filtering, trailer previews, and modern UI design.",
    //   // image: "https://images.unsplash.com/photo-1610030469983-98e55081b7e4?q=80&w=1974&auto=format&fit=crop",
    //   tags: ["React", "CSS", "Bootstrap", "API Integration"],
    //   liveUrl: "#",
    //   githubUrl: "#"
    // }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">Featured <span className="gradient-text">Projects</span></h2>
        
        <div className="projects-grid">
          {projectList.map((project, idx) => {
            const Icon = project.icon;
            return (
              <div key={idx} className="project-card glass-card">
                <div className="project-content">
                  <h3 className="project-title" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <Icon size={22} className="gradient-text" style={{ color: 'var(--accent-primary)' }} />
                    {project.title}
                  </h3>
                  <p className="project-desc">{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="project-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;