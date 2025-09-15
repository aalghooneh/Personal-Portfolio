import React, { useEffect, useRef } from "react";
import { realData } from "../mock/realData";
import { Award, BookOpen, Code, Zap } from "lucide-react";

const About = () => {
  const { about } = realData;
  const sectionRef = useRef(null);

  const iconMap = {
    0: <Award size={24} />,
    1: <Code size={24} />,
    2: <BookOpen size={24} />,
    3: <Zap size={24} />
  };

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
    <section id="about" className="about-section bg-black bg-opacity-60" ref={sectionRef}>
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <div className="flex flex-row space-x-3">
                <h2 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight ">About</h2>
                <h2 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight text-green-400"> Me!</h2>
            </div>
            <p className="about-description animate-on-scroll text-justify">{about.description}</p>
            
            <div className="about-highlights">
              {about.highlights.map((highlight, index) => (
                <div key={index} className="highlight-item animate-on-scroll">
                  <div className="highlight-icon">
                    {iconMap[index]}
                  </div>
                  <span className="highlight-text">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="about-stats">
            {about.stats.map((stat, index) => (
              <div key={index} className="stat-item animate-on-scroll">
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;