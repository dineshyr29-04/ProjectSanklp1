import React from "react";
import Header from "../../src/components/sections/Header";
import Footer from "../../src/components/sections/Footer";
import { siteConfig } from "../../src/config/org";

export const metadata = {
  title: "Events & History Milestones | Project Sankalp",
  description: "Explore Project Sankalp's past workshops, smart lab launches, community hackathons, and institutional timeline milestones.",
};

export default function EventsPage() {
  const { title: galleryTitle, subtitle: gallerySubtitle, stories } = siteConfig.gallery;
  const { title: historyTitle, history } = siteConfig.about;

  return (
    <>
      <Header />
      <main id="main-content" className="flex-grow bg-white dark:bg-[#050f08] py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section 1: Events Log / Gallery Stories */}
          <div className="mb-20">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-mono font-bold text-emerald-800 dark:text-emerald-400">[ LOGGED EVENTS ]</span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-emerald-950 dark:text-emerald-100 uppercase tracking-tight mt-2 mb-4">
                {galleryTitle}
              </h1>
              <p className="text-sm sm:text-base text-emerald-900/80 dark:text-emerald-300">
                {gallerySubtitle}
              </p>
            </div>

            {/* Bordered Events Log Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {stories.map((story, index) => (
                <div 
                  key={index}
                  className="border-2 border-emerald-800 dark:border-emerald-500 bg-white dark:bg-zinc-900 flex flex-col justify-between"
                >
                  {/* Text-based thumbnail placeholder with clean typography instead of SVGs */}
                  <div className="border-b-2 border-emerald-800 dark:border-emerald-500 bg-emerald-50/50 dark:bg-zinc-950 p-8 flex items-center justify-center text-center select-none min-h-[140px]">
                    <div className="font-mono text-xs font-black text-emerald-800 dark:text-emerald-400">
                      [ EVENT #{index + 1} ]<br />
                      {story.category.toUpperCase()}
                    </div>
                  </div>

                  <div className="p-6 flex-grow flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-mono font-bold text-emerald-800 dark:text-emerald-400 block mb-1">
                        [ CATEGORY: {story.category.toUpperCase()} ]
                      </span>
                      <h2 className="text-lg font-black text-emerald-950 dark:text-emerald-100 uppercase mb-3">
                        {story.title}
                      </h2>
                      <p className="text-xs text-emerald-900/85 dark:text-emerald-300 leading-relaxed mb-4">
                        {story.description}
                      </p>
                    </div>
                    
                    <div className="border-t border-emerald-800/10 pt-4 text-[10px] font-mono font-bold text-emerald-800 dark:text-emerald-400">
                      [ DIGITAL RECORD: OK ]
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 2: Timeline History Milestones */}
          <div className="border-t-2 border-emerald-800 dark:border-emerald-500 pt-16">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-mono font-bold text-emerald-800 dark:text-emerald-400">[ PROJECT LOGS ]</span>
              <h2 className="text-3xl font-black text-emerald-950 dark:text-emerald-100 uppercase mt-2 mb-4">
                {historyTitle} - OUR CHRONOLOGY
              </h2>
            </div>

            <div className="max-w-3xl mx-auto border-l-2 border-emerald-800 dark:border-emerald-500 pl-6 sm:pl-10 space-y-12 relative">
              {history.map((event, index) => (
                <div key={index} className="relative group">
                  {/* Custom Border Marker instead of dot or icon */}
                  <span className="absolute -left-[35px] sm:-left-[51px] top-1.5 font-mono text-xs font-bold bg-white dark:bg-zinc-900 border-2 border-emerald-800 dark:border-emerald-500 text-emerald-800 dark:text-emerald-400 px-1 py-0.5 z-10 select-none">
                    [{event.year}]
                  </span>

                  <div className="border border-emerald-800/30 dark:border-emerald-500/40 p-6 bg-white dark:bg-zinc-900 shadow-sm hover:border-emerald-800 dark:hover:border-emerald-500 transition-colors">
                    <h3 className="text-lg font-black text-emerald-950 dark:text-emerald-100 uppercase mb-2">
                      {event.title}
                    </h3>
                    <p className="text-sm text-emerald-900/80 dark:text-emerald-300 leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
