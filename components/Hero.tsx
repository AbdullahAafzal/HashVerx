"use client";

import { useState, useEffect } from "react";

export default function Hero() {
  const words = [
    "Vision & Code",
    "Information",
    "Automation",
    "Infrastructure"
  ];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const current = words[currentWordIndex];

      if (!isDeleting) {
        // Typing
        if (currentText.length < current.length) {
          setCurrentText(current.slice(0, currentText.length + 1));
          setTypingSpeed(100);
        } else {
          // Finished typing, wait then start deleting
          setTimeout(() => setIsDeleting(true), 2500);
        }
      } else {
        // Deleting
        if (currentText.length > 0) {
          setCurrentText(current.slice(0, currentText.length - 1));
          setTypingSpeed(50);
        } else {
          // Finished deleting, move to next word
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
          setTypingSpeed(100);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, words, typingSpeed]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Premium background with visible gradient */}
      <div className="absolute inset-0 bg-white">

        {/* Subtle texture/grain overlay */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundSize: "200px 200px"
          }}
        ></div>

        {/* Blue glow effects - visible but subtle */}
        <div className="absolute inset-0">
          <div className="absolute bottom-1/4 right-1/4 w-[800px] h-[800px] bg-[#51CFDF]/10 rounded-full blur-[150px]"></div>
        </div>

        {/* Prominent dashed curved line pattern in bottom right */}
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] md:w-[800px] md:h-[800px] opacity-40">
          <svg viewBox="0 0 600 600" className="w-full h-full">
            <path
              d="M 50 550 Q 300 300, 550 550"
              stroke="#51CFDF"
              strokeWidth="3"
              fill="none"
              strokeDasharray="12,12"
            />
            <path
              d="M 100 500 Q 350 200, 600 500"
              stroke="#51CFDF"
              strokeWidth="2.5"
              fill="none"
              strokeDasharray="12,12"
            />
            <path
              d="M 150 450 Q 400 100, 650 450"
              stroke="#51CFDF"
              strokeWidth="2"
              fill="none"
              strokeDasharray="12,12"
            />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight flex items-baseline justify-center flex-wrap gap-3 md:gap-4 lg:gap-5">
          <span className="text-[#0859B2]">Bridging.</span>
          <span className="bg-gradient-to-r from-[#51CFDF] via-[#6dd9e8] to-[#51CFDF] bg-clip-text text-transparent inline-block min-w-[150px] md:min-w-[200px] lg:min-w-[250px] text-left">
            {currentText}
            <span className="inline-block w-[2px] h-[1.2em] bg-[#51CFDF] ml-1 align-middle typing-cursor"></span>
          </span>
        </h1>
        <p className="text-base md:text-lg lg:text-xl text-gray-600 mb-10 max-w-2xl mx-auto font-sans leading-relaxed">
          Fast, intelligent custom software solutions, powered by AI and
          automation, tailored to meet your unique needs.
        </p>
        <a
          href="#contact"
          className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#0859B2] to-[#51CFDF] hover:from-[#51CFDF] hover:to-[#6dd9e8] text-white px-6 py-3 rounded-lg font-semibold text-sm md:text-base transition-all shadow-lg shadow-[#51CFDF]/20 hover:shadow-xl hover:shadow-[#51CFDF]/30 hover:scale-105 transform uppercase tracking-wide font-sans"
        >
          <span>See What We've Built</span>
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}
