import React from "react";
import Header from "../../src/components/sections/Header";
import Footer from "../../src/components/sections/Footer";
import Team from "../../src/components/sections/Team";
import FinalCTA from "../../src/components/sections/FinalCTA";
import { siteConfig } from "../../src/config/org";

export const metadata = {
  title: "Core Leadership Team | Project Sankalp",
  description:
    "Meet the passionate students, mentors, and coordinators who drive Project Sankalp's social impact programs and community initiatives.",
};

export default function CoreTeamPage() {
  const { contact } = siteConfig;

  return (
    <>
      <Header />
      <main id="main-content" className="flex-grow bg-white">
        {/* Page hero */}
        <section className="bg-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-20">
            <p className="eyebrow mb-5" style={{ color: "var(--accent)" }}>
              Core Team
            </p>
            <h1
              className="font-serif font-black text-[#0F172A] max-w-3xl"
              style={{
                fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                lineHeight: 1.06,
                letterSpacing: "-0.025em",
              }}
            >
              The people behind the mission.
            </h1>
            <p
              className="font-sans text-slate-500 mt-5 max-w-xl"
              style={{ fontSize: "1.0625rem", lineHeight: 1.75 }}
            >
              A diverse group of students, educators, and professionals united by one purpose: to serve communities and build a better future through education and technology.
            </p>
          </div>
        </section>

        {/* Full Team section */}
        <Team />

        {/* Values strip */}
        <section className="bg-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="eyebrow mb-5" style={{ color: "var(--accent)" }}>
                  Media & Press
                </p>
                <h2
                  className="font-serif font-black text-[#0F172A] mb-5"
                  style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", lineHeight: 1.1, letterSpacing: "-0.02em" }}
                >
                  Press enquiries & media contact
                </h2>
                <p
                  className="font-sans text-slate-500 mb-8"
                  style={{ fontSize: "1rem", lineHeight: 1.75 }}
                >
                  Are you a journalist, researcher, or content creator interested in Project Sankalp's work? We welcome media partnerships and are happy to share our story.
                </p>
                <a
                  href={`mailto:${contact.email}?subject=Press Inquiry – Project Sankalp`}
                  className="inline-flex items-center gap-2 font-sans font-bold px-7 py-3 rounded-md transition-all hover:-translate-y-0.5"
                  style={{
                    backgroundColor: "#0F172A",
                    color: "#fff",
                    fontSize: "0.875rem",
                    textDecoration: "none",
                  }}
                >
                  Email Press Office
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M3 8H13M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>

              <div
                className="p-8 rounded-2xl border border-slate-100"
                style={{ backgroundColor: "#FAFAF8" }}
              >
                <p className="font-sans font-bold text-slate-400 text-xs uppercase tracking-widest mb-4">
                  Contact Details
                </p>
                <div className="space-y-3 font-sans" style={{ fontSize: "0.9375rem" }}>
                  <div className="flex flex-col">
                    <span className="font-bold text-[#0F172A] mb-0.5">Email</span>
                    <a
                      href={`mailto:${contact.email}`}
                      className="hover:underline"
                      style={{ color: "var(--accent)", textDecoration: "none" }}
                    >
                      {contact.email}
                    </a>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-[#0F172A] mb-0.5">Phone</span>
                    <a
                      href={`tel:${contact.phone}`}
                      className="hover:underline text-slate-600"
                      style={{ textDecoration: "none" }}
                    >
                      {contact.phone}
                    </a>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-[#0F172A] mb-0.5">Address</span>
                    <p className="text-slate-500">{contact.address}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
