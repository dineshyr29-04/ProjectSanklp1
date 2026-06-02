"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { siteConfig } from "../../config/org";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Events", href: "/events" },
    { name: "Members", href: "/members" },
    { name: "Partners", href: "/partners" },
    { name: "Core Team", href: "/core-team" },
  ];

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 dark:bg-[#0f172a]/95 backdrop-blur-md border-b border-slate-100 dark:border-[#1e293b] shadow-xs"
          : "bg-white/90 dark:bg-[#0f172a]/90 backdrop-blur-xs border-b border-slate-50 dark:border-[#1e293b]/50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-xl sm:text-2xl font-serif font-black tracking-tight text-black focus:outline-none hover:text-[color:var(--accent)] transition-colors"
              aria-label={`${siteConfig.orgName} Home`}
            >
              {siteConfig.orgName}
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-6" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-sans font-bold text-slate-600 hover:text-[color:var(--accent)] transition-colors duration-200 focus:outline-none px-2 py-1"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Action CTA */}
          <div className="hidden md:flex items-center">
            <Link
              href="/members"
              className="inline-flex items-center justify-center px-5 py-2 text-xs font-sans font-bold text-white bg-black hover:bg-[color:var(--accent)] rounded-full shadow-sm hover:shadow transition-all duration-200"
            >
              Join Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center focus:outline-none"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? (
                <span className="font-sans text-xs bg-white text-black px-4 py-2 rounded-full font-bold transition-all border border-slate-100">
                  Close Menu
                </span>
              ) : (
                <span className="font-sans text-xs bg-white text-black px-4 py-2 rounded-full font-bold transition-all border border-slate-100">
                  Menu
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden fixed inset-0 z-50 bg-black/40 backdrop-blur-xs transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      >
          <div
          className={`fixed right-0 top-0 bottom-0 w-3/4 max-w-sm bg-white border-l border-slate-100 p-6 shadow-2xl transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between mb-8">
            <span className="text-lg font-serif font-black text-black">
              {siteConfig.orgName}
            </span>
            <button
              onClick={() => setIsOpen(false)}
              className="focus:outline-none"
              aria-label="Close menu"
            >
              <span className="font-sans text-xs bg-white text-black px-4 py-2 rounded-full font-bold transition-all border border-slate-100">
                Close
              </span>
            </button>
          </div>
          <nav className="flex flex-col space-y-4" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-base font-sans font-bold text-slate-700 hover:text-[color:var(--accent)] transition-colors py-2 block border-b border-slate-50"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/members"
              onClick={() => setIsOpen(false)}
              className="mt-6 w-full inline-flex items-center justify-center px-4 py-3 text-base font-sans font-bold text-white bg-black hover:bg-[color:var(--accent)] rounded-full transition-colors duration-200"
            >
              Join as Volunteer
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

