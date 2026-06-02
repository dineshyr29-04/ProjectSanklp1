import React from "react";
import { siteConfig } from "../../config/org";
import { IconRenderer } from "../ui/Icons";

export default function Impact() {
  const { title, subtitle, stats, caseStudies } = siteConfig.impact;
  const testimonials = siteConfig.testimonials;

  return (
    <section id="impact" className="py-24 sm:py-32 relative overflow-hidden bg-white dark:bg-black">
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[color:var(--accent)]/10 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          <h2 className="text-base font-semibold uppercase tracking-wider text-[color:var(--accent)] mb-3">
            Our Footprint
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight mb-6">
            {title}
          </p>
          <div className="w-12 h-1 bg-[color:var(--accent)] mx-auto rounded-full mb-6" />
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            {subtitle}
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-24 sm:mb-32">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="glass-panel rounded-2xl p-6 sm:p-8 text-center hover:scale-[1.02] transition-all duration-200"
            >
              <div className="w-10 h-10 rounded-lg bg-[color:var(--card)] text-[color:var(--accent)] flex items-center justify-center mx-auto mb-4">
                <IconRenderer name={stat.icon} size={20} />
              </div>
              <p className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-950 dark:text-white mb-2">
                {stat.value}
              </p>
              <p className="text-xs sm:text-sm font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Case Studies */}
        <div className="mb-24 sm:mb-32">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white text-center mb-16">
            Stories of Transformation
          </h3>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {caseStudies.map((study, index) => (
              <article
                key={index}
                className="flex flex-col bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200/50 dark:border-zinc-800/50 rounded-2xl p-6 sm:p-8 hover:shadow-md transition-shadow"
              >
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-[color:var(--card)] text-xs font-semibold text-[color:var(--accent)] mb-6 self-start">
                  {study.category}
                </div>
                <h4 className="text-xl sm:text-2xl font-bold text-zinc-950 dark:text-white mb-6">
                  {study.title}
                </h4>
                
                {/* Challenge, Solution, Result details */}
                <div className="space-y-4 flex-1">
                  <div>
                    <h5 className="text-xs font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-1">
                      The Challenge
                    </h5>
                    <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
                      {study.challenge}
                    </p>
                  </div>
                  <div>
                    <h5 className="text-xs font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-1">
                      The Solution
                    </h5>
                    <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
                      {study.solution}
                    </p>
                  </div>
                  <div className="pt-2 border-t border-zinc-200/60 dark:border-zinc-800/60">
                    <h5 className="text-xs font-bold uppercase tracking-wider text-[color:var(--accent)] mb-1">
                      The Outcome
                    </h5>
                    <p className="text-sm sm:text-base font-medium text-zinc-800 dark:text-zinc-300">
                      {study.result}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-zinc-900 dark:text-white text-center mb-12">
            Voices from Our Cohorts
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="bg-zinc-50 dark:bg-zinc-900/30 border border-zinc-200/40 dark:border-zinc-800/40 rounded-2xl p-6 sm:p-8 flex flex-col justify-between"
              >
                <p className="text-sm sm:text-base italic text-zinc-700 dark:text-zinc-300 leading-relaxed mb-6">
                  “{item.quote}”
                </p>
                <div>
                  <p className="text-sm font-bold text-zinc-950 dark:text-white">
                    {item.author}
                  </p>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">
                    {item.info}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
