"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import businessAppsImg from "../../assets/Mobile/BusinessApps.jpg";
import marketplaceImg from "../../assets/Mobile/marketingplace.jpg";
import erpImg from "../../assets/Mobile/ERP.jpg";
import reactImg from "../../assets/languages/react.png";
import typescriptImg from "../../assets/languages/TypeScript.png";
import javascriptImg from "../../assets/languages/javascript.png";
import nodeImg from "../../assets/languages/NODE.png";
import pythonImg from "../../assets/languages/PYTHON.png";
import djangoImg from "../../assets/languages/django.png";
import awsImg from "../../assets/languages/aws.png";
import azureImg from "../../assets/languages/Azure.png";
import gcpImg from "../../assets/languages/gcp.png";

const appTypes = [
  {
    id: "business",
    title: "AI app development",
    image: businessAppsImg,
    hoverText: `Our AI developers can build AI-powered apps from scratch or transform your existing app into an intelligent solution, integrating features like personalized insights, predictive analytics, and natural language processing.`
  },
  {
    id: "marketplace",
    title: "Native mobile app development",
    image: marketplaceImg,
    hoverText: `Create mobile apps designed to leverage the full capabilities of iOS and Android, delivering high-performance, responsiveness, and reliability to deliver an intuitive and seamless experience to your users.`
  },
  {
    id: "erp",
    title: "Cross-platform solutions",
    image: erpImg,
    hoverText:
      "Our developers simplify the development process with cross-platform solutions that ensure a consistent user experience across iOS, Android, and other devices, helping you expand your reach without compromising quality or functionality."
  }
];

const platformServices = [
  {
    title: "iOS app development",
    description:
      "Turn ideas into high-performing iOS apps that fit seamlessly into the Apple ecosystem while meeting your security and UX standards."
  },
  {
    title: "Android app development",
    description:
      "Build Android apps tailored to your users, from first release through continuous updates, optimized for performance and reliability."
  },
  {
    title: "Wearables & embedded software",
    description:
      "Create companion apps and connected experiences for wearables and smart devices that integrate smoothly with your core platforms."
  },
  {
    title: "Native mobile apps",
    description:
      "Develop robust native apps for iOS and Android that leverage each platform’s capabilities for the best possible user experience."
  },
  {
    title: "Cross-platform apps",
    description:
      "Ship faster across devices with cross-platform stacks that balance performance, maintainability, and a unified user experience."
  },
  {
    title: "Progressive web apps (PWA)",
    description:
      "Deliver installable, fast PWAs that bring app-like experiences to the browser while remaining easy to distribute and update."
  }
];

const mobileTechStack = [
  { name: "React Native / React", image: reactImg },
  { name: "TypeScript", image: typescriptImg },
  { name: "JavaScript", image: javascriptImg },
  { name: "Node.js", image: nodeImg },
  { name: "Python", image: pythonImg },
  { name: "Django", image: djangoImg },
  { name: "AWS", image: awsImg },
  { name: "Azure", image: azureImg },
  { name: "GCP", image: gcpImg }
];

const keyServices = [
  {
    label: "Full-cycle development for most popular platforms",
    description:
      "From discovery and UX to launch and support, we cover the entire lifecycle for iOS, Android, and cross-platform apps."
  },
  {
    label: "UI/UX design following material guidelines",
    description:
      "Interfaces designed around platform guidelines so your apps feel native, intuitive, and consistent across devices."
  },
  {
    label: "Automated QA on most popular mobile devices",
    description:
      "Automated testing pipelines across real devices catch regressions early and keep quality high as you ship updates."
  },
  {
    label: "Power management, notification & location",
    description:
      "Battery-efficient background services, precise location, and reliable notifications tuned for real-world usage."
  },
  {
    label: "Embedded Android & AOSP customizations",
    description:
      "Custom Android builds and integrations that unlock unique hardware capabilities while staying maintainable."
  },
  {
    label: "Maintenance and post-warranty support",
    description:
      "Ongoing optimization, security updates, and feature enhancements that keep your app stable and aligned with your roadmap."
  }
];

