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
    <>
      <header
        className={`fixed left-0 right-0 z-50 flex justify-center pointer-events-none transition-all duration-500 ease-out ${
          isScrolled ? "top-3 sm:top-5" : "top-5 sm:top-8"
        }`}
        role="banner"
      >
        {/* Floating Pill Navbar */}
        <div
          className={`pointer-events-auto flex items-center justify-between pl-5 pr-2 py-2 rounded-full transition-all duration-500 ease-out ${
            isScrolled
              ? "bg-white/85 backdrop-blur-lg shadow-lg shadow-slate-200/20 border border-slate-200/50"
              : "bg-white shadow-sm border border-slate-100"
          }`}
          style={{ width: "92%", maxWidth: "720px" }}
        >
          {/* Logo / Wordmark */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="font-serif font-black text-[#0F172A] hover:opacity-80 transition-opacity focus:outline-none"
              style={{
                fontSize: "1.1rem",
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
                className="px-3.5 py-1.5 font-sans font-semibold text-slate-500 hover:text-[#0F172A] transition-colors rounded-full hover:bg-slate-50 focus:outline-none"
                style={{ fontSize: "0.8125rem", textDecoration: "none" }}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop & Mobile Actions */}
          <div className="flex items-center gap-2">
            <Link
              href="/members"
              id="header-join-cta"
              className="hidden sm:inline-flex items-center justify-center px-5 py-2 font-sans font-bold text-white rounded-full transition-all hover:scale-105 focus:outline-none shadow-sm"
              style={{
                backgroundColor: "#0F172A",
                fontSize: "0.75rem",
                textDecoration: "none",
              }}
            >
              Join Us
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-slate-50 text-[#0F172A] hover:bg-slate-100 transition-colors focus:outline-none"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden fixed inset-0 z-50 bg-[#0F172A]/40 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
        aria-hidden={!isOpen}
      >
        <div
          className={`fixed right-0 top-0 bottom-0 w-[80%] max-w-sm bg-white shadow-2xl transition-transform duration-500 ease-out flex flex-col ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Drawer header */}
          <div className="flex items-center justify-between px-6 py-6 border-b border-slate-100">
            <span
              className="font-serif font-black text-[#0F172A]"
              style={{ fontSize: "1.25rem", letterSpacing: "-0.02em" }}
            >
              {siteConfig.orgName}
            </span>
            <button
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 text-slate-500 hover:text-[#0F172A] hover:bg-slate-200 transition-colors focus:outline-none"
              aria-label="Close menu"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          {/* Drawer nav */}
          <nav className="flex flex-col px-4 py-6 space-y-2 flex-1" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="font-sans font-bold text-slate-600 hover:text-[#0F172A] hover:bg-slate-50 transition-colors py-3.5 px-4 rounded-xl block"
                style={{ fontSize: "1.0625rem", textDecoration: "none" }}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Drawer CTA */}
          <div className="px-6 pb-10">
            <Link
              href="/members"
              onClick={() => setIsOpen(false)}
              className="w-full inline-flex items-center justify-center px-4 py-4 font-sans font-bold text-white rounded-xl transition-all shadow-sm focus:outline-none"
              style={{ backgroundColor: "#0F172A", fontSize: "0.9375rem", textDecoration: "none" }}
            >
              Join as Volunteer
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
