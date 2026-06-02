import React from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "../../config/org";

export default function InitiativesPreview() {
  const initiatives = siteConfig.initiatives;

  return (
    <section id="initiatives" className="bg-[#FAFAF8] border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 sm:py-28">
        {/* Header row with link */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <p className="eyebrow mb-4" style={{ color: "var(--accent)" }}>
              Our Initiatives
            </p>
            <h2
              className="font-serif font-black text-[#0F172A]"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.08, letterSpacing: "-0.02em" }}
            >
              Work that creates lasting change.
            </h2>
          </div>
          <Link
            href="/events"
            className="font-sans font-bold flex-shrink-0 hover:underline"
            style={{ color: "var(--accent)", fontSize: "0.875rem", textDecoration: "none" }}
          >
            View all events →
          </Link>
        </div>

        {/* Three initiative cards — horizontal row */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {initiatives.map((initiative, index) => (
            <article
              key={initiative.id}
              id={`initiative-preview-${initiative.id}`}
              className="group flex flex-col overflow-hidden rounded-2xl bg-white border border-slate-100"
              style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}
            >
              {/* Image */}
              <div className="relative overflow-hidden" style={{ aspectRatio: "16/9" }}>
                <Image
                  src={initiative.image}
                  alt={initiative.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.04]"
                />
                <div className="absolute top-4 left-4">
                  <span
                    className="inline-block px-2.5 py-1 rounded-full font-bold"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.9)",
                      color: "#0F172A",
                      fontSize: "0.6rem",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      backdropFilter: "blur(4px)",
                    }}
                  >
                    {initiative.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-6">
                <h3
                  className="font-serif font-black text-[#0F172A] mb-3"
                  style={{ fontSize: "1.25rem", letterSpacing: "-0.01em", lineHeight: 1.25 }}
                >
                  {initiative.title}
                </h3>
                <p
                  className="font-sans text-slate-500 flex-1 mb-5"
                  style={{ fontSize: "0.875rem", lineHeight: 1.75 }}
                >
                  {initiative.description.slice(0, 140)}…
                </p>
                {/* Impact */}
                <p
                  className="font-sans font-semibold"
                  style={{ color: "var(--support)", fontSize: "0.8rem" }}
                >
                  ✓ {initiative.impact}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
