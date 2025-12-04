'use client';

import { useEffect, useRef, useState } from 'react';

const values = [
  'Innovation',
  'Integrity',
  'Excellence',
  'Collaboration',
];

export default function OurValues() {
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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div
          ref={ref}
          className="bg-white/60 backdrop-blur-xl border border-[#51CFDF]/30 rounded-2xl p-8 md:p-12"
          style={{
            boxShadow: '0 8px 32px rgba(81, 207, 223, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.05)'
          }}
        >
          <h2
            className={`text-3xl md:text-4xl font-bold text-[#0859B2] mb-8 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Our Values
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className={`flex items-start space-x-3 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                }`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="w-1.5 h-1.5 bg-[#51CFDF] rounded-full flex-shrink-0 mt-2.5"></div>
                <p className="text-base md:text-lg text-[#0859B2] leading-relaxed">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


