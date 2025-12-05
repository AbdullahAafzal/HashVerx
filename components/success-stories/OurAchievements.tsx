"use client";

import { useEffect, useRef, useState } from "react";

const achievements = [
  { number: "200+", label: "Projects Delivered" },
  { number: "7+", label: "Years of Client Relationship" },
  { number: "97%", label: "Customer Satisfaction" },
  { number: "1M+", label: "Hours Augmented" }
];

export default function OurAchievements() {
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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our{" "}
          <span className="bg-gradient-to-r from-[#51CFDF] via-[#6dd9e8] to-[#51CFDF] bg-clip-text text-transparent">
            Achievements
          </span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              ref={(el: any) => (cardRefs.current[index] = el)}
              className={`bg-white/60 backdrop-blur-xl border border-[#51CFDF]/30 rounded-xl p-8 text-center transition-all duration-700 hover:border-[#51CFDF]/70 hover:-translate-y-1 ${
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
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#51CFDF] via-[#6dd9e8] to-[#51CFDF] bg-clip-text text-transparent mb-3">
                {achievement.number}
              </div>
              <p className="text-base text-gray-300">{achievement.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
