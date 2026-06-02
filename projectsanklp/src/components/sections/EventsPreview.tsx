import React from "react";
import Link from "next/link";
import { siteConfig } from "../../config/org";

const categoryColors: Record<string, { bg: string; text: string }> = {
  "Leadership Program": { bg: "#EFF6FF", text: "#1D4ED8" },
  "Awareness Campaign": { bg: "#F0FDF4", text: "#15803D" },
  Hackathon: { bg: "#FFF7ED", text: "#C2410C" },
  "Community Drive": { bg: "#FAF5FF", text: "#7E22CE" },
  Workshop: { bg: "#FFFBEB", text: "#B45309" },
  "Social Project": { bg: "#F0FDF4", text: "#047857" },
};

export default function EventsPreview() {
  // Show first 4 events on homepage
  const events = siteConfig.events.slice(0, 4);

  return (
    <section id="events-preview" className="bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 sm:py-28">
        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <p className="eyebrow mb-4" style={{ color: "var(--accent)" }}>
              Events & Activities
            </p>
            <h2
              className="font-serif font-black text-[#0F172A]"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.08, letterSpacing: "-0.02em" }}
            >
              Where service comes to life.
            </h2>
          </div>
          <Link
            href="/events"
            className="font-sans font-bold flex-shrink-0 hover:underline"
            style={{ color: "var(--accent)", fontSize: "0.875rem", textDecoration: "none" }}
          >
            See full timeline →
          </Link>
        </div>

        {/* 2-column compact event list */}
        <div className="grid sm:grid-cols-2 gap-6">
          {events.map((event) => {
            const colors = categoryColors[event.category] || { bg: "#F8FAFC", text: "#475569" };
            return (
              <div
                key={event.id}
                id={`event-preview-${event.id}`}
                className="flex gap-5 p-6 rounded-xl border border-slate-100 hover:border-slate-200 transition-colors"
                style={{ backgroundColor: "#fff" }}
              >
                {/* Date pill */}
                <div className="flex-shrink-0 text-center" style={{ minWidth: "3.5rem" }}>
                  <span
                    className="font-sans font-bold text-slate-400 block"
                    style={{ fontSize: "0.6875rem", letterSpacing: "0.06em", textTransform: "uppercase" }}
                  >
                    {event.date.split(" ")[0]}
                  </span>
                  <span
                    className="font-serif font-black text-[#0F172A] block"
                    style={{ fontSize: "1.5rem", lineHeight: 1, letterSpacing: "-0.02em" }}
                  >
                    {event.date.split(" ")[1] || ""}
                  </span>
                </div>

                {/* Divider */}
                <div className="w-px self-stretch bg-slate-100 flex-shrink-0" aria-hidden="true" />

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <span
                    className="inline-block px-2.5 py-0.5 rounded-full font-bold mb-2"
                    style={{
                      backgroundColor: colors.bg,
                      color: colors.text,
                      fontSize: "0.6rem",
                      letterSpacing: "0.07em",
                      textTransform: "uppercase",
                    }}
                  >
                    {event.category}
                  </span>
                  <h3
                    className="font-serif font-bold text-[#0F172A] mb-1"
                    style={{ fontSize: "1rem", letterSpacing: "-0.01em", lineHeight: 1.3 }}
                  >
                    {event.title}
                  </h3>
                  <p
                    className="font-sans text-slate-500"
                    style={{ fontSize: "0.8125rem", lineHeight: 1.6 }}
                  >
                    {event.location}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* View all CTA */}
        <div className="mt-10 text-center">
          <Link
            href="/events"
            className="inline-flex items-center gap-2 font-sans font-bold px-7 py-3 rounded-md border-2 transition-all hover:bg-slate-50 hover:-translate-y-0.5"
            style={{
              color: "#0F172A",
              borderColor: "#E2E8F0",
              fontSize: "0.875rem",
              textDecoration: "none",
            }}
          >
            View all events & activities
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8H13M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
