"use client";

import React from "react";
import Link from "next/link";
import { siteConfig } from "../../config/org";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-50 dark:bg-[#0f172a] text-slate-600 dark:text-slate-300 border-t border-slate-100 dark:border-slate-800 pt-16 pb-8 relative z-10" aria-label="Site Footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          {/* Brand Summary (Col 1-5) */}
          <div className="md:col-span-5 space-y-4">
            <Link
              href="/"
              className="text-xl font-serif font-black tracking-tight text-slate-900 dark:text-[#10b981] focus:outline-none hover:text-[#10b981] transition-colors"
              aria-label={`${siteConfig.orgName} Home`}
            >
              {siteConfig.orgName}
            </Link>
            <p className="text-sm font-sans text-slate-500 dark:text-slate-400 leading-relaxed max-w-sm">
              Project Sankalp is a registered Section 8 non-profit organization dedicated to digital inclusion, technology mentorship, and grassroots social innovations.
            </p>
          </div>

          {/* Quick Links (Col 6-8) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-sm font-serif font-black text-slate-900 dark:text-white uppercase tracking-wider">Quick Navigation</h4>
            <nav className="flex flex-col space-y-2.5 text-sm font-sans font-semibold" aria-label="Footer Navigation">
              <Link href="/" className="hover:text-[#10b981] dark:hover:text-emerald-400 hover:underline transition-colors focus:outline-none">
                Home
              </Link>
              <Link href="/events" className="hover:text-[#10b981] dark:hover:text-emerald-400 hover:underline transition-colors focus:outline-none">
                Events & Timeline
              </Link>
              <Link href="/members" className="hover:text-[#10b981] dark:hover:text-emerald-400 hover:underline transition-colors focus:outline-none">
                Members & Volunteer
              </Link>
              <Link href="/partners" className="hover:text-[#10b981] dark:hover:text-emerald-400 hover:underline transition-colors focus:outline-none">
                Our Partners
              </Link>
              <Link href="/core-team" className="hover:text-[#10b981] dark:hover:text-emerald-400 hover:underline transition-colors focus:outline-none">
                Core Leadership Team
              </Link>
            </nav>
          </div>

          {/* Contact Summary (Col 9-12) */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-sm font-serif font-black text-slate-900 dark:text-white uppercase tracking-wider">Get in Touch</h4>
            <div className="space-y-2.5 text-sm font-sans">
              <p>
                <span className="font-bold text-slate-800 dark:text-slate-200">Email:</span>{" "}
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-[#10b981] dark:hover:text-emerald-400 hover:underline transition-colors">
                  {siteConfig.contact.email}
                </a>
              </p>
              <p>
                <span className="font-bold text-slate-800 dark:text-slate-200">Phone:</span>{" "}
                <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-[#10b981] dark:hover:text-emerald-400 hover:underline transition-colors">
                  {siteConfig.contact.phone}
                </a>
              </p>
              <p className="leading-relaxed text-slate-500 dark:text-slate-400">
                <span className="font-bold text-slate-850 dark:text-slate-250">Address:</span>{" "}
                {siteConfig.contact.address}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-xs font-sans text-slate-500">
            <p>© {currentYear} {siteConfig.orgName}. All rights reserved.</p>
            <div className="flex gap-4">
              <Link href="/privacy" className="hover:text-[#10b981] dark:hover:text-emerald-400 transition-colors focus:outline-none">
                Privacy Policy
              </Link>
              <span className="text-slate-300 dark:text-slate-700" aria-hidden="true">|</span>
              <Link href="/privacy#terms" className="hover:text-[#10b981] dark:hover:text-emerald-400 transition-colors focus:outline-none">
                Terms of Service
              </Link>
            </div>
          </div>

          {/* Scroll to Top */}
          <button
            onClick={handleBackToTop}
            type="button"
            className="inline-flex items-center justify-center px-6 py-2.5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 rounded-full transition-all focus:outline-none cursor-pointer text-xs font-sans font-bold shadow-xs"
            aria-label="Scroll back to top"
          >
            Back to Top ^
          </button>
        </div>
      </div>
    </footer>
  );
}

