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
      <main id="main-content" className="flex-grow bg-white dark:bg-[#050f08] py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold text-emerald-800 dark:text-emerald-400">[ LEADERSHIP ]</span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-emerald-950 dark:text-emerald-100 uppercase tracking-tight mt-2 mb-4">
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
                className="border-2 border-emerald-800 dark:border-emerald-500 bg-white dark:bg-zinc-900 flex flex-col justify-between"
              >
                <div>
                  {/* Square Avatar Box with initials and double borders */}
                  <div className="border-b-2 border-emerald-800 dark:border-emerald-500 bg-emerald-50/40 dark:bg-zinc-950 p-8 flex items-center justify-center select-none">
                    <div className="w-16 h-16 border-2 border-emerald-800 dark:border-emerald-500 bg-white dark:bg-zinc-900 flex items-center justify-center font-mono text-xl font-black text-emerald-800 dark:text-emerald-400">
                      {getInitials(member.name)}
                    </div>
                  </div>

                  <div className="p-6">
                    <span className="text-[10px] font-mono font-bold text-emerald-800 dark:text-emerald-400 block mb-1">
                      [ ROLE: {member.role.toUpperCase()} ]
                    </span>
                    <h2 className="text-lg font-black text-emerald-950 dark:text-emerald-100 uppercase mb-3">
                      {member.name}
                    </h2>
                    <p className="text-xs text-emerald-900/80 dark:text-emerald-300 leading-relaxed mb-4">
                      {member.bio}
                    </p>
                  </div>
                </div>

                <div className="p-6 border-t border-emerald-800/10 bg-emerald-50/10">
                  <a
                    href={`mailto:${member.email}`}
                    className="w-full inline-flex items-center justify-center px-4 py-2 bg-white dark:bg-zinc-900 hover:bg-[#15803d] hover:text-white text-emerald-800 dark:text-emerald-400 border border-emerald-800 dark:border-emerald-500 text-xs font-mono font-bold uppercase transition-all"
                  >
                    [ CONTACT EMAIL ]
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Direct Press / Media Block */}
          <div className="border border-emerald-800/30 p-8 text-center max-w-2xl mx-auto bg-white dark:bg-zinc-900">
            <span className="text-xs font-mono font-bold text-emerald-800 dark:text-emerald-400">[ MEDIA & INQUIRIES ]</span>
            <h3 className="text-lg font-black text-emerald-950 dark:text-emerald-100 uppercase mt-2 mb-2">PRESS CONTACT OFFICE</h3>
            <p className="text-xs text-emerald-900/80 dark:text-emerald-300 mb-4 leading-relaxed">
              Are you a journalist or researcher interested in writing about our community smart labs or digital literacy studies?
            </p>
            <a
              href={`mailto:${siteConfig.contact.email}?subject=Press Inquiry - Project Sankalp`}
              className="text-xs font-mono font-bold text-emerald-800 dark:text-emerald-400 hover:underline"
            >
              [ EMAIL PRESS OFFICE: {siteConfig.contact.email} ]
            </a>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
