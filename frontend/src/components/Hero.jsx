import React, { useEffect, useRef } from "react";
import { ChevronDown, Github, Linkedin, Mail, GraduationCap } from "lucide-react";

const MatrixRain = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    
    // Matrix characters - mix of Japanese katakana, numbers, and symbols
    const matrixChars = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()';
    const characters = matrixChars.split('');
    
    const columns = canvas.width / 20; // Character width
    const drops = Array(Math.floor(columns)).fill(0);
    
    const draw = () => {
      // Semi-transparent black background for trail effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Green text
      ctx.fillStyle = '#0F4';
      ctx.font = '15px monospace';
      
      // Draw characters
      for (let i = 0; i < drops.length; i++) {
        const text = characters[Math.floor(Math.random() * characters.length)];
        ctx.fillText(text, i * 20, drops[i] * 20);
        
        // Reset drop to top randomly
        if (drops[i] * 20 > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };
    
    const interval = setInterval(draw, 33);
    
    const handleResize = () => {
      setCanvasSize();
      drops.length = Math.floor(canvas.width / 20);
      for (let i = 0; i < drops.length; i++) {
        if (drops[i] === undefined) drops[i] = 0;
      }
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
};

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.querySelector("#about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Matrix Rain Background */}
      <MatrixRain />
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-60" style={{ zIndex: 2 }}></div>
      
      <section id="home" className="relative min-h-screen flex flex-col justify-center" style={{ zIndex: 3 }}>
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="flex-1 text-white">
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="text-green-400">AI</span> &
                <br />
                <span className="text-green-400">Full Stack</span>
                <br />
                Developer
              </h1>
              
              <div className="mb-6 space-y-2">
                <div className="flex items-center space-x-2">
                  <span className="text-green-300 text-lg font-semibold">Ph.D. • University of Waterloo</span>
                </div>
                <span className="text-green-300 text-lg font-semibold">LLMs • Multi-Sensor Fusion • Computer Vision</span>
              </div>
              
              <p className="text-gray-300 text-justify text-lg mb-8 max-w-2xl leading-relaxed">
                Built scalable applications with large and diverse codebases. Solid background in Math, Algorithm, and
                Engineering, whether it's a mechatronic device, a web application, or a mobile app,
                my passion lies in building and deploying efficient and reliable solutions.
              </p>
              
              <div className="flex flex-row space-x-4 items-center">
                <button 
                  className="bg-green-500 hover:bg-green-400 text-black font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-green-500/25"
                  onClick={scrollToAbout}
                >
                  Explore My Research
                </button>
                
                <div className="flex space-x-6">
                  <a 
                    href="https://www.linkedin.com/in/ahmad-alghooneh-176403169/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-green-400 hover:text-green-300 transition-colors duration-300 transform hover:scale-110"
                  >
                    <Linkedin size={28} />
                  </a>
                  <a 
                    href="https://scholar.google.com/citations?user=svgG4CQAAAAJ&hl=en" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-green-400 hover:text-green-300 transition-colors duration-300 transform hover:scale-110"
                  >
                    <GraduationCap size={28} />
                  </a>
                  <a 
                    href="https://github.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-green-400 hover:text-green-300 transition-colors duration-300 transform hover:scale-110"
                  >
                    <Github size={28} />
                  </a>
                  <a 
                    href="mailto:ahmad.alghooneh@uwaterloo.ca" 
                    className="text-green-400 hover:text-green-300 transition-colors duration-300 transform hover:scale-110"
                  >
                    <Mail size={28} />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="flex-1 flex items-center justify-center">
              <div className="relative">
                {/* Animated rings */}
                <div className="absolute inset-0 rounded-full border-2 border-green-400 animate-ping opacity-30"></div>
                <div className="absolute inset-0 rounded-full border-2 border-green-400 animate-pulse opacity-50" style={{ animationDelay: '0.5s' }}></div>
                
                {/* Profile image */}
                <img 
                  src="https://customer-assets.emergentagent.com/job_0d743d4c-a3f0-4b87-a1f1-4f1a320e2b0c/artifacts/3ykqfnki_Ahmad.jpeg" 
                  alt="Ahmad Alghooneh" 
                  className="w-80 h-80 rounded-full shadow-2xl shadow-green-500/30 border-4 border-green-400 relative z-10"
                />
              </div>
            </div>
          </div>
        </div>
        
        <button 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-green-400 hover:text-green-300 animate-bounce transition-colors duration-300"
          onClick={scrollToAbout}
        >
          <ChevronDown size={32} />
        </button>
      </section>
    </div>
  );
};

export default Hero;