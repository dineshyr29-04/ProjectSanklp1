import React from "react";
import Header from "../../src/components/sections/Header";
import Footer from "../../src/components/sections/Footer";
import { siteConfig } from "../../src/config/org";

export const metadata = {
  title: "Core Leadership Team | Project Sankalp",
  description: "Meet the founders, coordinators, and curriculum designers driving Project Sankalp's digital smart labs.",
};

export default function CoreTeamPage() {
  const { title, subtitle, members } = siteConfig.team;

  // Generate initials for avatar placeholder
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  return (
    <>
      <Header />
      <main id="main-content" className="flex-grow bg-white dark:bg-[#0f172a] py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 bg-emerald-50 dark:bg-emerald-950/40 text-xs font-sans font-bold text-emerald-800 dark:text-[#10b981] rounded-full">Leadership</span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black text-slate-900 dark:text-white mt-2 mb-4">
              {title}
            </h1>
            <p className="text-sm font-sans text-slate-500 dark:text-slate-400">
              {subtitle}
            </p>
          </div>

          {/* Core Team Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {members.map((member, index) => (
              <div 
                key={index}
                className="border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900/30 rounded-3xl overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  {/* Circle Avatar Box */}
                  <div className="bg-slate-50/50 dark:bg-slate-900/30 p-8 flex items-center justify-center select-none border-b border-slate-100 dark:border-slate-850">
                    <div className="w-16 h-16 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#0f172a] flex items-center justify-center font-sans text-xl font-black text-slate-900 dark:text-[#10b981] shadow-xs">
                      {getInitials(member.name)}
                    </div>
                  </div>

                  <div className="p-6">
                    <span className="inline-block px-2.5 py-0.5 bg-[#f8fafc] dark:bg-slate-850 text-slate-600 dark:text-slate-300 rounded-full text-[10px] font-sans font-bold border border-slate-100 dark:border-slate-800 mb-3">
                      {member.role}
                    </span>
                    <h2 className="text-lg font-serif font-black text-slate-900 dark:text-white mb-3">
                      {member.name}
                    </h2>
                    <p className="text-xs font-sans text-slate-500 dark:text-slate-400 leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>

                <div className="p-6 border-t border-slate-100 dark:border-slate-850 bg-slate-50/10">
                  <a
                    href={`mailto:${member.email}`}
                    className="w-full inline-flex items-center justify-center px-4 py-2 bg-slate-900 hover:bg-[#10b981] text-white dark:bg-slate-800 dark:hover:bg-[#10b981] dark:hover:text-[#0f172a] rounded-full text-xs font-sans font-bold uppercase transition-all shadow-xs"
                  >
                    Contact Email
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Direct Press / Media Block */}
          <div className="border border-slate-100 dark:border-slate-800 p-8 rounded-3xl text-center max-w-2xl mx-auto bg-[#f8fafc] dark:bg-slate-900/30 shadow-xs">
            <span className="inline-block px-3 py-1 bg-emerald-50 dark:bg-emerald-950/40 text-xs font-sans font-bold text-emerald-800 dark:text-[#10b981] rounded-full">Media & Inquiries</span>
            <h3 className="text-lg font-serif font-black text-slate-900 dark:text-white mt-3 mb-2">Press Contact Office</h3>
            <p className="text-xs font-sans text-slate-500 dark:text-slate-400 mb-4 leading-relaxed">
              Are you a researcher or journalist interested in writing about our community smart labs or digital literacy studies?
            </p>
            <a
              href={`mailto:${siteConfig.contact.email}?subject=Press Inquiry - Project Sankalp`}
              className="text-xs font-sans font-bold text-[#10b981] hover:underline"
            >
              Email Press Office: {siteConfig.contact.email}
            </a>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
