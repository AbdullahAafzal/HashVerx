'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import type { ServiceSection as ServiceSectionType } from '@/lib/servicesData';
import ServiceTechStack from './ServiceTechStack';

interface ServiceSectionsProps {
  sections: ServiceSectionType[];
}

export default function ServiceSections({ sections }: ServiceSectionsProps) {
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const [visibleSections, setVisibleSections] = useState<Set<number>>(new Set());

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    sections.forEach((section, index) => {
      const el = sectionRefs.current[section.id];
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, index]));
          }
        },
        { threshold: 0.1, rootMargin: '0px 0px -80px 0px' }
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, [sections]);

  return (
    <section className="py-20 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="space-y-20">
          {sections.map((section, index) => (
            <div
              key={section.id}
              id={section.id}
              ref={(el) => {
                sectionRefs.current[section.id] = el;
              }}
              className={`scroll-mt-28 transition-all duration-700 ${
                visibleSections.has(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${index * 0.05}s` }}
            >
              {section.id === 'tech-stack' ? (
                <div className="rounded-2xl border border-[#51CFDF]/30 bg-gradient-to-b from-white to-[#51CFDF]/5 p-8 md:p-10">
                  <ServiceTechStack />
                </div>
              ) : (
                <>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#0859B2] mb-6">
                    {section.title}
                  </h2>

                  {section.type === 'overview' && (
                    <div className="rounded-2xl border border-[#51CFDF]/30 bg-white p-6 md:p-8 shadow-lg shadow-[#51CFDF]/10">
                      <div className="flex gap-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0859B2] to-[#51CFDF] flex items-center justify-center flex-shrink-0">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                          {section.content}
                        </p>
                      </div>
                    </div>
                  )}

                  {section.type === 'paragraph' && (
                    <div className="rounded-2xl border border-[#51CFDF]/30 bg-white p-6 md:p-8 shadow-lg shadow-[#51CFDF]/10">
                      <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                        {section.content}
                      </p>
                    </div>
                  )}

                  {section.type === 'list' && (
                    <div className="rounded-2xl border border-[#51CFDF]/30 bg-white p-6 md:p-8 shadow-lg shadow-[#51CFDF]/10">
                      <ul className="grid sm:grid-cols-2 gap-4 list-none">
                        {section.items.map((item, i) => (
                          <li
                            key={i}
                            className="flex items-center gap-3 p-3 rounded-xl bg-[#51CFDF]/5 border border-[#51CFDF]/20 hover:border-[#51CFDF]/40 transition-colors"
                          >
                            <span className="w-2 h-2 rounded-full bg-[#51CFDF] flex-shrink-0" />
                            <span className="text-gray-700 font-medium">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#51CFDF] hover:bg-[#6dd9e8] text-white px-8 py-4 rounded-lg font-semibold text-sm transition-all shadow-lg hover:shadow-xl hover:scale-105 transform uppercase tracking-wide"
          >
            <span>Contact</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
