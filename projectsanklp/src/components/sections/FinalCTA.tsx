import React from "react";
import Link from "next/link";

export default function FinalCTA() {
  return (
    <section id="join-us" className="bg-[#0F172A]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24 sm:py-36">
        <div className="max-w-3xl mx-auto text-center">
          {/* Eyebrow */}
          <p
            className="eyebrow mb-8"
            style={{ color: "var(--accent)", letterSpacing: "0.14em" }}
          >
            Be Part of Something Bigger
          </p>

          {/* Main statement */}
          <h2
            className="font-serif font-black text-white mb-6"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.025em",
            }}
          >
            Be Part of Something Bigger Than Yourself.
          </h2>

          {/* Supporting copy */}
          <p
            className="font-sans mb-12 max-w-xl mx-auto"
            style={{ color: "#94A3B8", fontSize: "1.125rem", lineHeight: 1.75 }}
          >
            Join Project Sankalp and help create lasting impact. Whether you lead, volunteer, teach, or simply show up — your contribution matters.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/members"
              id="final-cta-join"
              className="inline-flex items-center justify-center px-8 py-4 font-sans font-bold text-[#0F172A] rounded-md transition-all hover:opacity-90 hover:-translate-y-0.5"
              style={{
                backgroundColor: "var(--accent)",
                fontSize: "0.9375rem",
                textDecoration: "none",
              }}
            >
              Join Us →
            </Link>
            <a
              href={`mailto:info@projectsankalp.org`}
              id="final-cta-contact"
              className="inline-flex items-center justify-center px-8 py-4 font-sans font-bold text-white rounded-md border-2 transition-all hover:bg-white/10 hover:-translate-y-0.5"
              style={{
                borderColor: "rgba(255,255,255,0.2)",
                fontSize: "0.9375rem",
                textDecoration: "none",
              }}
            >
              Get in Touch
            </a>
          </div>

          {/* Decorative divider */}
          <div
            className="mt-16 mx-auto"
            style={{ width: "3rem", height: "3px", backgroundColor: "rgba(245,158,11,0.4)" }}
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}
