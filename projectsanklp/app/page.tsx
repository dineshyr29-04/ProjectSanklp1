import React from "react";
import Header from "../src/components/sections/Header";
import Hero from "../src/components/sections/Hero";
import About from "../src/components/sections/About";
import Mission from "../src/components/sections/Mission";
import Impact from "../src/components/sections/Impact";
import Initiatives from "../src/components/sections/Initiatives";
import EventsTimeline from "../src/components/sections/EventsTimeline";
import StudentStories from "../src/components/sections/StudentStories";
import Team from "../src/components/sections/Team";
import Partners from "../src/components/sections/Partners";
import FinalCTA from "../src/components/sections/FinalCTA";
import Footer from "../src/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-grow bg-white">
        {/* Section 1 — Hero: Full-screen photograph + editorial headline */}
        <Hero />

        {/* Section 2 — Who We Are: Editorial two-column narrative */}
        <About />

        {/* Section 3 — Our Mission: Three pillars — Education, Leadership, Community Impact */}
        <Mission />

        {/* Section 4 — Our Impact: Large statistics on navy background */}
        <Impact />

        {/* Section 5 — Initiatives: Alternating left-right image + text layout */}
        <Initiatives />

        {/* Section 6 — Events & Activities: Vertical timeline layout */}
        <EventsTimeline />

        {/* Section 7 — Student Stories: Testimonials with portraits */}
        <StudentStories />

        {/* Section 8 — Core Team: Professional member profiles */}
        <Team />

        {/* Section 9 — Partners: Monochrome institution logo wall */}
        <Partners />

        {/* Section 10 — Final CTA: "Be Part of Something Bigger Than Yourself" */}
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
