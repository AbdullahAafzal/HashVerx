'use client';

import { useEffect, useRef, useState } from 'react';

export default function AboutHero() {
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
            background: 'linear-gradient(135deg, rgba(8, 89, 178, 1) 0%, rgba(6, 64, 128, 0.98) 30%, rgba(8, 89, 178, 0.99) 60%, rgba(8, 89, 178, 1) 100%)'
          }}
        ></div>
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(81, 207, 223, 0.4) 0%, rgba(8, 89, 178, 0.98) 60%)'
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
          <span className="text-white">From Concept to</span>{' '}
          <span className="bg-gradient-to-r from-[#51CFDF] via-[#6dd9e8] to-[#51CFDF] bg-clip-text text-transparent">
            Reality
          </span>
        </h1>
        <p
          className={`text-base md:text-lg text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          HashVerx builds custom software solutions that help companies innovate, scale, and succeed in a digital-first world.
        </p>
      </div>
    </section>
  );
}


