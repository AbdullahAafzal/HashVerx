'use client';

import { useState } from 'react';

const faqs = [
  {
    question: 'Can you upgrade our legacy web app?',
    answer: 'Yes, we specialize in modernizing legacy applications. We can upgrade your existing system to use modern technologies, improve performance, enhance security, and add new features while maintaining your current functionality.',
  },
  {
    question: 'How do you ensure security and compliance?',
    answer: 'We follow industry best practices for security, including regular security audits, code reviews, penetration testing, and compliance with standards like GDPR, HIPAA, and SOC 2. We implement security measures at every layer of your application.',
  },
  {
    question: 'What is your development timeline?',
    answer: 'Timelines vary based on project scope and complexity. We typically deliver MVPs in 4-8 weeks, while full-scale applications may take 3-6 months. We provide detailed timelines during the planning phase and keep you updated throughout development.',
  },
  {
    question: 'Do you provide ongoing support after launch?',
    answer: 'Yes, we offer comprehensive maintenance and support packages. This includes bug fixes, security updates, performance optimization, feature enhancements, and technical support to ensure your application continues to perform optimally.',
  },
  {
    question: 'What technologies do you work with?',
    answer: 'We work with a wide range of modern technologies including React, Next.js, Node.js, Python, Django, AWS, Docker, Kubernetes, and more. We choose the best technology stack based on your specific project requirements.',
  },
];

export default function ServiceFAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-[#51CFDF] via-[#6dd9e8] to-[#51CFDF] bg-clip-text text-transparent">
            FAQs
          </span>
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white/60 backdrop-blur-xl border border-[#51CFDF]/30 rounded-xl overflow-hidden transition-all duration-300 hover:border-[#51CFDF]/70"
              style={{
                boxShadow: '0 4px 16px rgba(81, 207, 223, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.05)'
              }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left"
              >
                <span className="text-lg font-semibold text-white pr-4">{faq.question}</span>
                <div className="flex-shrink-0">
                  <svg
                    className={`w-6 h-6 text-[#51CFDF] transition-transform duration-300 ${
                      openIndex === index ? 'rotate-45' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </div>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-base text-gray-300 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


