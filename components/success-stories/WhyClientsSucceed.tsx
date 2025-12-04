'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const reasons = [
  {
    title: 'Proven Expertise',
    description: 'Deep knowledge in fintech, blockchain, healthcare, and cross-industry solutions.',
  },
  {
    title: 'Future-Ready Solutions',
    description: 'Built with AI, blockchain, IoT, and cloud-first technologies.',
  },
  {
    title: 'Long-Term Partnerships',
    description: 'We co-build with our clients to ensure sustainable growth and lasting value.',
  },
];

export default function WhyClientsSucceed() {
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
          {/* Left Side - Text */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#0859B2] mb-8">
              Why Clients Succeed with{' '}
              <span className="bg-gradient-to-r from-[#51CFDF] via-[#6dd9e8] to-[#51CFDF] bg-clip-text text-transparent">
                HashVerx?
              </span>
            </h2>
            <div className="space-y-6">
              {reasons.map((reason, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'
                  }}
                >
                  <div className="w-1.5 h-1.5 bg-[#51CFDF] rounded-full flex-shrink-0 mt-2.5"></div>
                  <div>
                    <h3 className="text-lg font-bold text-[#0859B2] mb-2">{reason.title}</h3>
                    <p className="text-base text-gray-300 leading-relaxed">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
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
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
                  alt="Why Clients Succeed"
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


