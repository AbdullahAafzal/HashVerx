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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
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
    <header
      className={`relative top-0 left-0 right-0 z-50 ${isServicePage ? "backdrop-blur-none" : "backdrop-blur-sm"
        }`}
    >
      <div
        className="absolute inset-0"
        style={{
          background: isServicePage
            ? "transparent"
            : "rgba(255, 255, 255, 0.05)"
        }}
      ></div>
      <nav className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src={logoImage}
              alt="HashVerx Logo"
              width={130}
              height={130}
              className="object-contain"
            />
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              href="/"
              className={`font-semibold text-base transition-colors ${isActive("/") ? "text-white" : "text-white hover:text-[#51CFDF]"
                }`}
            >
              Home
            </Link>
            <Link href="/about" className={`font-semibold text-base transition-colors ${isActive("/about") ? "text-white" : "text-white hover:text-[#51CFDF]"
              }`}>
              About Us
            </Link>
            <div
              className="relative"
              onMouseEnter={handleServicesEnter}
              onMouseLeave={handleServicesLeave}
            >
              <button
                className={`font-semibold text-base transition-colors flex items-center space-x-1 ${isServicesOpen || isActive("/services")
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
            <Link
              href="/careers"
              className={`font-semibold text-base transition-colors ${isActive("/careers")
                ? "text-white"
                : "text-white hover:text-[#51CFDF]"
                }`}
            >
              Join Our Team
            </Link>
          </div>

          <div className="flex items-center gap-4">
            {/* CTA Button (Desktop) */}
            <div className="hidden md:block">
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

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white hover:text-[#51CFDF] focus:outline-none p-1 transition-colors"
            >
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#0a0a0a]/95 backdrop-blur-xl border-t border-white/10 shadow-2xl max-h-[calc(100vh-5rem)] overflow-y-auto">
          <div className="px-4 pt-4 pb-8 flex flex-col space-y-2">
            <Link
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${isActive("/")
                ? "text-[#51CFDF] bg-white/5"
                : "text-white hover:text-[#51CFDF] hover:bg-white/5"
                }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${isActive("/about")
                ? "text-[#51CFDF] bg-white/5"
                : "text-white hover:text-[#51CFDF] hover:bg-white/5"
                }`}
            >
              About Us
            </Link>

            {/* Mobile Expertise Accordion */}
            <div>
              <button
                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-base font-medium transition-colors ${isMobileServicesOpen || isActive("/services")
                  ? "text-[#51CFDF] bg-white/5"
                  : "text-white hover:text-[#51CFDF] hover:bg-white/5"
                  }`}
              >
                <span>Expertise</span>
                <svg
                  className={`w-4 h-4 transform transition-transform duration-200 ${isMobileServicesOpen ? "rotate-180" : ""
                    }`}
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
              {isMobileServicesOpen && (
                <div className="mt-2 pl-4 space-y-1">
                  {servicesList.map((service, index) => (
                    <Link
                      key={index}
                      href={`/services/${service.slug}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block px-4 py-2.5 rounded-lg text-sm font-medium text-gray-300 hover:text-[#51CFDF] hover:bg-white/5 transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/careers"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${isActive("/careers")
                ? "text-[#51CFDF] bg-white/5"
                : "text-white hover:text-[#51CFDF] hover:bg-white/5"
                }`}
            >
              Join Our Team
            </Link>

            {/* Mobile CTA */}
            <div className="pt-6 pb-2 px-1">
              {pathname === "/contact" ? null : pathname.startsWith("/careers") ? (
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full bg-gradient-to-r from-[#0859B2] to-[#51CFDF] hover:from-[#51CFDF] hover:to-[#6dd9e8] text-white px-5 py-3.5 rounded-lg font-medium text-sm transition-all flex items-center justify-center space-x-2 shadow-lg shadow-[#51CFDF]/20"
                >
                  <span>APPLY</span>
                  <svg
                    className="w-4 h-4"
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
                    setIsMobileMenuOpen(false);
                    setTimeout(() => {
                      const contactSection = document.getElementById("contact");
                      if (contactSection) {
                        contactSection.scrollIntoView({
                          behavior: "smooth",
                          block: "start"
                        });
                      }
                    }, 100);
                  }}
                  className="w-full bg-gradient-to-r from-[#0859B2] to-[#51CFDF] hover:from-[#51CFDF] hover:to-[#6dd9e8] text-white px-5 py-3.5 rounded-lg font-medium text-sm transition-all flex items-center justify-center space-x-2 shadow-lg shadow-[#51CFDF]/20"
                >
                  <span>CONTACT US</span>
                  <svg
                    className="w-4 h-4"
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
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full bg-gradient-to-r from-[#0859B2] to-[#51CFDF] hover:from-[#51CFDF] hover:to-[#6dd9e8] text-white px-5 py-3.5 rounded-lg font-medium text-sm transition-all flex items-center justify-center space-x-2 shadow-lg shadow-[#51CFDF]/20"
                >
                  <span>CONTACT US</span>
                  <svg
                    className="w-4 h-4"
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
          </div>
        </div>
      )}
    </header>
  );
}