import React from "react";
import Header from "../../src/components/sections/Header";
import Footer from "../../src/components/sections/Footer";
import Partners from "../../src/components/sections/Partners";
import FinalCTA from "../../src/components/sections/FinalCTA";
import { siteConfig } from "../../src/config/org";

export const metadata = {
  title: "Our Partners & Supporters | Project Sankalp",
  description:
    "Meet the institutions, NGOs, universities, and organizations that partner with Project Sankalp to amplify our community impact.",
};

export default function PartnersPage() {
  const { contact } = siteConfig;

  return (
    <>
      <Header />
      <main id="main-content" className="flex-grow bg-white">
        {/* Page hero */}
        <section className="bg-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-20">
            <p className="eyebrow mb-5" style={{ color: "var(--accent)" }}>
              Our Partners
            </p>
            <h1
              className="font-serif font-black text-[#0F172A] max-w-3xl"
              style={{
                fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                lineHeight: 1.06,
                letterSpacing: "-0.025em",
              }}
            >
              Together, we go further.
            </h1>
            <p
              className="font-sans text-slate-500 mt-5 max-w-xl"
              style={{ fontSize: "1.0625rem", lineHeight: 1.75 }}
            >
              Project Sankalp is powered by a growing network of schools, universities, NGOs, and industry partners who believe in the transformative power of education and service.
            </p>
          </div>
        </section>

        {/* Full Partners section */}
        <Partners />

        {/* Partnership CTA section */}
        <section className="bg-[#FAFAF8] border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 sm:py-24">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
              {/* Become a partner */}
              <div>
                <p className="eyebrow mb-5" style={{ color: "var(--accent)" }}>
                  Partnership Enquiries
                </p>
                <h2
                  className="font-serif font-black text-[#0F172A] mb-5"
                  style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", lineHeight: 1.1, letterSpacing: "-0.02em" }}
                >
                  Become an institutional partner
                </h2>
                <p
                  className="font-sans text-slate-500 mb-6"
                  style={{ fontSize: "1rem", lineHeight: 1.75 }}
                >
                  We welcome partnerships with schools, colleges, NGOs, corporates, and government bodies. Whether through hardware donations, funding, volunteer recruitment, or curriculum collaboration — every form of support amplifies our impact.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Hardware & infrastructure donations",
                    "CSR partnerships & funding",
                    "Curriculum & training collaboration",
                    "Volunteer & student recruitment",
                    "Research & knowledge partnerships",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span style={{ color: "var(--support)", marginTop: "0.2rem", flexShrink: 0 }}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                          <path d="M3 8L6.5 11.5L13 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <span className="font-sans text-slate-600" style={{ fontSize: "0.9375rem", lineHeight: 1.6 }}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
                <a
                  href={`mailto:${contact.email}?subject=Partnership Enquiry – Project Sankalp`}
                  className="inline-flex items-center gap-2 font-sans font-bold px-7 py-3 rounded-md transition-all hover:opacity-90 hover:-translate-y-0.5"
                  style={{
                    backgroundColor: "#0F172A",
                    color: "#fff",
                    fontSize: "0.875rem",
                    textDecoration: "none",
                  }}
                >
                  Get in touch
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M3 8H13M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>

              {/* Why partner */}
              <div className="space-y-6">
                {[
                  {
                    title: "Real, measurable impact",
                    desc: "Your contribution directly funds community labs, mentorship programs, and awareness drives that reach thousands of students.",
                  },
                  {
                    title: "NSS-aligned credibility",
                    desc: "Project Sankalp operates under National Service Scheme values, giving partners institutional recognition and credibility.",
                  },
                  {
                    title: "CSR benefit eligible",
                    desc: "Contributions to Project Sankalp are eligible for Corporate Social Responsibility (CSR) reporting under applicable guidelines.",
                  },
                  {
                    title: "Visibility & brand alignment",
                    desc: "Partners are featured across our communications, events, and digital platforms, associating your brand with meaningful social work.",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex gap-4 p-5 rounded-xl border border-slate-100"
                    style={{ backgroundColor: "#fff" }}
                  >
                    <div
                      className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-serif font-black text-white text-sm"
                      style={{ backgroundColor: "#0F172A" }}
                      aria-hidden="true"
                    >
                      {i + 1}
                    </div>
                    <div>
                      <h3
                        className="font-serif font-bold text-[#0F172A] mb-1"
                        style={{ fontSize: "1rem", letterSpacing: "-0.01em" }}
                      >
                        {item.title}
                      </h3>
                      <p
                        className="font-sans text-slate-500"
                        style={{ fontSize: "0.875rem", lineHeight: 1.7 }}
                      >
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
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
