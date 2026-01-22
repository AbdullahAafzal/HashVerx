'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const jobDetails: Record<string, any> = {
  'senior-software-engineer': {
    title: 'Senior Software Engineer',
    location: 'Remote',
    employmentType: 'Full-time',
    description: "We're looking for an experienced Senior Software Engineer to join our innovative team. You'll work on cutting-edge projects, collaborate with talented developers, and help shape the future of our technology stack.",
    requirements: [
      '5+ years of experience in software development',
      'Strong proficiency in modern programming languages (JavaScript, TypeScript, Python, etc.)',
      'Experience with cloud platforms and microservices architecture',
      'Excellent problem-solving and communication skills',
      'Experience with CI/CD pipelines and DevOps practices',
      'Strong understanding of software design patterns',
    ],
    responsibilities: [
      'Design and develop scalable software solutions',
      'Collaborate with cross-functional teams to deliver high-quality products',
      'Mentor junior developers and contribute to code reviews',
      'Participate in technical discussions and architecture decisions',
      'Optimize application performance and ensure code quality',
      'Stay up-to-date with emerging technologies and best practices',
    ],
    benefits: [
      'Competitive salary and equity package',
      'Flexible working hours and remote work options',
      'Comprehensive health and dental insurance',
      'Professional development budget',
      'Unlimited paid time off',
      'Modern equipment and tools',
    ],
  },
  'customer-success-manager': {
    title: 'Customer Success Manager',
    location: 'Tokyo',
    employmentType: 'Full-time',
    description: "Join our Customer Success team and help our clients achieve their goals. You'll be the bridge between our products and customer satisfaction, ensuring long-term relationships and growth.",
    requirements: [
      '3+ years of experience in customer success or account management',
      'Strong communication and relationship-building skills',
      'Experience with SaaS products and B2B client management',
      'Ability to work in a fast-paced environment',
      'Data-driven approach to customer success',
      'Fluent in English and Japanese',
    ],
    responsibilities: [
      'Build and maintain strong customer relationships',
      'Ensure customer satisfaction and retention',
      'Identify upsell and expansion opportunities',
      'Collaborate with product and engineering teams on customer feedback',
      'Conduct regular business reviews with key accounts',
      'Develop and execute customer success strategies',
    ],
    benefits: [
      'Competitive salary and performance bonuses',
      'Flexible working arrangements',
      'Health insurance and wellness programs',
      'Professional development opportunities',
      'Travel opportunities for client meetings',
      'Collaborative and supportive team environment',
    ],
  },
  'product-designer': {
    title: 'Product Designer',
    location: 'Remote',
    employmentType: 'Full-time',
    description: "We're seeking a talented Product Designer to create beautiful, intuitive user experiences. You'll work closely with product managers and engineers to bring innovative designs to life.",
    requirements: [
      '3+ years of experience in product design',
      'Strong portfolio showcasing UX/UI design skills',
      'Proficiency in design tools (Figma, Sketch, Adobe Creative Suite)',
      'Understanding of user research and testing methodologies',
      'Experience with design systems and component libraries',
      'Strong visual design and typography skills',
    ],
    responsibilities: [
      'Create user-centered design solutions',
      'Collaborate with product managers and engineers',
      'Conduct user research and usability testing',
      'Develop design systems and guidelines',
      'Create wireframes, prototypes, and high-fidelity designs',
      'Present design concepts and iterate based on feedback',
    ],
    benefits: [
      'Competitive salary and equity',
      'Remote-first culture',
      'Health and dental insurance',
      'Design tools and software provided',
      'Conference and workshop attendance budget',
      'Creative freedom and ownership',
    ],
  },
  'backend-developer': {
    title: 'Backend Developer',
    location: 'In House',
    employmentType: 'Part-time',
    description: "We're looking for an experienced Backend Developer to join our team. You'll work on building robust, scalable backend systems that power our applications.",
    requirements: [
      '4+ years of experience in backend development',
      'Strong knowledge of server-side technologies (Node.js, Python, Java, etc.)',
      'Experience with databases (PostgreSQL, MongoDB, Redis)',
      'Understanding of security best practices',
      'Experience with RESTful and GraphQL APIs',
      'Knowledge of containerization and orchestration (Docker, Kubernetes)',
    ],
    responsibilities: [
      'Develop and maintain backend services',
      'Design and implement APIs',
      'Optimize database performance',
      'Ensure system reliability and scalability',
      'Write clean, maintainable, and well-documented code',
      'Collaborate with frontend developers and DevOps teams',
    ],
    benefits: [
      'Flexible part-time schedule',
      'Competitive hourly rate',
      'Professional development support',
      'Modern development environment',
      'Collaborative team culture',
      'Opportunity to work on interesting projects',
    ],
  },
  'engineering-manager': {
    title: 'Engineering Manager',
    location: 'New York',
    employmentType: 'Full-time',
    description: "Lead our engineering team and drive technical excellence. You'll manage talented engineers, shape technical strategy, and help build products that make a difference.",
    requirements: [
      '7+ years of experience in software engineering',
      '3+ years of experience in engineering management',
      'Strong leadership and team-building skills',
      'Experience with agile methodologies',
      'Excellent communication and stakeholder management',
      'Technical background with ability to make architectural decisions',
    ],
    responsibilities: [
      'Lead and manage engineering teams',
      'Drive technical strategy and roadmap',
      'Foster a culture of innovation and excellence',
      'Collaborate with stakeholders across the organization',
      'Recruit, mentor, and develop engineering talent',
      'Ensure timely delivery of high-quality products',
    ],
    benefits: [
      'Competitive salary and equity package',
      'Leadership development programs',
      'Comprehensive benefits package',
      'Flexible work arrangements',
      'Conference and training budget',
      'Impact on company direction and culture',
    ],
  },
  'content-writer': {
    title: 'Content Writer',
    location: 'Remote',
    employmentType: 'Full-time',
    description: "Join our marketing team as a Content Writer and help tell our story. You'll create engaging content that connects with our audience and drives brand awareness.",
    requirements: [
      '2+ years of experience in content writing',
      'Strong writing and editing skills',
      'Understanding of SEO best practices',
      'Ability to write for technical and non-technical audiences',
      'Experience with content management systems',
      'Portfolio showcasing diverse writing samples',
    ],
    responsibilities: [
      'Create engaging content for various channels',
      'Develop content strategies and editorial calendars',
      'Collaborate with marketing and product teams',
      'Ensure content quality and consistency',
      'Optimize content for SEO and engagement',
      'Research industry trends and topics',
    ],
    benefits: [
      'Competitive salary',
      'Remote work flexibility',
      'Health insurance',
      'Content creation tools and resources',
      'Creative writing workshops',
      'Opportunity to work on diverse projects',
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
    <section className="py-12 md:py-20 bg-gradient-to-b from-white via-blue-50/30 to-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#51CFDF] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0859B2] rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl relative z-10">
        <div ref={ref} className="space-y-6 md:space-y-8">
          {/* Back Button */}
          <Link
            href="/careers"
            className={`group inline-flex items-center space-x-2 text-[#51CFDF] hover:text-[#0859B2] transition-all duration-300 mb-4 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
            }`}
          >
            <svg 
              className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="font-medium">Back to Careers</span>
          </Link>

          {/* Job Header Card */}
          <div
            className={`group relative bg-white rounded-2xl p-8 md:p-10 transition-all duration-700 hover:shadow-2xl ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{
              boxShadow: '0 10px 40px rgba(5, 89, 178, 0.1)',
            }}
          >
            {/* Gradient Border Effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#51CFDF]/0 via-[#51CFDF]/20 to-[#51CFDF]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"></div>
            
            {/* Job Title */}
            <div className="mb-6">
              <h1 className="text-4xl md:text-5xl font-extrabold text-[#0859B2] mb-4 leading-tight">
                {job.title}
              </h1>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                {job.description}
              </p>
            </div>

            {/* Job Meta Info */}
            <div className="flex flex-wrap gap-3">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-50 to-cyan-50 border border-[#51CFDF]/30 rounded-xl px-5 py-2.5 shadow-sm">
                <svg className="w-5 h-5 text-[#51CFDF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-[#0859B2] text-sm font-semibold">{job.location}</span>
              </div>
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-50 to-blue-50 border border-[#51CFDF]/30 rounded-xl px-5 py-2.5 shadow-sm">
                <svg className="w-5 h-5 text-[#51CFDF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-[#0859B2] text-sm font-semibold">{job.employmentType}</span>
              </div>
            </div>
          </div>

          {/* Two Column Layout for Requirements and Responsibilities */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {/* Requirements Card */}
            <div
              className={`group relative bg-white rounded-2xl p-8 transition-all duration-700 delay-200 hover:shadow-2xl ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{
                boxShadow: '0 10px 40px rgba(5, 89, 178, 0.08)',
              }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-[#0859B2] to-[#51CFDF] rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#0859B2]">Requirements</h2>
              </div>
              <ul className="space-y-4">
                {job.requirements.map((req: string, index: number) => (
                  <li key={index} className="flex items-start space-x-3 group/item">
                    <div className="w-6 h-6 bg-gradient-to-r from-[#51CFDF]/20 to-[#0859B2]/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:from-[#51CFDF] group-hover/item:to-[#0859B2] transition-all duration-300">
                      <svg className="w-3 h-3 text-[#51CFDF] group-hover/item:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-base text-gray-600 leading-relaxed flex-1">{req}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Responsibilities Card */}
            <div
              className={`group relative bg-white rounded-2xl p-8 transition-all duration-700 delay-300 hover:shadow-2xl ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{
                boxShadow: '0 10px 40px rgba(5, 89, 178, 0.08)',
              }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-[#51CFDF] to-[#0859B2] rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#0859B2]">Responsibilities</h2>
              </div>
              <ul className="space-y-4">
                {job.responsibilities.map((resp: string, index: number) => (
                  <li key={index} className="flex items-start space-x-3 group/item">
                    <div className="w-6 h-6 bg-gradient-to-r from-[#51CFDF]/20 to-[#0859B2]/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:from-[#51CFDF] group-hover/item:to-[#0859B2] transition-all duration-300">
                      <svg className="w-3 h-3 text-[#51CFDF] group-hover/item:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-base text-gray-600 leading-relaxed flex-1">{resp}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Benefits Section */}
          {job.benefits && (
            <div
              className={`group relative bg-gradient-to-br from-white to-blue-50/50 rounded-2xl p-8 md:p-10 transition-all duration-700 delay-400 hover:shadow-2xl ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{
                boxShadow: '0 10px 40px rgba(5, 89, 178, 0.1)',
              }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-[#51CFDF] to-[#0859B2] rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#0859B2]">What We Offer</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {job.benefits.map((benefit: string, index: number) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-white/60 rounded-xl hover:bg-white transition-colors duration-300">
                    <svg className="w-5 h-5 text-[#51CFDF] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Apply Button Section */}
          <div
            className={`transition-all duration-700 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="bg-gradient-to-r from-[#0859B2] to-[#51CFDF] rounded-2xl p-8 md:p-10 text-center shadow-2xl shadow-[#51CFDF]/30">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Join Us?</h3>
              <p className="text-blue-100 mb-8 text-lg">Take the next step in your career journey</p>
              <Link
                href="/contact"
                className="group inline-flex items-center space-x-3 bg-white hover:bg-blue-50 text-[#0859B2] px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform"
              >
                <span>Apply Now</span>
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


