import React from "react";
import { siteConfig } from "../../config/org";

// Inline vector logo renderer for partners to prevent broken image references
function PartnerLogo({ type }: { type: string }) {
  switch (type.toLowerCase()) {
    case "ecogrid":
      return (
        <div className="flex items-center gap-2">
          <svg className="w-6 h-6 text-[color:var(--accent)]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L2 22h9v-9h2v9h9L12 2zm0 4.84L18.77 20h-4.77v-9h-4v9H5.23L12 6.84z" />
          </svg>
          <span className="font-extrabold tracking-tight text-black">ECOGRID</span>
        </div>
      );
    case "apex":
      return (
        <div className="flex items-center gap-2">
          <svg className="w-6 h-6 text-[color:var(--accent)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M12 2L2 22h20L12 2zM12 6l6.5 13h-13L12 6z" />
          </svg>
          <span className="font-extrabold tracking-tight text-black">APEX UNIV</span>
        </div>
      );
    case "veloce":
      return (
        <div className="flex items-center gap-2">
          <svg className="w-6 h-6 text-[color:var(--accent)]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          <span className="font-extrabold tracking-tight text-black">VELOCE</span>
        </div>
      );
    case "impact":
      return (
        <div className="flex items-center gap-2">
          <svg className="w-6 h-6 text-[color:var(--accent)]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
          <span className="font-extrabold tracking-tight text-black">IMPACT FOUNDATION</span>
        </div>
      );
    default:
      return <span className="font-bold text-zinc-400">PARTNER</span>;
  }
}

export default function Partners() {
  const { title, subtitle, list } = siteConfig.partners;

  return (
    <section className="py-20 relative overflow-hidden bg-white border-t border-b border-zinc-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base font-semibold uppercase tracking-wider text-[color:var(--accent)] mb-3">
            Collaborators
          </h2>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white mb-4">
            {title}
          </h3>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
            {subtitle}
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {list.map((partner, index) => (
            <div
              key={index}
              className="bg-white dark:bg-zinc-900 border border-zinc-200/40 dark:border-zinc-800/40 rounded-2xl p-6 flex flex-col items-center justify-between text-center hover:shadow-sm transition-shadow"
            >
              {/* Logo Wrapper */}
              <div className="h-16 flex items-center justify-center mb-4">
                <PartnerLogo type={partner.logoType} />
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mt-2">
                {partner.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
