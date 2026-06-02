import React from "react";
import Image from "next/image";
import Link from "next/link";

const stats = [
  { value: "5,000+", label: "Students Reached" },
  { value: "300+",   label: "Active Volunteers" },
  { value: "100+",   label: "Initiatives" },
  { value: "25+",    label: "Partner Institutions" },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full flex flex-col"
      style={{ minHeight: "100svh" }}
      aria-label="Project Sankalp — Hero"
    >
      {/* ─── Full-screen background photograph ─── */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-community.jpg"
          alt="Project Sankalp volunteers and students engaged in community service"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
          draggable={false}
        />

        {/* Overlay — dark vignette top + bottom, subtle center */}
        <div
          className="absolute inset-0"
          style={{
            background: [
              "linear-gradient(to bottom,",
              "  rgba(0,0,0,0.62) 0%,",
              "  rgba(0,0,0,0.34) 30%,",
              "  rgba(0,0,0,0.30) 60%,",
              "  rgba(0,0,0,0.70) 100%",
              ")",
            ].join(" "),
          }}
          aria-hidden="true"
        />
      </div>

      {/* ─── Main centered content ─── */}
      <div className="relative z-10 flex flex-col flex-1 items-center justify-center text-center px-6 sm:px-10 pt-24 pb-40 sm:pb-48">

        {/* NSS-Aligned badge */}
        <div className="mb-7 sm:mb-9">
          
           
        </div>

        {/* Large wordmark heading */}
        <h1
          className="font-serif font-black text-white"
          style={{
            fontSize: "clamp(3rem, 11vw, 8.5rem)",
            lineHeight: 0.95,
            letterSpacing: "-0.035em",
            marginBottom: "clamp(1.25rem, 3vw, 2rem)",
            textShadow: "0 2px 24px rgba(0,0,0,0.30)",
          }}
        >
          Project
          <br />
          Sankalp
        </h1>

        {/* Thin divider */}
        <div
          className="mx-auto mb-7"
          style={{ width: "2.5rem", height: "2px", backgroundColor: "#F59E0B", opacity: 0.9 }}
          aria-hidden="true"
        />

        {/* Mission statement */}
        <p
          className="font-sans text-white max-w-2xl"
          style={{
            fontSize: "clamp(1rem, 2.2vw, 1.3rem)",
            lineHeight: 1.65,
            fontWeight: 400,
            opacity: 0.92,
            marginBottom: "clamp(2rem, 4vw, 2.75rem)",
            textShadow: "0 1px 8px rgba(0,0,0,0.25)",
          }}
        >
          Empowering Communities Through Education,
          <br className="hidden sm:block" />
          Technology &amp; Social Service
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <Link
            href="/members"
            id="hero-join-cta"
            className="inline-flex items-center justify-center gap-2 font-sans font-bold rounded-md transition-all hover:-translate-y-0.5 focus:outline-none"
            style={{
              backgroundColor: "#F59E0B",
              color: "#0F172A",
              fontSize: "0.9375rem",
              padding: "0.9rem 2.25rem",
              textDecoration: "none",
              letterSpacing: "0.01em",
              boxShadow: "0 4px 20px rgba(245,158,11,0.35)",
            }}
          >
            Join Our Community
          </Link>

          <Link
            href="#our-impact"
            id="hero-impact-cta"
            className="inline-flex items-center justify-center gap-2 font-sans font-bold rounded-md border-2 transition-all hover:bg-white/10 hover:-translate-y-0.5 focus:outline-none"
            style={{
              borderColor: "rgba(255,255,255,0.55)",
              color: "#ffffff",
              backgroundColor: "transparent",
              fontSize: "0.9375rem",
              padding: "0.9rem 2.25rem",
              textDecoration: "none",
              letterSpacing: "0.01em",
            }}
          >
            Explore Our Impact
          </Link>
        </div>
      </div>

      {/* ─── Impact metrics bar — anchored to bottom of hero ─── */}
      <div
        className="absolute bottom-0 left-0 right-0 z-10"
        style={{ borderTop: "1px solid rgba(255,255,255,0.12)" }}
      >
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                id={`hero-stat-${i + 1}`}
                className="flex flex-col items-center justify-center text-center py-6 sm:py-7"
                style={{
                  borderRight: i < stats.length - 1 ? "1px solid rgba(255,255,255,0.12)" : "none",
                }}
              >
                {/* Number */}
                <span
                  className="font-serif font-black text-white"
                  style={{
                    fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
                    lineHeight: 1,
                    letterSpacing: "-0.04em",
                    textShadow: "0 1px 8px rgba(0,0,0,0.3)",
                  }}
                >
                  {stat.value}
                </span>
                {/* Orange line */}
                <div
                  className="my-2"
                  style={{ width: "1.5rem", height: "2px", backgroundColor: "#F59E0B" }}
                  aria-hidden="true"
                />
                {/* Label */}
                <span
                  className="font-sans font-semibold text-white uppercase tracking-wider"
                  style={{ fontSize: "0.65rem", opacity: 0.75 }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
