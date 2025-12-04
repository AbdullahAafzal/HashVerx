'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export default function WhoWeAre() {
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
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text */}
            <div
              className={`transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#0859B2] mb-6">
                Who We Are
              </h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p className="text-base md:text-lg">
                  HashVerx is a leading software development company dedicated to transforming ideas into powerful digital solutions. We specialize in creating custom software that drives innovation and business growth.
                </p>
                <p className="text-base md:text-lg">
                  Our expertise spans across frontend and backend development, mobile applications, artificial intelligence, blockchain technology, DevOps, and quality assurance. We bring together a team of skilled engineers, creative designers, and strategic thinkers who are passionate about delivering excellence.
                </p>
                <p className="text-base md:text-lg">
                  With years of experience and a client-centric approach, we've helped numerous businesses scale their operations, streamline processes, and achieve their digital transformation goals.
                </p>
              </div>
            </div>

            {/* Right Side - Image */}
            <div
              className={`transition-all duration-700 delay-200 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
              }`}
            >
              <div className="relative rounded-xl overflow-hidden aspect-[4/3]">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                  alt="Team working on code"
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


