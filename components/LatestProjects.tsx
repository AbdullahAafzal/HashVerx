"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import yunuakImage from "../assets/projects/1.jpeg";
import ftfImage from "../assets/projects/2.jpeg";
import hammersTongsImage from "../assets/projects/3.jpeg";
import hospitalityProQuotesImage from "../assets/projects/Hospitality-ProQuotes.jpeg";
import hrmsImage from "../assets/projects/HEM.jpeg";
import hospitalManagementImage from "../assets/projects/hosp.jpeg";
import realEstateImage from "../assets/projects/real.jpeg";

interface Project {
  id: string;
  name: string;
  description: string;
  image: any;
  type: string;
  features: string[];
  hasDarkOverlay?: boolean;
}

const projects: Project[] = [
  {
    id: "Yunuak",
    name: "Yunuak",
    description:
      "Yunuak is a powerful retail POS and warehouse management system designed to simplify business operations. It allows users to create quotations, estimates, and orders while managing real-time inventory and product stock across warehouses. With both mobile and web access, businesses can monitor sales history, track inventory movement, and streamline daily operations from anywhere",
    image: yunuakImage,
    type: "(Supply Chain)",
    features: [
      "Retail POS & Order Management",
      "Inventory & Warehouse Tracking",
      "History & Reporting",
      "Multi-Platform Access & Support"
    ]
  },
  {
    id: "Forward-Thinking-Fitness",
    name: "Forward Thinking Fitness",
    description:
      "Forward Fitness Thinking (FTF) is a smart gym and fitness management system for trainers, staff, and clients. It offers mobile apps and a web portal to manage workouts, nutrition plans, habit tracking, mood monitoring, and class scheduling. With AI-powered insights, analytics, and multi-platform access, FTF helps fitness businesses streamline operations, improve client engagement, and deliver better training results efficiently.",
    image: ftfImage,
    type: "(Health & Fitness)",
    features: [
      "Client & Staff Management System",
      "Workout, Nutrition & Habit Tracking",
      "Class Scheduling & Trainer Interaction",
      "AI-Powered Analytics & Multi-Platform Access"
    ]
  },
  {
    id: "Hammers-Tounges",
    name: "Hammers & Tounges",
    description:
      "HT (Hammers & Tongs) is a powerful online auction platform for buyers, sellers, and administrators. Users can register, list items, and participate in live auctions with advanced bidding features like popcorn and phantom bidding. With real-time notifications, multi-winner support, and web and mobile access, it delivers a secure and scalable auction experience.",
    image: hammersTongsImage,
    type: "(Auction Industry)",
    features: [
      "Buyer, Seller & Admin Registration System",
      "Live Auctions with Advanced Bidding Features",
      "Multi-Winner Auctions & Real-Time Notifications",
      "Web & Mobile Integrated Auction Platform"
    ]
  },
  {
    id: "HPQ",
    name: "Hospitality ProQuotes",
    description:
      "Hospitality ProQuotes is an efficient order and quotation management system designed for hospitality businesses. It helps users create quotations, manage orders, generate receipts, and apply taxes, discounts, and markups accurately. With web and mobile access, businesses can streamline billing processes, improve pricing control, and manage customer transactions easily from one centralized platform.",
    image: hospitalityProQuotesImage,
    type: "(E-Commerce)",
    features: [
      "Order Taking & Quotation Management",
      "Receipts, Taxes & Discount Handling",
      "Pricing, Markups & Billing Automation",
      "Web & Mobile Hospitality POS System"
    ]
  },
  {
    id: "HRM",
    name: "HRM",
    description:
      "This HRMS is a comprehensive web-based human resource management system designed to manage employees, attendance, communication, and performance tracking. It includes internal chat, calling, project management, and analytics tools to improve workforce productivity. The platform helps organizations streamline HR operations, monitor team performance, and enhance collaboration through one secure system.",
    image: hrmsImage,
    type: "(Human Resource Management)",
    features: [
      "Employee Tracking & Attendance Management",
      "Internal Chat & Calling System",
      "Performance Monitoring & Analytics",
      "Project & Task Management"
    ]
  },
  {
    id: "Hospital Management System",
    name: "Hospital Management System",
    description:
      "The Hospital Management System is a complete digital solution for managing patients, appointments, billing, pharmacy, and hospital operations. It enables healthcare providers to maintain accurate records, streamline workflows, and improve patient care. With staff management, reporting, and centralized data access, hospitals and clinics can operate more efficiently and deliver better services.",
    image: hospitalManagementImage,
    type: "(Self Explaining)",
    features: [
      "Patient Records & Appointment Management",
      "Billing, Pharmacy & Inventory Control",
      "Doctor & Staff Management",
      "Reports & Hospital Analytics"
    ]
  },
  {
    id: "Real Estate Management System",
    name: "Real Estate Management System",
    description:
      "The Real Estate Management System is a modern platform designed to manage property listings, clients, leads, sales, and rental operations efficiently. It provides centralized data, transaction tracking, and reporting tools to improve decision-making. With automation and analytics features, real estate businesses can enhance customer engagement, streamline workflows, and grow operations effectively.",
    image: realEstateImage,
    type: "(Self Explaining)",
    features: [
      "Property Listing & Management",
      "Client & Lead Tracking",
      "Sales & Rental Management",
      "Analytics & Reporting Dashboard"
    ]
  }
];

