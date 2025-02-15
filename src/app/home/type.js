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
<span className="text-3xl md:text-3xl  tracking-wider text-green-400 min-h-[50px] inline-block font-[Orbitron]">
{displayedText}
    </span>
  );
  
};

const DeveloperJourney = () => {
  const sentences = [
    ".../Greetings, wanderer.",
    ".../You have stumbled upon the digital domain of Ayush Tyagi.",
    ".../Curiosity piqued, perhaps?",
    ".../Explore his interests and endeavors.",
    ".../A skilled coder,IITIAN and more."
  ];

  return (
    <div id="about" className="w-full h-[70px] bg-gradient-to-r from-gray-900/70 via-gray-900/90 to-gray-900/95 flex flex-col justify-center items-center">
      <div className="w-full md:px-0 md:w-3/4 lg:w-1/2">
        <p>
          <AnimatedText sentences={sentences} speed={50} pause={1800} />
        </p>
      </div>
    </div>
  );
};

export default DeveloperJourney;