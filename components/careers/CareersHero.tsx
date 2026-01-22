'use client';

import { useEffect, useRef, useState } from 'react';

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
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-cyan-50/40">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#51CFDF]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#0859B2]/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#51CFDF]/10 rounded-full blur-3xl"></div>
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(rgba(5, 89, 178, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(5, 89, 178, 0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}
        ></div>
      </div>

      {/* Content */}
      <div ref={ref} className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <div
            className={`inline-flex items-center space-x-2 bg-gradient-to-r from-[#51CFDF]/10 to-[#0859B2]/10 border border-[#51CFDF]/30 rounded-full px-6 py-2 mb-8 transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <span className="w-2 h-2 bg-[#51CFDF] rounded-full animate-pulse"></span>
            <span className="text-[#0859B2] text-sm font-semibold">We're Hiring</span>
          </div>

          {/* Main Heading */}
          <h1
            className={`text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <span className="text-[#0859B2]">Join Our</span>{' '}
            <span className="bg-gradient-to-r from-[#51CFDF] via-[#6dd9e8] to-[#51CFDF] bg-clip-text text-transparent animate-gradient">
              Team
            </span>
          </h1>
          
          {/* Subheading */}
          <p
            className={`text-xl md:text-2xl text-gray-600 mb-4 max-w-3xl leading-relaxed transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Build the future of technology with us
          </p>
          
          {/* Description */}
          <p
            className={`text-base md:text-lg text-gray-500 mb-12 max-w-2xl leading-relaxed transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Explore exciting career opportunities at HashVerx. We're looking for passionate individuals who want to make an impact.
          </p>

          {/* Stats */}
          <div
            className={`grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 transition-all duration-1000 delay-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="bg-white/60 backdrop-blur-sm border border-[#51CFDF]/20 rounded-2xl p-6 shadow-lg shadow-[#51CFDF]/5 hover:shadow-xl hover:shadow-[#51CFDF]/10 transition-all duration-300">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#0859B2] to-[#51CFDF] bg-clip-text text-transparent mb-2">
                50+
              </div>
              <div className="text-sm text-gray-600 font-medium">Team Members</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm border border-[#51CFDF]/20 rounded-2xl p-6 shadow-lg shadow-[#51CFDF]/5 hover:shadow-xl hover:shadow-[#51CFDF]/10 transition-all duration-300">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#0859B2] to-[#51CFDF] bg-clip-text text-transparent mb-2">
                15+
              </div>
              <div className="text-sm text-gray-600 font-medium">Countries</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm border border-[#51CFDF]/20 rounded-2xl p-6 shadow-lg shadow-[#51CFDF]/5 hover:shadow-xl hover:shadow-[#51CFDF]/10 transition-all duration-300">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#0859B2] to-[#51CFDF] bg-clip-text text-transparent mb-2">
                100+
              </div>
              <div className="text-sm text-gray-600 font-medium">Projects Delivered</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


