"use client";

import React from "react";
import { siteConfig } from "../../config/org";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-zinc-950 text-zinc-400 border-t border-zinc-900 pt-16 pb-8 relative z-10" aria-label="Site Footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          {/* Brand Summary (Col 1-5) */}
          <div className="md:col-span-5 space-y-4">
            <a
              href="#"
              className="text-xl font-bold tracking-tight text-white focus:outline-none"
              aria-label={`${siteConfig.orgName} Home`}
            >
              {siteConfig.orgName}
            </a>
            <p className="text-sm text-zinc-400 leading-relaxed max-w-sm">
              Project Sankalp is a registered Section 8 non-profit organization dedicated to digital inclusion, technology mentorship, and grassroots social innovations.
            </p>
          </div>

          {/* Quick Links (Col 6-8) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Quick Navigation</h4>
            <nav className="flex flex-col space-y-2.5 text-sm" aria-label="Footer Navigation">
              <a href="#about" className="hover:text-white transition-colors focus:outline-none">
                About / Mission
              </a>
              <a href="#impact" className="hover:text-white transition-colors focus:outline-none">
                Our Impact
              </a>
              <a href="#programs" className="hover:text-white transition-colors focus:outline-none">
                Ongoing Programs
              </a>
              <a href="#team" className="hover:text-white transition-colors focus:outline-none">
                Meet the Team
              </a>
              <a href="#gallery" className="hover:text-white transition-colors focus:outline-none">
                Gallery & Stories
              </a>
            </nav>
          </div>

          {/* Contact Summary (Col 9-12) */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Get in Touch</h4>
            <div className="space-y-2.5 text-sm">
              <p>
                <span className="font-semibold text-zinc-300">Email:</span>{" "}
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-white transition-colors">
                  {siteConfig.contact.email}
                </a>
              </p>
              <p>
                <span className="font-semibold text-zinc-300">Phone:</span>{" "}
                <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-white transition-colors">
                  {siteConfig.contact.phone}
                </a>
              </p>
              <p className="leading-relaxed">
                <span className="font-semibold text-zinc-300">Address:</span>{" "}
                {siteConfig.contact.address}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-xs text-zinc-500">
            <p>© {currentYear} {siteConfig.orgName}. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="/privacy" className="hover:text-zinc-300 transition-colors focus:outline-none">
                Privacy Policy
              </a>
              <span className="text-zinc-800" aria-hidden="true">|</span>
              <a href="/privacy#terms" className="hover:text-zinc-300 transition-colors focus:outline-none">
                Terms of Service
              </a>
            </div>
          </div>

          {/* Scroll to Top */}
          <button
            onClick={handleBackToTop}
            type="button"
            className="inline-flex items-center justify-center p-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-800 transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer text-xs font-bold"
            aria-label="Scroll back to top"
          >
            Back to Top
            <svg
              className="ml-1.5 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}
