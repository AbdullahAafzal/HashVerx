'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { servicesData } from '@/lib/servicesData';
import ServiceTechStack from '../ServiceTechStack';

const slug = 'custom-software-development';
const service = servicesData[slug];

const whatWeBuild = service.sections.find((s) => s.id === 'what-we-build');
const buildItems = whatWeBuild?.type === 'list' ? whatWeBuild.items : [];
const whyUs = service.sections.find((s) => s.id === 'why-us');
const contact = service.sections.find((s) => s.id === 'contact');

export default function CustomSoftwareLayout() {
  const [heroVisible, setHeroVisible] = useState(false);
  const [sectionVisible, setSectionVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const o1 = new IntersectionObserver(([e]) => e.isIntersecting && setHeroVisible(true), { threshold: 0.2 });
    const o2 = new IntersectionObserver(([e]) => e.isIntersecting && setSectionVisible(true), { threshold: 0.1 });
    if (heroRef.current) o1.observe(heroRef.current);
    if (sectionRef.current) o2.observe(sectionRef.current);
    return () => { o1.disconnect(); o2.disconnect(); };
  }, []);

  return (
    <>
      {/* Hero: dark tech with code-line accent */}
      <section ref={heroRef} className="relative min-h-[80vh] flex items-center overflow-hidden bg-[#0a0e17]">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(81,207,223,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(81,207,223,0.03) 1px, transparent 1px)', backgroundSize: '48px 48px' }} />
        </div>
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#0859B2]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#51CFDF]/10 rounded-full blur-3xl" />
        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className={`max-w-2xl transition-all duration-700 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="font-mono text-[#51CFDF] text-sm tracking-widest mb-3">/ services / custom-software</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              {service.title}
            </h1>
            <p className="text-lg text-gray-400 mb-8 max-w-xl">
              {service.subtitle}
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#51CFDF] hover:bg-[#6dd9e8] text-[#0a0e17] px-6 py-3 rounded-lg font-semibold text-sm transition-all"
            >
              Start a project
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>
          <div className={`mt-16 flex flex-wrap gap-2 transition-all duration-700 delay-200 ${heroVisible ? 'opacity-100' : 'opacity-0'}`}>
            {buildItems.map((item, i) => (
              <span key={i} className="px-4 py-2 rounded-full bg-white/5 border border-[#51CFDF]/30 text-gray-300 text-sm font-medium">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* What we build + intro */}
      <section ref={sectionRef} className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`grid lg:grid-cols-2 gap-12 items-start transition-all duration-700 ${sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <div>
              <h2 className="text-2xl font-bold text-[#0859B2] mb-4">What we build</h2>
              <p className="text-gray-600 leading-relaxed">{service.intro}</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {buildItems.map((item, i) => (
                <div key={i} className="p-4 rounded-xl border-2 border-[#0859B2]/10 bg-[#f8fafc] hover:border-[#51CFDF]/40 transition-colors flex items-center gap-3">
                  <span className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#0859B2] to-[#51CFDF] flex items-center justify-center text-white font-bold text-sm">{i + 1}</span>
                  <span className="font-medium text-gray-800">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech stack block */}
          <div className={`mt-20 rounded-2xl border border-[#51CFDF]/25 bg-gradient-to-b from-white to-[#51CFDF]/5 p-8 md:p-10 shadow-lg transition-all duration-700 delay-100 ${sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <ServiceTechStack />
          </div>

          {/* Why us + Contact */}
          <div className={`mt-20 grid md:grid-cols-2 gap-8 transition-all duration-700 delay-200 ${sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <div className="p-8 rounded-2xl bg-[#0859B2] text-white">
              <h3 className="text-xl font-bold mb-4">Why us</h3>
              <p className="text-blue-100 leading-relaxed">{whyUs?.type === 'paragraph' ? whyUs.content : ''}</p>
            </div>
            <div className="p-8 rounded-2xl border-2 border-[#51CFDF]/30 bg-gray-50">
              <h3 className="text-xl font-bold text-[#0859B2] mb-4">Get started</h3>
              <p className="text-gray-600 leading-relaxed mb-6">{contact?.type === 'paragraph' ? contact.content : ''}</p>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-[#51CFDF] hover:bg-[#6dd9e8] text-white px-6 py-3 rounded-lg font-semibold text-sm">
                Book a consultation
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
