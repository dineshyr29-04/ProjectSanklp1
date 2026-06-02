import React from "react";
import { siteConfig } from "../../config/org";

const categoryColors: Record<string, { bg: string; text: string }> = {
  "Leadership Program": { bg: "#EFF6FF", text: "#1D4ED8" },
  "Awareness Campaign": { bg: "#F0FDF4", text: "#15803D" },
  Hackathon: { bg: "#FFF7ED", text: "#C2410C" },
  "Community Drive": { bg: "#FAF5FF", text: "#7E22CE" },
  Workshop: { bg: "#FFFBEB", text: "#B45309" },
  "Social Project": { bg: "#F0FDF4", text: "#047857" },
};

export default function EventsTimeline() {
  const events = siteConfig.events;

  return (
    <section id="events-activities" className="bg-[#FAFAF8] border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 sm:py-32">
        {/* Section header */}
        <div className="max-w-2xl mb-16 sm:mb-20">
          <p className="eyebrow mb-5" style={{ color: "var(--accent)" }}>
            Events & Activities
          </p>
          <h2
            className="font-serif font-black text-[#0F172A]"
            style={{
              fontSize: "clamp(2rem, 4vw, 3.25rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            Where service comes to life.
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line — desktop */}
          <div
            className="hidden sm:block absolute left-[7.5rem] top-0 bottom-0 w-px"
            style={{ backgroundColor: "#E2E8F0" }}
            aria-hidden="true"
          />

          <ol className="space-y-0" aria-label="Events timeline">
            {events.map((event, index) => {
              const colors = categoryColors[event.category] || { bg: "#F8FAFC", text: "#475569" };
              const isLast = index === events.length - 1;

              return (
                <li
                  key={event.id}
                  id={`event-${event.id}`}
                  className={`relative flex flex-col sm:flex-row gap-6 sm:gap-0 ${isLast ? "pb-0" : "pb-12"}`}
                >
                  {/* Date column — desktop */}
                  <div className="hidden sm:flex w-[7.5rem] flex-shrink-0 pt-1 justify-end pr-8">
                    <span
                      className="font-sans font-bold text-right"
                      style={{ fontSize: "0.75rem", color: "#94A3B8", letterSpacing: "0.04em" }}
                    >
                      {event.date}
                    </span>
                  </div>

                  {/* Timeline dot — desktop */}
                  <div
                    className="hidden sm:flex absolute flex-shrink-0 items-center justify-center"
                    style={{ left: "7.5rem", top: "0.35rem", transform: "translateX(-50%)" }}
                    aria-hidden="true"
                  >
                    <div
                      className="w-3 h-3 rounded-full border-2 bg-white"
                      style={{ borderColor: "var(--accent)" }}
                    />
                  </div>

                  {/* Event content */}
                  <div className="sm:pl-10 flex-1">
                    {/* Mobile date */}
                    <span
                      className="block sm:hidden font-sans font-bold mb-2"
                      style={{ fontSize: "0.75rem", color: "#94A3B8", letterSpacing: "0.04em" }}
                    >
                      {event.date}
                    </span>

                    {/* Category tag */}
                    <span
                      className="inline-block px-3 py-1 rounded-full font-bold mb-3"
                      style={{
                        backgroundColor: colors.bg,
                        color: colors.text,
                        fontSize: "0.6875rem",
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                        fontFamily: "var(--font-sans)",
                        fontWeight: 700,
                      }}
                    >
                      {event.category}
                    </span>

                    {/* Event title */}
                    <h3
                      className="font-serif font-bold text-[#0F172A] mb-2"
                      style={{
                        fontSize: "clamp(1.125rem, 2vw, 1.375rem)",
                        letterSpacing: "-0.01em",
                        lineHeight: 1.3,
                      }}
                    >
                      {event.title}
                    </h3>

                    {/* Description */}
                    <p
                      className="font-sans text-slate-600 mb-3"
                      style={{ fontSize: "0.9375rem", lineHeight: 1.75 }}
                    >
                      {event.description}
                    </p>

                    {/* Location */}
                    <p
                      className="font-sans font-semibold flex items-center gap-1.5"
                      style={{ fontSize: "0.8125rem", color: "#94A3B8" }}
                    >
                      <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
                        <path d="M6.5 1C4.567 1 3 2.567 3 4.5C3 7.25 6.5 12 6.5 12C6.5 12 10 7.25 10 4.5C10 2.567 8.433 1 6.5 1ZM6.5 6C5.672 6 5 5.328 5 4.5C5 3.672 5.672 3 6.5 3C7.328 3 8 3.672 8 4.5C8 5.328 7.328 6 6.5 6Z" fill="currentColor" />
                      </svg>
                      {event.location}
                    </p>

                    {/* Separator */}
                    {!isLast && (
                      <div
                        className="mt-10 sm:hidden border-b"
                        style={{ borderColor: "#E2E8F0" }}
                      />
                    )}
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
