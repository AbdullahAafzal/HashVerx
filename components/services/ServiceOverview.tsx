'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export interface OverviewCapability {
  title: string;
  description?: string;
}

interface ServiceOverviewProps {
  intro: string;
  /** Section label above the intro (e.g. "Overview") */
  label?: string;
  /** List of capabilities or offerings; can be strings or { title, description } */
  capabilities?: string[] | OverviewCapability[];
  /** Optional right-column image */
  image?: string | { src: string; alt?: string };
  /** Optional heading for the list (e.g. "What we offer", "What we're good at") */
  capabilitiesHeading?: string;
}

function isCapabilityObj(c: string | OverviewCapability): c is OverviewCapability {
  return typeof c === 'object' && c !== null && 'title' in c;
}

export default function ServiceOverview({
  intro,
  label = 'Overview',
  capabilities = [],
  image,
  capabilitiesHeading = 'What we offer',
}: ServiceOverviewProps) {
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

  const imageSrc = typeof image === 'string' ? image : image?.src;
  const imageAlt = typeof image === 'object' && image?.alt ? image.alt : 'Service overview';

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div ref={ref} className="grid md:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div
            className={`md:col-span-5 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'
            }`}
          >
            <p className="text-[#51CFDF] text-sm font-semibold uppercase tracking-wider mb-4">
              {label}
            </p>
            <p className="text-base md:text-lg text-gray-900 leading-relaxed mb-8">
              {intro}
            </p>
            {capabilities.length > 0 && (
              <>
                <h3 className="text-xl font-bold text-gray-900 mb-6">{capabilitiesHeading}</h3>
                <ul className="space-y-4">
                  {capabilities.map((item, i) => {
                    if (isCapabilityObj(item)) {
                      return (
                        <li key={i} className="flex gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#51CFDF] mt-2.5 flex-shrink-0" />
                          <div>
                            <span className="font-semibold text-gray-900">{item.title}</span>
                            {item.description != null && item.description !== '' && (
                              <>: <span className="text-gray-700">{item.description}</span></>
                            )}
                          </div>
                        </li>
                      );
                    }
                    return (
                      <li key={i} className="flex gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#51CFDF] mt-2.5 flex-shrink-0" />
                        <span className="text-gray-700 font-medium">{item}</span>
                      </li>
                    );
                  })}
                </ul>
              </>
            )}
          </div>
          <div
            className={`md:col-span-7 relative aspect-[4/3] md:aspect-[16/10] min-h-[320px] rounded-2xl overflow-hidden border border-[#51CFDF]/30 shadow-xl transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6'
            }`}
          >
            {imageSrc ? (
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 58vw"
              />
            ) : (
              <div
                className="absolute inset-0 flex items-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 30%, #bae6fd 70%, #7dd3fc 100%)',
                }}
              >
                <div className="absolute inset-0 opacity-20">
                  <div
                    className="w-full h-full"
                    style={{
                      backgroundImage: 'radial-gradient(circle at 2px 2px, #51CFDF 1px, transparent 0)',
                      backgroundSize: '32px 32px',
                    }}
                  />
                </div>
                <div className="relative w-32 h-32 rounded-full border-4 border-[#51CFDF]/40 flex items-center justify-center bg-white/60 backdrop-blur-sm">
                  <svg className="w-16 h-16 text-[#0859B2]/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
