"use client";
import React, { useState, useEffect } from 'react';
import { useKeenSlider } from 'keen-slider/react';

const images = [
  '/internship/1.png',
  '/internship/2.png',
  '/internship/3.png',
];

export default function ExperienceTabs() {
  const [activeTab, setActiveTab] = useState('internship');
  const [sliderRef, setSliderRef] = useState(null);
  const [keenSliderRef] = useKeenSlider({
    loop: true,
    mode: 'free-snap',
    slides: {
      perView: 1,
      spacing: 15,
    },
  });

  useEffect(() => {
    if (Array.isArray(keenSliderRef)) {
      setSliderRef(keenSliderRef[0]);
    }
  }, [keenSliderRef]);

  const tabs = [
    { id: 'internship', label: 'NTU INTERNSHIP', icon: '🔬' },
    { id: 'vdat2025', label: 'VDAT2025 WEB TEAM', icon: '💻' },
    { id: 'achievements', label: 'ACHIEVEMENTS', icon: '🏆' }
  ];

  return (
    <div className="w-full bg-slate-900 text-white min-h-screen font-mono">
      {/* Tab Navigation */}
      <div className="flex flex-wrap justify-center gap-6 p-8 bg-slate-800/30">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-8 py-4 font-bold text-sm tracking-wider uppercase transition-all duration-300 border-2 ${
              activeTab === tab.id
                ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500 shadow-lg shadow-emerald-500/25'
                : 'bg-slate-800/50 text-slate-400 border-slate-700 hover:border-slate-600 hover:text-slate-300'
            }`}
            style={{
              clipPath: 'polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)'
            }}
          >
            <span className="mr-2">{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="px-8 pb-8">
        {activeTab === 'internship' && <InternshipTab sliderRef={sliderRef} />}
        {activeTab === 'vdat2025' && <VDAT2025Tab />}
        {activeTab === 'achievements' && <AchievementsTab />}
      </div>
    </div>
  );
}

function InternshipTab({ sliderRef }) {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 p-8">
        <h2 className="text-4xl font-bold mb-8 text-white uppercase tracking-wide">
          🌍 SUMMER INTERNSHIP @ NTU SINGAPORE
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <div className="space-y-6">
            <div className="bg-slate-900/70 border border-slate-700 p-6">
              <h3 className="text-emerald-400 font-bold text-lg mb-4 uppercase tracking-wide">PROJECT OVERVIEW</h3>
              <p className="text-slate-300 leading-relaxed">
                Collaborated on a cutting-edge medical AI project involving three institutions: 
                <span className="text-emerald-400 font-semibold"> NTU Singapore</span>, 
                <span className="text-emerald-400 font-semibold"> PGIMER Chandigarh</span>, and 
                <span className="text-emerald-400 font-semibold"> IIT Ropar</span>, under the guidance of 
                <span className="text-emerald-400 font-semibold"> Dr. Sukrit Gupta</span>.
              </p>
            </div>
            
            <div className="bg-slate-900/70 border border-slate-700 p-6">
              <h3 className="text-emerald-400 font-bold text-lg mb-4 uppercase tracking-wide">FOCUS AREAS</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-emerald-400">▶</span>
                  <span className="text-slate-300">Detection of cerebral aneurysms</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-400">▶</span>
                  <span className="text-slate-300">Prediction of rupture risk from 3D CTA scans</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-400">▶</span>
                  <span className="text-slate-300">Advanced deep learning techniques</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-slate-900/70 border border-slate-700 p-6">
              <h3 className="text-emerald-400 font-bold text-lg mb-4 uppercase tracking-wide">MY RESPONSIBILITIES</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span className="text-slate-300">Led data preprocessing pipeline</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span className="text-slate-300">3D volumetric analysis of brain CTA scans</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span className="text-slate-300">U-Net-based segmentation models in PyTorch</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span className="text-slate-300">Morphological and radiomic feature extraction</span>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-900/70 border border-slate-700 p-6">
              <h3 className="text-emerald-400 font-bold text-lg mb-4 uppercase tracking-wide">IMPACT & OUTCOMES</h3>
              <p className="text-slate-300 leading-relaxed">
                Enhanced understanding of medical image computing, deep learning, and clinical workflows. 
                Currently working on a research publication based on this work.
              </p>
            </div>
          </div>
        </div>

        {sliderRef && (
          <div className="bg-slate-900/70 border border-slate-700 p-6">
            <h3 className="text-emerald-400 font-bold text-lg mb-4 uppercase tracking-wide">PROJECT GALLERY</h3>
            <div ref={sliderRef} className="keen-slider">
              {images.map((src, index) => (
                <div className="keen-slider__slide" key={index}>
                  <img
                    src={src}
                    alt={`Internship ${index + 1}`}
                    className="w-full h-96 object-cover border border-slate-600"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function VDAT2025Tab() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 p-8">
        <h2 className="text-4xl font-bold mb-8 text-white uppercase tracking-wide">
          💻 WEB TEAM @ VDAT2025
        </h2>
        
        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-slate-900/70 border border-slate-700 p-6">
              <h3 className="text-emerald-400 font-bold text-lg mb-4 uppercase tracking-wide">ABOUT VDAT2025</h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                The 29th International Symposium on VLSI Design and Test, taking place in Chandigarh, India 
                during the first week of August 2025.
              </p>
              <div className="bg-slate-800/50 border border-slate-600 p-4">
                <h4 className="text-emerald-400 font-semibold mb-2">THEME:</h4>
                <p className="text-slate-300 italic">
                  "VLSI Design and Semiconductor Technology for Next Gen Chips & AI Applications"
                </p>
              </div>
            </div>
            
            <div className="bg-slate-900/70 border border-slate-700 p-6">
              <h3 className="text-emerald-400 font-bold text-lg mb-4 uppercase tracking-wide">MY RESPONSIBILITIES</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-400">▶</span>
                    <span className="text-slate-300 text-sm">Website Design & Development</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-400">▶</span>
                    <span className="text-slate-300 text-sm">Responsive UI/UX Implementation</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-400">▶</span>
                    <span className="text-slate-300 text-sm">Registration Portal Management</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-400">▶</span>
                    <span className="text-slate-300 text-sm">Content & Database Management</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-900/70 border border-slate-700 p-6">
              <h3 className="text-emerald-400 font-bold text-lg mb-4 uppercase tracking-wide">TECH STACK</h3>
              <div className="flex flex-wrap gap-2">
                {['REACT.JS', 'NEXT.JS', 'TAILWIND CSS', 'JAVASCRIPT', 'NODE.JS', 'MONGODB'].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-slate-800 border border-slate-600 text-xs text-slate-300 font-mono">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-slate-900/70 border border-slate-700 p-6">
              <h3 className="text-emerald-400 font-bold text-lg mb-4 uppercase tracking-wide">CONFERENCE STATS</h3>
              <div className="space-y-4">
                <div className="border-b border-slate-700 pb-2">
                  <div className="text-2xl font-bold text-white">300+</div>
                  <div className="text-slate-400 text-sm uppercase">Expected Attendees</div>
                </div>
                <div className="border-b border-slate-700 pb-2">
                  <div className="text-2xl font-bold text-white">50+</div>
                  <div className="text-slate-400 text-sm uppercase">Research Papers</div>
                </div>
                <div className="border-b border-slate-700 pb-2">
                  <div className="text-2xl font-bold text-white">15+</div>
                  <div className="text-slate-400 text-sm uppercase">Keynote Speakers</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-emerald-400">29TH</div>
                  <div className="text-slate-400 text-sm uppercase">Edition</div>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-900/70 border border-slate-700 p-6">
              <h3 className="text-emerald-400 font-bold text-lg mb-4 uppercase tracking-wide">LEARNING IMPACT</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Contributing to one of the most prestigious VLSI conferences has enhanced my full-stack 
                development skills while providing exposure to the academic research community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AchievementsTab() {
  const achievements = [
    {
      title: "ML HACKATHON WINNER",
      description: "Won an ML hackathon by developing a Python-based app for managing traffic and reducing pollution output. Our solution leveraged machine learning algorithms to analyze real-time traffic data, predict congestion patterns, and suggest optimized routes for vehicles. By integrating environmental factors such as emission levels and fuel consumption, our app provided eco-friendly route recommendations to minimize carbon footprints.",
      icon: "🏆",
      tech: ["PYTHON", "ML", "DATA ANALYSIS", "OPTIMIZATION"]
    },
    {
      title: "HACKATHON RUSH CHAMPION",
      description: "Won my college's Overnight Hackathon twice in a row, demonstrating my ability to think critically and develop innovative solutions under tight deadlines. Competing against top teams, I collaborated to design and implement impactful projects, leveraging my expertise in full-stack development and rapid prototyping.",
      icon: "⚡",
      tech: ["FULL-STACK", "RAPID PROTOTYPING", "TEAM COLLABORATION", "INNOVATION"]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold mb-8 text-white uppercase tracking-wide text-center">
        🏆 ACHIEVEMENTS
      </h2>
      
      <div className="space-y-8">
        {achievements.map((achievement, index) => (
          <div 
            key={index}
            className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 p-8 hover:border-emerald-500/50 transition-all duration-300"
          >
            <div className="grid lg:grid-cols-4 gap-8">
              <div className="lg:col-span-1 flex flex-col items-center lg:items-start">
                <div className="text-6xl mb-4 bg-slate-900/70 border border-slate-700 p-6 w-24 h-24 flex items-center justify-center">
                  {achievement.icon}
                </div>
                <div className="space-y-2">
                  {achievement.tech.map((tech) => (
                    <div key={tech} className="px-2 py-1 bg-slate-900 border border-slate-600 text-xs text-emerald-400 font-mono text-center">
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="lg:col-span-3">
                <h3 className="text-2xl font-bold mb-4 text-emerald-400 uppercase tracking-wide">
                  {achievement.title}
                </h3>
                <div className="bg-slate-900/70 border border-slate-700 p-6">
                  <p className="text-slate-300 leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}