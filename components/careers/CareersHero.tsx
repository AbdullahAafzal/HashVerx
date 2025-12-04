'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export default function CareersHero() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-white">
        <div
          className="absolute inset-0"
          style={{
            background: 'rgba(255, 255, 255, 1)'
          }}
        ></div>
        <div
          className="absolute inset-0"
          style={{
            background: 'rgba(255, 255, 255, 1)'
          }}
        ></div>
        <div
          className="absolute bottom-0 right-0 w-1/2 h-1/2"
          style={{
            background: 'radial-gradient(ellipse at bottom right, rgba(81, 207, 223, 0.15) 0%, transparent 50%)'
          }}
        ></div>
      </div>

      {/* Content */}
      <div ref={ref} className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1
          className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-white">Join Our</span>{' '}
          <span className="bg-gradient-to-r from-[#51CFDF] via-[#6dd9e8] to-[#51CFDF] bg-clip-text text-transparent">
            Team
          </span>
        </h1>
        <p
          className={`text-base md:text-lg text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Build the future of technology with us. Explore exciting career opportunities at HashVerx.
        </p>
      </div>
    </section>
  );
}


