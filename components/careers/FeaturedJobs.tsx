"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

interface Job {
  id: string;
  title: string;
  description: string;
  location: string;
  employmentType: "Full-time" | "Part-time";
  department?: string;
}

const jobs: Job[] = [
  {
    id: "senior-software-engineer",
    title: "Senior Software Engineer",
    description: "Lead innovative projects and work with cutting-edge technologies. Join a team that values creativity and technical excellence.",
    location: "Remote",
    employmentType: "Full-time",
    department: "Engineering"
  },
  {
    id: "customer-success-manager",
    title: "Customer Success Manager",
    description: "Build strong relationships with clients and help them achieve their goals. Be the bridge between our solutions and customer success.",
    location: "Tokyo",
    employmentType: "Full-time",
    department: "Customer Success"
  },
  {
    id: "product-designer",
    title: "Product Designer",
    description: "Create beautiful, intuitive user experiences. Work on products that millions of users interact with every day.",
    location: "Remote",
    employmentType: "Full-time",
    department: "Design"
  },
  {
    id: "backend-developer",
    title: "Backend Developer",
    description: "Build scalable, high-performance systems. Work with modern technologies and solve complex technical challenges.",
    location: "In House",
    employmentType: "Part-time",
    department: "Engineering"
  },
  {
    id: "engineering-manager",
    title: "Engineering Manager",
    description: "Lead and mentor a talented engineering team. Drive technical strategy and deliver exceptional products.",
    location: "New York",
    employmentType: "Full-time",
    department: "Engineering"
  },
  {
    id: "content-writer",
    title: "Content Writer",
    description: "Craft compelling stories and engaging content. Help shape our brand voice and connect with our audience.",
    location: "Remote",
    employmentType: "Full-time",
    department: "Marketing"
  }
];

export default function FeaturedJobs() {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
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
          rootMargin: "0px 0px -50px 0px"
        }
      );

      observer.observe(card);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <section className="py-24 bg-gradient-to-b from-white to-blue-50/30 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#51CFDF] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#0859B2] rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#51CFDF]/10 to-[#0859B2]/10 border border-[#51CFDF]/30 rounded-full px-6 py-2 mb-6">
            <span className="w-2 h-2 bg-[#51CFDF] rounded-full animate-pulse"></span>
            <span className="text-[#0859B2] text-sm font-semibold">Open Positions</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">
            <span className="text-[#0859B2]">Explore</span>{" "}
            <span className="bg-gradient-to-r from-[#51CFDF] via-[#6dd9e8] to-[#51CFDF] bg-clip-text text-transparent">
              Opportunities
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join a team that's shaping the future of technology. Find your perfect role and grow with us.
          </p>
        </div>

        {/* Jobs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {jobs.map((job, index) => (
            <div
              key={job.id}
              ref={(el: any) => (cardRefs.current[index] = el)}
              className={`group relative bg-white rounded-2xl p-6 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl ${
                visibleCards.has(index)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: `${index * 0.1}s`,
                boxShadow: "0 4px 20px rgba(5, 89, 178, 0.08)",
              }}
            >
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#51CFDF]/0 via-[#51CFDF]/20 to-[#51CFDF]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"></div>
              
              {/* Department Badge */}
              {job.department && (
                <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-[#51CFDF]/10 to-[#0859B2]/10 border border-[#51CFDF]/30 rounded-full mb-4">
                  <span className="text-xs font-semibold text-[#0859B2]">{job.department}</span>
                </div>
              )}

              {/* Job Title */}
              <h3 className="text-xl md:text-2xl font-bold text-[#0859B2] mb-3 group-hover:text-[#51CFDF] transition-colors duration-300">
                {job.title}
              </h3>

              {/* Job Description */}
              <p className="text-sm text-gray-600 mb-6 leading-relaxed line-clamp-3">
                {job.description}
              </p>

              {/* Job Details */}
              <div className="flex flex-wrap gap-2 mb-6">
                {/* Location Badge */}
                <div className="inline-flex items-center space-x-1.5 bg-blue-50 border border-[#51CFDF]/30 rounded-lg px-3 py-1.5">
                  <svg
                    className="w-3.5 h-3.5 text-[#51CFDF]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className="text-[#0859B2] text-xs font-medium">
                    {job.location}
                  </span>
                </div>
                {/* Employment Type Badge */}
                <div className="inline-flex items-center space-x-1.5 bg-cyan-50 border border-[#51CFDF]/30 rounded-lg px-3 py-1.5">
                  <svg
                    className="w-3.5 h-3.5 text-[#51CFDF]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-[#0859B2] text-xs font-medium">
                    {job.employmentType}
                  </span>
                </div>
              </div>

              {/* CTA Button */}
              <Link
                href={`/careers/${job.id}`}
                className="group/btn w-full inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-[#0859B2] to-[#51CFDF] hover:from-[#51CFDF] hover:to-[#6dd9e8] text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 shadow-lg shadow-[#51CFDF]/20 hover:shadow-xl hover:shadow-[#51CFDF]/30"
              >
                <span>View Details</span>
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">Don't see a role that fits? We're always looking for great talent.</p>
          <Link
            href="/contact"
            className="inline-flex items-center space-x-2 text-[#0859B2] hover:text-[#51CFDF] font-semibold transition-colors duration-300 group"
          >
            <span>Get in Touch</span>
            <svg
              className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
