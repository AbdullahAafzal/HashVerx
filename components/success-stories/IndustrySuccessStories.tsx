'use client';

import { useState, useEffect, useRef } from 'react';

const industries = ['Fintech', 'Blockchain', 'Healthcare', 'Cross-Industry'];

const successStories: Record<string, Array<{ title: string; description: string }>> = {
  Fintech: [
    {
      title: 'Digital Banking Platform',
      description: 'Secure, scalable banking solution with real-time transaction processing and fraud detection.',
    },
    {
      title: 'Payment Gateway Integration',
      description: 'Seamless payment processing system supporting multiple payment methods and currencies.',
    },
    {
      title: 'Cryptocurrency Exchange',
      description: 'High-performance trading platform with advanced security and compliance features.',
    },
    {
      title: 'Lending Management System',
      description: 'Automated loan processing and risk assessment platform for financial institutions.',
    },
    {
      title: 'Wealth Management App',
      description: 'Personalized investment portfolio management with AI-powered recommendations.',
    },
    {
      title: 'Insurance Claims Platform',
      description: 'Streamlined claims processing system reducing processing time by 60%.',
    },
  ],
  Blockchain: [
    {
      title: 'Smart Contract Platform',
      description: 'Decentralized application with automated contract execution and verification.',
    },
    {
      title: 'NFT Marketplace',
      description: 'Secure marketplace for digital assets with integrated wallet and trading features.',
    },
    {
      title: 'DeFi Lending Protocol',
      description: 'Decentralized finance platform enabling peer-to-peer lending and borrowing.',
    },
    {
      title: 'Supply Chain Tracking',
      description: 'Blockchain-based system for transparent and traceable supply chain management.',
    },
    {
      title: 'Tokenization Platform',
      description: 'Platform for creating and managing digital tokens with compliance features.',
    },
    {
      title: 'Blockchain Analytics',
      description: 'Advanced analytics dashboard for blockchain transaction monitoring and insights.',
    },
  ],
  Healthcare: [
    {
      title: 'ExtendMed',
      description: 'Virtual healthcare engagement platform for life sciences companies.',
    },
    {
      title: 'SeeWithin Health',
      description: 'AI-powered radiology follow-up system improving patient communication.',
    },
    {
      title: 'WayWiser',
      description: 'Family caregiving and financial safety tools with fraud prevention features.',
    },
    {
      title: 'Navitus Health Solutions',
      description: 'Transparent pharmacy benefits platform lowering drug costs.',
    },
    {
      title: 'BioMark',
      description: 'Preventive healthcare insights powered by lab data and predictive analytics.',
    },
    {
      title: 'Pip Care',
      description: 'Surgical optimization platform reducing cancellations and hospital stays.',
    },
    {
      title: 'CareCentrix',
      description: 'In-home care coordination system reducing readmissions and improving outcomes.',
    },
  ],
  'Cross-Industry': [
    {
      title: 'Enterprise CRM Platform',
      description: 'Comprehensive customer relationship management system for multiple industries.',
    },
    {
      title: 'AI Analytics Dashboard',
      description: 'Business intelligence platform with machine learning-powered insights.',
    },
    {
      title: 'Cloud Migration Solution',
      description: 'Seamless cloud infrastructure migration for enterprise applications.',
    },
    {
      title: 'Mobile Workforce App',
      description: 'Field service management application with real-time tracking and scheduling.',
    },
    {
      title: 'E-commerce Platform',
      description: 'Scalable online marketplace supporting millions of transactions daily.',
    },
    {
      title: 'IoT Monitoring System',
      description: 'Real-time device monitoring and analytics for connected devices.',
    },
  ],
};

export default function IndustrySuccessStories() {
  const [selectedIndustry, setSelectedIndustry] = useState('Healthcare');
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    setVisibleCards(new Set());
    const observers: IntersectionObserver[] = [];

    cardRefs.current.forEach((card, index) => {
      if (!card) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleCards((prev) => new Set([...prev, index]));
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: '0px 0px -50px 0px',
        }
      );

      observer.observe(card);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [selectedIndustry]);

  const currentStories = successStories[selectedIndustry] || [];

  return (
    <section className="py-20 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Industry{' '}
          <span className="bg-gradient-to-r from-[#51CFDF] via-[#6dd9e8] to-[#51CFDF] bg-clip-text text-transparent">
            Success Stories
          </span>
        </h2>

        {/* Industry Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {industries.map((industry) => (
            <button
              key={industry}
              onClick={() => setSelectedIndustry(industry)}
              className={`px-6 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 ${
                selectedIndustry === industry
                  ? 'bg-[#51CFDF]/20 border border-[#51CFDF] text-[#51CFDF]'
                  : 'bg-transparent border border-[#51CFDF]/30 text-gray-400 hover:border-[#51CFDF]/50 hover:text-gray-300'
              }`}
            >
              {industry}
            </button>
          ))}
        </div>

        {/* Success Story Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentStories.map((story, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className={`bg-white/60 backdrop-blur-xl border border-[#51CFDF]/30 rounded-xl p-6 transition-all duration-700 hover:border-[#51CFDF]/70 hover:-translate-y-1 ${
                visibleCards.has(index)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{
                transitionDelay: `${index * 0.1}s`,
                boxShadow: '0 4px 16px rgba(81, 207, 223, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.05)'
              }}
            >
              <h3 className="text-lg font-bold text-[#0859B2] mb-3">{story.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{story.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


