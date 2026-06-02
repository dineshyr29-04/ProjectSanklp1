import React from "react";
import { siteConfig } from "../../config/org";

export default function Impact() {
  const { stats, subtitle } = siteConfig.impact;

  return (
    <section id="our-impact" className="bg-[#0F172A]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 sm:py-32">
        {/* Header */}
        <div className="max-w-2xl mb-16 sm:mb-20">
          <p
            className="eyebrow mb-5"
            style={{ color: "var(--accent)" }}
          >
            Our Impact
          </p>
          <h2
            className="font-serif font-black text-white"
            style={{
              fontSize: "clamp(2rem, 4vw, 3.25rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            Numbers that tell a story of service.
          </h2>
          <p
            className="font-sans mt-4"
            style={{ color: "#94A3B8", fontSize: "1.0625rem", lineHeight: 1.75 }}
          >
            {subtitle}
          </p>
        </div>

        {/* Stats — large typography, clean layout */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 divide-y-2 lg:divide-y-0 lg:divide-x-2 divide-slate-700">
          {stats.map((stat, index) => (
            <div
              key={index}
              id={`stat-${stat.icon}`}
              className="py-10 lg:py-0 lg:px-10 first:lg:pl-0 last:lg:pr-0"
            >
              {/* Big number */}
              <p
                className="font-serif font-black text-white mb-3"
                style={{
                  fontSize: "clamp(3rem, 7vw, 5.5rem)",
                  lineHeight: 1,
                  letterSpacing: "-0.04em",
                }}
              >
                {stat.value}
              </p>
              {/* Orange accent line */}
              <div
                className="mb-3"
                style={{
                  width: "2rem",
                  height: "3px",
                  backgroundColor: "var(--accent)",
                }}
              />
              {/* Label */}
              <p
                className="font-sans font-semibold uppercase tracking-wider"
                style={{ color: "#94A3B8", fontSize: "0.75rem" }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* NSS badge strip */}
        <div
          className="mt-16 sm:mt-20 pt-10 border-t border-slate-700 flex flex-col sm:flex-row items-start sm:items-center gap-4"
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border"
            style={{ borderColor: "var(--accent)", backgroundColor: "rgba(245,158,11,0.08)" }}
          >
            <span style={{ color: "var(--accent)", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>
              NSS Aligned
            </span>
          </div>
          <p className="font-sans" style={{ color: "#64748B", fontSize: "0.9375rem", lineHeight: 1.7 }}>
            All programs are aligned with National Service Scheme guidelines and values, conducted under university-recognized volunteer coordination.
          </p>
        </div>
      </div>
    </section>
  );
}
