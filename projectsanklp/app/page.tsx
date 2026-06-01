import React from "react";
import Header from "../src/components/sections/Header";
import Hero from "../src/components/sections/Hero";
import About from "../src/components/sections/About";
import Impact from "../src/components/sections/Impact";
import Programs from "../src/components/sections/Programs";
import Team from "../src/components/sections/Team";
import Gallery from "../src/components/sections/Gallery";
import Partners from "../src/components/sections/Partners";
import GetInvolved from "../src/components/sections/GetInvolved";
import Footer from "../src/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-grow">
        <Hero />
        <About />
        <Impact />
        <Programs />
        <Team />
        <Gallery />
        <Partners />
        <GetInvolved />
      </main>
      <Footer />
    </>
  );
}
