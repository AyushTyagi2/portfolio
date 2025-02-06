"use client";
import { useState, useEffect } from "react";

const AnimatedText = ({ sentences, speed = 100, pause = 1500 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const [isReversed, setIsReversed] = useState(false);

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
          }, speed / 2); // Faster deletion
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
    <span className="text-2xl md:text-3xl font-mono tracking-wider text-green-400">
      {displayedText}
    </span>
  );
};

const DeveloperJourney = () => {
  const sentences = [
    "Greetings, wanderer.",
    "You have stumbled upon the digital domain of Ayush Tyagi.",
    "Curiosity piqued, perhaps?",
    "Explore his interests and endeavors.",
    "A skilled coder,IITIAN and more."
  ];

  return (
    <div id="about" className="w-full h-screen bg-gradient-to-r from-gray-900/70 via-gray-900/90 to-gray-900/95 flex flex-col justify-center items-center"> {/* Full screen, flex column */}
      <div className="w-full  md:px-0 md:w-3/4 lg:w-1/2 "> {/* Responsive width, padding */}
        <h2 className="text-center text-4xl md:text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 font-mono tracking-wide uppercase"> {/* Larger heading, monospace font, uppercase */}
          Developer Journey
        </h2>
        <div className="bg-gray-800/80 backdrop-blur-md p-8 rounded-lg shadow-lg border border-gray-700/80 relative"> {/* Increased blur, border opacity, relative for glow */}
          <div className="absolute inset-0 rounded-lg border-2 border-blue-500/50 pointer-events-none animate-glow"></div> {/* Glow effect */}
          <div className="flex flex-col items-center">
            <div className="text-center">
              <p className="text-xl md:text-2xl leading-relaxed font-mono text-green-300 mb-6 tracking-wide"> {/* Monospace font, green text, tracking */}
                <AnimatedText sentences={sentences} speed={60} pause={1800} /> {/* Adjusted speed and pause */}
              </p>
              <p className="text-gray-400 font-mono leading-relaxed tracking-wide"> {/* Monospace font, tracking */}
                I'm a passionate computer science student exploring the world of code and technology. I love building things and learning new skills.  I'm particularly interested in AI and robotics.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeveloperJourney;

