"use client";
"use client";
import { useState, useEffect } from "react";
import { Terminal, Code2, Brain, Sparkles } from "lucide-react";

const AnimatedText = ({ sentences, speed = 100, pause = 1500 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const [isReversed, setIsReversed] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    let timeout;
    const currentSentence = sentences[currentSentenceIndex];

    if (currentSentence) {
      if (!isReversed) {
        // Typing effect
        if (displayedText.length < currentSentence.length) {
          timeout = setTimeout(() => {
            setDisplayedText(currentSentence.slice(0, displayedText.length + 1));
          }, speed);
        } else {
          // Pause before deleting
          timeout = setTimeout(() => setIsReversed(true), pause);
        }
      } else {
        // Deleting effect
        if (displayedText.length > 0) {
          timeout = setTimeout(() => {
            setDisplayedText(displayedText.slice(0, displayedText.length - 1));
          }, speed / 2);
        } else {
          // Move to the next sentence
          setIsReversed(false);
          setCurrentSentenceIndex((currentSentenceIndex + 1) % sentences.length);
        }
      }
    }

    return () => clearTimeout(timeout);
  }, [sentences, currentSentenceIndex, displayedText, isReversed, speed, pause]);

  return (
    <div className="relative">
      <span className="text-2xl md:text-3xl lg:text-4xl tracking-wider text-[#22EE44] font-mono leading-relaxed">
        {displayedText}
        <span className={`ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}>
          █
        </span>
      </span>
      
      {/* Glitch effect overlay */}
      <span 
        className="absolute top-0 left-0 text-2xl md:text-3xl lg:text-4xl tracking-wider text-cyan-400 font-mono opacity-20 pointer-events-none"
        style={{ 
          transform: 'translate(2px, -1px)',
          filter: 'blur(0.5px)'
        }}
      >
        {displayedText}
      </span>
    </div>
  );
};

const FloatingIcon = ({ icon: Icon, delay = 0, className = "" }) => {
  return (
    <div 
      className={`absolute opacity-10 animate-pulse ${className}`}
      style={{ 
        animationDelay: `${delay}s`,
        animationDuration: '3s'
      }}
    >
      <Icon size={24} className="text-[#22EE44]" />
    </div>
  );
};

const DeveloperJourney = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  const sentences = [
    "> Initializing connection...",
    "> Access granted. Welcome, explorer.",
    "> You've discovered Ayush Tyagi's digital realm.",
    "> IITian • Developer • Problem Solver • Creator",
    "> Curiosity is the engine of achievement.",
    "> Ready to explore my journey?",
    "> Loading experiences..."
  ];

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      const rect = document.getElementById('developer-journey')?.getBoundingClientRect();
      if (rect) {
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      }
    };

    const section = document.getElementById('developer-journey');
    if (section) {
      section.addEventListener('mousemove', handleMouseMove);
      return () => section.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  // Intersection Observer for entrance animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('developer-journey');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section 
      id="developer-journey"
      className="relative w-full min-h-[400px] bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 flex flex-col justify-center items-center overflow-hidden"
    >
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(34, 238, 68, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(34, 238, 68, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
          }}
        />
      </div>

      {/* Floating Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient Orbs */}
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-[#22EE44]/10 to-cyan-500/10 rounded-full blur-3xl"
          style={{
            left: `${30 + mousePosition.x * 0.03}%`,
            top: `${20 + mousePosition.y * 0.03}%`,
            transition: 'all 0.5s ease-out'
          }}
        />
        
        {/* Floating Icons */}
        <FloatingIcon icon={Code2} delay={0} className="top-1/4 left-1/4" />
        <FloatingIcon icon={Terminal} delay={1} className="top-3/4 right-1/4" />
        <FloatingIcon icon={Brain} delay={2} className="top-1/2 left-1/6" />
        <FloatingIcon icon={Sparkles} delay={3} className="bottom-1/4 right-1/3" />

        {/* Matrix-style falling characters */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute text-[#22EE44] text-xs font-mono opacity-20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          >
            {Math.random().toString(36).substr(2, 1)}
          </div>
        ))}
      </div>

      {/* Terminal Window Container */}
      <div className={`relative z-10 w-full max-w-6xl mx-auto px-6 transform transition-all duration-1000 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}>
        
        {/* Terminal Header */}
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-t-lg p-4 flex items-center space-x-2">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
          </div>
          <div className="flex-1 text-center">
            <span className="text-gray-400 font-mono text-sm">ayush_tyagi@portfolio:~$</span>
          </div>
          <Terminal className="w-4 h-4 text-gray-400" />
        </div>

        {/* Terminal Content */}
        <div className="bg-gray-900/80 backdrop-blur-sm border-x border-b border-gray-700/50 rounded-b-lg p-8 min-h-[200px] flex items-center justify-center">
          <div className="w-full text-center">
            <AnimatedText sentences={sentences} speed={50} pause={2000} />
          </div>
        </div>

        {/* Scan Line Effect */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-[#22EE44]/50 to-transparent animate-pulse opacity-30" 
               style={{
                 top: '50%',
                 animation: 'scanline 3s linear infinite'
               }} 
          />
        </div>
      </div>

      {/* Interactive Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#22EE44] rounded-full opacity-60"
            style={{
              left: `${20 + i * 10}%`,
              top: `${30 + (i % 3) * 20}%`,
              animation: `float ${3 + i * 0.5}s ease-in-out infinite`,
              animationDelay: `${i * 0.3}s`
            }}
          />
        ))}
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes scanline {
          0% { transform: translateY(-100px); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(100px); opacity: 0; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(180deg); }
        }
        
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&display=swap');
      `}</style>
    </section>
  );
};

export default DeveloperJourney;