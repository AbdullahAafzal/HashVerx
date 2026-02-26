'use client';

import { useEffect, useRef, useState } from 'react';
import { servicesData } from '@/lib/servicesData';
import ServiceHeroSection from '../ServiceHeroSection';
import ServiceOverviewSection from '../ServiceOverviewSection';
import ServiceTypesSection from '../ServiceTypesSection';
import type { OverviewCapability } from '../ServiceOverviewSection';
import type { ServiceTypeItem } from '../ServiceTypesSection';
import websiteMainImage from '../../../assets/WebsiteDesign/main.jpg';
import websiteOverviewImage from '../../../assets/WebsiteDesign/overview.jpg';
import websiteCorporateImage from '../../../assets/WebsiteDesign/CorporateWebsites.jpg';
import websiteSaaSImage from '../../../assets/WebsiteDesign/ProductSaaSWebsites.jpg';
import websiteCMSImage from '../../../assets/WebsiteDesign/CMS&LandingPages.jpg';

const slug = 'website-design-development';
const service = servicesData[slug];

const webDevFeatures = service.sections.find((s) => s.id === 'web-dev-features');
const featureItems = webDevFeatures?.type === 'list' ? webDevFeatures.items : [];
const overviewCapabilities: OverviewCapability[] = featureItems.map((item) => {
  const [title, description] = item.includes('|') ? item.split('|').map((s) => s.trim()) : [item, ''];
  return { title, description };
});
const featuresHeading = webDevFeatures?.type === 'list' ? webDevFeatures.title : 'Your web development solutions will feature:';

const HERO_IMAGE = websiteMainImage;
const OVERVIEW_IMAGE = websiteOverviewImage;

const TYPES_ITEMS: ServiceTypeItem[] = [
  { id: 'corporate', title: 'Corporate Websites', image: websiteCorporateImage, hoverText: 'Professional corporate sites that represent your brand and convert visitors. We combine clear messaging, modern design, and performance so your company makes a strong first impression.' },
  { id: 'saas', title: 'Product / SaaS Websites', image: websiteSaaSImage, hoverText: 'Landing and product pages built for conversion. We create fast, SEO-friendly pages that showcase your product and drive sign-ups and demos with clear CTAs and trust elements.' },
  { id: 'cms', title: 'CMS & Landing Pages', image: websiteCMSImage, hoverText: 'Websites on WordPress or headless CMS that your team can update. We also build standalone landing pages for campaigns, events, and product launches with forms and analytics built in.' },
];

const WEB_DEV_SERVICES = [
  {
    title: 'Web Application Development',
    description: 'Want to make online banking easier for your customers or launch a new social app to connect your community? Our full-cycle web development services fit exactly what you need. Our web development team takes care of every design detail, ensuring your web applications are secure, scalable, and work perfectly across all devices. Plus, we offer integration and ongoing maintenance to keep everything running smoothly and efficiently.',
    icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
  },
  {
    title: 'Website Development',
    description: 'In today\'s competitive landscape, having a high-performing, user-friendly website is a must. Think of your website as your digital business card—it showcases your business and reflects your values. We offer customer-centric, intuitive website development services with no limits on functionality. Using a market-oriented approach, we build websites that resonate with your clients and stakeholders.',
    icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>,
  },
  {
    title: 'Web Portal Development',
    description: 'With nearly two decades of engineering expertise across various sectors, we know how crucial good communication and smooth operations are. We create reliable and robust web development solutions to help companies manage their workflows effortlessly. We\'ll help you plan and set up a secure, user-friendly digital space for your customers, partners, and employees.',
    icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0v6a2 2 0 01-2-2M5 11V5a2 2 0 012-2h6a2 2 0 012 2v6M5 11v6a2 2 0 01-2 2m0 0V5m0 6a2 2 0 012 2m0 0h14" /></svg>,
  },
  {
    title: 'CMS Development',
    description: 'A Content Management System is essential if you want to update website content without needing third-party help. Your content teams can add anything you planned to the website without hassle. CMS connects you with customers, allows for easy chat and email communication, and is a huge relief for those frustrated by constantly battling to add new content.',
    icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h7" /></svg>,
  },
  {
    title: 'Client-side Development',
    description: 'Our client-side development services focus on creating an exceptional user interface (UI) and user experience (UX). We use technologies such as HTML, CSS, and JavaScript, along with powerful frameworks like React, Angular, and Vue.js, to bring your vision to life.',
    icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>,
  },
  {
    title: 'Custom Ecommerce Development',
    description: 'We dive deep into understanding your target audience and planning the perfect customer experience to maximize your ROI. We stay up-to-date with the latest ecommerce development trends to build custom ecommerce solutions that are both distinctive and effective. Our professional ecommerce developers are dedicated to helping you grow and expand your brand.',
    icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
  },
];

