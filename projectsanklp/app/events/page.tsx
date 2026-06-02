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
      <main id="main-content" className="flex-grow bg-white dark:bg-[#0f172a] py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section 1: Events Log / Gallery Stories */}
          <div className="mb-20">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-3 py-1 bg-[#f8fafc] dark:bg-slate-800 border border-slate-100 dark:border-slate-700 text-xs font-sans font-bold text-slate-600 dark:text-slate-350 rounded-full">Logged Events</span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black text-slate-900 dark:text-white mt-2 mb-4">
                {galleryTitle}
              </h1>
              <p className="text-sm font-sans text-slate-500 dark:text-slate-400">
                {gallerySubtitle}
              </p>
            </div>

            {/* Rounded Events Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {stories.map((story, index) => (
                <div 
                  key={index}
                  className="border border-slate-100 dark:border-slate-800 bg-white dark:bg-[#0f172a] rounded-3xl overflow-hidden shadow-xs hover:shadow-md transition-shadow"
                >
                  {/* Soft background header */}
                  <div className="bg-slate-50/50 dark:bg-slate-900/30 p-8 flex items-center justify-center text-center select-none min-h-[140px]">
                    <div className="text-xs font-sans font-bold text-slate-500 dark:text-slate-400">
                      Event #{index + 1}
                    </div>
                  </div>

                  <div className="p-6">
                    <span className="inline-block px-2.5 py-0.5 bg-[#f8fafc] dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-full text-[10px] font-sans font-bold border border-slate-100 dark:border-slate-700 mb-3">
                      {story.category}
                    </span>
                    <h2 className="text-lg font-serif font-black text-slate-900 dark:text-white mb-3">
                      {story.title}
                    </h2>
                    <p className="text-xs font-sans text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
                      {story.description}
                    </p>
                    
                    <div className="border-t border-slate-100 dark:border-slate-800 pt-4 text-[10px] font-sans font-bold text-[#10b981]">
                      Active Digital Record
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 2: Timeline History Milestones */}
          <div className="border-t border-slate-100 dark:border-slate-800/60 pt-16">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-3 py-1 bg-[#f8fafc] dark:bg-slate-800 border border-slate-100 dark:border-slate-700 text-xs font-sans font-bold text-slate-600 dark:text-slate-350 rounded-full">Project Logs</span>
              <h2 className="text-3xl font-serif font-black text-slate-900 dark:text-white mt-2 mb-4">
                {historyTitle} - Our Chronology
              </h2>
            </div>

            <div className="max-w-3xl mx-auto border-l-2 border-slate-100 dark:border-slate-850 pl-6 sm:pl-10 space-y-12 relative">
              {history.map((event, index) => (
                <div key={index} className="relative group">
                  {/* Rounded Year Badge */}
                  <span className="absolute -left-[35px] sm:-left-[51px] top-1 text-xs font-sans font-bold bg-slate-900 text-white dark:bg-[#10b981] dark:text-slate-950 px-2.5 py-1 rounded-full z-10 select-none shadow-sm">
                    {event.year}
                  </span>

                  <div className="border border-slate-100 dark:border-slate-800 p-6 rounded-2xl bg-white dark:bg-[#0f172a] shadow-xs hover:border-slate-200 dark:hover:border-slate-700 transition-colors">
                    <h3 className="text-lg font-serif font-black text-slate-900 dark:text-white mb-2">
                      {event.title}
                    </h3>
                    <p className="text-sm font-sans text-slate-650 dark:text-slate-400 leading-relaxed">
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
