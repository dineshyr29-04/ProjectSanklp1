import React from "react";
import { siteConfig } from "../../config/org";

export default function Partners() {
  const { title, subtitle, list } = siteConfig.partners;

  return (
    <section id="partners" className="bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 sm:py-32">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <p className="eyebrow mb-5" style={{ color: "var(--accent)" }}>
            Our Partners
          </p>
          <h2
            className="font-serif font-black text-[#0F172A]"
            style={{
              fontSize: "clamp(2rem, 4vw, 3.25rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            {title}
          </h2>
          <p
            className="font-sans text-slate-500 mt-4"
            style={{ fontSize: "1.0625rem", lineHeight: 1.75 }}
          >
            {subtitle}
          </p>
        </div>

        {/* Partner logo wall — typographic monochrome style */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-px bg-slate-100">
          {list.map((partner) => (
            <div
              key={partner.logoType}
              id={`partner-${partner.logoType}`}
              className="bg-white flex flex-col items-center justify-center text-center px-6 py-10 group hover:bg-[#FAFAF8] transition-colors"
            >
              {/* Monochrome typographic logo */}
              <div
                className="font-sans font-black uppercase tracking-tight text-slate-300 group-hover:text-slate-500 transition-colors mb-3 leading-none"
                style={{ fontSize: "clamp(0.75rem, 1.5vw, 0.875rem)", letterSpacing: "-0.01em" }}
                aria-label={partner.name}
              >
                {partner.name}
              </div>
              <p
                className="font-sans text-slate-400 group-hover:text-slate-500 transition-colors"
                style={{ fontSize: "0.6875rem", lineHeight: 1.5 }}
              >
                {partner.description}
              </p>
            </div>
          ))}
        </div>

        {/* Partnership CTA */}
        <div className="mt-12 text-center">
          <p className="font-sans text-slate-500" style={{ fontSize: "0.9375rem" }}>
            Want to partner with Project Sankalp?{" "}
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="font-bold hover:underline"
              style={{ color: "var(--accent)" }}
            >
              Get in touch →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
