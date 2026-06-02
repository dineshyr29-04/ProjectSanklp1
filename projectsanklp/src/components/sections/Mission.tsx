import React from "react";

const pillars = [
  {
    id: "education",
    number: "01",
    title: "Education",
    description:
      "We believe quality education is the single most powerful equalizer. Through workshops, bootcamps, smart labs, and awareness programs, we make learning accessible to every student — regardless of their background or resources.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M4 12L16 6L28 12L16 18L4 12Z" stroke="#F59E0B" strokeWidth="2" strokeLinejoin="round" />
        <path d="M4 12V22M28 12V22M10 15V24C10 24 12.5 26 16 26C19.5 26 22 24 22 24V15" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: "leadership",
    number: "02",
    title: "Leadership",
    description:
      "True leadership is built through service. We develop the next generation of community leaders — young people who solve problems, inspire action, and take responsibility for the world around them through hands-on programs and mentorship.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <circle cx="16" cy="10" r="4" stroke="#F59E0B" strokeWidth="2" />
        <circle cx="7" cy="22" r="3" stroke="#F59E0B" strokeWidth="2" />
        <circle cx="25" cy="22" r="3" stroke="#F59E0B" strokeWidth="2" />
        <path d="M12 13.5L9 19M20 13.5L23 19M10 22H22" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "community-impact",
    number: "03",
    title: "Community Impact",
    description:
      "Meaningful change happens at the community level. We mobilize students to directly serve the people around them — through drives, campaigns, health initiatives, and social projects that create real, lasting, measurable change on the ground.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M16 4C16 4 6 10 6 18C6 23.5 10.5 28 16 28C21.5 28 26 23.5 26 18C26 10 16 4 16 4Z" stroke="#F59E0B" strokeWidth="2" strokeLinejoin="round" />
        <path d="M12 18L15 21L20 14" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function Mission() {
  return (
    <section id="our-mission" className="bg-[#FAFAF8] border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 sm:py-32">
        {/* Section header */}
        <div className="max-w-2xl mb-16 sm:mb-20">
          <p className="eyebrow mb-5" style={{ color: "var(--accent)" }}>
            Our Mission
          </p>
          <h2
            className="font-serif font-black text-[#0F172A]"
            style={{
              fontSize: "clamp(2rem, 4vw, 3.25rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            Three pillars that guide everything we do.
          </h2>
        </div>

        {/* Three pillars — horizontal editorial layout */}
        <div className="grid md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-slate-200">
          {pillars.map((pillar) => (
            <div
              key={pillar.id}
              id={`pillar-${pillar.id}`}
              className="py-10 md:py-0 md:px-10 first:md:pl-0 last:md:pr-0"
            >
              {/* Icon */}
              <div className="mb-6">{pillar.icon}</div>

              {/* Number + Title */}
              <div className="flex items-baseline gap-3 mb-4">
                <span
                  className="font-serif font-black text-slate-200"
                  style={{ fontSize: "2rem", lineHeight: 1 }}
                >
                  {pillar.number}
                </span>
                <h3
                  className="font-serif font-black text-[#0F172A]"
                  style={{
                    fontSize: "clamp(1.375rem, 2vw, 1.75rem)",
                    letterSpacing: "-0.01em",
                    lineHeight: 1.15,
                  }}
                >
                  {pillar.title}
                </h3>
              </div>

              <p
                className="font-sans text-slate-600"
                style={{ fontSize: "0.9375rem", lineHeight: 1.8 }}
              >
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
