"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

// Mock AnimatedText component (replace with your actual component)
const AnimatedText = () => {
  const [currentText, setCurrentText] = useState(0);
  const texts = [
    "Full Stack Developer",
    "Problem Solver", 
    "Tech Enthusiast",
    "Code Craftsman"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-8 flex items-center justify-center">
      <span className="text-2xl md:text-3xl font-mono text-emerald-400 animate-pulse">
        {texts[currentText]}
      </span>
    </div>
  );
};

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="bg-slate-900 text-slate-300 py-20 relative overflow-hidden min-h-screen flex items-center">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(34, 238, 68, 0.3) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="container mx-auto relative z-10 px-6">
        {/* Hero Image Section */}
        <div className={`relative h-[500px] mb-16 rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <Image
            src="/Hero-Image.png"
            alt="Ayush Tyagi - Full Stack Developer"
            layout="fill"
            objectFit="cover"
            quality={100}
            className="transition-transform duration-700 hover:scale-105"
          />
          
          {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 via-transparent to-slate-900/70"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
          
          {/* Glowing Border Effect */}
          <div className="absolute inset-0 rounded-2xl border-2 border-emerald-400/30 shadow-lg shadow-emerald-400/20"></div>
          
          {/* Main Hero Text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            <div className="space-y-6">
              {/* Greeting */}
              <div className={`transform transition-all duration-1000 delay-300 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}>
                <span className="text-emerald-400 text-lg md:text-xl font-mono tracking-wider">
                  &gt; Hello World, I'm
                </span>
              </div>
              
              {/* Main Name */}
              <div className={`transform transition-all duration-1000 delay-500 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-mono tracking-wider text-white">
                  <span className="text-emerald-400">AYUSH</span>
                  <br />
                  <span className="text-white">TYAGI</span>
                </h1>
              </div>
              
              {/* Subtitle */}
              <div className={`transform transition-all duration-1000 delay-700 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}>
                <p className="text-slate-300 text-lg md:text-xl font-mono max-w-2xl">
                  Crafting digital experiences with code and creativity
                </p>
              </div>
              
              {/* CTA Button */}
              <div className={`transform transition-all duration-1000 delay-900 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}>
                <button className="group relative px-8 py-4 bg-transparent border-2 border-emerald-400 text-emerald-400 font-mono font-bold uppercase tracking-wider hover:bg-emerald-400 hover:text-slate-900 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-emerald-400/25">
                  <span className="relative z-10">View My Work</span>
                  <div className="absolute inset-0 bg-emerald-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Animated Text Section */}
        <div className={`text-center mb-16 transform transition-all duration-1000 delay-1100 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="inline-block">
            <div className="text-slate-400 text-sm md:text-base font-mono mb-4 tracking-wider">
              &gt; I am a passionate
            </div>
            <AnimatedText />
            <div className="mt-4 h-0.5 bg-gradient-to-r from-transparent via-emerald-400 to-transparent"></div>
          </div>
        </div>

        {/* Stats Section */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 transform transition-all duration-1000 delay-1300 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="text-center p-6 bg-slate-800/50 rounded-lg border border-slate-700/50 backdrop-blur-sm hover:border-emerald-400/50 transition-all duration-300">
            <div className="text-3xl font-bold text-emerald-400 font-mono">20+</div>
            <div className="text-slate-400 text-sm uppercase tracking-wider">Projects Completed</div>
          </div>
          <div className="text-center p-6 bg-slate-800/50 rounded-lg border border-slate-700/50 backdrop-blur-sm hover:border-emerald-400/50 transition-all duration-300">
            <div className="text-3xl font-bold text-emerald-400 font-mono">3rd</div>
            <div className="text-slate-400 text-sm uppercase tracking-wider">Year B.Tech</div>
          </div>
          <div className="text-center p-6 bg-slate-800/50 rounded-lg border border-slate-700/50 backdrop-blur-sm hover:border-emerald-400/50 transition-all duration-300">
            <div className="text-3xl font-bold text-emerald-400 font-mono">100%</div>
            <div className="text-slate-400 text-sm uppercase tracking-wider">Passion Driven</div>
          </div>
        </div>

        {/* Tech Stack Preview */}
        <div className={`text-center transform transition-all duration-1000 delay-1500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="text-slate-400 text-sm font-mono mb-6 tracking-wider">
            &gt; Tech Stack
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {['React', 'Next.js', 'Node.js', 'Python', 'JavaScript', 'TypeScript', 'MongoDB', 'PostgreSQL'].map((tech, index) => (
              <span 
                key={tech}
                className="px-4 py-2 bg-slate-800/70 border border-slate-600 rounded-full text-sm font-mono text-slate-300 hover:border-emerald-400 hover:text-emerald-400 transition-all duration-300 transform hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-emerald-400/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-emerald-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;