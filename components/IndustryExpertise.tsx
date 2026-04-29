"use client";

import Image from "next/image";
import educationImage from "../assets/Industries/education.jpeg";
import bankingImage from "../assets/Industries/banking.jpeg";
import ecommerceImage from "../assets/Industries/ecomerce.jpeg";
import healthcareImage from "../assets/Industries/healthcare.jpeg";
import travelImage from "../assets/Industries/travel.jpeg";

const industries = [
  {
    number: "01",
    title: "Healthcare",
    description:
      "We deliver HIPAA-compliant EMR systems, telemedicine apps, and appointment solutions built for clinics and hospitals. Integrate with medical devices, insurance APIs, and ETL pipelines for efficient data management and interoperability. Improve patient engagement and automate critical workflows for better care delivery. Modernize healthcare operations with tailored digital solutions for providers.",
    image: healthcareImage
  },
  {
    number: "02",
    title: "Banking & Fintech",
    description:
      "We develop secure digital banking apps, payment gateways, KYC onboarding, blockchain integration, lending platforms, analytics tools, automation, real-time data, and seamless API integrations for finance operations.",
    image: bankingImage
  },
  {
    number: "03",
    title: "Education",
    description:
      "We build learning management systems, virtual classrooms, digital assessment tools, and integration with platforms such as PowerSchool, Canvas, and Google Classroom.",
    image: educationImage
  },
  {
    number: "04",
    title: "Retail & E-commerce",
    description:
      "From e-commerce websites to inventory management systems, CRM, ERP solutions, and AI-based communication tools, we power modern retail operations.",
    image: ecommerceImage
  },
  {
    number: "05",
    title: "Travel & Hospitality",
    description:
      "We create custom booking engines, hotel management systems, and travel applications with seamless integration to GDS, payment gateways, and airline ticketing platforms.",
    image: travelImage
  }
];

export default function IndustryExpertise() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-16 md:mb-20">
          <span className="text-white">Where We Exceed </span>
          <span className="bg-gradient-to-r from-[#51CFDF] via-[#6dd9e8] to-[#51CFDF] bg-clip-text text-transparent">
            Customers' Expectations
          </span>
        </h2>

        <div className="mx-auto space-y-12 md:space-y-20">
          {industries.map((industry, index) => {
            const isEven = index % 2 === 0;
            // Even indices: image left (order-1), text right (order-2)
            // Odd indices: image right (order-2), text left (order-1)

            return (
              <div
                key={index}
                className="relative flex flex-col md:flex-row gap-8 md:gap-12 items-center"
              >
                {/* Number Badge */}
                <div
                  className={`absolute ${isEven
                    ? "top-4 left-4 md:left-auto md:right-[calc(50%-2.5rem)]"
                    : "top-4 right-4 md:right-auto md:left-[calc(50%-2.5rem)]"
                    } z-20 w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-[#0859B2] to-[#51CFDF] border-2 border-white flex items-center justify-center shadow-xl`}
                >
                  <span className="text-white font-bold text-xl md:text-2xl">
                    {industry.number}
                  </span>
                </div>

                {/* Image Container */}
                <div
                  className={`relative w-full md:w-1/2 ${isEven ? "md:order-1" : "md:order-2"
                    }`}
                >
                  <div className="relative rounded-[2rem] md:rounded-[2.5rem] overflow-hidden aspect-[4/3] shadow-2xl transform transition-transform hover:scale-[1.02] duration-300">
                    <Image
                      src={industry.image}
                      alt={industry.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    {/* Hexagonal overlay pattern with connected network */}
                    {/* <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none">
                      <svg
                        width="100%"
                        height="100%"
                        className="absolute inset-0"
                        style={{ opacity: 0.5 }}
                      >
                        <defs>
                          <pattern
                            id={`hex-pattern-${index}`}
                            x="0"
                            y="0"
                            width="80"
                            height="80"
                            patternUnits="userSpaceOnUse"
                          >
                            <circle cx="40" cy="40" r="3" fill="white" opacity="0.7" />
                            <path
                              d="M40 20 L55 30 L55 50 L40 60 L25 50 L25 30 Z"
                              fill="none"
                              stroke="white"
                              strokeWidth="1"
                              opacity="0.5"
                            />
                            <line
                              x1="40"
                              y1="20"
                              x2="40"
                              y2="40"
                              stroke="white"
                              strokeWidth="0.5"
                              strokeDasharray="2,2"
                              opacity="0.4"
                            />
                            <line
                              x1="55"
                              y1="30"
                              x2="40"
                              y2="40"
                              stroke="white"
                              strokeWidth="0.5"
                              strokeDasharray="2,2"
                              opacity="0.4"
                            />
                            <line
                              x1="55"
                              y1="50"
                              x2="40"
                              y2="40"
                              stroke="white"
                              strokeWidth="0.5"
                              strokeDasharray="2,2"
                              opacity="0.4"
                            />
                            <line
                              x1="25"
                              y1="50"
                              x2="40"
                              y2="40"
                              stroke="white"
                              strokeWidth="0.5"
                              strokeDasharray="2,2"
                              opacity="0.4"
                            />
                            <line
                              x1="25"
                              y1="30"
                              x2="40"
                              y2="40"
                              stroke="white"
                              strokeWidth="0.5"
                              strokeDasharray="2,2"
                              opacity="0.4"
                            />
                            <line
                              x1="40"
                              y1="60"
                              x2="40"
                              y2="40"
                              stroke="white"
                              strokeWidth="0.5"
                              strokeDasharray="2,2"
                              opacity="0.4"
                            />
                          </pattern>
                        </defs>
                        <rect
                          width="100%"
                          height="100%"
                          fill={`url(#hex-pattern-${index})`}
                        />
                      </svg>
                    </div> */}
                  </div>
                </div>

                {/* Text Content */}
                <div
                  className={`w-full md:w-1/2 ${isEven ? "md:order-2" : "md:order-1"
                    } flex flex-col justify-center`}
                >
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                    {industry.title}
                  </h3>
                  <p className="text-white text-base md:text-lg leading-relaxed">
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
