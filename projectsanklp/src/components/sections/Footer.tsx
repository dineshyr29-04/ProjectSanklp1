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
    <footer className="bg-white dark:bg-[#050f08] text-emerald-950 dark:text-emerald-200 border-t-2 border-emerald-800 dark:border-emerald-500 pt-16 pb-8 relative z-10" aria-label="Site Footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          {/* Brand Summary (Col 1-5) */}
          <div className="md:col-span-5 space-y-4">
            <Link
              href="/"
              className="text-xl font-black tracking-tight text-emerald-800 dark:text-emerald-400 focus:outline-none"
              aria-label={`${siteConfig.orgName} Home`}
            >
              {siteConfig.orgName.toUpperCase()}
            </Link>
            <p className="text-sm text-emerald-900/80 dark:text-emerald-300/80 leading-relaxed max-w-sm">
              Project Sankalp is a registered Section 8 non-profit organization dedicated to digital inclusion, technology mentorship, and grassroots social innovations.
            </p>
          </div>

          {/* Quick Links (Col 6-8) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-sm font-black text-emerald-800 dark:text-emerald-400 uppercase tracking-wider">Quick Navigation</h4>
            <nav className="flex flex-col space-y-2.5 text-sm font-semibold" aria-label="Footer Navigation">
              <Link href="/" className="hover:text-emerald-600 dark:hover:text-emerald-400 hover:underline transition-colors focus:outline-none">
                Home
              </Link>
              <Link href="/events" className="hover:text-emerald-600 dark:hover:text-emerald-400 hover:underline transition-colors focus:outline-none">
                Events & Timeline
              </Link>
              <Link href="/members" className="hover:text-emerald-600 dark:hover:text-emerald-400 hover:underline transition-colors focus:outline-none">
                Members & Volunteer
              </Link>
              <Link href="/partners" className="hover:text-emerald-600 dark:hover:text-emerald-400 hover:underline transition-colors focus:outline-none">
                Our Partners
              </Link>
              <Link href="/core-team" className="hover:text-emerald-600 dark:hover:text-emerald-400 hover:underline transition-colors focus:outline-none">
                Core Leadership Team
              </Link>
            </nav>
          </div>

          {/* Contact Summary (Col 9-12) */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-sm font-black text-emerald-800 dark:text-emerald-400 uppercase tracking-wider">Get in Touch</h4>
            <div className="space-y-2.5 text-sm">
              <p>
                <span className="font-bold text-emerald-900 dark:text-emerald-300">Email:</span>{" "}
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-emerald-600 dark:hover:text-emerald-400 hover:underline transition-colors">
                  {siteConfig.contact.email}
                </a>
              </p>
              <p>
                <span className="font-bold text-emerald-900 dark:text-emerald-300">Phone:</span>{" "}
                <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-emerald-600 dark:hover:text-emerald-400 hover:underline transition-colors">
                  {siteConfig.contact.phone}
                </a>
              </p>
              <p className="leading-relaxed text-emerald-900/80 dark:text-emerald-300/80">
                <span className="font-bold text-emerald-900 dark:text-emerald-300 font-bold">Address:</span>{" "}
                {siteConfig.contact.address}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-emerald-700/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-xs text-emerald-900/60 dark:text-emerald-400/60">
            <p>© {currentYear} {siteConfig.orgName}. All rights reserved.</p>
            <div className="flex gap-4">
              <Link href="/privacy" className="hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors focus:outline-none">
                Privacy Policy
              </Link>
              <span className="text-emerald-700/30" aria-hidden="true">|</span>
              <Link href="/privacy#terms" className="hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors focus:outline-none">
                Terms of Service
              </Link>
            </div>
          </div>

          {/* Scroll to Top */}
          <button
            onClick={handleBackToTop}
            type="button"
            className="inline-flex items-center justify-center px-4 py-2 bg-white dark:bg-zinc-900 text-emerald-800 dark:text-emerald-400 border-2 border-emerald-800 dark:border-emerald-500 hover:bg-emerald-800 hover:text-white dark:hover:bg-emerald-500 dark:hover:text-zinc-950 transition-colors focus:outline-none cursor-pointer text-xs font-bold"
            aria-label="Scroll back to top"
          >
            [ BACK TO TOP ^ ]
          </button>
        </div>
      </div>
    </footer>
  );
}

