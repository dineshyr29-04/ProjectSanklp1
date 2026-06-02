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
          ? "bg-white dark:bg-[#050f08] border-b-2 border-emerald-800 dark:border-emerald-500 shadow-sm"
          : "bg-white dark:bg-[#050f08] border-b border-emerald-700/20"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-xl sm:text-2xl font-black tracking-tight text-emerald-800 dark:text-emerald-400 focus:outline-none"
              aria-label={`${siteConfig.orgName} Home`}
            >
              {siteConfig.orgName.toUpperCase()}
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-6" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-bold text-emerald-950 hover:text-emerald-700 dark:text-emerald-200 dark:hover:text-emerald-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 px-2 py-1"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Action CTA */}
          <div className="hidden md:flex items-center">
            <Link
              href="/members"
              className="inline-flex items-center justify-center px-4 py-2 text-xs font-bold text-emerald-950 dark:text-white bg-white dark:bg-zinc-900 border-2 border-emerald-800 dark:border-emerald-500 hover:bg-emerald-800 hover:text-white dark:hover:bg-emerald-500 dark:hover:text-zinc-950 transition-colors duration-200"
            >
              [ JOIN US ]
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
                <span className="font-mono text-xs border-2 border-emerald-800 dark:border-emerald-500 px-3 py-1.5 bg-white dark:bg-zinc-900 text-emerald-800 dark:text-emerald-400 font-bold">
                  [ CLOSE ]
                </span>
              ) : (
                <span className="font-mono text-xs border-2 border-emerald-800 dark:border-emerald-500 px-3 py-1.5 bg-white dark:bg-zinc-900 text-emerald-800 dark:text-emerald-400 font-bold">
                  [ MENU ]
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
          className={`fixed right-0 top-0 bottom-0 w-3/4 max-w-sm bg-white dark:bg-[#050f08] border-l-2 border-emerald-800 dark:border-emerald-500 p-6 shadow-2xl transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between mb-8">
            <span className="text-lg font-black text-emerald-950 dark:text-emerald-400">
              {siteConfig.orgName.toUpperCase()}
            </span>
            <button
              onClick={() => setIsOpen(false)}
              className="focus:outline-none"
              aria-label="Close menu"
            >
              <span className="font-mono text-xs border-2 border-emerald-800 dark:border-emerald-500 px-3 py-1.5 bg-white dark:bg-zinc-900 text-emerald-800 dark:text-emerald-400 font-bold">
                [ X ]
              </span>
            </button>
          </div>
          <nav className="flex flex-col space-y-4" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-base font-bold text-emerald-950 hover:text-emerald-700 dark:text-emerald-200 dark:hover:text-emerald-400 transition-colors py-2 block border-b border-emerald-100 dark:border-emerald-900/50"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/members"
              onClick={() => setIsOpen(false)}
              className="mt-6 w-full inline-flex items-center justify-center px-4 py-3 text-base font-bold text-emerald-950 dark:text-white bg-white dark:bg-zinc-900 border-2 border-emerald-800 dark:border-emerald-500 hover:bg-emerald-800 hover:text-white dark:hover:bg-emerald-500 dark:hover:text-zinc-950 transition-colors duration-200"
            >
              [ JOIN AS VOLUNTEER ]
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

