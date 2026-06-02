import React from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "../../config/org";

export default function Hero() {
  const { title, tagline, primaryCta, secondaryCta } = siteConfig.hero;

  return (
    <section id="hero" className="relative w-full bg-white">
      {/* Full-bleed photograph */}
      <div className="relative w-full overflow-hidden" style={{ height: "clamp(420px, 65vh, 720px)" }}>
        <Image
          src="/hero-community.jpg"
          alt="Project Sankalp volunteers teaching and serving in a community setting"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Subtle bottom fade to white */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-white pointer-events-none" />
      </div>

      {/* Editorial text content — below the image, on white */}
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 pt-12 pb-20 sm:pt-16 sm:pb-28">
        {/* Eyebrow */}
        <p className="eyebrow mb-6 tracking-widest" style={{ color: "var(--accent)" }}>
          Project Sankalp — NSS Aligned
        </p>

        {/* Main headline */}
        <h1
          className="font-serif font-black text-[#0F172A] mb-8 max-w-4xl"
          style={{
            fontSize: "clamp(2.5rem, 6vw, 5rem)",
            lineHeight: 1.05,
            letterSpacing: "-0.025em",
          }}
        >
          {title}
        </h1>

        {/* Mission statement */}
        <p
          className="font-sans text-slate-600 mb-10 max-w-2xl"
          style={{ fontSize: "clamp(1rem, 1.5vw, 1.175rem)", lineHeight: 1.75 }}
        >
          {tagline}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 items-start">
          <Link
            href={primaryCta.link}
            id="hero-cta-primary"
            className="btn-primary"
            style={{ backgroundColor: "#0F172A", color: "#fff", textDecoration: "none" }}
          >
            {primaryCta.text}
          </Link>
          <Link
            href={secondaryCta.link}
            id="hero-cta-secondary"
            className="btn-outline"
            style={{ textDecoration: "none" }}
          >
            {secondaryCta.text} →
          </Link>
        </div>
      </div>
    </section>
  );
}
