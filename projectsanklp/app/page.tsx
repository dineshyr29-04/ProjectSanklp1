import React from "react";
import Header from "../src/components/sections/Header";
import Hero from "../src/components/sections/Hero";
import About from "../src/components/sections/About";
import Mission from "../src/components/sections/Mission";
import Impact from "../src/components/sections/Impact";
import InitiativesPreview from "../src/components/sections/InitiativesPreview";
import EventsPreview from "../src/components/sections/EventsPreview";
import StudentStories from "../src/components/sections/StudentStories";
import TeamPreview from "../src/components/sections/TeamPreview";
import Partners from "../src/components/sections/Partners";
import FinalCTA from "../src/components/sections/FinalCTA";
import Footer from "../src/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-grow bg-white">
        {/* § 1 — Hero: Full-screen photograph + editorial headline + stat strip */}
        <Hero />

        {/* § 2 — Who We Are: Editorial two-column narrative with image */}
        <About />

        {/* § 3 — Our Mission: Three pillars — Education, Leadership, Community Impact */}
        <Mission />

        {/* § 4 — Our Impact: Large statistics on deep navy background */}
        <Impact />

        {/* § 5 — Initiatives Preview: 3 initiative cards → links to /events */}
        <InitiativesPreview />

        {/* § 6 — Events Preview: 4 recent events → links to /events */}
        <EventsPreview />

        {/* § 7 — Student Stories: Testimonials with serif quotes + avatars */}
        <StudentStories />

        {/* § 8 — Team Preview: 4 core members → links to /core-team */}
        <TeamPreview />

        {/* § 9 — Partners: Monochrome institution logo wall → links to /partners */}
        <Partners />

        {/* § 10 — Final CTA: "Be Part of Something Bigger Than Yourself" */}
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
