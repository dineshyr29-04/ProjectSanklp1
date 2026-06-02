"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { siteConfig } from "../../config/org";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Events", href: "/events" },
    { name: "Members", href: "/members" },
    { name: "Partners", href: "/partners" },
  ];

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-white/98 backdrop-blur-md shadow-sm border-b border-slate-100"
          : "bg-white/95 border-b border-transparent"
      }`}
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo / Wordmark */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="font-serif font-black text-[#0F172A] hover:opacity-80 transition-opacity focus:outline-none"
              style={{
                fontSize: "clamp(1.1rem, 2vw, 1.375rem)",
                letterSpacing: "-0.02em",
                textDecoration: "none",
              }}
              aria-label={`${siteConfig.orgName} — Return to homepage`}
            >
              {siteConfig.orgName}
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Primary Navigation">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="px-3 py-2 font-sans font-semibold text-slate-600 hover:text-[#0F172A] transition-colors rounded-md hover:bg-slate-50 focus:outline-none"
                style={{ fontSize: "0.875rem", textDecoration: "none" }}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/members"
              id="header-join-cta"
              className="inline-flex items-center justify-center px-5 py-2.5 font-sans font-bold text-white rounded-md transition-all hover:opacity-90 hover:-translate-y-0.5 focus:outline-none"
              style={{
                backgroundColor: "#0F172A",
                fontSize: "0.8125rem",
                textDecoration: "none",
              }}
            >
              Join Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="px-4 py-2 font-sans font-bold text-[#0F172A] border border-slate-200 rounded-md text-xs bg-white hover:bg-slate-50 transition-colors focus:outline-none"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? "Close" : "Menu"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden fixed inset-0 z-50 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
        aria-hidden={!isOpen}
      >
        <div
          className={`fixed right-0 top-0 bottom-0 w-3/4 max-w-sm bg-white shadow-2xl transition-transform duration-300 ease-in-out flex flex-col ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Drawer header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100">
            <span
              className="font-serif font-black text-[#0F172A]"
              style={{ fontSize: "1.125rem", letterSpacing: "-0.02em" }}
            >
              {siteConfig.orgName}
            </span>
            <button
              onClick={() => setIsOpen(false)}
              className="font-sans text-xs font-bold text-slate-500 hover:text-[#0F172A] px-3 py-1.5 border border-slate-200 rounded-md focus:outline-none"
              aria-label="Close menu"
            >
              Close
            </button>
          </div>

          {/* Drawer nav */}
          <nav className="flex flex-col px-6 py-6 space-y-1 flex-1" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="font-sans font-semibold text-slate-700 hover:text-[#0F172A] hover:bg-slate-50 transition-colors py-3 px-3 rounded-md block"
                style={{ fontSize: "0.9375rem", textDecoration: "none" }}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Drawer CTA */}
          <div className="px-6 pb-8">
            <Link
              href="/members"
              onClick={() => setIsOpen(false)}
              className="w-full inline-flex items-center justify-center px-4 py-3.5 font-sans font-bold text-white rounded-md transition-colors focus:outline-none"
              style={{ backgroundColor: "#0F172A", fontSize: "0.9375rem", textDecoration: "none" }}
            >
              Join as Volunteer
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
