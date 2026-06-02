import React from "react";
import Link from "next/link";
import { siteConfig } from "../../config/org";

const avatarColors = ["#0F172A", "#1E3A5F", "#10B981", "#0F4C3A"];

function getInitials(name: string): string {
  const parts = name.trim().split(" ");
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

export default function TeamPreview() {
  const { members } = siteConfig.team;

  return (
    <section id="team-preview" className="bg-[#FAFAF8] border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 sm:py-28">
        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <p className="eyebrow mb-4" style={{ color: "var(--accent)" }}>
              Core Team
            </p>
            <h2
              className="font-serif font-black text-[#0F172A]"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.08, letterSpacing: "-0.02em" }}
            >
              The people behind the mission.
            </h2>
          </div>
          <Link
            href="/core-team"
            className="font-sans font-bold flex-shrink-0 hover:underline"
            style={{ color: "var(--accent)", fontSize: "0.875rem", textDecoration: "none" }}
          >
            Meet the full team →
          </Link>
        </div>

        {/* Compact 4-column team strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 lg:gap-12">
          {members.map((member, index) => (
            <div key={member.name} id={`team-preview-${index + 1}`} className="flex flex-col items-center text-center">
              {/* Avatar */}
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center mb-4 flex-shrink-0"
                style={{ backgroundColor: avatarColors[index % avatarColors.length] }}
                aria-hidden="true"
              >
                <span
                  className="font-serif font-black text-white"
                  style={{ fontSize: "1.5rem", letterSpacing: "-0.02em" }}
                >
                  {getInitials(member.name)}
                </span>
              </div>

              <h3
                className="font-serif font-bold text-[#0F172A] mb-1"
                style={{ fontSize: "1rem", letterSpacing: "-0.01em", lineHeight: 1.3 }}
              >
                {member.name}
              </h3>
              <p
                className="font-sans font-bold uppercase tracking-wider"
                style={{ color: "var(--accent)", fontSize: "0.6rem", letterSpacing: "0.08em" }}
              >
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
