'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { servicesData } from '@/lib/servicesData';

const slug = 'ai-seo-automation';
const service = servicesData[slug];

const automate = service.sections.find((s) => s.id === 'what-we-automate');
const automateItems = automate?.type === 'list' ? automate.items : [];
const capabilities = service.sections.find((s) => s.id === 'ai-seo-capabilities');
const capItems = capabilities?.type === 'list' ? capabilities.items : [];
const benefits = service.sections.find((s) => s.id === 'business-benefits');
const start = service.sections.find((s) => s.id === 'start-automation');

const CAP_ICONS = [
  '🤖', '📝', '🔍', '📊', '📁', '💬',
];

export default function AIAutomationLayout() {
  const [heroVisible, setHeroVisible] = useState(false);
  const [bentoVisible, setBentoVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const bentoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const o1 = new IntersectionObserver(([e]) => e.isIntersecting && setHeroVisible(true), { threshold: 0.2 });
    const o2 = new IntersectionObserver(([e]) => e.isIntersecting && setBentoVisible(true), { threshold: 0.1 });
    if (heroRef.current) o1.observe(heroRef.current);
    if (bentoRef.current) o2.observe(bentoRef.current);
    return () => { o1.disconnect(); o2.disconnect(); };
  }, []);

  return (
    <>
      {/* Hero: purple/teal gradient with abstract nodes */}
      <section ref={heroRef} className="relative min-h-[80vh] flex items-center overflow-hidden bg-gradient-to-br from-[#6366f1] via-[#4f46e5] to-[#0f172a]">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#51CFDF]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
          <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 400 400" fill="none">
            {[40, 120, 200, 280, 360, 80, 160, 240, 320, 60, 180, 300, 100, 220, 340, 140, 260, 380].map((x, i) => (
              <circle key={i} cx={x} cy={(x * 0.7 + i * 20) % 400} r="2" fill="white" />
            ))}
          </svg>
        </div>
        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className={`max-w-2xl transition-all duration-700 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-[#a5b4fc] text-sm font-semibold uppercase tracking-widest mb-3">AI · SEO · Automation</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{service.title}</h1>
            <p className="text-lg text-slate-300 mb-8">{service.subtitle}</p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-[#51CFDF] hover:bg-[#6dd9e8] text-slate-900 px-6 py-3 rounded-lg font-semibold text-sm">
              Start automation
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* What we automate - two pills */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-600 max-w-3xl mx-auto">{service.intro}</p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {automateItems.map((item, i) => (
              <span key={i} className="px-6 py-3 rounded-full bg-indigo-100 text-indigo-800 font-semibold">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Bento grid - AI & SEO capabilities */}
      <section ref={bentoRef} className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-[#4f46e5] mb-12">AI & SEO capabilities</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {capItems.map((item, i) => (
              <div
                key={i}
                className={`p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-lg hover:border-[#51CFDF]/50 transition-all duration-300 ${bentoVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <span className="text-2xl mb-3 block">{CAP_ICONS[i % CAP_ICONS.length]}</span>
                <h3 className="font-semibold text-slate-800">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits strip + CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-10 rounded-3xl bg-gradient-to-r from-[#4f46e5] to-[#6366f1] text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Business benefits</h3>
            <p className="text-indigo-100 text-lg leading-relaxed mb-8">{benefits?.type === 'paragraph' ? benefits.content : ''}</p>
            <p className="text-white/90 mb-6">{start?.type === 'paragraph' ? start.content : ''}</p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-[#4f46e5] hover:bg-slate-100 px-8 py-4 rounded-lg font-semibold">
              Design my strategy
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
