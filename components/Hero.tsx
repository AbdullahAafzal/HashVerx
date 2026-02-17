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
    <section className="relative flex items-center justify-center overflow-hidden bg-transparent py-12 md:py-16">
      {/* Video Container */}
      <div className="w-full flex items-center justify-center">
        <div className="w-[70%] max-w-4xl aspect-video rounded-2xl overflow-hidden">
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
      </div>
    </section>
  );
}
