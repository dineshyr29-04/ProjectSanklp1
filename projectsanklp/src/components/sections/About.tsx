import React from "react";
import { siteConfig } from "../../config/org";
import { IconRenderer } from "../ui/Icons";

export default function About() {
  const { title, subtitle, description, mission, vision, values, history } = siteConfig.about;

  return (
    <section id="about" className="py-24 sm:py-32 relative overflow-hidden bg-white">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[color:var(--accent)]/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          <h2 className="text-base font-semibold uppercase tracking-wider text-[color:var(--accent)] mb-3">
            {title}
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight mb-6">
            {subtitle}
          </p>
          <div className="w-12 h-1 bg-[color:var(--accent)] mx-auto rounded-full mb-6" />
          <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
            {description}
          </p>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          <div className="glass-panel rounded-2xl p-8 sm:p-10 shadow-sm relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-2 h-full bg-[color:var(--accent)]" />
            <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white mb-4">Our Mission</h3>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-base sm:text-lg">
              {mission}
            </p>
          </div>
          <div className="glass-panel rounded-2xl p-8 sm:p-10 shadow-sm relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-2 h-full bg-[color:var(--accent)]" />
            <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white mb-4">Our Vision</h3>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-base sm:text-lg">
              {vision}
            </p>
          </div>
        </div>

        {/* Values Grid */}
        <div className="mb-24 sm:mb-32">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white text-center mb-12">
            Our Core Values
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800/80 rounded-2xl p-6 sm:p-8 hover:-translate-y-1 hover:shadow-md transition-all duration-200"
              >
                <div className="w-12 h-12 rounded-xl bg-[color:var(--card)] text-[color:var(--accent)] flex items-center justify-center mb-6">
                  <IconRenderer name={value.icon} size={24} />
                </div>
                <h4 className="text-lg font-bold text-zinc-950 dark:text-white mb-3">
                  {value.title}
                </h4>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline (History) */}
        <div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white text-center mb-16">
            Our Journey So Far
          </h3>
          <div className="relative border-l border-zinc-200 dark:border-zinc-800 max-w-3xl mx-auto pl-6 sm:pl-8">
            {history.map((event, index) => (
              <div key={index} className="mb-10 last:mb-0 relative">
                {/* Timeline Dot */}
                <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-white border-2 border-[color:var(--accent)]">
                  <span className="h-2 w-2 rounded-full bg-[color:var(--accent)]" />
                </span>
                
                {/* Content */}
                <div className="bg-white dark:bg-zinc-900/60 border border-zinc-200/50 dark:border-zinc-800/50 rounded-xl p-6 shadow-sm hover:shadow transition-shadow">
                  <div className="flex flex-wrap items-baseline gap-2 mb-2">
                    <span className="text-lg font-extrabold text-[color:var(--accent)]">
                      {event.year}
                    </span>
                    <h4 className="text-base sm:text-lg font-bold text-zinc-900 dark:text-white">
                      {event.title}
                    </h4>
                  </div>
                  <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {event.description}
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
