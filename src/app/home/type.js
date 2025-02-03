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
    <div id="about" className="mb-12 flex justify-center bg-gradient-to-r from-gray-900/50 via-gray-900/80 to-gray-900"> {/* Added gradient background */}
      <div className="w-full md:w-3/4 lg:w-1/2 py-12"> {/* Added padding */}
        <h2 className="text-center text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 font-montserrat"> {/* Gradient heading */}
          Developer Journey
        </h2>
        <div className="bg-gray-800/70 backdrop-blur-md p-8 rounded-lg shadow-lg border border-gray-700"> {/* Added blur, border, adjusted opacity */}
          <div className="flex flex-col items-center">
            <div className="text-center">
              <p className="text-lg leading-relaxed font-lato text-gray-300 mb-6"> {/* Added margin bottom for spacing */}
                <AnimatedText sentences={sentences} speed={80} pause={2000} />
              </p>
              {/* Add a short description or introduction here */}
              <p className="text-gray-400 font-lato leading-relaxed">
                I'm a passionate computer science student exploring the world of code and technology.  I love building things and learning new skills.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeveloperJourney;