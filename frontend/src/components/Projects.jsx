import React, { useState, useEffect, useRef } from "react";
import { realData } from "../mock/realData";
import { Github, ExternalLink, ChevronRight } from "lucide-react";

const Projects = () => {
  const { projects } = realData;
  const [activeProject, setActiveProject] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const animateElements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    animateElements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="projects-section" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title animate-on-scroll">Featured Research & Projects</h2>
        <p className="section-subtitle animate-on-scroll">
          Showcasing the intersection of academic research and practical implementation
        </p>
        
        <div className="projects-container">
          <div className="project-navigation">
            {projects.map((project, index) => (
              <button
                key={project.id}
                className={`project-nav-item animate-on-scroll ${activeProject === index ? 'active' : ''}`}
                onClick={() => setActiveProject(index)}
              >
                <div className="project-nav-content">
                  <span className="project-nav-title">{project.title}</span>
                  <span className="project-nav-category">{project.category}</span>
                </div>
                <ChevronRight size={20} />
              </button>
            ))}
          </div>
          
          <div className="project-detail">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`project-content ${activeProject === index ? 'active' : ''}`}
              >
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-image-overlay">
                    <div className="project-links">
                      <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">
                        <Github size={20} />
                        <span>Code</span>
                      </a>
                      <a href={project.demo} className="project-link" target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={20} />
                        <span>View</span>
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="project-info">
                  <div className="project-header">
                    <h3 className="project-title">{project.title}</h3>
                    <span className="project-category-tag">{project.category}</span>
                  </div>
                  
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-features">
                    <h4 className="features-title">Key Features:</h4>
                    <ul className="features-list">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="feature-item">{feature}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="project-technologies">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;