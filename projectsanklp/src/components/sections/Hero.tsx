import React from "react";
import { siteConfig } from "../../config/org";
import { ArrowUpRight } from "../ui/Icons";

export default function Hero() {
  const { title, tagline, primaryCta, secondaryCta } = siteConfig.hero;

  return (
    <section className="relative overflow-hidden py-24 sm:py-32 md:py-40 flex items-center justify-center min-h-[85vh]">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-indigo-600/10 dark:bg-indigo-500/15 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-10 right-10 w-[250px] h-[250px] bg-emerald-500/5 dark:bg-emerald-400/10 rounded-full blur-[60px] pointer-events-none z-0" />

      {/* Decorative grids */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-70 z-0 pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 flex flex-col items-center">
        {/* Organization Name Pill */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 dark:bg-indigo-950/30 dark:border-indigo-900/50 text-xs sm:text-sm font-semibold text-indigo-700 dark:text-indigo-300 mb-6 shadow-sm animate-fade-in">
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400 animate-pulse" />
          {siteConfig.orgName} Social Innovation
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-white max-w-4xl leading-[1.15] sm:leading-[1.1] mb-8 animate-fade-in-up">
          {title}
        </h1>

        {/* Tagline */}
        <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl leading-relaxed mb-10 animate-fade-in-up delay-100">
          {tagline}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto animate-fade-in-up delay-200">
          <a
            href={primaryCta.link}
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 rounded-xl shadow-lg hover:shadow-indigo-500/20 dark:hover:shadow-indigo-500/10 hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            {primaryCta.text}
            <ArrowUpRight size={18} className="ml-2" />
          </a>
          <a
            href={secondaryCta.link}
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-zinc-800 dark:text-zinc-200 bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-sm hover:shadow transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            {secondaryCta.text}
          </a>
        </div>
      </div>
    </section>
  );
}
