import React, { useEffect, useRef } from "react";
import { realData } from "../mock/realData";
import { 
  Brain, 
  Eye, 
  Car, 
  Radar, 
  MapPin, 
  Settings,
  Code2,
  Database,
  Bot,
  GraduationCap,
  BookOpen,
  FileText,
  Users,
  Award,
  Wrench,
  Cpu,
  Zap,
  BarChart3,
  Cog,
  Network
} from "lucide-react";

const Skills = () => {
  const { skills } = realData;
  const sectionRef = useRef(null);

  // Icon mapping for different skills
  const getSkillIcon = (skill) => {
    // Programming Languages & Tools
    if (skill.includes('Python')) return <Code2 size={18} />;
    if (skill.includes('C++')) return <Cpu size={18} />;
    if (skill.includes('MATLAB')) return <BarChart3 size={18} />;
    if (skill.includes('ROS')) return <Bot size={18} />;
    if (skill.includes('TensorFlow') || skill.includes('PyTorch')) return <Brain size={18} />;
    if (skill.includes('OpenCV')) return <Eye size={18} />;
    
    // Research & Development
    if (skill.includes('Machine Learning')) return <Brain size={18} />;
    if (skill.includes('Computer Vision')) return <Eye size={18} />;
    if (skill.includes('Autonomous Vehicles')) return <Car size={18} />;
    if (skill.includes('Multi-Sensor Fusion')) return <Network size={18} />;
    if (skill.includes('Perception Systems')) return <Eye size={18} />;
    if (skill.includes('Localization')) return <MapPin size={18} />;
    
    // Sensor Technologies
    if (skill.includes('Radar')) return <Radar size={18} />;
    if (skill.includes('Camera')) return <Eye size={18} />;
    if (skill.includes('LiDAR')) return <Zap size={18} />;
    if (skill.includes('HD Map')) return <MapPin size={18} />;
    
    // Academic & Research
    if (skill.includes('PhD') || skill.includes('Research')) return <GraduationCap size={18} />;
    if (skill.includes('Technical Writing')) return <FileText size={18} />;
    if (skill.includes('Patent')) return <Award size={18} />;
    if (skill.includes('Conference')) return <Users size={18} />;
    if (skill.includes('Peer Review')) return <BookOpen size={18} />;
    
    // Engineering & Systems
    if (skill.includes('Mechatronics')) return <Cog size={18} />;
    if (skill.includes('Vehicle Systems')) return <Car size={18} />;
    if (skill.includes('Signal Processing')) return <Zap size={18} />;
    if (skill.includes('Data Analysis')) return <BarChart3 size={18} />;
    if (skill.includes('Algorithm')) return <Brain size={18} />;
    if (skill.includes('System Integration')) return <Network size={18} />;
    
    // Default icons
    return <Settings size={18} />;
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
    <section id="skills" className="skills-section" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title animate-on-scroll">Technical Expertise</h2>
        <p className="section-subtitle animate-on-scroll">
          A comprehensive research and development toolkit spanning autonomous vehicles, machine learning, and full-stack development
        </p>
        
        <div className="skills-grid">
          {skills.categories.map((category, index) => (
            <div key={index} className="skill-category animate-on-scroll">
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex} 
                    className="skill-tag-with-icon"
                    style={{
                      '--index': skillIndex,
                      animationDelay: `${(index * 0.1 + skillIndex * 0.05)}s`
                    }}
                  >
                    <div className="skill-icon">
                      {getSkillIcon(skill)}
                    </div>
                    <span className="skill-name">{skill}</span>
                  </div>
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