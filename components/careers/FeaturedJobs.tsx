"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

interface Job {
  id: string;
  title: string;
  description: string;
  location: string;
  employmentType: "Full-time" | "Part-time";
}

const jobs: Job[] = [
  {
    id: "senior-software-engineer",
    title: "Senior Software Engineer",
    description: "We're looking for an engineering manager to join our team.",
    location: "Remote",
    employmentType: "Full-time"
  },
  {
    id: "customer-success-manager",
    title: "Customer Success Manager",
    description: "We're looking for a engineering manager to join our team.",
    location: "Tokyo",
    employmentType: "Full-time"
  },
  {
    id: "product-designer",
    title: "Product Designer",
    description:
      "We're looking for a mid-level product designer to join our team.",
    location: "Remote",
    employmentType: "Full-time"
  },
  {
    id: "backend-developer",
    title: "Backend Developer",
    description:
      "We're looking for an experienced backend developer to join our team.",
    location: "In House",
    employmentType: "Part-time"
  },
  {
    id: "engineering-manager",
    title: "Engineering Manager",
    description: "We're looking for a engineering manager to join our team.",
    location: "New York",
    employmentType: "Full-time"
  },
  {
    id: "content-writer",
    title: "Content Writer",
    description: "We're looking for a content writer to join our team.",
    location: "Remote",
    employmentType: "Full-time"
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
    <section className="py-20 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          <span className="text-white">Featured</span>{" "}
          <span className="bg-gradient-to-r from-[#51CFDF] via-[#6dd9e8] to-[#51CFDF] bg-clip-text text-transparent">
            Jobs
          </span>
        </h2>

        <div className="space-y-4">
          {jobs.map((job, index) => (
            <div
              key={job.id}
              ref={(el: any) => (cardRefs.current[index] = el)}
              className={`bg-white/60 backdrop-blur-xl border border-[#51CFDF]/30 rounded-xl p-6 transition-all duration-700 hover:border-[#51CFDF]/70 hover:-translate-y-1 ${
                visibleCards.has(index)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: `${index * 0.1}s`,
                boxShadow:
                  "0 4px 16px rgba(81, 207, 223, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.05)"
              }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                {/* Left Side - Job Info */}
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-[#0859B2] mb-2">
                    {job.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-300 mb-4">
                    {job.description}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {/* Location Badge */}
                    <div className="inline-flex items-center space-x-2 bg-white/40 border border-[#51CFDF]/30 rounded-full px-4 py-1.5">
                      <svg
                        className="w-4 h-4 text-[#51CFDF]"
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
                      <span className="text-[#0859B2] text-sm font-medium">
                        {job.location}
                      </span>
                    </div>
                    {/* Employment Type Badge */}
                    <div className="inline-flex items-center space-x-2 bg-white/40 border border-[#51CFDF]/30 rounded-full px-4 py-1.5">
                      <svg
                        className="w-4 h-4 text-[#51CFDF]"
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
                      <span className="text-[#0859B2] text-sm font-medium">
                        {job.employmentType}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right Side - View Job Button */}
                <div className="flex-shrink-0">
                  <Link
                    href={`/careers/${job.id}`}
                    className="inline-flex items-center space-x-2 text-[#51CFDF] hover:text-[#0859B2] transition-colors duration-300 font-medium text-sm md:text-base group"
                  >
                    <span>View job</span>
                    <svg
                      className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
