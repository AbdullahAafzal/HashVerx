'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { servicesData } from '@/lib/servicesData';

const slug = 'odoo-erp-services';
const service = servicesData[slug];

const odooServices = service.sections.find((s) => s.id === 'odoo-services');
const serviceItems = odooServices?.type === 'list' ? odooServices.items : [];
const industry = service.sections.find((s) => s.id === 'industry-solutions');
const support = service.sections.find((s) => s.id === 'support-migration');
const book = service.sections.find((s) => s.id === 'book-consultation');

const MODULE_ICONS = [
  <svg key="1" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>,
  <svg key="2" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg>,
  <svg key="3" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>,
  <svg key="4" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>,
];

export default function OdooLayout() {
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
      {/* Hero: Odoo-style orange/amber */}
      <section ref={heroRef} className="relative min-h-[75vh] flex items-center overflow-hidden bg-gradient-to-br from-[#875A7B] via-[#6b4c6a] to-[#4a3a49]">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 20% 80%, rgba(255,255,255,0.1) 0%, transparent 50%)' }} />
        </div>
        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className={`max-w-2xl transition-all duration-700 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-amber-200/90 text-sm font-semibold uppercase tracking-widest mb-3">Odoo ERP</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{service.title}</h1>
            <p className="text-lg text-white/80 mb-8">{service.subtitle}</p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-[#2c2c2c] px-6 py-3 rounded-lg font-semibold text-sm">
              Book consultation
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

      {/* Odoo services - module cards */}
      <section ref={cardsRef} className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-[#875A7B] mb-12">Our Odoo services</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceItems.map((item, i) => (
              <div
                key={i}
                className={`p-6 rounded-2xl bg-white border-2 border-[#875A7B]/20 shadow-md hover:shadow-xl hover:border-[#875A7B]/50 transition-all duration-300 flex flex-col items-center text-center ${cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="w-14 h-14 rounded-xl bg-[#875A7B]/10 text-[#875A7B] flex items-center justify-center mb-4">
                  {MODULE_ICONS[i % MODULE_ICONS.length]}
                </div>
                <h3 className="font-semibold text-gray-900">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry + Support - two big blocks */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 md:p-10 rounded-2xl bg-gradient-to-br from-[#875A7B] to-[#6b4c6a] text-white">
              <h3 className="text-2xl font-bold mb-4">Industry solutions</h3>
              <p className="text-white/90 leading-relaxed">{industry?.type === 'paragraph' ? industry.content : ''}</p>
            </div>
            <div className="p-8 md:p-10 rounded-2xl border-2 border-[#875A7B]/30 bg-amber-50/50">
              <h3 className="text-2xl font-bold text-[#875A7B] mb-4">Support & migration</h3>
              <p className="text-gray-600 leading-relaxed">{support?.type === 'paragraph' ? support.content : ''}</p>
            </div>
          </div>

          <div className="mt-16 text-center p-8 rounded-2xl bg-gray-50 border border-[#875A7B]/20">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Ready to streamline with Odoo?</h3>
            <p className="text-gray-600 mb-6 max-w-xl mx-auto">{book?.type === 'paragraph' ? book.content : ''}</p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-[#875A7B] hover:bg-[#6b4c6a] text-white px-8 py-4 rounded-lg font-semibold">
              Schedule free consultation
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