export default function MobileAppTypes() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);

  return (
    <section className="pt-10 pb-24 md:pt-14 md:pb-28 bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
          Mobile app development capabilities
        </h2>
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {appTypes.map((item) => {
            const isHovered = hoveredId === item.id;
            return (
              <div
                key={item.id}
                className="group relative rounded-2xl overflow-hidden border border-[#51CFDF]/30 bg-gray-900 min-h-[420px]"
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className="absolute inset-0">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover opacity-90 group-hover:opacity-95 transition-opacity duration-300"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 transition-colors duration-300" />
                </div>
                <div
                  className={`absolute inset-0 p-5 flex flex-col justify-between bg-black/50 pt-14 pb-20 transition-all duration-500 ease-out ${
                    isHovered
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4 pointer-events-none"
                  }`}
                >
                  <p className="text-white text-sm leading-relaxed overflow-y-auto flex-1">
                    {item.hoverText}
                  </p>
                </div>
                <div className="absolute top-0 left-0 right-0 p-5 z-10">
                  <h3 className="text-xl font-bold text-white drop-shadow-md">
                    {item.title}
                  </h3>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5 flex justify-center z-10">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-[#51CFDF] hover:bg-[#6dd9e8] text-white px-6 py-3 rounded-lg font-semibold text-sm transition-all"
                  >
                    Get in Touch
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-20">
          <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-4">
            Mobile application development services for various platforms
          </h3>
          <p className="text-white/80 text-center max-w-3xl mx-auto mb-12">
            Our mobile app developers build solutions for every major platform, combining modern UX, secure architectures,
            and performance-focused engineering to support your growth.
          </p>
          <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
            {platformServices.map((item, index) => (
              <div
                key={item.title}
                className="p-8 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/25 shadow-lg hover:border-[#51CFDF]/50 hover:shadow-[#51CFDF]/20 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl border border-white/40 flex items-center justify-center text-white mb-4">
                  {index === 0 && (
                    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path
                        d="M16 2c-1 .1-2 .6-2.6 1.3-.6.7-1 1.7-.9 2.7 1-.1 2-.6 2.6-1.3.6-.7 1-1.7.9-2.7z"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M19 8.5c-.3-.8-.7-1.5-1.3-2-.6-.6-1.4-.9-2.2-.9-.5 0-1 .1-1.4.3-.4.2-.8.4-1.1.4-.4 0-.8-.2-1.2-.4-.4-.2-.9-.3-1.4-.3-1 0-1.9.4-2.6 1.1C6.9 7 6.3 8.4 6.3 9.9c0 1.1.2 2.2.6 3.2.3.8.8 1.6 1.4 2.2.5.6 1.1 1 1.7 1 .4 0 .7-.1 1.1-.3.3-.2.7-.4 1.1-.4.3 0 .7.1 1 .3.3.2.7.4 1.2.4.7 0 1.4-.4 2-1 .6-.6 1.1-1.4 1.4-2.2.3-.9.5-1.9.5-2.9 0-.7-.1-1.3-.3-1.8z"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                  {index === 1 && (
                    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <rect x="5" y="3" width="10" height="18" rx="2" strokeWidth="1.8" />
                      <path d="M16 8h2a2 2 0 012 2v4a2 2 0 01-2 2h-2" strokeWidth="1.8" />
                    </svg>
                  )}
                  {index === 2 && (
                    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <rect x="4" y="4" width="7" height="14" rx="2" strokeWidth="1.8" />
                      <rect x="13" y="6" width="7" height="12" rx="2" strokeWidth="1.8" />
                    </svg>
                  )}
                  {index === 3 && (
                    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <rect x="6" y="3" width="12" height="18" rx="2" strokeWidth="1.8" />
                      <path d="M9 7h6M9 11h6M9 15h4" strokeWidth="1.8" strokeLinecap="round" />
                    </svg>
                  )}
                  {index === 4 && (
                    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <rect x="3" y="5" width="10" height="14" rx="2" strokeWidth="1.8" />
                      <rect x="11" y="5" width="10" height="14" rx="2" strokeWidth="1.2" opacity="0.7" />
                    </svg>
                  )}
                  {index === 5 && (
                    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path
                        d="M5 7a2 2 0 012-2h10l2 4v8a2 2 0 01-2 2H7a2 2 0 01-2-2V7z"
                        strokeWidth="1.8"
                      />
                      <path d="M9 14h6" strokeWidth="1.8" strokeLinecap="round" />
                    </svg>
                  )}
                </div>
                <h4 className="text-xl font-semibold text-white mb-3">{item.title}</h4>
                <p className="text-sm md:text-base text-white/80 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-20">
            <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-4">
              Our tech stack for mobile app development
            </h3>
            <p className="text-white/80 text-center max-w-3xl mx-auto mb-10">
              We combine modern frontend frameworks, battle-tested backends, and cloud platforms to build scalable,
              secure mobile solutions.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {mobileTechStack.map((tech) => (
                <div
                  key={tech.name}
                  className="bg-white rounded-xl p-4 flex flex-col items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <div className="relative w-12 h-12">
                    <Image
                      src={tech.image}
                      alt={tech.name}
                      fill
                      className="object-contain"
                      sizes="48px"
                    />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-[#0859B2] text-center">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-20 rounded-3xl bg-white/5 border border-white/15 backdrop-blur-xl p-8 md:p-10">
              <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">
                Our key services
              </h3>
              <div className="grid sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
                {keyServices.map((service, index) => (
                  <button
                    key={service.label}
                    type="button"
                    onClick={() => setActiveServiceIndex(index)}
                    className={`flex flex-col items-center gap-3 px-4 py-3 rounded-2xl transition-all ${
                      activeServiceIndex === index
                        ? "bg-white/10 border border-[#51CFDF] shadow-lg"
                        : "bg-transparent border border-transparent hover:bg-white/5 hover:border-white/20"
                    }`}
                  >
                    <div className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center text-white">
                      {index === 0 && (
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <rect x="5" y="3" width="9" height="7" rx="1.5" strokeWidth="1.6" />
                          <rect x="5" y="14" width="4" height="7" rx="1.5" strokeWidth="1.6" />
                          <rect x="11" y="14" width="8" height="7" rx="1.5" strokeWidth="1.6" />
                        </svg>
                      )}
                      {index === 1 && (
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <rect x="4" y="4" width="16" height="12" rx="2" strokeWidth="1.6" />
                          <path d="M8 16v3h8v-3" strokeWidth="1.6" />
                          <path d="M8 8h3v4H8zM13 9h3" strokeWidth="1.6" strokeLinecap="round" />
                        </svg>
                      )}
                      {index === 2 && (
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <rect x="4" y="4" width="16" height="12" rx="2" strokeWidth="1.6" />
                          <path d="M8 15l2-3 2 2 3-4 3 5" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                      {index === 3 && (
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path
                            d="M12 3a6 6 0 00-6 6c0 4 6 12 6 12s6-8 6-12a6 6 0 00-6-6z"
                            strokeWidth="1.6"
                          />
                          <circle cx="12" cy="9" r="2" strokeWidth="1.6" />
                        </svg>
                      )}
                      {index === 4 && (
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <rect x="9" y="4" width="6" height="16" rx="1.5" strokeWidth="1.6" />
                          <path d="M6 8h2M6 12h2M6 16h2M16 8h2M16 12h2M16 16h2" strokeWidth="1.6" strokeLinecap="round" />
                        </svg>
                      )}
                      {index === 5 && (
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path
                            d="M7 8h10a2 2 0 012 2v6a2 2 0 01-2 2H7a2 2 0 01-2-2v-6a2 2 0 012-2z"
                            strokeWidth="1.6"
                          />
                          <path d="M9 8V6a3 3 0 016 0v2" strokeWidth="1.6" />
                        </svg>
                      )}
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-white text-center">
                      {service.label}
                    </span>
                  </button>
                ))}
              </div>
              <div className="border-t border-white/15 pt-6 mt-4 grid md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] gap-4">
                <h4 className="text-sm md:text-base font-semibold text-white">
                  {keyServices[activeServiceIndex]?.label.toUpperCase()}
                </h4>
                <p className="text-sm md:text-base text-white/80 leading-relaxed">
                  {keyServices[activeServiceIndex]?.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
