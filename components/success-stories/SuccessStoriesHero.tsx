'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export default function SuccessStoriesHero() {
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
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
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
        {/* Blurred background image */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&h=1080&fit=crop)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'blur(40px)',
            }}
          ></div>
        </div>
      </div>

      {/* Content */}
      <div ref={ref} className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1
          className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-white">Success Stories</span>
        </h1>
        <p
          className={`text-base md:text-lg text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          From fintech to healthcare to blockchain, we help clients turn bold ideas into products that scale.
        </p>
        <Link
          href="/contact"
          className={`inline-flex items-center space-x-2 bg-gradient-to-r from-[#0859B2] to-[#51CFDF] hover:from-[#51CFDF] hover:to-[#6dd9e8] text-white px-8 py-3 rounded-lg font-semibold text-sm md:text-base transition-all shadow-lg shadow-[#51CFDF]/20 hover:shadow-xl hover:shadow-[#51CFDF]/30 hover:scale-105 transform uppercase tracking-wide transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span>START YOUR SUCCESS STORY</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </section>
  );
}


