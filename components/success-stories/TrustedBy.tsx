"use client";

import { useEffect, useRef, useState } from "react";

const technologies = [
  { name: "python", icon: "🐍" },
  { name: "django", icon: "⚡" },
  { name: "REST API", icon: "🔌" },
  { name: "mongoDB", icon: "🍃" },
  { name: "DevOps", icon: "☁️" }
];

export default function TrustedBy() {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    itemRefs.current.forEach((item, index) => {
      if (!item) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleItems((prev) => new Set([...prev, index]));
            }
          });
        },
        { threshold: 0.1 }
      );

      observer.observe(item);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <section className="py-20 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Trusted{" "}
          <span className="bg-gradient-to-r from-[#51CFDF] via-[#6dd9e8] to-[#51CFDF] bg-clip-text text-transparent">
            By
          </span>
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {technologies.map((tech, index) => (
            <div
              key={index}
              ref={(el: any) => (itemRefs.current[index] = el)}
              className={`bg-white/60 backdrop-blur-xl border border-[#51CFDF]/30 rounded-full px-8 py-4 transition-all duration-700 hover:border-[#51CFDF]/70 hover:-translate-y-1 ${
                visibleItems.has(index)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: `${index * 0.1}s`,
                boxShadow:
                  "0 4px 16px rgba(81, 207, 223, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.05)"
              }}
            >
              <div className="flex items-center space-x-3">
                <span className="text-2xl">{tech.icon}</span>
                <span className="text-[#0859B2] font-semibold text-sm md:text-base">
                  {tech.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
