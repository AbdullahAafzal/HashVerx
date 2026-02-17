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
const whyUs = service.sections.find((s) => s.id === "why-us");
const contact = service.sections.find((s) => s.id === "contact");

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
        capabilitiesHeading="What we build:"
      />
      <ServiceTypesSection sectionTitle="What We Build" items={TYPES_ITEMS} />

      <section ref={sectionRef} className="py-28 md:py-36 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`grid grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-700 ${
              sectionVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            {buildItems.map((item, i) => (
              <div
                key={i}
                className="p-6 md:p-8 rounded-2xl border-2 border-white/30 bg-white/10 backdrop-blur-xl hover:border-[#51CFDF]/40 transition-colors flex items-center gap-4"
              >
                <span className="w-14 h-14 rounded-xl bg-[#0859B2] text-white flex items-center justify-center font-bold text-lg flex-shrink-0">
                  {i + 1}
                </span>
                <span className="font-semibold text-white text-lg">
                  {item}
                </span>
              </div>
            ))}
          </div>

          <div
            className={`mt-20 rounded-3xl border-2 border-[#51CFDF]/25 bg-white/10 backdrop-blur-xl p-10 md:p-14 shadow-lg transition-all duration-700 delay-100 ${
              sectionVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            <ServiceTechStack />
          </div>

          <div
            className={`mt-20 grid md:grid-cols-2 gap-10 transition-all duration-700 delay-200 ${
              sectionVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            <div className="p-10 md:p-12 rounded-3xl bg-[#0859B2] text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">Why us</h3>
              <p className="text-white/90 leading-relaxed text-lg">
                {whyUs?.type === "paragraph" ? whyUs.content : ""}
              </p>
            </div>
            <div className="p-10 md:p-12 rounded-3xl border-2 border-[#51CFDF]/30 bg-white/10 backdrop-blur-xl flex flex-col justify-between">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                  Get started
                </h3>
                <p className="text-white leading-relaxed text-lg mb-8">
                  {contact?.type === "paragraph" ? contact.content : ""}
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#51CFDF] hover:bg-[#6dd9e8] text-white px-8 py-4 rounded-lg font-semibold text-base w-fit"
              >
                Book a consultation
                <svg
                  className="w-5 h-5"
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
          </div>
        </div>
      </section>
    </>
  );
}
