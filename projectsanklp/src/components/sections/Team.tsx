import React from "react";
import { siteConfig } from "../../config/org";

const avatarColors = ["#0F172A", "#1E3A5F", "#10B981", "#0F4C3A"];

function getInitials(name: string): string {
  const parts = name.trim().split(" ");
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

export default function Team() {
  const { title, subtitle, members } = siteConfig.team;

  return (
    <section id="core-team" className="bg-[#FAFAF8] border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 sm:py-32">
        {/* Section header */}
        <div className="max-w-2xl mb-16 sm:mb-20">
          <p className="eyebrow mb-5" style={{ color: "var(--accent)" }}>
            Core Team
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

        {/* Team grid — clean profiles */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {members.map((member, index) => (
            <article
              key={member.name}
              id={`team-member-${index + 1}`}
              className="flex flex-col"
            >
              {/* Portrait with initial fallback */}
              <div
                className="relative mb-5 overflow-hidden rounded-2xl flex items-center justify-center"
                style={{ aspectRatio: "1/1", backgroundColor: avatarColors[index % avatarColors.length] }}
              >
                {/* Initials fallback — shown always since no real photos */}
                <span
                  className="font-serif font-black text-white select-none"
                  style={{ fontSize: "3rem", letterSpacing: "-0.02em" }}
                  aria-hidden="true"
                >
                  {getInitials(member.name)}
                </span>
              </div>

              {/* Name */}
              <h3
                className="font-serif font-black text-[#0F172A] mb-1"
                style={{
                  fontSize: "1.25rem",
                  letterSpacing: "-0.01em",
                  lineHeight: 1.25,
                }}
              >
                {member.name}
              </h3>

              {/* Role — orange accent */}
              <p
                className="font-sans font-bold mb-3"
                style={{ color: "var(--accent)", fontSize: "0.75rem", letterSpacing: "0.06em", textTransform: "uppercase" }}
              >
                {member.role}
              </p>

              {/* Bio */}
              <p
                className="font-sans text-slate-500 flex-1"
                style={{ fontSize: "0.875rem", lineHeight: 1.75 }}
              >
                {member.bio}
              </p>

              {/* Email link */}
              <a
                href={`mailto:${member.email}`}
                className="mt-4 font-sans font-semibold hover:underline"
                style={{ color: "var(--accent)", fontSize: "0.8125rem" }}
              >
                {member.email}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
