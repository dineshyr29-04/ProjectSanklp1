"use client";

import React, { useState, useEffect } from "react";
import { siteConfig } from "../../config/org";
import { Menu, X } from "../ui/Icons";

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
    { name: "About", href: "#about" },
    { name: "Impact", href: "#impact" },
    { name: "Programs", href: "#programs" },
    { name: "Team", href: "#team" },
    { name: "Gallery", href: "#gallery" },
    { name: "Get Involved", href: "#get-involved" },
  ];

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-zinc-200/50 dark:border-zinc-800/50 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a
              href="#"
              className="text-xl sm:text-2xl font-bold tracking-tight bg-gradient-to-r from-indigo-600 to-indigo-400 dark:from-indigo-400 dark:to-indigo-300 bg-clip-text text-transparent focus:outline-none"
              aria-label={`${siteConfig.orgName} Home`}
            >
              {siteConfig.orgName}
            </a>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-zinc-600 hover:text-indigo-600 dark:text-zinc-300 dark:hover:text-indigo-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 rounded-md px-2 py-1"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTA */}
          <div className="hidden md:flex items-center">
            <a
              href="#get-involved"
              className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 rounded-lg shadow-sm hover:shadow transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Get Involved
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-zinc-600 dark:text-zinc-300 hover:text-indigo-600 dark:hover:text-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      >
        <div
          className={`fixed right-0 top-0 bottom-0 w-3/4 max-w-sm bg-white dark:bg-zinc-950 p-6 shadow-2xl transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between mb-8">
            <span className="text-lg font-bold text-zinc-950 dark:text-white">
              {siteConfig.orgName}
            </span>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-md text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>
          <nav className="flex flex-col space-y-4" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-base font-semibold text-zinc-800 hover:text-indigo-600 dark:text-zinc-200 dark:hover:text-indigo-400 transition-colors py-2 block border-b border-zinc-100 dark:border-zinc-900"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#get-involved"
              onClick={() => setIsOpen(false)}
              className="mt-6 w-full inline-flex items-center justify-center px-4 py-3 text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 rounded-lg shadow-sm"
            >
              Get Involved
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
