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
      <main id="main-content" className="flex-grow bg-white dark:bg-[#05160c] py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 bg-emerald-50 dark:bg-[#062e15] rounded-full text-xs font-bold text-emerald-800 dark:text-emerald-300">Collaborators</span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-emerald-950 dark:text-emerald-100 mt-2 mb-4">
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
                className="border border-emerald-100 dark:border-[#0f766e]/30 bg-white dark:bg-[#062210] rounded-3xl overflow-hidden shadow-xs hover:shadow-md transition-shadow"
              >
                {/* Logo Representation: Rounded Pill Tag, No Hard Borders */}
                <div className="bg-emerald-50/20 dark:bg-[#062e15]/20 p-8 flex items-center justify-center text-center select-none min-h-[140px]">
                  <div className="px-5 py-2.5 bg-white dark:bg-zinc-950 text-emerald-800 dark:text-emerald-400 border border-emerald-200 dark:border-[#0f766e]/35 rounded-full font-mono text-sm font-black tracking-tight shadow-xs">
                    {partner.name}
                  </div>
                </div>

                {/* Description */}
                <div className="p-6">
                  <p className="text-sm text-emerald-900/90 dark:text-emerald-300 leading-relaxed mb-6">
                    {partner.description}
                  </p>
                  
                  <div className="border-t border-emerald-100 dark:border-emerald-950/20 pt-4 text-[10px] font-bold text-emerald-600">
                    Partner Record: Active
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Sponsorship Statement Card */}
          <div className="border border-emerald-150 dark:border-[#0f766e]/30 p-8 sm:p-12 rounded-3xl bg-emerald-50/15 dark:bg-[#062210] max-w-3xl mx-auto text-center shadow-xs">
            <span className="inline-block px-3 py-1 bg-emerald-50 dark:bg-[#062e15] rounded-full text-xs font-bold text-emerald-800 dark:text-emerald-300">Sponsorship Intake</span>
            <h3 className="text-2xl font-black text-emerald-900 dark:text-emerald-100 uppercase mt-3 mb-4">Become an Institutional Partner</h3>
            <p className="text-sm text-emerald-900/80 dark:text-emerald-300 leading-relaxed mb-6">
              We seek donations of retired enterprise laptop hardware, solar inverter panels, and server cabinets. Align your Corporate Social Responsibility (CSR) targets with real, local tech literacy outcomes.
            </p>
            <a
              href="mailto:info@projectsankalp.org?subject=CSR Partnership Inquiry"
              className="inline-flex items-center justify-center px-8 py-3.5 text-xs font-bold tracking-wider uppercase text-white bg-emerald-700 hover:bg-emerald-600 rounded-full transition-all duration-200 shadow-xs"
            >
              Connect with CSR Desk
            </a>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
