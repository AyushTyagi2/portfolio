"use client";
import React from 'react';

const AnimatedText = () => {
  return (
    <div className="relative w-full overflow-hidden text-center"> {/* Container */}
      <h1 className="animated-text text-2xl md:text-4xl font-bold text-purple-900 drop-shadow-lg whitespace-nowrap">
        Dive into the abyss of creativity and explore my projects and skills.
      </h1>
      <style jsx>{`
        .animated-text {
          animation: slideLeft 10s linear infinite; /* Adjust duration */
        }

        @keyframes slideLeft {
          0% {
            transform: translateX(100%);
            opacity: 0;
          }
          25% {
            opacity: 1;
          }
          75% {
            opacity: 1;
          }
          100% {
            transform: translateX(-100%);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default AnimatedText;