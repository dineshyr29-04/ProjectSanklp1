import React from "react";
import Header from "../../src/components/sections/Header";
import Footer from "../../src/components/sections/Footer";
import { siteConfig } from "../../src/config/org";

export const metadata = {
  title: "Our Trusted Partners | Project Sankalp",
  description: "Meet the partner organizations providing hardware, solar grid systems, and funding support to Project Sankalp.",
};

export default function PartnersPage() {
  const { title, subtitle, list } = siteConfig.partners;

  return (
    <>
      <Header />
      <main id="main-content" className="flex-grow bg-white dark:bg-[#050f08] py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold text-emerald-800 dark:text-emerald-400">[ COLLABORATORS ]</span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-emerald-950 dark:text-emerald-100 uppercase tracking-tight mt-2 mb-4">
              {title}
            </h1>
            <p className="text-sm sm:text-base text-emerald-900/80 dark:text-emerald-300">
              {subtitle}
            </p>
          </div>

          {/* Partners Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {list.map((partner, index) => (
              <div 
                key={index}
                className="border-2 border-emerald-800 dark:border-emerald-500 bg-white dark:bg-zinc-900 flex flex-col"
              >
                {/* Logo Representation: Pure Typographic Box, No SVGs */}
                <div className="border-b-2 border-emerald-800 dark:border-emerald-500 bg-emerald-50/40 dark:bg-zinc-950 p-8 flex items-center justify-center text-center select-none min-h-[140px]">
                  <div className="border-2 border-dashed border-emerald-800 dark:border-emerald-500 px-4 py-3 font-mono text-sm font-black text-emerald-800 dark:text-emerald-400 uppercase tracking-tighter bg-white dark:bg-zinc-900">
                    [ {partner.name} ]
                  </div>
                </div>

                {/* Description */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <p className="text-sm text-emerald-900/90 dark:text-emerald-300 leading-relaxed mb-6">
                    {partner.description}
                  </p>
                  
                  <div className="border-t border-emerald-800/10 pt-4 text-[10px] font-mono font-bold text-emerald-800 dark:text-emerald-400">
                    [ PARTNER RECORD: ACTIVE ]
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Sponsorship Statement Card */}
          <div className="border-4 border-double border-emerald-800 dark:border-emerald-500 p-8 sm:p-10 bg-white dark:bg-zinc-900 max-w-3xl mx-auto text-center">
            <span className="text-xs font-mono font-bold text-emerald-800 dark:text-emerald-400">[ SPONSORSHIP INTAKE ]</span>
            <h3 className="text-xl font-black text-emerald-950 dark:text-emerald-100 uppercase mt-2 mb-4">Become an Institutional Partner</h3>
            <p className="text-sm text-emerald-900/80 dark:text-emerald-300 leading-relaxed mb-6">
              We seek donations of retired enterprise laptop hardware, solar inverter panels, and server cabinets. Align your Corporate Social Responsibility (CSR) targets with real, local tech literacy outcomes.
            </p>
            <a
              href="mailto:info@projectsankalp.org?subject=CSR Partnership Inquiry"
              className="inline-flex items-center justify-center px-6 py-3 text-xs font-mono font-bold tracking-widest uppercase text-white bg-emerald-800 hover:bg-white hover:text-emerald-800 border-2 border-emerald-800 transition-all duration-200"
            >
              [ CONNECT WITH CSR DESK ]
            </a>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
