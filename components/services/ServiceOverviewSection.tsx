'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import type { StaticImageData } from 'next/image';

export interface OverviewCapability {
  title: string;
  description?: string;
}

interface ServiceOverviewSectionProps {
  intro: string;
  capabilities: OverviewCapability[];
  image: string | StaticImageData;
  imageAlt: string;
  capabilitiesHeading?: string;
  useCheckmarks?: boolean;
  imageTall?: boolean;
}

export default function ServiceOverviewSection({
  intro,
  capabilities,
  image,
  imageAlt,
  capabilitiesHeading = 'What we are good at:',
  useCheckmarks = false,
  imageTall = false,
}: ServiceOverviewSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => { if (ref.current) observer.unobserve(ref.current!); };
  }, []);

  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-16 bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div ref={ref} className="grid md:grid-cols-12 gap-14 lg:gap-20 items-center">
          <div
            className={`md:col-span-5 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
              Overview
            </h2>
            <p className="text-lg text-white/90 leading-relaxed mb-10">
              {intro}
            </p>
            <h3 className="text-2xl font-bold text-white mb-8">{capabilitiesHeading}</h3>
            <ul className="space-y-4">
              {capabilities.map((item, i) => (
                <li key={i} className="flex gap-3">
                  {useCheckmarks ? (
                    <span className="text-[#51CFDF] mt-1 flex-shrink-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    </span>
                  ) : (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#51CFDF] mt-2.5 flex-shrink-0" />
                  )}
                  <div>
                    <span className="font-semibold text-white">{item.title}</span>
                    {item.description != null && item.description !== '' && (
                      <>: <span className="text-white">{item.description}</span></>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div
            className={`md:col-span-7 relative rounded-2xl overflow-hidden border border-[#51CFDF]/30 shadow-xl transition-all duration-700 delay-200 ${
              imageTall ? 'aspect-[4/3] md:aspect-[8/7] min-h-[320px] md:min-h-[360px]' : 'aspect-[4/3] md:aspect-[16/10] min-h-[320px]'
            } ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6'}`}
          >
            <Image
              src={image}
              alt={imageAlt}
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 58vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
