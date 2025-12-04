'use client';

import { useEffect, useRef, useState } from 'react';

export default function OurJourney() {
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
    <section className="py-20 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div
          ref={ref}
          className="bg-white/60 backdrop-blur-xl border border-[#51CFDF]/30 rounded-2xl p-8 md:p-12 text-center"
          style={{
            boxShadow: '0 8px 32px rgba(81, 207, 223, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.05)'
          }}
        >
          <h2
            className={`text-3xl md:text-4xl font-bold text-[#0859B2] mb-6 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Our Journey
          </h2>
          <p
            className={`text-base md:text-lg text-gray-300 leading-relaxed transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            From launching innovative digital products to solving complex technological challenges, HashVerx has been at the forefront of software development. Our journey is marked by continuous learning, adaptation, and a relentless pursuit of excellence. We've grown from a small team of passionate developers to a trusted partner for businesses worldwide, always staying ahead of technological trends and delivering solutions that make a real impact.
          </p>
        </div>
      </div>
    </section>
  );
}


