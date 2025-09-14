import React, { useEffect, useRef } from "react";
import { realData } from "../mock/realData";
import { MapPin, Calendar } from "lucide-react";

const Experience = () => {
  const { experience } = realData;
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
    <section id="experience" className="experience-section" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title animate-on-scroll">Professional Journey</h2>
        <p className="section-subtitle animate-on-scroll">
          From academic research to practical innovation in autonomous systems
        </p>
        
        <div className="experience-timeline">
          {experience.map((job, index) => (
            <div key={job.id} className="timeline-item animate-on-scroll">
              <div className="timeline-marker">
                <div className="timeline-dot"></div>
              </div>
              
              <div className="timeline-content">
                <div className="job-header">
                  <h3 className="job-title">{job.title}</h3>
                  <div className="job-meta">
                    <span className="job-company">{job.company}</span>
                    <div className="job-details">
                      <div className="job-period">
                        <Calendar size={16} />
                        <span>{job.period}</span>
                      </div>
                      <div className="job-location">
                        <MapPin size={16} />
                        <span>{job.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <p className="job-description">{job.description}</p>
                
                <div className="job-achievements">
                  <h4 className="achievements-title">Key Achievements:</h4>
                  <ul className="achievements-list">
                    {job.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="achievement-item">
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;