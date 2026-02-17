"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import overviewImage from "../../assets/Mobile/overview.jpg";

const capabilities = [
  {
    title: "Mobile-First Architecture",
    description:
      "Leveraging agile methodologies to build scalable, responsive solutions that align with mobile-first strategies."
  },
  {
    title: "Enterprise Mobility",
    description:
      "Developing robust, secure applications to streamline operations and enhance productivity for businesses of all sizes."
  },
  {
    title: "Integration Expertise",
    description:
      "Seamlessly connecting mobile apps with third-party services, APIs, and backend systems."
  },
  {
    title: "Performance Optimization",
    description:
      "Ensuring apps are fast, lightweight, and responsive, even under heavy user loads."
  },
  {
    title: "Custom Mobile Solutions",
    description:
      "Building tailored apps to address specific business challenges and deliver measurable results."
  }
];

export default function MobileAppOverview() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current!);
    };
  }, []);

  return (
    <section className="py-28 md:py-36 bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div
          ref={ref}
          className="grid md:grid-cols-12 gap-14 lg:gap-20 items-center"
        >
          <div
            className={`md:col-span-5 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-6"
            }`}
          >
            <h2 className="text-[#51CFDF] text-3xl md:text-4xl font-bold uppercase tracking-wider mb-5">
              Overview
            </h2>
            <p className="text-lg md:text-xl text-gray-900 leading-relaxed mb-10">
              Mobile apps have transformed the way businesses and customers
              engage with each other. Today, businesses require an engaging
              mobile presence to enhance visibility, expand reach, and drive
              customer engagement and loyalty. As a globally recognized mobile
              applications development company, our mission is to help you
              deliver seamless brand experiences through innovative and reliable
              mobile applications.
            </p>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              What we are good at:
            </h3>
            <ul className="space-y-4">
              {capabilities.map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#51CFDF] mt-2.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-gray-900">
                      {item.title}:
                    </span>{" "}
                    <span className="text-gray-700">{item.description}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div
            className={`md:col-span-7 relative aspect-[4/3] md:aspect-[16/10] min-h-[320px] rounded-2xl overflow-hidden border border-[#51CFDF]/30 shadow-xl transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-6"
            }`}
          >
            <Image
              src={overviewImage}
              alt="Mobile app development"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 58vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
