import React, { useState, useEffect } from 'react';

interface TypingEffectProps {
  headingText: string;
  paragraphText: string;
  speed?: number;
  delayBetweenTexts?: number;
}

const TypingEffect: React.FC<TypingEffectProps> = ({
  headingText,
  paragraphText,
  speed = 100,
  delayBetweenTexts = 1500
}) => {
  const [displayedHeading, setDisplayedHeading] = useState('');
  const [displayedParagraph, setDisplayedParagraph] = useState('');
  const [isTypingHeading, setIsTypingHeading] = useState(true);
  const [charIndex, setCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true); // Untuk mengontrol efek blink

  useEffect(() => {
    // Handle typing for heading
    if (isTypingHeading && charIndex < headingText.length) {
      const timeout = setTimeout(() => {
        setDisplayedHeading((prev) => prev + headingText[charIndex]);
        setCharIndex(charIndex + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
    // Move to paragraph typing after heading is complete
    else if (isTypingHeading && charIndex === headingText.length) {
      const delayTimeout = setTimeout(() => {
        setIsTypingHeading(false);
        setCharIndex(0);
      }, delayBetweenTexts);
      return () => clearTimeout(delayTimeout);
    }
    // Handle typing for paragraph
    else if (!isTypingHeading && charIndex < paragraphText.length) {
      const timeout = setTimeout(() => {
        setDisplayedParagraph((prev) => prev + paragraphText[charIndex]);
        setCharIndex(charIndex + 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else if (!isTypingHeading && charIndex === paragraphText.length) {
      // Setelah selesai mengetik semua teks, hilangkan efek kursor
      setIsTyping(false);
    }
  }, [charIndex, isTypingHeading, headingText, paragraphText, speed, delayBetweenTexts]);

  return (
    <div className="flex flex-col items-center">
      <h1
        className={`text-5xl font-light font-quantico ${isTyping ? 'border-r-2 border-white-900 animate-blink' : ''}`}
      >
        {displayedHeading}
      </h1>
      {!isTypingHeading && (
        <p className={`text-lg font-quantico mt-4 ${isTyping ? 'border-r-2 border-white-900 animate-blink' : ''}`}>
          {displayedParagraph}
        </p>
      )}
    </div>
  );
};

export default TypingEffect;
