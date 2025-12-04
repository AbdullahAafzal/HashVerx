'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const processSteps = [
  {
    number: '01',
    title: 'Requirement Analysis & Planning',
    description: 'We start by understanding your business needs, goals, and technical requirements. Our team conducts thorough analysis to create a comprehensive project plan.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
    imagePosition: 'right' as const,
  },
  {
    number: '02',
    title: 'UI/UX & Architecture Design',
    description: 'Our designers create intuitive user interfaces while our architects design scalable system structures that ensure optimal performance and user experience.',
    image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1a83b?w=800&h=600&fit=crop',
    imagePosition: 'left' as const,
  },
  {
    number: '03',
    title: 'Agile Development & Testing',
    description: 'We follow agile methodologies to develop your solution iteratively, with continuous testing and quality assurance throughout the development process.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop',
    imagePosition: 'right' as const,
  },
  {
    number: '04',
    title: 'Launch & Integration',
    description: 'We ensure smooth deployment and seamless integration with your existing systems, providing comprehensive documentation and training for your team.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    imagePosition: 'left' as const,
  },
];

export default function ServiceProcess() {
  const [visibleSteps, setVisibleSteps] = useState<Set<number>>(new Set());
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    stepRefs.current.forEach((step, index) => {
      if (!step) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleSteps((prev) => new Set([...prev, index]));
            }
          });
        },
        { threshold: 0.1 }
      );

      observer.observe(step);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <section className="py-20 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Our{' '}
          <span className="bg-gradient-to-r from-[#51CFDF] via-[#6dd9e8] to-[#51CFDF] bg-clip-text text-transparent">
            Process
          </span>
        </h2>

        <div className="space-y-12">
          {processSteps.map((step, index) => {
            const isVisible = visibleSteps.has(index);
            const isImageLeft = step.imagePosition === 'left';

            return (
              <div
                key={index}
                ref={(el) => (stepRefs.current[index] = el)}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  isImageLeft ? '' : 'md:grid-flow-dense'
                }`}
              >
                {/* Image */}
                <div
                  className={`${
                    isImageLeft ? 'md:col-start-1' : 'md:col-start-2'
                  } transition-all duration-700 ${
                    isVisible
                      ? 'opacity-100 translate-x-0'
                      : isImageLeft
                      ? 'opacity-0 -translate-x-8'
                      : 'opacity-0 translate-x-8'
                  }`}
                >
                  <div className="bg-white/60 backdrop-blur-xl border border-[#51CFDF]/30 rounded-2xl overflow-hidden" style={{
                    boxShadow: '0 8px 32px rgba(81, 207, 223, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.05)'
                  }}>
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={step.image}
                        alt={step.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`${
                    isImageLeft ? 'md:col-start-2' : 'md:col-start-1'
                  } transition-all duration-700 delay-200 ${
                    isVisible
                      ? 'opacity-100 translate-x-0'
                      : isImageLeft
                      ? 'opacity-0 translate-x-8'
                      : 'opacity-0 -translate-x-8'
                  }`}
                >
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="w-12 h-8 bg-gradient-to-br from-[#0859B2] to-[#51CFDF] rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-[#0859B2] font-bold text-sm">{step.number}</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white">{step.title}</h3>
                  </div>
                  <p className="text-base md:text-lg text-gray-300 leading-relaxed ml-16">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


