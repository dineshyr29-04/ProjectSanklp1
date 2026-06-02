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
      <main id="main-content" className="flex-grow bg-white dark:bg-[#050f08]">
        {/* Hero Section */}
        <Hero />

        {/* Core Mission & Vision */}
        <section className="py-16 sm:py-24 border-t border-emerald-800/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Mission Box */}
              <div className="border-2 border-emerald-800 dark:border-emerald-500 p-8 bg-white dark:bg-zinc-900">
                <div className="text-xs font-mono font-bold text-emerald-800 dark:text-emerald-400 mb-3">
                  [ OUR MISSION ]
                </div>
                <h2 className="text-2xl font-black text-emerald-950 dark:text-emerald-100 mb-4 uppercase">
                  Democratizing Tech & Education
                </h2>
                <p className="text-sm sm:text-base text-emerald-900/80 dark:text-emerald-300 leading-relaxed">
                  {mission}
                </p>
              </div>

              {/* Vision Box */}
              <div className="border-2 border-emerald-800 dark:border-emerald-500 p-8 bg-white dark:bg-zinc-900">
                <div className="text-xs font-mono font-bold text-emerald-800 dark:text-emerald-400 mb-3">
                  [ OUR VISION ]
                </div>
                <h2 className="text-2xl font-black text-emerald-950 dark:text-emerald-100 mb-4 uppercase">
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
        <section className="py-16 sm:py-24 bg-emerald-50/50 dark:bg-zinc-950 border-t border-b border-emerald-800/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-xs font-mono font-bold text-emerald-800 dark:text-emerald-400">[ BROWSE DIRECTORY ]</span>
              <h2 className="text-3xl font-black text-emerald-950 dark:text-emerald-100 uppercase mt-2">Explore the Project</h2>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Event link */}
              <Link href="/events" className="group border-2 border-emerald-800 hover:bg-[#15803d] dark:border-emerald-500 p-6 bg-white dark:bg-zinc-900 flex flex-col justify-between transition-all duration-200">
                <div>
                  <span className="text-xs font-mono font-bold text-emerald-800 dark:text-emerald-400 group-hover:text-emerald-100 block mb-3">[ PAGE 01 ]</span>
                  <h3 className="text-lg font-black text-emerald-950 dark:text-emerald-100 group-hover:text-white uppercase mb-2">EVENTS</h3>
                  <p className="text-xs text-emerald-900/85 dark:text-emerald-300 group-hover:text-emerald-100/90 leading-relaxed">
                    Check out all our past and upcoming community workshops, smart lab launches, and timeline milestones.
                  </p>
                </div>
                <div className="text-xs font-bold font-mono text-emerald-800 dark:text-emerald-400 group-hover:text-white mt-6">
                  VIEW EVENTS -{">"}
                </div>
              </Link>

              {/* Members link */}
              <Link href="/members" className="group border-2 border-emerald-800 hover:bg-[#15803d] dark:border-emerald-500 p-6 bg-white dark:bg-zinc-900 flex flex-col justify-between transition-all duration-200">
                <div>
                  <span className="text-xs font-mono font-bold text-emerald-800 dark:text-emerald-400 group-hover:text-emerald-100 block mb-3">[ PAGE 02 ]</span>
                  <h3 className="text-lg font-black text-emerald-950 dark:text-emerald-100 group-hover:text-white uppercase mb-2">MEMBERS</h3>
                  <p className="text-xs text-emerald-900/85 dark:text-emerald-300 group-hover:text-emerald-100/90 leading-relaxed">
                    Read cohort testimonials, see volunteer activities, and submit your membership application.
                  </p>
                </div>
                <div className="text-xs font-bold font-mono text-emerald-800 dark:text-emerald-400 group-hover:text-white mt-6">
                  VOLUNTEER NOW -{">"}
                </div>
              </Link>

              {/* Partners link */}
              <Link href="/partners" className="group border-2 border-emerald-800 hover:bg-[#15803d] dark:border-emerald-500 p-6 bg-white dark:bg-zinc-900 flex flex-col justify-between transition-all duration-200">
                <div>
                  <span className="text-xs font-mono font-bold text-emerald-800 dark:text-emerald-400 group-hover:text-emerald-100 block mb-3">[ PAGE 03 ]</span>
                  <h3 className="text-lg font-black text-emerald-950 dark:text-emerald-100 group-hover:text-white uppercase mb-2">PARTNERS</h3>
                  <p className="text-xs text-emerald-900/85 dark:text-emerald-300 group-hover:text-emerald-100/90 leading-relaxed">
                    Meet the organizations donating hardware, infrastructure, and operational support to scale our smart labs.
                  </p>
                </div>
                <div className="text-xs font-bold font-mono text-emerald-800 dark:text-emerald-400 group-hover:text-white mt-6">
                  OUR SPONSORS -{">"}
                </div>
              </Link>

              {/* Core Team link */}
              <Link href="/core-team" className="group border-2 border-emerald-800 hover:bg-[#15803d] dark:border-emerald-500 p-6 bg-white dark:bg-zinc-900 flex flex-col justify-between transition-all duration-200">
                <div>
                  <span className="text-xs font-mono font-bold text-emerald-800 dark:text-emerald-400 group-hover:text-emerald-100 block mb-3">[ PAGE 04 ]</span>
                  <h3 className="text-lg font-black text-emerald-950 dark:text-emerald-100 group-hover:text-white uppercase mb-2">CORE TEAM</h3>
                  <p className="text-xs text-emerald-900/85 dark:text-emerald-300 group-hover:text-emerald-100/90 leading-relaxed">
                    Get in touch with the founders, curriculum designers, and community coordinators leading Project Sankalp.
                  </p>
                </div>
                <div className="text-xs font-bold font-mono text-emerald-800 dark:text-emerald-400 group-hover:text-white mt-6">
                  MEET LEADERS -{">"}
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Ongoing Programs */}
        <section className="py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-xs font-mono font-bold text-emerald-800 dark:text-emerald-400">[ WHAT WE RUN ]</span>
              <h2 className="text-3xl font-black text-emerald-950 dark:text-emerald-100 uppercase mt-2">Active Initiatives</h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              {programsList.map((program) => (
                <div key={program.id} className="border-2 border-emerald-800 dark:border-emerald-500 p-8 bg-white dark:bg-zinc-900 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4 pb-2 border-b border-emerald-800/10">
                      <span className="text-xs font-mono font-bold text-emerald-800 dark:text-emerald-400">
                        [ CATEGORY: {program.category.toUpperCase()} ]
                      </span>
                    </div>
                    <h3 className="text-xl font-black text-emerald-950 dark:text-emerald-100 uppercase mb-3">
                      {program.title}
                    </h3>
                    <p className="text-sm text-emerald-900/80 dark:text-emerald-300 leading-relaxed mb-6">
                      {program.description}
                    </p>
                  </div>
                  <Link
                    href="/members"
                    className="inline-flex items-center justify-center px-4 py-2.5 text-xs font-mono font-bold text-emerald-800 dark:text-emerald-400 bg-emerald-50 dark:bg-zinc-950 hover:bg-[#15803d] hover:text-white border border-emerald-800 dark:border-emerald-500 transition-colors w-full sm:w-auto text-center"
                  >
                    [ {program.ctaText.toUpperCase()} -{">"} ]
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-16 sm:py-24 bg-emerald-50/20 dark:bg-zinc-950/20 border-t border-b border-emerald-800/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-xs font-mono font-bold text-emerald-800 dark:text-emerald-400">[ HOW WE WORK ]</span>
              <h2 className="text-3xl font-black text-emerald-950 dark:text-emerald-100 uppercase mt-2">Our Core Values</h2>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((val, idx) => (
                <div key={idx} className="border border-emerald-800/40 p-6 bg-white dark:bg-zinc-900 text-left">
                  <div className="text-xs font-mono font-bold text-emerald-800 dark:text-emerald-400 mb-3">
                    [ VALUE 0{idx + 1} ]
                  </div>
                  <h3 className="text-lg font-black text-emerald-950 dark:text-emerald-100 uppercase mb-2">
                    {val.title}
                  </h3>
                  <p className="text-xs text-emerald-900/85 dark:text-emerald-300 leading-relaxed">
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
              <span className="text-xs font-mono font-bold text-emerald-800 dark:text-emerald-400">[ IN THEIR WORDS ]</span>
              <h2 className="text-3xl font-black text-emerald-950 dark:text-emerald-100 uppercase mt-2">Community Feedback</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((t, idx) => (
                <div key={idx} className="border-2 border-emerald-800 dark:border-emerald-500 p-8 bg-white dark:bg-zinc-900 flex flex-col justify-between">
                  <p className="text-sm italic text-emerald-950 dark:text-emerald-200 leading-relaxed mb-6">
                    “{t.quote}”
                  </p>
                  <div>
                    <p className="text-sm font-black text-emerald-800 dark:text-emerald-400 uppercase">
                      {t.author}
                    </p>
                    <p className="text-xs text-emerald-900/60 dark:text-emerald-400/60 font-mono">
                      [ {t.info.toUpperCase()} ]
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
