"use client";

import { useRef, useEffect } from "react";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Auto-play the video when component mounts
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log("Autoplay prevented:", error);
      });
    }
  }, []);

  return (
    <section className="relative flex items-center justify-center overflow-hidden bg-white py-16 md:py-20">
      {/* Video Container */}
      <div className="w-full flex items-center justify-center">
        <div className="w-[70%] max-w-4xl aspect-video">
          <video
            ref={videoRef}
            className="w-full h-full object-contain"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/assets/logo-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      {/* Optional overlay for better text readability if needed */}
      <div className="absolute inset-0 bg-white/5 pointer-events-none"></div>
    </section>
  );
}
