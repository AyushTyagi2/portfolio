"use client";
import React, { useState, useEffect } from 'react';

// Bell Icon Component
const BellIcon = ({ isClicked }) => (
  <svg 
    className={`w-12 h-12 fill-emerald-400 transition-all duration-300 ${
      isClicked ? 'animate-pulse scale-110' : ''
    }`} 
    viewBox="0 0 24 24"
  >
    <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 19V20H3V19L5 17V11C5 7.9 7 5.2 10 4.3V4C10 2.9 10.9 2 12 2S14 2.9 14 4V4.3C17 5.2 19 7.9 19 11V17L21 19ZM12 22C10.9 22 10 21.1 10 20H14C14 21.1 13.1 22 12 22Z"/>
  </svg>
);

const HomePage = () => {
  const [visitorCount, setVisitorCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [bellClicked, setBellClicked] = useState(false);
  const [bellRinging, setBellRinging] = useState(false);

  // Fetch initial visit count
  useEffect(() => {
    const fetchVisitCount = async () => {
      try {
        const res = await fetch('/api/visitCount');
        const data = await res.json();
        setVisitorCount(data.count);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching visit count:', error);
        // Fallback to demo count if API fails
        setVisitorCount(1247);
        setIsLoading(false);
      }
    };
    fetchVisitCount();
  }, []);

  // Update visit count on bell click
  const handleBellClick = async () => {
    if (bellRinging) return; // Prevent multiple clicks during animation
    
    setBellClicked(true);
    setBellRinging(true);
    
    try {
      const res = await fetch('/api/visitCount', {
        method: 'POST',
      });
      const data = await res.json();
      setVisitorCount(data.count);
    } catch (error) {
      console.error('Error updating visit count:', error);
      // Fallback increment if API fails
      setVisitorCount(prev => prev + 1);
    }
    
    // Reset animations
    setTimeout(() => {
      setBellClicked(false);
    }, 300);
    
    setTimeout(() => {
      setBellRinging(false);
    }, 600);
  };

  return (
    <>
      <div className="min-h-screen bg-slate-900 text-white font-mono flex justify-center items-center flex-col px-8">
        {/* Main Content Container */}
        <div className="max-w-4xl w-full text-center space-y-8">
          
          {/* Hero Section */}
          <div className="space-y-6">
            <div className="inline-block">
              <h1 className="text-5xl md:text-6xl font-bold uppercase tracking-wider mb-4">
                <span className="text-white">MAKE SURE TO</span>
                <br />
                <span className="text-emerald-400 glitch-text" data-text="PORTFOLIO">HIT THE BELL ICON</span>
              </h1>
              <div className="h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent"></div>
            </div>
            
            
          </div>

          {/* Interactive Section */}
          <div className="bg-slate-800/50 border border-slate-700 p-8 backdrop-blur-sm">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              
              {/* Bell Icon Section */}
              <div className="flex flex-col items-center space-y-4">
                <div className="text-slate-400 text-sm uppercase tracking-wide mb-2">
                  INTERACT TO UPDATE COUNT
                </div>
                <div 
                  className={`bell-container p-4 bg-slate-900 border-2 cursor-pointer transition-all duration-300 hover:border-emerald-400 hover:shadow-lg hover:shadow-emerald-400/25 select-none ${
                    bellClicked ? 'border-emerald-400 scale-110' : 'border-slate-600'
                  } ${bellRinging ? 'bell-ring' : ''}`}
                  onClick={handleBellClick}
                >
                  <BellIcon isClicked={bellClicked} />
                </div>
                <div className="text-xs text-slate-500 uppercase">
                  CLICK THE BELL
                </div>
              </div>

              {/* Visitor Count Display */}
              <div className="flex flex-col items-center space-y-4">
                <div className="text-slate-400 text-sm uppercase tracking-wide">
                  VISITOR ANALYTICS
                </div>
                
                <div className="bg-slate-900/70 border border-slate-600 p-6 min-w-[200px]">
                  <div className="text-center">
                    <div className="text-slate-500 text-xs uppercase mb-2">TOTAL VISITS</div>
                    <div className="text-4xl font-bold text-emerald-400 font-mono">
                      {isLoading ? (
                        <div className="animate-pulse loading-dots">...</div>
                      ) : (
                        <span className={`counter-animation ${bellClicked ? 'counter-update' : ''}`}>
                          {visitorCount.toLocaleString()}
                        </span>
                      )}
                    </div>
                    <div className="text-slate-600 text-xs mt-2">
                      AND COUNTING
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Status Bar */}
          <div className="bg-slate-800/30 border border-slate-700/50 p-4">
            <div className="flex flex-wrap justify-center items-center gap-8 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                <span className="text-slate-400">SYSTEM ONLINE</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span className="text-slate-400">API CONNECTED</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <span className="text-slate-400">TRACKING ACTIVE</span>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="space-y-4">
            <div className="text-emerald-400 text-lg font-semibold">
              ...Explore his interests and endeavors.
            </div>
            
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .glitch-text {
          position: relative;
        }
        
        .glitch-text:hover::before,
        .glitch-text:hover::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        
        .glitch-text:hover::before {
          animation: glitch-1 0.3s infinite;
          color: #ff0000;
          z-index: -1;
        }
        
        .glitch-text:hover::after {
          animation: glitch-2 0.3s infinite;
          color: #00ff00;
          z-index: -2;
        }
        
        @keyframes glitch-1 {
          0%, 14%, 15%, 49%, 50%, 99%, 100% {
            transform: translate(0, 0);
          }
          1%, 13% {
            transform: translate(-2px, 0);
          }
          16%, 48% {
            transform: translate(2px, 0);
          }
        }
        
        @keyframes glitch-2 {
          0%, 20%, 21%, 62%, 63%, 99%, 100% {
            transform: translate(0, 0);
          }
          1%, 19% {
            transform: translate(2px, 0);
          }
          22%, 61% {
            transform: translate(-2px, 0);
          }
        }
        
        .counter-animation {
          transition: all 0.3s ease;
        }
        
        .counter-update {
          transform: scale(1.1);
          color: #34d399;
        }
        
        .bell-ring {
          animation: bellRing 0.6s ease-in-out;
        }
        
        @keyframes bellRing {
          0%, 50%, 100% { 
            transform: rotate(0deg); 
          }
          10%, 30% { 
            transform: rotate(-15deg); 
          }
          20%, 40% { 
            transform: rotate(15deg); 
          }
        }
        
        .bell-container:hover {
          transform: scale(1.05);
        }
        
        .bell-container:active {
          transform: scale(0.95);
        }
        
        .loading-dots::after {
          content: '';
          animation: loadingDots 1.5s infinite;
        }
        
        @keyframes loadingDots {
          0%, 20% { content: '.'; }
          40% { content: '..'; }
          60%, 100% { content: '...'; }
        }
      `}</style>
    </>
  );
};

export default HomePage;