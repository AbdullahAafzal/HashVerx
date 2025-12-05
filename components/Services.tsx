"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const services = [
  {
    // icon: "💻",
    title: "Front & Backend Development",
    slug: "front-backend-development",
    description: "Robust architecture for seamless digital experiences.",
    cta: "Discover Our Development Approach"
  },
  {
    // icon: "📱",
    title: "Android & iOS App Development",
    slug: "android-ios-app-development",
    description: "Mobile-first solutions for any market.",
    cta: "Start Your Mobile App Journey"
  },
  {
    // icon: "⚙️",
    title: "Custom Software Development",
    slug: "custom-software-development",
    description: "Bespoke solutions for your unique business challenges.",
    cta: "Explore Custom Solutions"
  },
  {
    // icon: "🧠",
    title: "AI & Machine Learning",
    slug: "ai-machine-learning-development",
    description: "Unlock business intelligence and automation.",
    cta: "See AI in Action"
  },

  {
    // icon: "☁️",
    title: "DevOps & Cloud",
    slug: "devops-cloud-services",
    description: "Faster releases, stable infrastructure, lower costs.",
    cta: "Optimize with DevOps"
  },
  {
    // icon: "✅",
    title: "Software Testing",
    slug: "software-testing",
    description: "QA that ensures speed, quality, and reliability.",
    cta: "Ensure Quality"
  },

  {
    // icon: "🏢",
    title: "Scalable Enterprise Software",
    slug: "enterprise-software-development",
    description: "Big solutions for big businesses.",
    cta: "Scale Enterprise Solutions"
  }
];

export default function Services() {
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
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Excellence - When it{" "}
          <span className="bg-gradient-to-r from-[#51CFDF] via-[#6dd9e8] to-[#51CFDF] bg-clip-text text-transparent">
            Comes
          </span>{" "}
          to
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              ref={(el: any) => (cardRefs.current[index] = el)}
              className={`group bg-white border border-[#51CFDF]/40 rounded-xl p-6 hover:border-[#51CFDF]/70 transition-all duration-500 hover:-translate-y-1 ${
                visibleCards.has(index)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
                transitionDelay: `${index * 0.1}s`,
                boxShadow:
                  "0 2px 8px rgba(81, 207, 223, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.03)"
              }}
            >
              <h3 className="text-lg font-bold text-[#0859B2] mb-3 leading-tight">
                {service.title}
              </h3>
              <p className="text-gray-400 mb-5 leading-relaxed text-sm">
                {service.description}
              </p>
              <Link
                href={`/services/${service.slug}`}
                className="inline-flex items-center space-x-2 text-[#51CFDF] hover:text-[#0859B2] transition-colors duration-300 text-xs font-medium"
              >
                <span>{service.cta}</span>
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
