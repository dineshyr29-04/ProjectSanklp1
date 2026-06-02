import React from "react";
import Link from "next/link";
import { siteConfig } from "../../config/org";

export default function Hero() {
  const { title, tagline, primaryCta, secondaryCta } = siteConfig.hero;

  return (
    <section className="relative overflow-hidden py-20 sm:py-32 flex items-center justify-center bg-white dark:bg-[#0f172a]">
      {/* Delicate organic border lines */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/80 via-[color:var(--accent)]/6 to-transparent [background-size:48rem_48rem] opacity-35 pointer-events-none -z-10" />
      <div className="absolute right-24 bottom-8 w-[520px] h-[320px] bg-[color:var(--accent)]/6 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 flex flex-col items-center">
        {/* Soft Rounded Hero Box */}
        <div className="border border-slate-100 dark:border-slate-800/80 p-8 sm:p-16 rounded-3xl bg-slate-50/50 dark:bg-slate-900/30 max-w-4xl shadow-xs">
          {/* Organization Name Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[color:var(--card)] text-black text-xs font-sans font-bold border border-slate-100 rounded-full mb-6">
            {siteConfig.orgName}
          </div>

          {/* Title */}
          <h1 className="text-[clamp(3.5rem,12vw,8.5rem)] font-serif font-black tracking-[-0.02em] text-slate-900 dark:text-white leading-[0.9] mb-6">
            {title}
          </h1>

          {/* Large pill highlight (premium) */}
          <div className="mx-auto max-w-3xl">
            <div className="inline-flex flex-col items-center bg-[color:var(--card)] rounded-full px-12 py-6 shadow-lg mb-8">
              <div className="text-sm font-sans text-zinc-500 uppercase tracking-wider mb-1">{primaryCta.kicker}</div>
              <div className="text-xl sm:text-2xl font-serif font-black text-zinc-900">
                <span className="opacity-90">{primaryCta.text}</span>
              </div>
              {primaryCta.sub && <div className="text-xs text-[color:var(--accent)] font-semibold mt-2">{primaryCta.sub}</div>}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto">
            <Link
              href="/members"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 text-sm font-bold text-white bg-black hover:bg-[color:var(--accent)] rounded-full transition-all duration-200 shadow-sm"
            >
              {primaryCta.text}
            </Link>
            <Link
              href="/events"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-zinc-800 bg-[color:var(--card)] hover:bg-[color:var(--card)]/80 border border-zinc-100 rounded-full transition-all duration-200"
            >
              Explore Events
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

