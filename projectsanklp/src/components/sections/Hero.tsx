import React from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "../../config/org";

export default function Hero() {
  const { title, tagline, primaryCta, secondaryCta } = siteConfig.hero;

  return (
    <section id="hero" className="relative w-full bg-white overflow-hidden">
      {/* ── Full-bleed photograph ── */}
      <div
        className="relative w-full"
        style={{ height: "clamp(480px, 72vh, 800px)" }}
      >
        <Image
          src="/hero-community.jpg"
          alt="Project Sankalp volunteers teaching children in a community setting"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Layered gradient: dark at top for readability, strong white fade at bottom */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.28) 0%, rgba(0,0,0,0.06) 40%, rgba(255,255,255,0) 65%, rgba(255,255,255,1) 100%)",
          }}
        />

        {/* ── Overlaid org badge top-left ── */}
        <div className="absolute top-8 left-0 right-0 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center gap-3">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
              style={{
                backgroundColor: "rgba(255,255,255,0.15)",
                backdropFilter: "blur(8px)",
                border: "1px solid rgba(255,255,255,0.3)",
              }}
            >
              <span
                className="font-sans font-bold text-white"
                style={{ fontSize: "0.6875rem", letterSpacing: "0.12em", textTransform: "uppercase" }}
              >
                NSS Aligned Organization
              </span>
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: "#F59E0B" }}
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ── Editorial text block — on white canvas below image ── */}
      <div className="relative bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Pull the text block up over the image fade */}
          <div
            style={{ marginTop: "-5rem" }}
            className="relative"
          >
            {/* Left-aligned editorial headline */}
            <div className="max-w-4xl">
              {/* Eyebrow */}
              <div className="flex items-center gap-3 mb-6">
                <span
                  className="font-sans font-bold"
                  style={{
                    color: "var(--accent)",
                    fontSize: "0.6875rem",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                  }}
                >
                  Project Sankalp
                </span>
                <span
                  className="flex-1"
                  style={{
                    height: "1px",
                    backgroundColor: "var(--accent)",
                    maxWidth: "3rem",
                    opacity: 0.6,
                  }}
                  aria-hidden="true"
                />
              </div>

              {/* Main headline — large editorial serif */}
              <h1
                className="font-serif font-black text-[#0F172A]"
                style={{
                  fontSize: "clamp(2.75rem, 7vw, 5.5rem)",
                  lineHeight: 1.04,
                  letterSpacing: "-0.03em",
                  marginBottom: "1.75rem",
                }}
              >
                {title}
              </h1>

              {/* Mission tagline */}
              <p
                className="font-sans text-slate-600"
                style={{
                  fontSize: "clamp(1rem, 1.6vw, 1.2rem)",
                  lineHeight: 1.78,
                  maxWidth: "36rem",
                  marginBottom: "2.5rem",
                }}
              >
                {tagline}
              </p>

              {/* CTA row */}
              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <Link
                  href={primaryCta.link}
                  id="hero-join-cta"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 font-sans font-bold text-white rounded-md transition-all hover:opacity-90 hover:-translate-y-0.5 focus:outline-none"
                  style={{
                    backgroundColor: "#0F172A",
                    fontSize: "0.1rem",
                    textDecoration: "none",
                    letterSpacing: "0.01em",
                  }}
                >
                  {primaryCta.text}
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M3 8H13M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>

                <Link
                  href={secondaryCta.link}
                  id="hero-explore-cta"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 font-sans font-bold rounded-md border-2 transition-all hover:-translate-y-0.5 hover:bg-slate-50 focus:outline-none"
                  style={{
                    color: "#0F172A",
                    borderColor: "#E2E8F0",
                    backgroundColor: "transparent",
                    fontSize: "0.1rem",
                    textDecoration: "none",
                    letterSpacing: "0.01em",
                  }}
                >
                  {secondaryCta.text}
                </Link>
              </div>
            </div>

            {/* ── Scrolling stat strip ── */}
            <div
              className="mt-16 sm:mt-20 pt-10 border-t grid grid-cols-2 sm:grid-cols-4 gap-8"
              style={{ borderColor: "#F1F5F9" }}
            >
              {[
                { value: "5000+", label: "Students Reached" },
                { value: "100+", label: "Community Initiatives" },
                { value: "300+", label: "Active Volunteers" },
                { value: "25+", label: "Partner Institutions" },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span
                    className="font-serif font-black text-[#0F172A]"
                    style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", letterSpacing: "-0.03em", lineHeight: 1 }}
                  >
                    {stat.value}
                  </span>
                  <span
                    className="font-sans font-semibold mt-2 uppercase tracking-wider"
                    style={{ color: "#94A3B8", fontSize: "0.7rem" }}
                  >
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

          </div>

          {/* Bottom spacing */}
          <div className="pb-20 sm:pb-28" />
        </div>
      </div>
    </section>
  );
}
