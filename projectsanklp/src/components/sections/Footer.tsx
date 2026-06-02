"use client";

import React from "react";
import Link from "next/link";
import { siteConfig } from "../../config/org";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { contact } = siteConfig;

  const socialLinks = [
    {
      name: "Instagram",
      href: contact.socials.instagram,
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: contact.socials.linkedin,
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      name: "Twitter",
      href: contact.socials.twitter,
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      name: "GitHub",
      href: contact.socials.github,
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="bg-[#0F172A] text-slate-400 font-sans border-t border-slate-800" aria-label="Site Footer">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 lg:py-20">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Brand & Mission (Col span 4) */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <Link href="/" className="font-serif font-black text-white text-2xl tracking-tight mb-4 hover:text-[#F59E0B] transition-colors focus:outline-none">
              Project Sankalp
            </Link>
            <p className="text-[0.9375rem] leading-relaxed mb-8 max-w-sm">
              A student-led social impact organization aligned with the National Service Scheme, dedicated to education, leadership, and community service.
            </p>
            <div className="flex items-center gap-5">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="text-slate-400 hover:text-[#F59E0B] hover:scale-110 transition-all focus:outline-none"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Organization Links (Col span 2) */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h3 className="font-bold text-white text-sm mb-6 uppercase tracking-wider">Organization</h3>
            <ul className="space-y-4 text-[0.9375rem]">
              <li><Link href="/" className="hover:text-white transition-colors focus:outline-none">Home</Link></li>
              <li><Link href="/core-team" className="hover:text-white transition-colors focus:outline-none">Core Team</Link></li>
              <li><Link href="/partners" className="hover:text-white transition-colors focus:outline-none">Our Partners</Link></li>
            </ul>
          </div>

          {/* Engage Links (Col span 2) */}
          <div className="lg:col-span-2">
            <h3 className="font-bold text-white text-sm mb-6 uppercase tracking-wider">Engage</h3>
            <ul className="space-y-4 text-[0.9375rem]">
              <li><Link href="/events" className="hover:text-white transition-colors focus:outline-none">Events Timeline</Link></li>
              <li><Link href="/members" className="hover:text-white transition-colors focus:outline-none">Volunteer</Link></li>
              <li><a href="mailto:info@projectsankalp.org?subject=Donation Inquiry" className="hover:text-white transition-colors focus:outline-none">Donate</a></li>
            </ul>
          </div>

          {/* Contact (Col span 3) */}
          <div className="lg:col-span-3">
            <h3 className="font-bold text-white text-sm mb-6 uppercase tracking-wider">Contact Us</h3>
            <div className="space-y-4 text-[0.9375rem]">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href={`mailto:${contact.email}`} className="hover:text-white transition-colors focus:outline-none">
                  {contact.email}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href={`tel:${contact.phone}`} className="hover:text-white transition-colors focus:outline-none">
                  {contact.phone}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="leading-relaxed">{contact.address}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="h-px w-full bg-slate-800 my-12" aria-hidden="true" />

        {/* Bottom Legal */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-[0.8125rem]">
          <p>© {currentYear} {siteConfig.orgName}. All rights reserved.</p>
          <div className="flex items-center gap-8">
            <Link href="/privacy" className="hover:text-white transition-colors focus:outline-none">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors focus:outline-none">
              Terms of Service
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
