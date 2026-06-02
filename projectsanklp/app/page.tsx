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
      <main id="main-content" className="flex-grow bg-white dark:bg-[#05160c]">
        {/* Hero Section */}
        <Hero />

        {/* Core Mission & Vision */}
        <section className="py-16 sm:py-24 border-t border-emerald-50 dark:border-emerald-950/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Mission Box */}
              <div className="border border-emerald-100 dark:border-[#0f766e]/30 p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#062210] shadow-xs">
                <div className="inline-block px-3 py-1 bg-emerald-50 dark:bg-[#062e15] rounded-full text-xs font-bold text-emerald-800 dark:text-emerald-350 mb-4">
                  Our Mission
                </div>
                <h2 className="text-2xl font-black text-emerald-950 dark:text-emerald-100 mb-4">
                  Democratizing Tech & Education
                </h2>
                <p className="text-sm sm:text-base text-emerald-900/80 dark:text-emerald-300 leading-relaxed">
                  {mission}
                </p>
              </div>

              {/* Vision Box */}
              <div className="border border-[#86efac]/30 dark:border-[#0f766e]/30 p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#062210] shadow-xs">
                <div className="inline-block px-3 py-1 bg-emerald-50 dark:bg-[#062e15] rounded-full text-xs font-bold text-emerald-800 dark:text-emerald-350 mb-4">
                  Our Vision
                </div>
                <h2 className="text-2xl font-black text-emerald-950 dark:text-emerald-100 mb-4">
                  A Digitally Inclusive Future
                </h2>
                <p className="text-sm sm:text-base text-emerald-900/80 dark:text-emerald-300 leading-relaxed">
                  {vision}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Explore Subpages Shortcuts */}
        <section className="py-16 sm:py-24 bg-emerald-50/20 dark:bg-zinc-950/20 border-t border-b border-emerald-50 dark:border-emerald-950/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="inline-block px-3 py-1 bg-emerald-50 dark:bg-[#062e15] rounded-full text-xs font-bold text-emerald-800 dark:text-emerald-300">Browse Directory</span>
              <h2 className="text-3xl font-black text-emerald-950 dark:text-emerald-100 mt-3">Explore the Project</h2>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Event link */}
              <Link href="/events" className="group border border-emerald-100 hover:border-emerald-400 dark:border-[#0f766e]/30 dark:hover:border-emerald-500 p-8 rounded-3xl bg-white dark:bg-[#062210] flex flex-col justify-between transition-all duration-200 hover:shadow-md">
                <div>
                  <span className="text-xs font-bold text-emerald-500 block mb-3">01 // Directory</span>
                  <h3 className="text-lg font-black text-emerald-900 dark:text-emerald-100 mb-2">EVENTS</h3>
                  <p className="text-xs text-emerald-900/80 dark:text-emerald-350 leading-relaxed">
                    Check out all our past and upcoming community workshops, smart lab launches, and timeline milestones.
                  </p>
                </div>
                <div className="text-xs font-bold text-emerald-700 dark:text-emerald-400 group-hover:text-emerald-500 transition-colors mt-8">
                  View Events →
                </div>
              </Link>

              {/* Members link */}
              <Link href="/members" className="group border border-emerald-100 hover:border-emerald-400 dark:border-[#0f766e]/30 dark:hover:border-emerald-500 p-8 rounded-3xl bg-white dark:bg-[#062210] flex flex-col justify-between transition-all duration-200 hover:shadow-md">
                <div>
                  <span className="text-xs font-bold text-emerald-500 block mb-3">02 // Directory</span>
                  <h3 className="text-lg font-black text-emerald-900 dark:text-emerald-100 mb-2">MEMBERS</h3>
                  <p className="text-xs text-emerald-900/80 dark:text-emerald-350 leading-relaxed">
                    Read cohort testimonials, see volunteer activities, and submit your membership application.
                  </p>
                </div>
                <div className="text-xs font-bold text-emerald-700 dark:text-emerald-400 group-hover:text-emerald-500 transition-colors mt-8">
                  Volunteer Now →
                </div>
              </Link>

              {/* Partners link */}
              <Link href="/partners" className="group border border-emerald-100 hover:border-emerald-400 dark:border-[#0f766e]/30 dark:hover:border-emerald-500 p-8 rounded-3xl bg-white dark:bg-[#062210] flex flex-col justify-between transition-all duration-200 hover:shadow-md">
                <div>
                  <span className="text-xs font-bold text-emerald-500 block mb-3">03 // Directory</span>
                  <h3 className="text-lg font-black text-emerald-900 dark:text-emerald-100 mb-2">PARTNERS</h3>
                  <p className="text-xs text-emerald-900/80 dark:text-emerald-350 leading-relaxed">
                    Meet the organizations donating hardware, infrastructure, and operational support to scale our smart labs.
                  </p>
                </div>
                <div className="text-xs font-bold text-emerald-700 dark:text-emerald-400 group-hover:text-emerald-500 transition-colors mt-8">
                  Our Sponsors →
                </div>
              </Link>

              {/* Core Team link */}
              <Link href="/core-team" className="group border border-emerald-100 hover:border-emerald-400 dark:border-[#0f766e]/30 dark:hover:border-emerald-500 p-8 rounded-3xl bg-white dark:bg-[#062210] flex flex-col justify-between transition-all duration-200 hover:shadow-md">
                <div>
                  <span className="text-xs font-bold text-emerald-500 block mb-3">04 // Directory</span>
                  <h3 className="text-lg font-black text-emerald-900 dark:text-emerald-100 mb-2">CORE TEAM</h3>
                  <p className="text-xs text-emerald-900/80 dark:text-emerald-350 leading-relaxed">
                    Get in touch with the founders, curriculum designers, and community coordinators leading Project Sankalp.
                  </p>
                </div>
                <div className="text-xs font-bold text-emerald-700 dark:text-emerald-400 group-hover:text-emerald-500 transition-colors mt-8">
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
              <span className="inline-block px-3 py-1 bg-emerald-50 dark:bg-[#062e15] rounded-full text-xs font-bold text-emerald-800 dark:text-emerald-300">What We Run</span>
              <h2 className="text-3xl font-black text-emerald-950 dark:text-emerald-100 mt-3">Active Initiatives</h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              {programsList.map((program) => (
                <div key={program.id} className="border border-emerald-100 dark:border-[#0f766e]/30 p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#062210] flex flex-col justify-between shadow-xs">
                  <div>
                    <div className="flex items-center justify-between mb-4 pb-2 border-b border-emerald-100/35">
                      <span className="text-xs font-bold text-emerald-500">
                        {program.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-black text-emerald-900 dark:text-emerald-100 mb-3">
                      {program.title}
                    </h3>
                    <p className="text-sm text-emerald-900/80 dark:text-emerald-350 leading-relaxed mb-6">
                      {program.description}
                    </p>
                  </div>
                  <Link
                    href="/members"
                    className="inline-flex items-center justify-center px-6 py-2.5 text-xs font-bold text-emerald-800 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950 hover:bg-[#10b981] hover:text-white rounded-full transition-colors w-full sm:w-auto text-center"
                  >
                    {program.ctaText} →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-16 sm:py-24 bg-emerald-50/10 dark:bg-zinc-950/10 border-t border-b border-emerald-50 dark:border-emerald-950/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block px-3 py-1 bg-emerald-50 dark:bg-[#062e15] rounded-full text-xs font-bold text-emerald-800 dark:text-emerald-300">How We Work</span>
              <h2 className="text-3xl font-black text-emerald-950 dark:text-emerald-100 mt-3">Our Core Values</h2>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((val, idx) => (
                <div key={idx} className="border border-emerald-100 dark:border-[#0f766e]/20 p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#062210] text-left">
                  <div className="text-xs font-bold text-emerald-500 mb-3">
                    0{idx + 1} // Value
                  </div>
                  <h3 className="text-lg font-black text-emerald-900 dark:text-emerald-100 mb-2">
                    {val.title}
                  </h3>
                  <p className="text-xs text-emerald-900/80 dark:text-emerald-355 leading-relaxed">
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
              <span className="inline-block px-3 py-1 bg-emerald-50 dark:bg-[#062e15] rounded-full text-xs font-bold text-emerald-800 dark:text-emerald-300">In Their Words</span>
              <h2 className="text-3xl font-black text-emerald-950 dark:text-emerald-100 mt-3">Community Feedback</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((t, idx) => (
                <div key={idx} className="border border-emerald-100 dark:border-[#0f766e]/30 p-8 rounded-3xl bg-white dark:bg-[#062210] flex flex-col justify-between shadow-xs">
                  <p className="text-sm italic text-emerald-900 dark:text-emerald-200 leading-relaxed mb-6">
                    “{t.quote}”
                  </p>
                  <div>
                    <p className="text-sm font-bold text-emerald-800 dark:text-emerald-450">
                      {t.author}
                    </p>
                    <p className="text-xs text-emerald-900/60 dark:text-emerald-400/60 font-mono">
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
