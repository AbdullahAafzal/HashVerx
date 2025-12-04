'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export default function MissionVision() {
  const [missionVisible, setMissionVisible] = useState(false);
  const [visionVisible, setVisionVisible] = useState(false);
  const missionRef = useRef<HTMLDivElement>(null);
  const visionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const missionObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setMissionVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const visionObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisionVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (missionRef.current) {
      missionObserver.observe(missionRef.current);
    }
    if (visionRef.current) {
      visionObserver.observe(visionRef.current);
    }

    return () => {
      if (missionRef.current) {
        missionObserver.unobserve(missionRef.current);
      }
      if (visionRef.current) {
        visionObserver.unobserve(visionRef.current);
      }
    };
  }, []);

  return (
    <section className="py-20 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl space-y-12">
        {/* Mission */}
        <div
          ref={missionRef}
          className="bg-white/60 backdrop-blur-xl border border-[#51CFDF]/30 rounded-2xl p-8 md:p-12"
          style={{
            boxShadow: '0 8px 32px rgba(81, 207, 223, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.05)'
          }}
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Side - Image */}
            <div
              className={`transition-all duration-700 ${
                missionVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}
            >
              <div className="relative rounded-xl overflow-hidden aspect-[4/3]">
                <Image
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
                  alt="Mission"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>
            </div>

            {/* Right Side - Text */}
            <div
              className={`transition-all duration-700 delay-200 ${
                missionVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
              }`}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#0859B2] mb-6">
                Our Mission
              </h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p className="text-base md:text-lg">
                  Our mission is to simplify technology and make it accessible, reliable, and growth-driven for businesses of all sizes. We believe that every company, regardless of its size or industry, deserves access to world-class software solutions.
                </p>
                <p className="text-base md:text-lg">
                  We partner with our clients to transform their visions into impactful digital products that solve real-world problems, enhance user experiences, and drive measurable business results.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Vision */}
        <div
          ref={visionRef}
          className="bg-white/60 backdrop-blur-xl border border-[#51CFDF]/30 rounded-2xl p-8 md:p-12"
          style={{
            boxShadow: '0 8px 32px rgba(81, 207, 223, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.05)'
          }}
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text */}
            <div
              className={`transition-all duration-700 ${
                visionVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#0859B2] mb-6">
                Our Vision
              </h2>
              <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                To be a trusted global partner for businesses seeking innovation through custom software, artificial intelligence, and emerging technologies. We envision a future where technology seamlessly integrates with business operations, enabling companies to achieve unprecedented growth and success.
              </p>
            </div>

            {/* Right Side - Image */}
            <div
              className={`transition-all duration-700 delay-200 ${
                visionVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
              }`}
            >
              <div className="relative rounded-xl overflow-hidden aspect-[4/3]">
                <Image
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=600&fit=crop"
                  alt="Vision"
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


