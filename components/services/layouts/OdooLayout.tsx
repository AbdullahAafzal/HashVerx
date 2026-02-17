'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { servicesData } from '@/lib/servicesData';
import ServiceHeroSection from '../ServiceHeroSection';
import ServiceOverviewSection from '../ServiceOverviewSection';
import ServiceTypesSection from '../ServiceTypesSection';
import type { OverviewCapability } from '../ServiceOverviewSection';
import type { ServiceTypeItem } from '../ServiceTypesSection';
import odooMainImage from '../../../assets/odoo/main.jpg';
import odooOverviewImage from '../../../assets/odoo/overview.jpg';
import odooImplementationImage from '../../../assets/odoo/Implementation&Customization.jpg';
import odooCustomModulesImage from '../../../assets/odoo/CustomModules.jpg';
import odooIntegrationsImage from '../../../assets/odoo/Integrations&AMC.jpg';

const slug = 'odoo-erp-services';
const service = servicesData[slug];

const odooServices = service.sections.find((s) => s.id === 'odoo-services');
const serviceItems = odooServices?.type === 'list' ? odooServices.items : [];
const overviewCapabilities: OverviewCapability[] = serviceItems.map((item) => ({ title: item }));
const industry = service.sections.find((s) => s.id === 'industry-solutions');
const support = service.sections.find((s) => s.id === 'support-migration');
const book = service.sections.find((s) => s.id === 'book-consultation');

const HERO_IMAGE = odooMainImage;
const OVERVIEW_IMAGE = odooOverviewImage;

const TYPES_ITEMS: ServiceTypeItem[] = [
  { id: 'impl', title: 'Implementation & Customization', image: odooImplementationImage, hoverText: 'We implement Odoo from the ground up and customize it to fit your processes. Our experts ensure a smooth rollout, user training, and adoption so you get value from day one.' },
  { id: 'modules', title: 'Custom Modules', image: odooCustomModulesImage, hoverText: 'Extend Odoo with custom modules built for your industry and workflows. We develop and integrate modules that align with your business rules and reporting needs.' },
  { id: 'integrations', title: 'Integrations & AMC', image: odooIntegrationsImage, hoverText: 'Connect Odoo to your existing systems and keep it running with upgrades and AMC. We handle integrations, data migration, and ongoing support so your ERP stays current and reliable.' },
];

const MODULE_ICONS = [
  <svg key="1" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>,
  <svg key="2" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg>,
  <svg key="3" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>,
  <svg key="4" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>,
];

