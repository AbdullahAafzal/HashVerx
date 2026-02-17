"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { servicesList } from "@/lib/servicesData";
import logoImage from "../assets/logo.png";

const DROPDOWN_CLOSE_DELAY_MS = 50;

export default function Header() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();

  const clearCloseTimeout = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  };

  const handleServicesEnter = () => {
    clearCloseTimeout();
    setIsServicesOpen(true);
  };

  const handleServicesLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
      closeTimeoutRef.current = null;
    }, DROPDOWN_CLOSE_DELAY_MS);
  };

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(path);
  };

  // Check if we're on a service/expertise page
  const isServicePage = pathname.startsWith("/services");

  return (
    <header className={`${isServicePage ? 'fixed' : 'relative'} top-0 left-0 right-0 z-50 ${isServicePage ? 'backdrop-blur-none' : 'backdrop-blur-sm'}`}>
      <div
        className="absolute inset-0"
        style={{
          background: isServicePage ? "transparent" : "rgba(255, 255, 255, 0.05)"
        }}
      ></div>
      <nav className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src={logoImage}
              alt="HashVerx Logo"
              width={100}
              height={100}
              className="object-contain"
            />
            {/* <span className="text-white text-xl font-bold">HashVerx</span> */}
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              href="/"
              className={`font-semibold text-base transition-colors ${
                isActive("/")
                  ? "text-white"
                  : "text-white hover:text-[#51CFDF]"
              }`}
            >
              Home
            </Link>
            <div
              className="relative"
              onMouseEnter={handleServicesEnter}
              onMouseLeave={handleServicesLeave}
            >
              <button
                className={`font-semibold text-base transition-colors flex items-center space-x-1 ${
                  isServicesOpen || isActive("/services")
                    ? "text-white"
                    : "text-white hover:text-[#51CFDF]"
                }`}
              >
                <span>Expertise</span>
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
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {isServicesOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-72 bg-black/80 backdrop-blur-xl border border-white/30 rounded-lg shadow-2xl py-3 transition-opacity duration-100"
                  style={{
                    boxShadow:
                      "0 8px 32px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.2)"
                  }}
                >
                  {servicesList.map((service, index) => (
                    <Link
                      key={index}
                      href={`/services/${service.slug}`}
                      className="block px-4 py-2.5 text-white text-sm hover:bg-white/10 hover:text-[#51CFDF] transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            {/* <Link
              href="/success-stories"
              className={`font-semibold text-sm transition-colors ${
                isActive("/success-stories")
                  ? "text-[#51CFDF]"
                  : "text-white hover:text-[#51CFDF]"
              }`}
            >
              Case Studies
            </Link> */}
            <Link
              href="/careers"
              className={`font-semibold text-base transition-colors ${
                isActive("/careers")
                  ? "text-white"
                  : "text-white hover:text-[#51CFDF]"
              }`}
            >
              Join Our Team
            </Link>
          </div>

          {/* CTA Button */}
          {pathname === "/contact" ? null : pathname.startsWith("/careers") ? (
            <Link
              href="/contact"
              className="bg-gradient-to-r from-[#0859B2] to-[#51CFDF] hover:from-[#51CFDF] hover:to-[#6dd9e8] text-white px-5 py-2 rounded-lg font-medium text-sm transition-all flex items-center space-x-1.5 shadow-lg shadow-[#51CFDF]/20 hover:shadow-xl hover:shadow-[#51CFDF]/30 hover:scale-105 transform"
            >
              <span>APPLY</span>
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
          ) : pathname === "/" ? (
            <button
              onClick={() => {
                const contactSection = document.getElementById("contact");
                if (contactSection) {
                  contactSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                  });
                }
              }}
              className="bg-gradient-to-r from-[#0859B2] to-[#51CFDF] hover:from-[#51CFDF] hover:to-[#6dd9e8] text-white px-5 py-2 rounded-lg font-medium text-sm transition-all flex items-center space-x-1.5 shadow-lg shadow-[#51CFDF]/20 hover:shadow-xl hover:shadow-[#51CFDF]/30 hover:scale-105 transform"
            >
              <span>CONTACT US</span>
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
            </button>
          ) : (
            <Link
              href="/contact"
              className="bg-gradient-to-r from-[#0859B2] to-[#51CFDF] hover:from-[#51CFDF] hover:to-[#6dd9e8] text-white px-5 py-2 rounded-lg font-medium text-sm transition-all flex items-center space-x-1.5 shadow-lg shadow-[#51CFDF]/20 hover:shadow-xl hover:shadow-[#51CFDF]/30 hover:scale-105 transform"
            >
              <span>CONTACT US</span>
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
          )}
        </div>
      </nav>
    </header>
  );
}
