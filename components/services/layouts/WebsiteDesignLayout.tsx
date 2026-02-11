'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { servicesData } from '@/lib/servicesData';

const slug = 'website-design-development';
const service = servicesData[slug];

const websiteTypes = service.sections.find((s) => s.id === 'website-types');
const typeItems = websiteTypes?.type === 'list' ? websiteTypes.items : [];
const techStack = service.sections.find((s) => s.id === 'tech-stack');
const stackItems = techStack?.type === 'list' ? techStack.items : [];
const seo = service.sections.find((s) => s.id === 'seo-ready');
const viewWork = service.sections.find((s) => s.id === 'view-work');

const TYPE_ICONS = [
  <svg key="1" className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>,
  <svg key="2" className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>,
  <svg key="3" className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6z" /></svg>,
  <svg key="4" className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" /></svg>,
];

export default function WebsiteDesignLayout() {
  const [heroVisible, setHeroVisible] = useState(false);
  const [cardsVisible, setCardsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const o1 = new IntersectionObserver(([e]) => e.isIntersecting && setHeroVisible(true), { threshold: 0.2 });
    const o2 = new IntersectionObserver(([e]) => e.isIntersecting && setCardsVisible(true), { threshold: 0.1 });
    if (heroRef.current) o1.observe(heroRef.current);
    if (cardsRef.current) o2.observe(cardsRef.current);
    return () => { o1.disconnect(); o2.disconnect(); };
  }, []);

  return (
    <>
      {/* Hero: browser frame style - clean light */}
      <section ref={heroRef} className="relative min-h-[80vh] flex items-center overflow-hidden bg-gradient-to-b from-slate-50 to-white">
        <div className="absolute top-20 right-0 w-96 h-96 bg-[#51CFDF]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#0859B2]/10 rounded-full blur-3xl" />
        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className={`max-w-2xl transition-all duration-700 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-200/80 text-slate-600 text-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-red-400" />
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span className="w-2 h-2 rounded-full bg-green-400" />
              <span className="ml-1">Web</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">{service.title}</h1>
            <p className="text-lg text-slate-600 mb-8">{service.subtitle}</p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-[#0859B2] hover:bg-[#0d4a8f] text-white px-6 py-3 rounded-lg font-semibold text-sm">
              Get a quote
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
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

      {/* Website types - visual cards */}
      <section ref={cardsRef} className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">Website types we build</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {typeItems.map((item, i) => (
              <div
                key={i}
                className={`p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-lg hover:border-[#51CFDF]/40 transition-all duration-300 ${cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="w-14 h-14 rounded-xl bg-[#0859B2]/10 text-[#0859B2] flex items-center justify-center mb-4">
                  {TYPE_ICONS[i % TYPE_ICONS.length]}
                </div>
                <h3 className="font-semibold text-slate-800">{item}</h3>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {stackItems.map((tech, i) => (
              <span key={i} className="px-4 py-2 rounded-lg bg-[#0859B2] text-white text-sm font-medium">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* SEO + View work */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-10 rounded-2xl border-2 border-[#51CFDF]/30 bg-gradient-to-br from-slate-50 to-[#51CFDF]/5">
            <h3 className="text-2xl font-bold text-[#0859B2] mb-4">SEO ready</h3>
            <p className="text-gray-600 leading-relaxed">{seo?.type === 'paragraph' ? seo.content : ''}</p>
          </div>
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6">{viewWork?.type === 'paragraph' ? viewWork.content : ''}</p>
            <Link href="/success-stories" className="inline-flex items-center gap-2 bg-[#51CFDF] hover:bg-[#6dd9e8] text-slate-900 px-8 py-4 rounded-lg font-semibold">
              View our work
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
