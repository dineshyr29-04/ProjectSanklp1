import React from "react";
import Link from "next/link";
import { siteConfig } from "../../config/org";

export default function Hero() {
  const { title, tagline, primaryCta, secondaryCta } = siteConfig.hero;

  return (
    <section className="relative overflow-hidden py-20 sm:py-32 flex items-center justify-center bg-white dark:bg-[#050f08]">
      {/* Decorative clean border grid */}
      <div className="absolute inset-0 border-b border-emerald-800/10 dark:border-emerald-500/10 pointer-events-none z-0" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 flex flex-col items-center">
        {/* Double-bordered Hero Box */}
        <div className="border-4 border-double border-emerald-800 dark:border-emerald-500 p-8 sm:p-12 bg-white dark:bg-zinc-900 max-w-4xl shadow-sm">
          {/* Organization Name Tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-emerald-800 dark:border-emerald-500 text-xs font-mono font-bold text-emerald-800 dark:text-emerald-400 mb-6">
            [ {siteConfig.orgName.toUpperCase()} SOCIAL IMPACT ]
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-emerald-950 dark:text-emerald-100 leading-[1.15] mb-6">
            {title.toUpperCase()}
          </h1>

          {/* Tagline */}
          <p className="text-sm sm:text-base md:text-lg text-emerald-900/80 dark:text-emerald-300 max-w-2xl mx-auto leading-relaxed mb-8">
            {tagline}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto">
            <Link
              href="/members"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 text-xs font-mono font-bold tracking-widest uppercase text-white bg-emerald-800 hover:bg-white hover:text-emerald-800 border-2 border-emerald-800 transition-all duration-200"
            >
              [ {primaryCta.text.toUpperCase()} ]
            </Link>
            <Link
              href="/events"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 text-xs font-mono font-bold tracking-widest uppercase text-emerald-800 dark:text-emerald-400 bg-white dark:bg-zinc-900 hover:bg-emerald-800 hover:text-white border-2 border-emerald-800 dark:border-emerald-500 transition-all duration-200"
            >
              [ EXPLORE EVENTS ]
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

