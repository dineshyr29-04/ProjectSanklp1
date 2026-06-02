import React from "react";
import Link from "next/link";
import { siteConfig } from "../../config/org";

export default function Hero() {
  const { title, tagline, primaryCta, secondaryCta } = siteConfig.hero;

  return (
    <section className="relative overflow-hidden py-20 sm:py-32 flex items-center justify-center bg-white dark:bg-[#0f172a]">
      {/* Delicate organic border lines */}
      <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:32px_32px] opacity-5 pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 flex flex-col items-center">
        {/* Soft Rounded Hero Box */}
        <div className="border border-slate-100 dark:border-slate-800/80 p-8 sm:p-16 rounded-3xl bg-slate-50/50 dark:bg-slate-900/30 max-w-4xl shadow-xs">
          {/* Organization Name Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#f8fafc] dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-sans font-bold border border-slate-100 dark:border-slate-700 rounded-full mb-6">
            {siteConfig.orgName} Social Impact
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif font-black tracking-tight text-slate-900 dark:text-white leading-[1.15] mb-6">
            {title}
          </h1>

          {/* Tagline */}
          <p className="text-sm sm:text-base md:text-lg font-sans text-slate-600 dark:text-slate-355 max-w-2xl mx-auto leading-relaxed mb-8">
            {tagline}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto">
            <Link
              href="/members"
              className="relative overflow-hidden w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-xs font-sans font-bold tracking-wider uppercase text-white bg-slate-900 hover:bg-[#10b981] dark:bg-[#10b981] dark:hover:bg-emerald-450 dark:text-slate-950 rounded-full transition-all duration-200 shadow-xs"
            >
              {/* Sweep shine element */}
              <span className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent translate-x-[-100%] translate-y-[-100%] rotate-[45deg] animate-sweep" />
              <span className="relative z-10">{primaryCta.text}</span>
            </Link>
            <Link
              href="/events"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-xs font-sans font-bold tracking-wider uppercase text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full transition-all duration-200 shadow-xs"
            >
              Explore Events
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