export default function OdooLayout() {
  const [cardsVisible, setCardsVisible] = useState(false);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const o = new IntersectionObserver(([e]) => e.isIntersecting && setCardsVisible(true), { threshold: 0.1 });
    if (cardsRef.current) o.observe(cardsRef.current);
    return () => o.disconnect();
  }, []);

  return (
    <>
      <ServiceHeroSection
        image={HERO_IMAGE}
        imageAlt="Odoo ERP services"
        label={service.title}
        title={service.subtitle}
        ctaText="Book consultation"
      />
      <ServiceOverviewSection
        intro={service.intro}
        capabilities={overviewCapabilities}
        image={OVERVIEW_IMAGE}
        imageAlt="Odoo ERP"
        capabilitiesHeading="Our Odoo services:"
      />
      <ServiceTypesSection sectionTitle="Our Odoo Services" items={TYPES_ITEMS} />

      {/* What Makes Odoo an Attractive Choice Section */}
      <section className="py-28 md:py-36 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">
            What Makes Odoo an Attractive Choice
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Open Source ERP */}
            <div className="p-8 rounded-2xl bg-white/10 backdrop-blur-xl border-2 border-white/30 shadow-lg hover:shadow-xl hover:border-[#51CFDF]/50 transition-all duration-300">
              <div className="w-12 h-12 text-[#51CFDF] mb-4">
                <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Open Source ERP</h3>
              <p className="text-white leading-relaxed">
                Being an open-source system means you can access the source code and customize the software the way you want to fit your specific workflows.
              </p>
            </div>

            {/* 44K+ Applications */}
            <div className="p-8 rounded-2xl bg-white/10 backdrop-blur-xl border-2 border-white/30 shadow-lg hover:shadow-xl hover:border-[#51CFDF]/50 transition-all duration-300">
              <div className="w-12 h-12 text-[#51CFDF] mb-4">
                <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">44K+ Applications</h3>
              <p className="text-white leading-relaxed">
                Odoo has an app for almost everything. With 44,000+ community apps, it offers the world's largest business app marketplace.
              </p>
            </div>

            {/* Modular in Nature */}
            <div className="p-8 rounded-2xl bg-white/10 backdrop-blur-xl border-2 border-white/30 shadow-lg hover:shadow-xl hover:border-[#51CFDF]/50 transition-all duration-300">
              <div className="w-12 h-12 text-[#51CFDF] mb-4">
                <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zM14 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Modular in Nature</h3>
              <p className="text-white leading-relaxed">
                Its modular design lets you implement parts of the solution or the entire system, paying only for the modules you need now, with the flexibility to scale later.
              </p>
            </div>

            {/* Global Accounting Practice */}
            <div className="p-8 rounded-2xl bg-white/10 backdrop-blur-xl border-2 border-white/30 shadow-lg hover:shadow-xl hover:border-[#51CFDF]/50 transition-all duration-300">
              <div className="w-12 h-12 text-[#51CFDF] mb-4">
                <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Global Accounting Practice</h3>
              <p className="text-white leading-relaxed">
                Supporting over 70 countries, Odoo ensures seamless global accounting by complying with regional tax laws, financial regulations, and reporting standards.
              </p>
            </div>

            {/* Low-Cost Solution */}
            <div className="p-8 rounded-2xl bg-white/10 backdrop-blur-xl border-2 border-white/30 shadow-lg hover:shadow-xl hover:border-[#51CFDF]/50 transition-all duration-300">
              <div className="w-12 h-12 text-[#51CFDF] mb-4">
                <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Low-Cost Solution</h3>
              <p className="text-white leading-relaxed">
                Odoo comes in two versions. The Community version is free for startups or companies on a tight budget. Enterprise Edition offers advanced features with affordable pricing.
              </p>
            </div>

            {/* Python-Based Foundation */}
            <div className="p-8 rounded-2xl bg-white/10 backdrop-blur-xl border-2 border-white/30 shadow-lg hover:shadow-xl hover:border-[#51CFDF]/50 transition-all duration-300">
              <div className="w-12 h-12 text-[#51CFDF] mb-4">
                <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Python-Based Foundation</h3>
              <p className="text-white leading-relaxed">
                Python's popularity means you'll find skilled developers easily compared to ERPs (like SAP, Microsoft Dynamics 365, etc.) that use proprietary languages, making development and maintenance more accessible.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section ref={cardsRef} className="py-28 md:py-36 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">What we offer</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceItems.map((item, i) => (
              <div
                key={i}
                className={`p-8 rounded-2xl bg-white/10 backdrop-blur-xl border-2 border-white/30 shadow-lg hover:shadow-xl hover:border-[#51CFDF]/50 transition-all duration-300 flex flex-col items-center text-center ${cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="w-16 h-16 rounded-xl bg-white/10 text-white flex items-center justify-center mb-6">
                  {MODULE_ICONS[i % MODULE_ICONS.length]}
                </div>
                <h3 className="font-semibold text-white text-lg">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 md:py-36 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10">
            <div className="p-10 md:p-14 rounded-3xl bg-[#0859B2] text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">Industry solutions</h3>
              <p className="text-white/90 leading-relaxed text-lg">{industry?.type === 'paragraph' ? industry.content : ''}</p>
            </div>
            <div className="p-10 md:p-14 rounded-3xl border-2 border-[#51CFDF]/30 bg-white/10 backdrop-blur-xl">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Support & migration</h3>
              <p className="text-gray-600 leading-relaxed text-lg">{support?.type === 'paragraph' ? support.content : ''}</p>
            </div>
          </div>

          <div className="mt-20 text-center p-12 md:p-16 rounded-3xl bg-white/10 backdrop-blur-xl border-2 border-white/30">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Ready to streamline with Odoo?</h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg">{book?.type === 'paragraph' ? book.content : ''}</p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-[#51CFDF] hover:bg-[#6dd9e8] text-white px-10 py-5 rounded-lg font-semibold text-base">
              Schedule free consultation
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
