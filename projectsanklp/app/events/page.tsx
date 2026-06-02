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
      <main id="main-content" className="flex-grow bg-white dark:bg-[#05160c] py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section 1: Events Log / Gallery Stories */}
          <div className="mb-20">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-3 py-1 bg-emerald-50 dark:bg-[#062e15] rounded-full text-xs font-bold text-emerald-800 dark:text-emerald-300">Logged Events</span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-emerald-950 dark:text-emerald-100 mt-2 mb-4">
                {galleryTitle}
              </h1>
              <p className="text-sm sm:text-base text-emerald-900/80 dark:text-emerald-300">
                {gallerySubtitle}
              </p>
            </div>

            {/* Rounded Events Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {stories.map((story, index) => (
                <div 
                  key={index}
                  className="border border-emerald-100 dark:border-[#0f766e]/30 bg-white dark:bg-[#062210] rounded-3xl overflow-hidden shadow-xs hover:shadow-md transition-shadow"
                >
                  {/* Soft background header */}
                  <div className="bg-emerald-50/30 dark:bg-[#062e15]/20 p-8 flex items-center justify-center text-center select-none min-h-[140px]">
                    <div className="text-xs font-bold text-emerald-800 dark:text-emerald-400">
                      Event #{index + 1}
                    </div>
                  </div>

                  <div className="p-6">
                    <span className="inline-block px-2.5 py-0.5 bg-emerald-50 dark:bg-[#062e15] rounded-full text-[10px] font-bold text-emerald-800 dark:text-emerald-400 mb-3">
                      {story.category}
                    </span>
                    <h2 className="text-lg font-black text-emerald-900 dark:text-emerald-100 mb-3">
                      {story.title}
                    </h2>
                    <p className="text-xs text-emerald-900/80 dark:text-emerald-350 leading-relaxed mb-4">
                      {story.description}
                    </p>
                    
                    <div className="border-t border-emerald-100 dark:border-emerald-950/20 pt-4 text-[10px] font-bold text-emerald-600">
                      Active Digital Record
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 2: Timeline History Milestones */}
          <div className="border-t border-emerald-100 dark:border-emerald-950/20 pt-16">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-3 py-1 bg-emerald-50 dark:bg-[#062e15] rounded-full text-xs font-bold text-emerald-800 dark:text-emerald-350">Project Logs</span>
              <h2 className="text-3xl font-black text-emerald-950 dark:text-emerald-100 mt-2 mb-4">
                {historyTitle} - Our Chronology
              </h2>
            </div>

            <div className="max-w-3xl mx-auto border-l-2 border-emerald-150 dark:border-emerald-900/40 pl-6 sm:pl-10 space-y-12 relative">
              {history.map((event, index) => (
                <div key={index} className="relative group">
                  {/* Rounded Year Badge */}
                  <span className="absolute -left-[35px] sm:-left-[51px] top-1 text-xs font-bold bg-emerald-700 text-white dark:bg-emerald-600 dark:text-[#05160c] px-2.5 py-1 rounded-full z-10 select-none shadow-sm">
                    {event.year}
                  </span>

                  <div className="border border-emerald-100 dark:border-[#0f766e]/20 p-6 rounded-2xl bg-white dark:bg-[#062210] shadow-xs hover:border-emerald-300 dark:hover:border-emerald-650 transition-colors">
                    <h3 className="text-lg font-black text-emerald-900 dark:text-emerald-100 mb-2">
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
