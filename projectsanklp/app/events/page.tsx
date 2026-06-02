import React from "react";
import Header from "../../src/components/sections/Header";
import Footer from "../../src/components/sections/Footer";
import EventsTimeline from "../../src/components/sections/EventsTimeline";
import StudentStories from "../../src/components/sections/StudentStories";
import FinalCTA from "../../src/components/sections/FinalCTA";
import { siteConfig } from "../../src/config/org";

export const metadata = {
  title: "Events & Activities | Project Sankalp",
  description:
    "Explore Project Sankalp's timeline of workshops, awareness campaigns, community drives, leadership programs, hackathons, and social projects.",
};

export default function EventsPage() {
  const { history } = siteConfig.about;

  return (
    <>
      <Header />
      <main id="main-content" className="flex-grow bg-white">
        {/* Page hero */}
        <section className="bg-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-20">
            <p
              className="eyebrow mb-5"
              style={{ color: "var(--accent)" }}
            >
              Events & Activities
            </p>
            <h1
              className="font-serif font-black text-[#0F172A] max-w-3xl"
              style={{
                fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                lineHeight: 1.06,
                letterSpacing: "-0.025em",
              }}
            >
              Where service comes to life.
            </h1>
            <p
              className="font-sans text-slate-500 mt-5 max-w-xl"
              style={{ fontSize: "1.0625rem", lineHeight: 1.75 }}
            >
              From leadership summits and hackathons to community drives and awareness campaigns — every event is a step toward a more engaged society.
            </p>
          </div>
        </section>

        {/* Full events timeline */}
        <EventsTimeline />

        {/* Our History milestones */}
        <section className="bg-[#FAFAF8] border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 sm:py-28">
            <div className="max-w-2xl mb-14">
              <p className="eyebrow mb-5" style={{ color: "var(--accent)" }}>
                Our Journey
              </p>
              <h2
                className="font-serif font-black text-[#0F172A]"
                style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.08, letterSpacing: "-0.02em" }}
              >
                A timeline of growth.
              </h2>
            </div>

            <div className="relative max-w-2xl">
              {/* Vertical line */}
              <div
                className="absolute left-[1.1rem] top-2 bottom-2 w-px"
                style={{ backgroundColor: "#E2E8F0" }}
                aria-hidden="true"
              />

              <ol className="space-y-10" aria-label="Organization history">
                {history.map((item, index) => (
                  <li key={index} className="flex gap-8">
                    {/* Year badge */}
                    <div className="flex-shrink-0 flex flex-col items-center" style={{ width: "2.25rem" }}>
                      <div
                        className="w-4 h-4 rounded-full border-2 bg-white mt-1 flex-shrink-0"
                        style={{ borderColor: "var(--accent)" }}
                        aria-hidden="true"
                      />
                    </div>

                    <div className="pb-2">
                      <span
                        className="font-sans font-bold"
                        style={{ color: "var(--accent)", fontSize: "0.75rem", letterSpacing: "0.06em", textTransform: "uppercase" }}
                      >
                        {item.year}
                      </span>
                      <h3
                        className="font-serif font-bold text-[#0F172A] mt-1 mb-2"
                        style={{ fontSize: "1.25rem", letterSpacing: "-0.01em" }}
                      >
                        {item.title}
                      </h3>
                      <p
                        className="font-sans text-slate-500"
                        style={{ fontSize: "0.9375rem", lineHeight: 1.75 }}
                      >
                        {item.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* Student stories on events page */}
        <StudentStories />

        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