export default function LatestProjects() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      const newScrollLeft =
        scrollContainerRef.current.scrollLeft +
        (direction === "right" ? scrollAmount : -scrollAmount);

      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth"
      });
    }
  };

  const checkScrollability = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScrollability();
    window.addEventListener("resize", checkScrollability);
    return () => window.removeEventListener("resize", checkScrollability);
  }, []);

  return (
    <section className="py-24 bg-transparent relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12">
          Latest{" "}
          <span className="bg-gradient-to-r from-[#51CFDF] via-[#6dd9e8] to-[#51CFDF] bg-clip-text text-transparent">
            Projects
          </span>
        </h2>
      </div>

      {/* Full Width Slider Section */}
      <div className="relative w-full flex items-center">
        {/* Navigation Button - Left */}
        {canScrollLeft && (
          <button
            onClick={() => scroll("left")}
            className="absolute left-4 sm:left-6 lg:left-8 xl:left-12 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-gray-800 hover:bg-gray-900 flex items-center justify-center transition-all shadow-lg"
            aria-label="Scroll left"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.5 15L7.5 10L12.5 5"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        )}

        {/* Scrollable Container - Shows exactly 4 cards */}
        <div className="w-full overflow-hidden">
          <div
            ref={scrollContainerRef}
            onScroll={checkScrollability}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 scroll-smooth px-4 sm:px-8 lg:px-16 snap-x snap-mandatory"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none"
            }}
          >
            {projects.map((project) => (
              <div
                key={project.id}
                className="flex-shrink-0 snap-center relative transition-all duration-500 ease-out
                w-full sm:w-[580px] md:w-[420px] lg:w-[330px]"
                style={{
                  minHeight: "460px"
                }}
                onMouseEnter={() => setHoveredCard(project.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Card Content */}
                <div className="rounded-lg p-8 flex flex-col justify-between relative text-white group h-full overflow-hidden transition-all duration-500">

                  {/* Background Image */}
                  <div className="absolute inset-0 rounded-lg overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      className={`object-cover transition-transform duration-700 ease-out ${hoveredCard === project.id ? "scale-110" : "scale-100"
                        }`}
                      sizes="100vw"
                    />
                  </div>

                  {/* Overlay */}
                  <div className={`absolute inset-0 rounded-lg transition-opacity duration-500 ${hoveredCard === project.id ? "bg-gray-800/30" : "bg-gray-800/50"
                    }`} />

                  <div className={`absolute inset-0 rounded-lg bg-black transition-opacity duration-500 ${hoveredCard === project.id ? "opacity-60" : "opacity-0"
                    }`} />

                  {/* Content */}
                  <div className="relative z-10 flex flex-col justify-between h-full">

                    <div
                      className={`transition-all duration-500 ease-out ${hoveredCard === project.id
                        ? "opacity-0 -translate-y-4"
                        : "opacity-100 translate-y-0"
                        }`}
                    >
                      <h3 className="text-3xl font-bold">{project.name}</h3>
                      <h5 className="font-bold mb-6">{project.type}</h5>

                      <ul className="space-y-2">
                        {project.features.map((feature, index) => (
                          <li key={index}>• {feature}</li>
                        ))}
                      </ul>
                    </div>

                    <div
                      className={`absolute inset-0 flex items-center justify-center px-6 transition-all duration-500 ${hoveredCard === project.id
                        ? "opacity-100"
                        : "opacity-0 pointer-events-none"
                        }`}
                    >
                      <p className="text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Button - Right */}
        {canScrollRight && (
          <button
            onClick={() => scroll("right")}
            className="absolute right-4 sm:right-6 lg:right-8 xl:right-12 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-gray-800 hover:bg-gray-900 flex items-center justify-center transition-all shadow-lg"
            aria-label="Scroll right"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.5 15L12.5 10L7.5 5"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        )}
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        @keyframes gradient-border {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        
        @keyframes border-glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(81, 207, 223, 0.5), 
                        0 0 40px rgba(81, 207, 223, 0.3),
                        0 0 60px rgba(81, 207, 223, 0.1);
          }
          50% {
            box-shadow: 0 0 30px rgba(81, 207, 223, 0.7), 
                        0 0 50px rgba(81, 207, 223, 0.5),
                        0 0 70px rgba(81, 207, 223, 0.2);
          }
        }
      `}</style>
    </section>
  );
}
