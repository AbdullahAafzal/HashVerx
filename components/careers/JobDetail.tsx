'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const jobDetails: Record<string, any> = {
  'senior-software-engineer': {
    title: 'Senior Software Engineer',
    location: 'Remote',
    employmentType: 'Full-time',
    description: "We're looking for an engineering manager to join our team.",
    requirements: [
      '5+ years of experience in software development',
      'Strong proficiency in modern programming languages',
      'Experience with cloud platforms and microservices',
      'Excellent problem-solving and communication skills',
    ],
    responsibilities: [
      'Design and develop scalable software solutions',
      'Collaborate with cross-functional teams',
      'Mentor junior developers',
      'Participate in code reviews and technical discussions',
    ],
  },
  'customer-success-manager': {
    title: 'Customer Success Manager',
    location: 'Tokyo',
    employmentType: 'Full-time',
    description: "We're looking for a engineering manager to join our team.",
    requirements: [
      '3+ years of experience in customer success or account management',
      'Strong communication and relationship-building skills',
      'Experience with SaaS products',
      'Ability to work in a fast-paced environment',
    ],
    responsibilities: [
      'Build and maintain strong customer relationships',
      'Ensure customer satisfaction and retention',
      'Identify upsell and expansion opportunities',
      'Collaborate with product and engineering teams',
    ],
  },
  'product-designer': {
    title: 'Product Designer',
    location: 'Remote',
    employmentType: 'Full-time',
    description: "We're looking for a mid-level product designer to join our team.",
    requirements: [
      '3+ years of experience in product design',
      'Strong portfolio showcasing UX/UI design skills',
      'Proficiency in design tools (Figma, Sketch, etc.)',
      'Understanding of user research and testing methodologies',
    ],
    responsibilities: [
      'Create user-centered design solutions',
      'Collaborate with product managers and engineers',
      'Conduct user research and usability testing',
      'Develop design systems and guidelines',
    ],
  },
  'backend-developer': {
    title: 'Backend Developer',
    location: 'In House',
    employmentType: 'Part-time',
    description: "We're looking for an experienced backend developer to join our team.",
    requirements: [
      '4+ years of experience in backend development',
      'Strong knowledge of server-side technologies',
      'Experience with databases and APIs',
      'Understanding of security best practices',
    ],
    responsibilities: [
      'Develop and maintain backend services',
      'Design and implement APIs',
      'Optimize database performance',
      'Ensure system reliability and scalability',
    ],
  },
  'engineering-manager': {
    title: 'Engineering Manager',
    location: 'New York',
    employmentType: 'Full-time',
    description: "We're looking for a engineering manager to join our team.",
    requirements: [
      '7+ years of experience in software engineering',
      '3+ years of experience in engineering management',
      'Strong leadership and team-building skills',
      'Experience with agile methodologies',
    ],
    responsibilities: [
      'Lead and manage engineering teams',
      'Drive technical strategy and roadmap',
      'Foster a culture of innovation and excellence',
      'Collaborate with stakeholders across the organization',
    ],
  },
  'content-writer': {
    title: 'Content Writer',
    location: 'Remote',
    employmentType: 'Full-time',
    description: "We're looking for a content writer to join our team.",
    requirements: [
      '2+ years of experience in content writing',
      'Strong writing and editing skills',
      'Understanding of SEO best practices',
      'Ability to write for technical and non-technical audiences',
    ],
    responsibilities: [
      'Create engaging content for various channels',
      'Develop content strategies and editorial calendars',
      'Collaborate with marketing and product teams',
      'Ensure content quality and consistency',
    ],
  },
};

export default function JobDetail({ jobId }: { jobId: string }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const job = jobDetails[jobId] || jobDetails['senior-software-engineer'];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <section className="py-20 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div ref={ref} className="space-y-8">
          {/* Back Button */}
          <Link
            href="/careers"
            className={`inline-flex items-center space-x-2 text-[#51CFDF] hover:text-[#0859B2] transition-colors duration-300 mb-8 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span>Back to Careers</span>
          </Link>

          {/* Job Header */}
          <div
            className={`bg-white/60 backdrop-blur-xl border border-[#51CFDF]/30 rounded-2xl p-8 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{
              boxShadow: '0 8px 32px rgba(81, 207, 223, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.05)'
            }}
          >
            <h1 className="text-3xl md:text-4xl font-bold text-[#0859B2] mb-4">{job.title}</h1>
            <p className="text-base md:text-lg text-gray-300 mb-6">{job.description}</p>
            <div className="flex flex-wrap gap-3">
              <div className="inline-flex items-center space-x-2 bg-white/40 border border-[#51CFDF]/30 rounded-full px-4 py-2">
                <svg className="w-4 h-4 text-[#51CFDF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-[#0859B2] text-sm font-medium">{job.location}</span>
              </div>
              <div className="inline-flex items-center space-x-2 bg-white/40 border border-[#51CFDF]/30 rounded-full px-4 py-2">
                <svg className="w-4 h-4 text-[#51CFDF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-[#0859B2] text-sm font-medium">{job.employmentType}</span>
              </div>
            </div>
          </div>

          {/* Requirements */}
          <div
            className={`bg-white/60 backdrop-blur-xl border border-[#51CFDF]/30 rounded-2xl p-8 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{
              boxShadow: '0 8px 32px rgba(81, 207, 223, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.05)'
            }}
          >
            <h2 className="text-2xl font-bold text-[#0859B2] mb-6">Requirements</h2>
            <ul className="space-y-3">
              {job.requirements.map((req: string, index: number) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-[#51CFDF] rounded-full flex-shrink-0 mt-2.5"></div>
                  <p className="text-base text-gray-300 leading-relaxed">{req}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Responsibilities */}
          <div
            className={`bg-white/60 backdrop-blur-xl border border-[#51CFDF]/30 rounded-2xl p-8 transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{
              boxShadow: '0 8px 32px rgba(81, 207, 223, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.05)'
            }}
          >
            <h2 className="text-2xl font-bold text-[#0859B2] mb-6">Responsibilities</h2>
            <ul className="space-y-3">
              {job.responsibilities.map((resp: string, index: number) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-[#51CFDF] rounded-full flex-shrink-0 mt-2.5"></div>
                  <p className="text-base text-gray-300 leading-relaxed">{resp}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Apply Button */}
          <div
            className={`transition-all duration-700 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#0859B2] to-[#51CFDF] hover:from-[#51CFDF] hover:to-[#6dd9e8] text-white px-8 py-3 rounded-lg font-semibold text-sm md:text-base transition-all shadow-lg shadow-[#51CFDF]/20 hover:shadow-xl hover:shadow-[#51CFDF]/30 hover:scale-105 transform uppercase tracking-wide w-full md:w-auto justify-center"
            >
              <span>APPLY NOW</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}


