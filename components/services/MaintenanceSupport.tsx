'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export default function MaintenanceSupport() {
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
        <div ref={ref} className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <div className="flex items-start space-x-4 mb-4">
              <div className="w-12 h-8 bg-gradient-to-br from-[#0859B2] to-[#51CFDF] rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-[#0859B2] font-bold text-sm">05</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Maintenance & Support</h2>
            </div>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed ml-16">
              Our commitment doesn't end at launch. We provide ongoing maintenance, updates, and support to ensure your software continues to perform optimally. From bug fixes to feature enhancements, we're here to keep your systems running smoothly.
            </p>
          </div>

          {/* Right Side - Image */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <div className="bg-white/60 backdrop-blur-xl border border-[#51CFDF]/30 rounded-2xl overflow-hidden" style={{
              boxShadow: '0 8px 32px rgba(81, 207, 223, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.05)'
            }}>
              <div className="relative aspect-[4/3]">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                  alt="Maintenance & Support"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


