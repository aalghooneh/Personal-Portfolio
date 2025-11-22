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
    <section 
      id="about"
      className="min-h-screen bg-black py-20 relative overflow-hidden" 
      ref={sectionRef}
    >
      {/* Scroll target positioned above the title */}
      <div className="relative top-16"></div>
      
      {/* Dark overlay for consistency */}
      <div className="relative inset-0 bg-black bg-opacity-70"  style={{ zIndex: 1 }}>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Section Title */}
            <div className="text-center mb-16">
              <div className="flex flex-row justify-center items-center space-x-3 pt-24">
                <h2 className="text-5xl lg:text-7xl font-bold leading-tight text-white">About</h2>
                <h2 className="text-5xl lg:text-7xl font-bold leading-tight text-green-400">Me!</h2>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left Column - Description and Highlights */}
              <div className="space-y-8">
                <p className="text-gray-300 text-justify text-lg leading-relaxed animate-on-scroll">
                  {about.description}
                </p>
                
                <div className="space-y-4">
                  {about.highlights.map((highlight, index) => (
                    <div 
                      key={index} 
                      className="flex items-center space-x-4 p-4 rounded-lg border border-green-400/30 bg-black/50 hover:bg-green-400/10 hover:border-green-400 transition-all duration-300 animate-on-scroll group"
                    >
                      <div className="flex-shrink-0 w-12 h-12 rounded-full border-2 border-green-400 flex items-center justify-center text-green-400 group-hover:bg-green-400 group-hover:text-black transition-all duration-300">
                        {iconMap[index]}
                      </div>
                      <span className="text-gray-300 group-hover:text-white transition-colors duration-300 font-medium">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Right Column - Stats */}
              <div className="grid grid-cols-2 gap-6">
                {about.stats.map((stat, index) => (
                  <div 
                    key={index} 
                    className="text-center p-6 rounded-lg border-2 border-green-400/30 bg-black/50 hover:border-green-400 hover:bg-green-400/10 transition-all duration-300 animate-on-scroll group hover:scale-105 transform"
                  >
                    <div className="text-4xl lg:text-5xl font-bold text-green-400 mb-2 group-hover:text-green-300 transition-colors duration-300">
                      {stat.value}
                    </div>
                    <div className="text-gray-300 group-hover:text-white transition-colors duration-300 font-medium uppercase tracking-wider text-sm">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }
        .animate-on-scroll.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .animate-on-scroll:nth-child(1) { transition-delay: 0.1s; }
        .animate-on-scroll:nth-child(2) { transition-delay: 0.2s; }
        .animate-on-scroll:nth-child(3) { transition-delay: 0.3s; }
        .animate-on-scroll:nth-child(4) { transition-delay: 0.4s; }
        .animate-on-scroll:nth-child(5) { transition-delay: 0.5s; }
      `}</style>
    </section>
  );
};

export default About;