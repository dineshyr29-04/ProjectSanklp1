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
        <Hero />
        <About />
        <Mission />
        <Impact />
        <InitiativesPreview />
        <EventsPreview />
        <StudentStories />
        <TeamPreview />
        <Partners />
      </main>
      <Footer />
    </>
  );
}
