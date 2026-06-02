import React from "react";
import Link from "next/link";
import Header from "../src/components/sections/Header";
import Hero from "../src/components/sections/Hero";
import Footer from "../src/components/sections/Footer";
import { siteConfig } from "../src/config/org";

export default function Home() {
  const { mission, vision, values } = siteConfig.about;
  const { list: programsList } = siteConfig.programs;
  const testimonials = siteConfig.testimonials;

  return (
    <>
      <Header />
      <main id="main-content" className="flex-grow bg-white dark:bg-[#0f172a]">
        {/* Hero Section */}
        <Hero />

        {/* Core Mission & Vision */}
        <section className="py-16 sm:py-24 border-t border-slate-100 dark:border-slate-800/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Mission Box */}
              <div className="border border-slate-100 p-8 sm:p-10 rounded-3xl bg-[color:var(--card)] shadow-xs">
                <div className="inline-block px-3 py-1 bg-[color:var(--card)] text-xs font-sans font-bold text-[color:var(--accent)] rounded-full mb-4">
                  Our Mission
                </div>
                <h2 className="text-2xl font-serif font-black text-slate-900 dark:text-white mb-4">
                  Democratizing Tech & Education
                </h2>
                <p className="text-sm sm:text-base font-sans text-slate-600 dark:text-slate-300 leading-relaxed">
                  {mission}
                </p>
              </div>

              {/* Vision Box */}
              <div className="border border-slate-100 p-8 sm:p-10 rounded-3xl bg-[color:var(--card)] shadow-xs">
                <div className="inline-block px-3 py-1 bg-[color:var(--card)] text-xs font-sans font-bold text-[color:var(--accent)] rounded-full mb-4">
                  Our Vision
                </div>
                <h2 className="text-2xl font-serif font-black text-slate-900 dark:text-white mb-4">
                  A Digitally Inclusive Future
                </h2>
                <p className="text-sm sm:text-base font-sans text-slate-600 dark:text-slate-300 leading-relaxed">
                  {vision}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Explore Subpages Shortcuts */}
        <section className="py-16 sm:py-24 bg-slate-50/50 dark:bg-slate-900/20 border-t border-b border-slate-100 dark:border-slate-800/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <span className="inline-block px-3 py-1 bg-[color:var(--card)] border border-slate-100 text-xs font-sans font-bold text-slate-600 rounded-full">Browse Directory</span>
              <h2 className="text-3xl font-serif font-black text-slate-900 dark:text-white mt-3">Explore the Project</h2>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Event link */}
              <Link href="/events" className="group border border-slate-150 hover:border-[color:var(--accent)] p-8 rounded-3xl bg-white flex flex-col justify-between transition-all duration-200 hover:shadow-md">
                <div>
                  <span className="text-xs font-sans font-bold text-slate-400 block mb-3">01 // Directory</span>
                  <h3 className="text-lg font-serif font-black text-slate-900 dark:text-white mb-2">EVENTS</h3>
                  <p className="text-xs font-sans text-slate-600 dark:text-slate-405 leading-relaxed">
                    Check out all our past and upcoming community workshops, smart lab launches, and timeline milestones.
                  </p>
                </div>
                <div className="text-xs font-sans font-bold text-[color:var(--accent)] group-hover:text-[color:var(--accent)] transition-colors mt-8">
                  View Events →
                </div>
              </Link>

              {/* Members link */}
              <Link href="/members" className="group border border-slate-150 hover:border-[color:var(--accent)] p-8 rounded-3xl bg-white flex flex-col justify-between transition-all duration-200 hover:shadow-md">
                <div>
                  <span className="text-xs font-sans font-bold text-slate-400 block mb-3">02 // Directory</span>
                  <h3 className="text-lg font-serif font-black text-slate-900 dark:text-white mb-2">MEMBERS</h3>
                  <p className="text-xs font-sans text-slate-600 dark:text-slate-405 leading-relaxed">
                    Read cohort testimonials, see volunteer activities, and submit your membership application.
                  </p>
                </div>
                <div className="text-xs font-sans font-bold text-[color:var(--accent)] group-hover:text-[color:var(--accent)] transition-colors mt-8">
                  Volunteer Now →
                </div>
              </Link>

              {/* Partners link */}
              <Link href="/partners" className="group border border-slate-150 hover:border-[color:var(--accent)] p-8 rounded-3xl bg-white flex flex-col justify-between transition-all duration-200 hover:shadow-md">
                <div>
                  <span className="text-xs font-sans font-bold text-slate-400 block mb-3">03 // Directory</span>
                  <h3 className="text-lg font-serif font-black text-slate-900 dark:text-white mb-2">PARTNERS</h3>
                  <p className="text-xs font-sans text-slate-600 dark:text-slate-405 leading-relaxed">
                    Meet the organizations donating hardware, infrastructure, and operational support to scale our smart labs.
                  </p>
                </div>
                <div className="text-xs font-sans font-bold text-[color:var(--accent)] group-hover:text-[color:var(--accent)] transition-colors mt-8">
                  Our Sponsors →
                </div>
              </Link>

              {/* Core Team link */}
              <Link href="/core-team" className="group border border-slate-150 hover:border-[color:var(--accent)] p-8 rounded-3xl bg-white flex flex-col justify-between transition-all duration-200 hover:shadow-md">
                <div>
                  <span className="text-xs font-sans font-bold text-slate-400 block mb-3">04 // Directory</span>
                  <h3 className="text-lg font-serif font-black text-slate-900 dark:text-white mb-2">CORE TEAM</h3>
                  <p className="text-xs font-sans text-slate-600 dark:text-slate-405 leading-relaxed">
                    Get in touch with the founders, curriculum designers, and community coordinators leading Project Sankalp.
                  </p>
                </div>
                <div className="text-xs font-sans font-bold text-[color:var(--accent)] group-hover:text-[color:var(--accent)] transition-colors mt-8">
                  Meet Leaders →
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Ongoing Programs */}
        <section className="py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
              <span className="inline-block px-3 py-1 bg-[color:var(--card)] text-xs font-sans font-bold text-[color:var(--accent)] rounded-full">What We Run</span>
              <h2 className="text-3xl font-serif font-black text-slate-900 dark:text-white mt-3">Active Initiatives</h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              {programsList.map((program) => (
                <div key={program.id} className="border border-slate-100 dark:border-slate-800/80 p-8 sm:p-10 rounded-3xl bg-white dark:bg-slate-900/30 flex flex-col justify-between shadow-xs">
                  <div>
                    <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-100">
                      <span className="text-xs font-sans font-bold text-[color:var(--accent)]">
                        {program.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-serif font-black text-slate-900 dark:text-white mb-3">
                      {program.title}
                    </h3>
                    <p className="text-sm font-sans text-slate-600 dark:text-slate-350 leading-relaxed mb-6">
                      {program.description}
                    </p>
                  </div>
                  <Link
                    href="/members"
                    className="inline-flex items-center justify-center px-6 py-2.5 text-xs font-sans font-bold text-slate-800 bg-slate-100 hover:bg-[color:var(--accent)] hover:text-white rounded-full transition-colors w-full sm:w-auto text-center shadow-xs"
                  >
                    {program.ctaText} →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-16 sm:py-24 bg-slate-50/50 dark:bg-slate-900/10 border-t border-b border-slate-100 dark:border-slate-800/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block px-3 py-1 bg-[#f8fafc] dark:bg-slate-800 border border-slate-100 dark:border-slate-700 text-xs font-sans font-bold text-slate-600 dark:text-slate-300 rounded-full">How We Work</span>
              <h2 className="text-3xl font-serif font-black text-slate-900 dark:text-white mt-3">Our Core Values</h2>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((val, idx) => (
                <div key={idx} className="border border-slate-100 dark:border-slate-800/60 p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900/30 text-left">
                  <div className="text-xs font-sans font-bold text-[color:var(--accent)] mb-3">
                    0{idx + 1} // Value
                  </div>
                  <h3 className="text-lg font-serif font-black text-slate-900 dark:text-white mb-2">
                    {val.title}
                  </h3>
                  <p className="text-xs font-sans text-slate-500 dark:text-slate-400 leading-relaxed">
                    {val.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 sm:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="inline-block px-3 py-1 bg-[color:var(--card)] text-xs font-sans font-bold text-[color:var(--accent)] rounded-full">In Their Words</span>
              <h2 className="text-3xl font-serif font-black text-slate-900 dark:text-white mt-3">Community Feedback</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((t, idx) => (
                <div key={idx} className="border border-slate-100 dark:border-slate-800/80 p-8 rounded-3xl bg-white dark:bg-slate-900/30 flex flex-col justify-between shadow-xs">
                  <p className="text-sm italic font-sans text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                    “{t.quote}”
                  </p>
                  <div>
                    <p className="text-sm font-sans font-bold text-slate-900 dark:text-white">
                      {t.author}
                    </p>
                    <p className="text-xs font-sans text-slate-500 dark:text-slate-400">
                      {t.info}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
