import React from "react";
import { siteConfig } from "../../config/org";
import { IconRenderer, ArrowUpRight } from "../ui/Icons";

export default function Programs() {
  const { title, subtitle, list } = siteConfig.programs;

  return (
    <section id="programs" className="py-24 sm:py-32 relative overflow-hidden bg-zinc-50 dark:bg-zinc-950/40">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          <h2 className="text-base font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-3">
            What We Do
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight mb-6">
            {title}
          </p>
          <div className="w-12 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto rounded-full mb-6" />
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            {subtitle}
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid sm:grid-cols-2 gap-8 lg:gap-10">
          {list.map((program) => (
            <div
              key={program.id}
              className="bg-white dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800/80 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:-translate-y-1 hover:shadow-md hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-200"
            >
              <div>
                {/* Header Row */}
                <div className="flex items-center justify-between mb-6">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/40 text-xs font-semibold text-indigo-600 dark:text-indigo-400">
                    {program.category}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                    <IconRenderer name={program.icon} size={20} />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-zinc-950 dark:text-white mb-4">
                  {program.title}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed mb-8">
                  {program.description}
                </p>
              </div>

              {/* Action Button */}
              <div>
                <a
                  href={program.ctaLink}
                  className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 bg-indigo-50 hover:bg-indigo-100 dark:bg-indigo-950/30 dark:hover:bg-indigo-950/50 rounded-xl transition-colors w-full sm:w-auto"
                >
                  {program.ctaText}
                  <ArrowUpRight size={16} className="ml-2" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
