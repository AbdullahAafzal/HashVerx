'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { StaticImageData } from 'next/image';

interface ServiceHeroProps {
  title: string;
  subtitle: string;
  /** Optional CTA label; default: "Book a consultation" */
  ctaText?: string;
  /** Optional hero background image (URL string or Next.js static import) */
  heroImage?: string | StaticImageData | { src: string; alt?: string };
}

export default function ServiceHero({ title, subtitle, ctaText = 'Book a consultation', heroImage }: ServiceHeroProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => { if (ref.current) observer.unobserve(ref.current!); };
  }, []);

  const imageSrc =
    typeof heroImage === 'string'
      ? heroImage
      : heroImage && typeof heroImage === 'object' && 'src' in heroImage
        ? (heroImage as { src: string }).src
        : undefined;
  const imageAlt =
    typeof heroImage === 'object' && heroImage !== null && 'alt' in heroImage && (heroImage as { alt?: string }).alt
      ? (heroImage as { alt: string }).alt
      : title;

  return (
    <section className="relative min-h-[85vh] flex items-end justify-center overflow-hidden">
      {/* Background: image or gradient */}
      <div className="absolute inset-0">
        {imageSrc ? (
          <>
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
            <div className="absolute inset-0 bg-black/60" />
          </>
        ) : (
          <>
            <div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(135deg, #0859B2 0%, #0a3d6b 40%, #0d2847 70%, #051a2e 100%)',
              }}
            />
            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage: 'radial-gradient(ellipse 80% 50% at 70% 20%, rgba(81, 207, 223, 0.25) 0%, transparent 50%)',
              }}
            />
            <div
              className="absolute bottom-0 left-0 right-0 h-1/2 opacity-40"
              style={{
                background: 'linear-gradient(to top, rgba(0,0,0,0.4), transparent)',
              }}
            />
          </>
        )}
      </div>

      <div
        ref={ref}
        className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24"
      >
        <div
          className={`rounded-2xl bg-black/50 backdrop-blur-sm px-6 py-8 md:px-10 md:py-10 max-w-2xl transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <p className="text-[#51CFDF] text-sm font-semibold uppercase tracking-widest mb-2">
            {title}
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            {subtitle}
          </h1>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#51CFDF] hover:bg-[#6dd9e8] text-white px-8 py-4 rounded-lg font-semibold text-sm transition-all shadow-lg hover:shadow-xl hover:scale-105 transform uppercase tracking-wide"
          >
            <span>{ctaText}</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
