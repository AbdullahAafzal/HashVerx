'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { servicesData } from '@/lib/servicesData';

const slug = 'data-scraping-web-crawling';
const service = servicesData[slug];

const sources = service.sections.find((s) => s.id === 'data-sources');
const sourceItems = sources?.type === 'list' ? sources.items : [];
const deliverables = service.sections.find((s) => s.id === 'deliverables');
const deliverItems = deliverables?.type === 'list' ? deliverables.items : [];
const automation = service.sections.find((s) => s.id === 'automation');
const request = service.sections.find((s) => s.id === 'request-sample');

export default function DataScrapingLayout() {
  const [heroVisible, setHeroVisible] = useState(false);
  const [pipelineVisible, setPipelineVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const pipelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const o1 = new IntersectionObserver(([e]) => e.isIntersecting && setHeroVisible(true), { threshold: 0.2 });
    const o2 = new IntersectionObserver(([e]) => e.isIntersecting && setPipelineVisible(true), { threshold: 0.1 });
    if (heroRef.current) o1.observe(heroRef.current);
    if (pipelineRef.current) o2.observe(pipelineRef.current);
    return () => { o1.disconnect(); o2.disconnect(); };
  }, []);

  return (
    <>
      {/* Hero: terminal / data vibe - dark green-teal */}
      <section ref={heroRef} className="relative min-h-[80vh] flex items-center overflow-hidden bg-[#0d1117]">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 font-mono text-[#0d1117]" style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(34,197,94,0.03) 2px, rgba(34,197,94,0.03) 4px)' }} />
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#22c55e]/10 to-transparent" />
        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className={`max-w-2xl transition-all duration-700 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="font-mono text-[#22c55e] text-sm mb-3">$ data pipeline</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-mono tracking-tight">{service.title}</h1>
            <p className="text-lg text-gray-400 mb-8">{service.subtitle}</p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-[#22c55e] hover:bg-[#4ade80] text-[#0d1117] px-6 py-3 rounded-lg font-semibold text-sm font-mono">
              Request sample
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Pipeline: Sources → Process → Deliverables */}
      <section ref={pipelineRef} className="py-20 bg-[#161b22]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">{service.intro}</p>

          <div className={`grid md:grid-cols-3 gap-8 items-center transition-all duration-700 ${pipelineVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <div className="p-6 rounded-xl border-2 border-[#22c55e]/30 bg-[#0d1117]">
              <p className="font-mono text-[#22c55e] text-xs uppercase tracking-widest mb-4">01 · Sources</p>
              <ul className="space-y-2">
                {sourceItems.map((item, i) => (
                  <li key={i} className="text-gray-300 font-mono text-sm">→ {item}</li>
                ))}
              </ul>
            </div>
            <div className="flex justify-center">
              <div className="w-12 h-12 rounded-full border-2 border-[#22c55e]/50 flex items-center justify-center text-[#22c55e]">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
              </div>
            </div>
            <div className="p-6 rounded-xl border-2 border-[#22c55e]/30 bg-[#0d1117]">
              <p className="font-mono text-[#22c55e] text-xs uppercase tracking-widest mb-4">02 · Deliverables</p>
              <ul className="space-y-2">
                {deliverItems.map((item, i) => (
                  <li key={i} className="text-gray-300 font-mono text-sm">→ {item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className={`mt-16 p-8 rounded-xl border border-[#22c55e]/20 bg-[#0d1117]/80 transition-all duration-700 delay-200 ${pipelineVisible ? 'opacity-100' : 'opacity-0'}`}>
            <h3 className="font-mono text-[#22c55e] text-sm uppercase tracking-widest mb-3">Automation</h3>
            <p className="text-gray-400 leading-relaxed">{automation?.type === 'paragraph' ? automation.content : ''}</p>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-400 mb-6">{request?.type === 'paragraph' ? request.content : ''}</p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-[#22c55e] hover:bg-[#4ade80] text-[#0d1117] px-8 py-4 rounded-lg font-semibold font-mono">
              Request sample dataset
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
