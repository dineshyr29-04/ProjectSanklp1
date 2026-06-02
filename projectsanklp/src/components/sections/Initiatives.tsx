import React from "react";
import Image from "next/image";
import { siteConfig } from "../../config/org";

export default function Initiatives() {
  const initiatives = siteConfig.initiatives;

  return (
    <section id="initiatives" className="bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 sm:py-32">
        {/* Section header */}
        <div className="max-w-2xl mb-16 sm:mb-20">
          <p className="eyebrow mb-5" style={{ color: "var(--accent)" }}>
            Our Initiatives
          </p>
          <h2
            className="font-serif font-black text-[#0F172A]"
            style={{
              fontSize: "clamp(2rem, 4vw, 3.25rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            Work that creates lasting change.
          </h2>
        </div>

        {/* Alternating left-right initiative layout */}
        <div className="space-y-20 sm:space-y-28">
          {initiatives.map((initiative, index) => {
            const isEven = index % 2 === 0;
            return (
              <article
                key={initiative.id}
                id={`initiative-${initiative.id}`}
                className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                  isEven ? "" : "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1"
                }`}
              >
                {/* Image */}
                <div className="relative overflow-hidden rounded-2xl" style={{ aspectRatio: "16/10" }}>
                  <Image
                    src={initiative.image}
                    alt={initiative.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center transition-transform duration-700 hover:scale-[1.03]"
                  />
                  {/* Category tag */}
                  <div className="absolute top-5 left-5">
                    <span
                      className="inline-block px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider"
                      style={{
                        backgroundColor: "rgba(255,255,255,0.9)",
                        color: "#0F172A",
                        backdropFilter: "blur(4px)",
                        letterSpacing: "0.08em",
                        fontSize: "0.6875rem",
                      }}
                    >
                      {initiative.category}
                    </span>
                  </div>
                </div>

                {/* Text content */}
                <div>
                  <h3
                    className="font-serif font-black text-[#0F172A] mb-5"
                    style={{
                      fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                      lineHeight: 1.12,
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {initiative.title}
                  </h3>

                  <p
                    className="font-sans text-slate-600 mb-8"
                    style={{ fontSize: "1.0625rem", lineHeight: 1.8 }}
                  >
                    {initiative.description}
                  </p>

                  {/* Impact stat */}
                  <div
                    className="flex items-start gap-4 p-5 rounded-xl"
                    style={{ backgroundColor: "#FEF9EE", border: "1px solid #FDE68A" }}
                  >
                    <div
                      className="flex-shrink-0 mt-0.5"
                      style={{ color: "var(--accent)" }}
                    >
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                        <path d="M3 10L7.5 14.5L17 5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <p
                      className="font-sans font-semibold text-[#0F172A]"
                      style={{ fontSize: "0.9375rem", lineHeight: 1.6 }}
                    >
                      {initiative.impact}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
