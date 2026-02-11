'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { servicesData } from '@/lib/servicesData';

const slug = 'ui-ux-graphic-video-design';
const service = servicesData[slug];

const designServices = service.sections.find((s) => s.id === 'design-services');
const designItems = designServices?.type === 'list' ? designServices.items : [];
const videoServices = service.sections.find((s) => s.id === 'video-services');
const videoItems = videoServices?.type === 'list' ? videoServices.items : [];
const portfolio = service.sections.find((s) => s.id === 'portfolio');
const contact = service.sections.find((s) => s.id === 'contact');

export default function UIUXDesignLayout() {
  const [heroVisible, setHeroVisible] = useState(false);
  const [colsVisible, setColsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const colsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const o1 = new IntersectionObserver(([e]) => e.isIntersecting && setHeroVisible(true), { threshold: 0.2 });
    const o2 = new IntersectionObserver(([e]) => e.isIntersecting && setColsVisible(true), { threshold: 0.1 });
    if (heroRef.current) o1.observe(heroRef.current);
    if (colsRef.current) o2.observe(colsRef.current);
    return () => { o1.disconnect(); o2.disconnect(); };
  }, []);

  return (
    <>
      {/* Hero: bold typography - coral/warm accent */}
      <section ref={heroRef} className="relative min-h-[85vh] flex items-center overflow-hidden bg-[#1a1a1a]">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-1/2 bg-gradient-to-b from-[#f97316]/20 to-transparent" />
          <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-[#ea580c]/10 to-transparent" />
        </div>
        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className={`transition-all duration-700 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-[#f97316] text-sm font-semibold uppercase tracking-[0.2em] mb-4">Design & Video</p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight mb-6">
              {service.title}
            </h1>
            <p className="text-xl text-gray-400 max-w-xl mb-10">{service.subtitle}</p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-[#f97316] hover:bg-[#ea580c] text-white px-8 py-4 rounded-lg font-semibold text-sm uppercase tracking-wider">
              Start a project
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg text-gray-600 leading-relaxed">{service.intro}</p>
        </div>
      </section>

      {/* Two columns: Design services | Video services */}
      <section ref={colsRef} className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`grid md:grid-cols-2 gap-8 transition-all duration-700 ${colsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <div className="p-10 rounded-3xl bg-white border-2 border-[#f97316]/20 shadow-lg">
              <div className="w-14 h-14 rounded-2xl bg-[#f97316]/10 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#f97316]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4m0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>
              </div>
              <h2 className="text-2xl font-bold text-[#1a1a1a] mb-6">Design services</h2>
              <ul className="space-y-4">
                {designItems.map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#f97316]" />
                    <span className="font-medium text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-10 rounded-3xl bg-[#1a1a1a] text-white">
              <div className="w-14 h-14 rounded-2xl bg-[#f97316]/20 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#f97316]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
              </div>
              <h2 className="text-2xl font-bold mb-6">Video services</h2>
              <ul className="space-y-4">
                {videoItems.map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#f97316]" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className={`mt-16 text-center p-10 rounded-3xl bg-white border border-gray-200 transition-all duration-700 delay-200 ${colsVisible ? 'opacity-100' : 'opacity-0'}`}>
            <h3 className="text-xl font-bold text-gray-900 mb-3">See our work</h3>
            <p className="text-gray-600 mb-6 max-w-xl mx-auto">{portfolio?.type === 'paragraph' ? portfolio.content : ''}</p>
            <p className="text-gray-600 mb-6">{contact?.type === 'paragraph' ? contact.content : ''}</p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-[#f97316] hover:bg-[#ea580c] text-white px-8 py-4 rounded-lg font-semibold">
              Get in touch
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
