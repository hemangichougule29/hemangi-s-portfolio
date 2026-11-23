import React from 'react';
import '../components.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "JavaScript (ES6+)", "HTML5", "CSS3","Node.js","Mongodb",]
    },
    // {
    //   title: "Design",
    //   skills: ["Figma", "UI/UX Design", "Wireframing", "Prototyping", "Design Systems", "Adobe Creative Suite"]
    // },
    {
      title: "Tools & Others",
      skills: ["Git", "GitHub", "Vite", "Webpack", "Responsive Design", "Web Accessibility", "RESTful APIs"]
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">My <span className="gradient-text">Skills</span></h2>
        
        <div className="skills-grid">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="skill-category glass-card">
              <h3 className="category-title">{category.title}</h3>
              <div className="badges-container">
                {category.skills.map((skill, skillIdx) => (
                  <span key={skillIdx} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