const CUTTING_EDGE_TECH = [
  {
    title: 'Augmented Reality',
    description: 'Let your users try on your clothing products using their smartphones, see what makeup looks like on their faces, and see furniture in their homes. These are just examples of the applications of augmented reality (AR).',
    icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>,
  },
  {
    title: 'Cloud Computing',
    description: 'Transfer your solution to scalable cloud storage on Amazon, Google, or Microsoft. Benefit from features like top-level security, automated updates and backups, and streamlined resource allocation.',
    icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg>,
  },
  {
    title: 'Virtual Reality',
    description: 'Let your users take virtual tours of a real estate property, resort, or entertainment facility with VR. Create virtual product showcases and interactive environments.',
    icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" /></svg>,
  },
  {
    title: 'Internet of Things',
    description: 'Make your web solution work and communicate with different smart devices. We\'ll integrate your platform with wearable health monitors, home and corporate devices, smart speakers, and more.',
    icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
  },
];

export default function WebsiteDesignLayout() {
  const [cardsVisible, setCardsVisible] = useState(false);
  const [selectedTech, setSelectedTech] = useState(0);
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
        imageAlt="Website design and development"
        label={service.title}
        title={service.subtitle}
        ctaText="Get a quote"
      />
      <ServiceOverviewSection
        intro={service.intro}
        capabilities={overviewCapabilities}
        image={OVERVIEW_IMAGE}
        imageAlt="Website design"
        capabilitiesHeading={featuresHeading}
        useCheckmarks
        imageTall
      />
      <ServiceTypesSection sectionTitle="Website Types We Build" items={TYPES_ITEMS} />

      <section ref={cardsRef} className="pt-8 pb-24 md:pt-10 md:pb-28 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#51CFDF] text-sm font-semibold uppercase tracking-wider mb-2">Web Development</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Services We Offer</h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              We employ engineers with 7+ years of experience alongside talented mid-level developers to blend expertise with fresh ideas, ensuring your software meets the latest standards.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {WEB_DEV_SERVICES.map((item, i) => (
              <div
                key={i}
                className={`p-6 md:p-8 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl shadow-lg hover:shadow-xl hover:border-[#51CFDF]/40 hover:bg-white/15 transition-all duration-300 ${cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="w-14 h-14 rounded-xl bg-white/10 text-white flex items-center justify-center mb-5">
                  {item.icon}
                </div>
                <h3 className="font-bold text-white text-lg mb-3">{item.title}</h3>
                <p className="text-white/90 text-sm md:text-base leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Use the Most Cutting-Edge Web Tech */}
      <section className="py-16 md:py-24 bg-transparent">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-white uppercase tracking-wide mb-6">
            Use the Most Cutting-Edge Web Tech
          </h2>
          <p className="text-center text-lg text-white/80 max-w-2xl mx-auto mb-12">
            When you work with us, your HashVerx team will draw on expertise at the cutting edge of development innovation. We specialize in digital transformation. That means we can enhance your web solution with the latest tech in a meaningful and measurable way.
          </p>

          <div className="flex flex-wrap justify-center gap-8 md:gap-12 mb-12">
            {CUTTING_EDGE_TECH.map((item, i) => (
              <button
                key={i}
                onClick={() => setSelectedTech(i)}
                className="flex flex-col items-center gap-2 group"
              >
                <span className={`text-[#51CFDF] transition-colors ${selectedTech === i ? 'text-[#51CFDF]' : 'text-[#51CFDF]/70 group-hover:text-[#51CFDF]'}`}>
                  {item.icon}
                </span>
                <span className={`text-sm font-medium uppercase tracking-wider ${selectedTech === i ? 'text-white' : 'text-white/70'}`}>
                  {item.title}
                </span>
                {selectedTech === i && (
                  <span className="w-full h-0.5 bg-[#51CFDF] rounded-full" />
                )}
              </button>
            ))}
          </div>

          <div className="pt-8 border-t border-white/20 flex flex-col md:flex-row md:gap-12 gap-6">
            <h3 className="text-lg font-bold text-white uppercase tracking-wider shrink-0">
              {CUTTING_EDGE_TECH[selectedTech].title}
            </h3>
            <p className="text-base text-white/90 leading-relaxed flex-1">
              {CUTTING_EDGE_TECH[selectedTech].description}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
