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
      <main id="main-content" className="flex-grow bg-white dark:bg-[#05160c] py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 bg-emerald-50 dark:bg-[#062e15] rounded-full text-xs font-bold text-emerald-800 dark:text-emerald-300">Leadership</span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-emerald-950 dark:text-emerald-100 mt-2 mb-4">
              {title}
            </h1>
            <p className="text-sm sm:text-base text-emerald-900/80 dark:text-emerald-300">
              {subtitle}
            </p>
          </div>

          {/* Core Team Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {members.map((member, index) => (
              <div 
                key={index}
                className="border border-emerald-100 dark:border-[#0f766e]/30 bg-white dark:bg-[#062210] rounded-3xl overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  {/* Circle Avatar Box */}
                  <div className="bg-emerald-50/20 dark:bg-[#062e15]/20 p-8 flex items-center justify-center select-none border-b border-emerald-100 dark:border-emerald-950/20">
                    <div className="w-16 h-16 rounded-full border border-emerald-250 dark:border-emerald-850 bg-white dark:bg-zinc-950 flex items-center justify-center font-mono text-xl font-black text-emerald-800 dark:text-emerald-400 shadow-sm">
                      {getInitials(member.name)}
                    </div>
                  </div>

                  <div className="p-6">
                    <span className="inline-block px-2.5 py-0.5 bg-emerald-50 dark:bg-[#062e15] rounded-full text-[10px] font-bold text-emerald-800 dark:text-emerald-400 mb-3">
                      {member.role}
                    </span>
                    <h2 className="text-lg font-black text-emerald-900 dark:text-emerald-100 mb-3">
                      {member.name}
                    </h2>
                    <p className="text-xs text-emerald-900/80 dark:text-emerald-350 leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>

                <div className="p-6 border-t border-emerald-100 dark:border-emerald-950/20 bg-emerald-50/10">
                  <a
                    href={`mailto:${member.email}`}
                    className="w-full inline-flex items-center justify-center px-4 py-2 bg-emerald-700 hover:bg-emerald-600 text-white dark:bg-emerald-600 dark:hover:bg-emerald-500 rounded-full text-xs font-bold transition-all shadow-xs"
                  >
                    Contact Email
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Direct Press / Media Block */}
          <div className="border border-emerald-100 dark:border-[#0f766e]/30 p-8 rounded-3xl text-center max-w-2xl mx-auto bg-white dark:bg-[#062210] shadow-xs">
            <span className="inline-block px-3 py-1 bg-emerald-50 dark:bg-[#062e15] rounded-full text-xs font-bold text-emerald-800 dark:text-emerald-300">Media & Inquiries</span>
            <h3 className="text-lg font-black text-emerald-950 dark:text-emerald-100 uppercase mt-3 mb-2">Press Contact Office</h3>
            <p className="text-xs text-emerald-900/80 dark:text-emerald-350 mb-4 leading-relaxed">
              Are you a researcher or journalist interested in writing about our community smart labs or digital literacy studies?
            </p>
            <a
              href={`mailto:${siteConfig.contact.email}?subject=Press Inquiry - Project Sankalp`}
              className="text-xs font-bold text-emerald-700 dark:text-emerald-400 hover:underline"
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
