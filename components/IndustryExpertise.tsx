"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const industries = [
  {
    number: "01",
    title: "Education",
    description:
      "We build comprehensive learning management systems, school classroom platforms, and digital assessment tools, seamlessly integrating with ParentSquare, Canvas, Google Classroom, and more.",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop"
  },

  {
    number: "02",
    title: "Banking & Fintech",
    description:
      "Our expertise spans digital banking apps, payment gateways, blockchain solutions, lending platforms, and custom fintech software that drive financial innovation.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
  },
  {
    number: "03",
    title: "Retail & E-commerce",
    description:
      "From e-commerce websites to inventory management systems, CRM, ERP solutions, and AI-based communication tools, we power modern retail operations.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop"
  },
  {
    number: "04",
    title: "Healthcare",
    description:
      "We develop cutting-edge healthcare solutions including EHR/EMR systems, telemedicine applications, and patient engagement platforms that improve care delivery and patient outcomes.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop"
  },

  {
    number: "05",
    title: "Travel & Hospitality",
    description:
      "We create custom booking engines, hotel management systems, and travel applications with seamless integration to GDS, payment gateways, and airline ticketing platforms.",
    image:
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop"
  }
];

export default function IndustryExpertise() {
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
        {
          threshold: 0.2,
          rootMargin: "0px 0px -100px 0px"
        }
      );

      observer.observe(item);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Where We Exceed{" "}
          <span className="bg-gradient-to-r from-[#51CFDF] via-[#6dd9e8] to-[#51CFDF] bg-clip-text text-transparent">
            Customers' Expectations
          </span>
        </h2>
        <div className="space-y-20">
          {industries.map((industry, index) => {
            const isVisible = visibleItems.has(index);
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                ref={(el) => (itemRefs.current[index] = el)}
                className={`flex flex-col ${
                  isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                } items-center gap-12`}
              >
                <div className="flex-1">
                  <div className="relative">
                    <div
                      className={`absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-[#0859B2] to-[#51CFDF] rounded-full flex items-center justify-center text-[#0859B2] font-bold text-xl z-10 shadow-lg shadow-[#51CFDF]/30 transition-all duration-700 ${
                        isVisible
                          ? "opacity-100 scale-100 rotate-0"
                          : "opacity-0 scale-0 rotate-180"
                      }`}
                    >
                      {industry.number}
                    </div>
                    <div
                      className={`bg-white border border-[#51CFDF]/30 rounded-xl overflow-hidden aspect-video relative transition-all duration-700 ${
                        isVisible
                          ? "opacity-100 translate-x-0 translate-y-0"
                          : `opacity-0 ${
                              isEven ? "-translate-x-12" : "translate-x-12"
                            } translate-y-8`
                      }`}
                    >
                      <Image
                        src={industry.image}
                        alt={industry.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    </div>
                  </div>
                </div>
                <div
                  className={`flex-1 transition-all duration-700 ${
                    isVisible
                      ? "opacity-100 translate-x-0 translate-y-0"
                      : `opacity-0 ${
                          isEven ? "translate-x-12" : "-translate-x-12"
                        } translate-y-8`
                  }`}
                >
                  <h3 className="text-3xl font-bold text-[#0859B2] mb-4">
                    {industry.title}
                  </h3>
                  <p className="text-gray-400 text-lg leading-relaxed">
                    {industry.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
