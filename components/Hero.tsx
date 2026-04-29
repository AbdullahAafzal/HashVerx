"use client";

import { useRef, useEffect, useState } from "react";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log("Autoplay prevented:", error);
      });
    }
  }, []);

  const contentRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    const el = contentRef.current;
    if (el) observer.observe(el);
    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-transparent py-16 md:py-24">
      {/* Decorative background elements */}
      {/* <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-[10%] w-64 h-64 md:w-80 md:h-80 bg-[#51CFDF]/25 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/3 right-[15%] w-48 h-48 md:w-64 md:h-64 bg-[#0859B2]/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-32 left-[20%] w-56 h-56 md:w-72 md:h-72 bg-[#51CFDF]/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
        <div className="absolute bottom-20 right-[10%] w-80 h-80 md:w-96 md:h-96 bg-[#0859B2]/15 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(600px,90vw)] h-[min(600px,90vw)] bg-[#51CFDF]/8 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "linear-gradient(rgba(81, 207, 223, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(81, 207, 223, 0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div> */}

      <div className="absolute inset-0 bg-black">
        <video autoPlay loop muted playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ zIndex: 0, opacity: 0.9 }}
        >
          <source src="./video.mp4" type="video/mp4" />
        </video>

        <div className="dark"
          style={{
            background: "rgba(0, 0, 0, 0.45)",
            height: "100%",
            width: "100%",
            position: "absolute",
          }}
        ></div>

      </div>

      {/* Content */}
      <div ref={contentRef} className="relative z-10 w-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        {/* Headline */}
        <h1
          className={`text-center text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4 leading-tight transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
        >
          <span className="text-white">Logic Beyond</span>{" "}
          <span className="bg-gradient-to-r from-[#51CFDF] via-[#6dd9e8] to-[#51CFDF] bg-clip-text text-transparent">
            Boundaries
          </span>
        </h1>
        <p
          className={`text-center text-base md:text-lg text-white/90 mb-8 md:mb-10 max-w-2xl transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
        >
          Custom software solutions powered by AI and automation, tailored to your unique needs
        </p>

        {/* Video container with glow */}
        {/* <div className={`relative w-full max-w-4xl transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          
          <div
            className="absolute inset-0 -m-4 rounded-3xl blur-2xl opacity-40"
            style={{
              background: "radial-gradient(ellipse at center, rgba(81, 207, 223, 0.4) 0%, rgba(8, 89, 178, 0.2) 50%, transparent 70%)",
            }}
          />
          <div className="relative w-[85%] sm:w-[75%] mx-auto aspect-video rounded-2xl overflow-hidden bg-white shadow-xl border border-[#51CFDF]/30">
            <video
              ref={videoRef}
              className="w-full h-full object-contain rounded-2xl"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/assets/logo-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div> */}
      </div>
    </section>
  );
}
