import React from "react";
import Header from "../../src/components/sections/Header";
import Footer from "../../src/components/sections/Footer";

export const metadata = {
  title: "Privacy Policy & Terms | Project Sankalp",
  description: "Read the Privacy Policy and Terms of Service for Project Sankalp Foundation.",
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1 max-w-4xl mx-auto px-6 py-16 sm:py-24 text-zinc-800 dark:text-zinc-300">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 dark:text-white tracking-tight mb-8">
          Privacy Policy & Terms of Service
        </h1>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-10">
          Last Updated: June 2, 2026
        </p>

        {/* Privacy Policy */}
        <section className="space-y-6 mb-16">
          <h2 className="text-xl sm:text-2xl font-bold text-zinc-950 dark:text-white border-b border-zinc-200 dark:border-zinc-800 pb-2">
            Privacy Policy
          </h2>
          <p className="leading-relaxed">
            At Project Sankalp, accessible from projectsankalp.org, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Project Sankalp and how we use it.
          </p>

          <h3 className="text-lg font-bold text-zinc-950 dark:text-white mt-6">1. Information We Collect</h3>
          <p className="leading-relaxed">
            We only collect personal information that you voluntarily provide to us when you apply to volunteer, sign up for our newsletter, or request information through our contact forms. This may include:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Full Name</li>
            <li>Email Address</li>
            <li>Phone Number</li>
            <li>Technical/professional skills or details you choose to share in application forms.</li>
          </ul>

          <h3 className="text-lg font-bold text-zinc-950 dark:text-white mt-6">2. How We Use Your Information</h3>
          <p className="leading-relaxed">
            We use the information we collect in various ways, including to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Process and evaluate your volunteer applications.</li>
            <li>Send monthly newsletter briefs and volunteer updates (only if opted-in).</li>
            <li>Respond to your emails or contact queries.</li>
            <li>Monitor the utility of our smart labs and educational outcomes.</li>
          </ul>

          <h3 className="text-lg font-bold text-zinc-950 dark:text-white mt-6">3. Data Protection</h3>
          <p className="leading-relaxed">
            Project Sankalp does not sell, trade, or rent your personal identification information to third parties. We use standard secure servers and database encryption to safeguard your data.
          </p>
        </section>

        {/* Terms of Service */}
        <section id="terms" className="space-y-6">
          <h2 className="text-xl sm:text-2xl font-bold text-zinc-950 dark:text-white border-b border-zinc-200 dark:border-zinc-800 pb-2">
            Terms of Service
          </h2>
          <p className="leading-relaxed">
            By accessing or using our website, you agree to comply with and be bound by these Terms of Service.
          </p>

          <h3 className="text-lg font-bold text-zinc-950 dark:text-white mt-6">1. Permitted Use</h3>
          <p className="leading-relaxed">
            You agree to use our website only for lawful purposes related to learning about Project Sankalp&apos;s programs, volunteering, donating, or contacting us. You must not use our forms or systems to transmit spam, malware, or abusive content.
          </p>

          <h3 className="text-lg font-bold text-zinc-950 dark:text-white mt-6">2. Intellectual Property</h3>
          <p className="leading-relaxed">
            The design, text, custom illustrations, and content on this website are the property of Project Sankalp. Our open-source repositories and educational curricula are licensed under their respective MIT/Creative Commons licenses where explicitly marked.
          </p>

          <h3 className="text-lg font-bold text-zinc-950 dark:text-white mt-6">3. Section 8 Non-profit Compliance</h3>
          <p className="leading-relaxed">
            Project Sankalp is a registered Section 8 social impact organization. All donation tax exemption documentation (Section 80G) is generated manually following bank transaction receipts and verification of matching donor ID details.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
