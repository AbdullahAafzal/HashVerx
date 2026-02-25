"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { servicesData } from "@/lib/servicesData";
import ServiceHeroSection from "../ServiceHeroSection";
import ServiceOverviewSection from "../ServiceOverviewSection";
import ServiceTypesSection from "../ServiceTypesSection";
import type { OverviewCapability } from "../ServiceOverviewSection";
import type { ServiceTypeItem } from "../ServiceTypesSection";
import ServiceTechStack from "../ServiceTechStack";
import mainImage from "../../../assets/Software/main.jpg";
import overviewImage from "../../../assets/Software/overview.jpg";
import webAppsImage from "../../../assets/Software/WebApplications.jpg";
import saasImage from "../../../assets/Software/SaaSPlatforms.jpg";
import businessSystemsImage from "../../../assets/Software/BusinessSystems.jpg";

const slug = "custom-software-development";
const service = servicesData[slug];

const whatWeBuild = service.sections.find((s) => s.id === "what-we-build");
const buildItems = whatWeBuild?.type === "list" ? whatWeBuild.items : [];
const overviewCapabilities: OverviewCapability[] = buildItems.map((item) => ({
  title: item
}));

const TYPES_ITEMS: ServiceTypeItem[] = [
  {
    id: "web",
    title: "Enterprise Software Development",
    image: webAppsImage,
    hoverText:
      "Enterprise software development focuses on creating scalable and secure solutions for large organizations. This enables businesses to automate complex business processes and allows them to adapt according to the business change. These flexible solutions can help shore up your digital foundation."
  },
  {
    id: "saas",
    title: "Custom Software Development",
    image: saasImage,
    hoverText: `Custom software development gives power to the business to create tailored solutions that align with its unique goals. Adopting a platform solution out of the box risks undermining your resources. Custom software development services enable your solution to seamlessly weave into the existing software ecosystem, respecting your financial commitment and ensuring compatibility.`
  },
  {
    id: "business",
    title: "Software Integration Services",
    image: businessSystemsImage,
    hoverText: `If you face data chaos then you can enable smooth data exchange between your business software systems with software integration. All the deployment challenges are addressed here and scalable integrations are implemented. For a unified workflow, regulations like HIPAA, GAMP, PCI, and DSS are implemented.`
  }
];

const WHY_CHOOSE_ITEMS = [
  {
    title: "End-to-end capabilities",
    description:
      "We support all stages of the software development lifecycle, from strategy and design to deployment and continuous optimization."
  },
  {
    title: "Industry knowledge",
    description:
      "Our experts understand complex industry regulations and operating models, enabling solutions tailored to your business context."
  },
  {
    title: "AI leadership",
    description:
      "We bring AI-first thinking to modern applications, combining data, automation, and governance to unlock new value safely."
  },
  {
    title: "Future-ready solutions",
    description:
      "Cloud-native, modular architectures ensure your platforms can scale, evolve, and integrate with emerging technologies."
  },
  {
    title: "Commitment to customer success",
    description:
      "We co-create with your teams, focusing on measurable business outcomes and long-term partnership rather than one-off projects."
  },
  {
    title: "Top engineering talent",
    description:
      "Our senior engineers bring deep experience across domains, modern stacks, and complex enterprise environments."
  },
  {
    title: "Enterprise-grade security",
    description:
      "Security-by-design practices and compliance-aware delivery keep your data and systems protected from day one."
  },
  {
    title: "Global delivery and scalability",
    description:
      "Flexible engagement models and distributed teams help you scale delivery while maintaining speed and quality."
  }
];

export default function CustomSoftwareLayout() {
  const [sectionVisible, setSectionVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const o = new IntersectionObserver(
      ([e]) => e.isIntersecting && setSectionVisible(true),
      { threshold: 0.1 }
    );
    if (sectionRef.current) o.observe(sectionRef.current);
    return () => o.disconnect();
  }, []);

  return (
    <>
      <ServiceHeroSection
        image={mainImage}
        imageAlt="Custom software development"
        label={service.title}
        title={service.subtitle}
        ctaText="Start a project"
      />
      <ServiceOverviewSection
        intro={service.intro}
        capabilities={overviewCapabilities}
        image={overviewImage}
        imageAlt="Custom software development"
        capabilitiesHeading="Our core strengths:"
      />
      <ServiceTypesSection
        sectionTitle="Comprehensive Custom Software Services"
        items={TYPES_ITEMS}
      />

      <section
        ref={sectionRef}
        className="pt-6 pb-24 md:pt-10 md:pb-32 bg-transparent"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`mt-12 rounded-3xl border-2 border-[#51CFDF]/25 bg-white/10 backdrop-blur-xl p-10 md:p-14 shadow-lg transition-all duration-700 delay-100 ${
              sectionVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            <ServiceTechStack />
          </div>

          <div
            className={`mt-20 transition-all duration-700 delay-200 ${
              sectionVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-10">
              Why enterprises choose Hashverx for custom software development
            </h2>
            <div className="space-y-5">
              {WHY_CHOOSE_ITEMS.map((item, index) => (
                <div
                  key={item.title}
                  className="flex flex-col md:flex-row md:items-start gap-4 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-xl px-6 py-6 shadow-md"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full border border-white/40 flex items-center justify-center text-white">
                    {index === 0 && (
                      <svg
                        className="w-6 h-6"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5 12h14M12 5l7 7-7 7"
                          stroke="#FFFFFF"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                    {index === 1 && (
                      <svg
                        className="w-6 h-6"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4 7h16M4 12h10M4 17h6"
                          stroke="#FFFFFF"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                    {index === 2 && (
                      <svg
                        className="w-6 h-6"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 20v-6M9 20h6M8 10a4 4 0 118 0c0 2-2 3-4 3s-4-1-4-3z"
                          stroke="#FFFFFF"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                    {index === 3 && (
                      <svg
                        className="w-6 h-6"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4 19h16M7 16V5h10v11"
                          stroke="#FFFFFF"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                    {index === 4 && (
                      <svg
                        className="w-6 h-6"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5 13l4 4L19 7"
                          stroke="#FFFFFF"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                    {index === 5 && (
                      <svg
                        className="w-6 h-6"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 2l3 7h7l-5.5 4.1L18 21l-6-3.8L6 21l1.5-7.9L2 9h7z"
                          stroke="#FFFFFF"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                    {index === 6 && (
                      <svg
                        className="w-6 h-6"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4 7h16v10H4V7zM4 11h16"
                          stroke="#FFFFFF"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                    {index === 7 && (
                      <svg
                        className="w-6 h-6"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3 11h4l3 8 4-16 3 8h4"
                          stroke="#FFFFFF"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold mb-1 text-white">
                      {item.title}
                    </h3>
                    <p className="text-sm md:text-base text-white/80 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
