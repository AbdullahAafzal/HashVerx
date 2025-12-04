'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export default function SuccessStoriesCTA() {
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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div
          ref={ref}
          className="bg-white/60 backdrop-blur-xl border border-[#51CFDF]/30 rounded-2xl p-12 md:p-16 text-center relative overflow-hidden"
          style={{
            boxShadow: '0 8px 32px rgba(81, 207, 223, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.05)'
          }}
        >
          {/* Decorative gradient */}
          <div
            className="absolute top-0 right-0 w-64 h-64 bg-[#51CFDF]/10 rounded-full blur-3xl"
            style={{ transform: 'translate(30%, -30%)' }}
          ></div>
          <div
            className="absolute bottom-0 left-0 w-64 h-64 bg-[#51CFDF]/10 rounded-full blur-3xl"
            style={{ transform: 'translate(-30%, 30%)' }}
          ></div>

          <div className="relative z-10">
            <h2
              className={`text-3xl md:text-4xl lg:text-5xl font-bold text-[#0859B2] mb-6 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Start Your Success Story with{' '}
              <span className="bg-gradient-to-r from-[#51CFDF] via-[#6dd9e8] to-[#51CFDF] bg-clip-text text-transparent">
                HashVerx
              </span>
            </h2>
            <p
              className={`text-base md:text-lg text-gray-300 mb-8 max-w-2xl mx-auto transition-all duration-700 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Let's build technology that makes your vision real.
            </p>
            <Link
              href="/contact"
              className={`inline-flex items-center space-x-2 bg-gradient-to-r from-[#0859B2] to-[#51CFDF] hover:from-[#51CFDF] hover:to-[#6dd9e8] text-white px-8 py-3 rounded-lg font-semibold text-sm md:text-base transition-all shadow-lg shadow-[#51CFDF]/20 hover:shadow-xl hover:shadow-[#51CFDF]/30 hover:scale-105 transform uppercase tracking-wide transition-all duration-700 delay-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <span>GET IN TOUCH</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}


