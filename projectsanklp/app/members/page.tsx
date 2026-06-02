"use client";

import React, { useState } from "react";
import Header from "../../src/components/sections/Header";
import Footer from "../../src/components/sections/Footer";
import { siteConfig } from "../../src/config/org";

export default function MembersPage() {
  const { email, phone, address, socials } = siteConfig.contact;
  const testimonials = siteConfig.testimonials;

  // Volunteer Form state
  const [volunteerForm, setVolunteerForm] = useState({
    name: "",
    email: "",
    phone: "",
    program: "digital-literacy",
    message: "",
  });
  const [volunteerErrors, setVolunteerErrors] = useState<Record<string, string>>({});
  const [volunteerSuccess, setVolunteerSuccess] = useState(false);

  // Newsletter Form state
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterError, setNewsletterError] = useState("");
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);

  const handleVolunteerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: Record<string, string> = {};

    if (!volunteerForm.name.trim()) errors.name = "Name is required";
    if (!volunteerForm.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(volunteerForm.email)) {
      errors.email = "Invalid email format";
    }
    if (!volunteerForm.phone.trim()) {
      errors.phone = "Phone number is required";
    } else if (!/^\+?[0-9\s-]{8,15}$/.test(volunteerForm.phone.replace(/\s+/g, ""))) {
      errors.phone = "Invalid phone number format";
    }
    if (!volunteerForm.message.trim()) errors.message = "Message is required";

    if (Object.keys(errors).length > 0) {
      setVolunteerErrors(errors);
      return;
    }

    setVolunteerErrors({});
    setVolunteerSuccess(true);
    setVolunteerForm({
      name: "",
      email: "",
      phone: "",
      program: "digital-literacy",
      message: "",
    });
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) {
      setNewsletterError("Email is required");
      return;
    } else if (!/\S+@\S+\.\S+/.test(newsletterEmail)) {
      setNewsletterError("Invalid email format");
      return;
    }

    setNewsletterError("");
    setNewsletterSuccess(true);
    setNewsletterEmail("");
  };

  return (
    <>
      <Header />
      <main id="main-content" className="flex-grow bg-white dark:bg-[#0f172a] py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 bg-emerald-50 dark:bg-emerald-950/40 text-xs font-sans font-bold text-emerald-800 dark:text-[#10b981] rounded-full">Join the Community</span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black text-slate-900 dark:text-white mt-2 mb-4">
              Members & Volunteers
            </h1>
            <p className="text-sm font-sans text-slate-500 dark:text-slate-400">
              Apply to join as a technology mentor, request community lab setups, or sponsor hardware to support digital access in rural spaces.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-start mb-20">
            {/* Volunteer Form (Col 1-7) */}
            <div className="lg:col-span-7 border border-slate-100 dark:border-slate-800 bg-white dark:bg-[#0f172a] p-8 sm:p-10 rounded-3xl shadow-xs">
              <h2 className="text-2xl font-serif font-black text-slate-900 dark:text-white mb-2">
                Volunteer & Membership Application
              </h2>
              <p className="text-xs font-sans text-slate-400 mb-8 font-semibold">
                Share your skills and build local digital literacy cohorts.
              </p>

              {volunteerSuccess ? (
                <div className="border border-slate-100 bg-slate-50/50 dark:bg-slate-900/30 p-6 text-center rounded-2xl">
                  <div className="text-sm font-sans font-bold text-slate-700 dark:text-slate-200 mb-3">
                    Application Logged Successfully
                  </div>
                  <p className="text-sm font-sans text-slate-500 dark:text-slate-400 leading-relaxed mb-6">
                    Our team coordinators will review your submission and email you the orientation packet details within 3 business days.
                  </p>
                  <button
                    onClick={() => setVolunteerSuccess(false)}
                    className="text-xs font-sans font-bold text-[#10b981] hover:text-emerald-600 hover:underline focus:outline-none"
                  >
                    Submit Another Application
                  </button>
                </div>
              ) : (
                <form onSubmit={handleVolunteerSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6 font-sans">
                    {/* Name */}
                    <div>
                      <label htmlFor="volunteer-name" className="block text-xs font-bold text-slate-700 dark:text-slate-350 uppercase mb-2 ml-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="volunteer-name"
                        value={volunteerForm.name}
                        onChange={(e) => setVolunteerForm({ ...volunteerForm, name: e.target.value })}
                        className="w-full px-4 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm focus:outline-none rounded-xl focus:border-[#10b981] text-slate-900 dark:text-white"
                        placeholder="Jane Doe"
                      />
                      {volunteerErrors.name && (
                        <p className="mt-1.5 text-xs text-red-500 font-semibold" role="alert">
                          Error: {volunteerErrors.name}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="volunteer-email" className="block text-xs font-bold text-slate-700 dark:text-slate-350 uppercase mb-2 ml-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="volunteer-email"
                        value={volunteerForm.email}
                        onChange={(e) => setVolunteerForm({ ...volunteerForm, email: e.target.value })}
                        className="w-full px-4 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm focus:outline-none rounded-xl focus:border-[#10b981] text-slate-900 dark:text-white"
                        placeholder="jane@example.com"
                      />
                      {volunteerErrors.email && (
                        <p className="mt-1.5 text-xs text-red-500 font-semibold" role="alert">
                          Error: {volunteerErrors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6 font-sans">
                    {/* Phone */}
                    <div>
                      <label htmlFor="volunteer-phone" className="block text-xs font-bold text-slate-700 dark:text-slate-355 uppercase mb-2 ml-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="volunteer-phone"
                        value={volunteerForm.phone}
                        onChange={(e) => setVolunteerForm({ ...volunteerForm, phone: e.target.value })}
                        className="w-full px-4 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm focus:outline-none rounded-xl focus:border-[#10b981] text-slate-900 dark:text-white"
                        placeholder="+91 98765 43210"
                      />
                      {volunteerErrors.phone && (
                        <p className="mt-1.5 text-xs text-red-500 font-semibold" role="alert">
                          Error: {volunteerErrors.phone}
                        </p>
                      )}
                    </div>

                    {/* Preferred Program */}
                    <div>
                      <label htmlFor="volunteer-program" className="block text-xs font-bold text-slate-700 dark:text-slate-355 uppercase mb-2 ml-1">
                        Select Program
                      </label>
                      <select
                        id="volunteer-program"
                        value={volunteerForm.program}
                        onChange={(e) => setVolunteerForm({ ...volunteerForm, program: e.target.value })}
                        className="w-full px-4 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm focus:outline-none rounded-xl focus:border-[#10b981] text-slate-700 dark:text-white"
                      >
                        <option value="digital-literacy">Digital Literacy Academy</option>
                        <option value="tech-mentorship">Career Accelerator Mentorship</option>
                        <option value="community-labs">Smart Lab Setup Setup</option>
                        <option value="sankalp-fellows">Social Tech Fellowship</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="font-sans">
                    <label htmlFor="volunteer-message" className="block text-xs font-bold text-slate-700 dark:text-slate-355 uppercase mb-2 ml-1">
                      Contribution Statement
                    </label>
                    <textarea
                      id="volunteer-message"
                      value={volunteerForm.message}
                      onChange={(e) => setVolunteerForm({ ...volunteerForm, message: e.target.value })}
                      rows={4}
                      className="w-full px-4 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm focus:outline-none rounded-xl focus:border-[#10b981] text-slate-900 dark:text-white resize-none"
                      placeholder="Briefly state your technical/teaching background and why you want to participate..."
                    />
                    {volunteerErrors.message && (
                      <p className="mt-1.5 text-xs text-red-500 font-semibold" role="alert">
                        Error: {volunteerErrors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center px-6 py-4 text-xs font-sans font-bold tracking-wider uppercase text-white bg-slate-900 hover:bg-[#10b981] dark:bg-[#10b981] dark:hover:bg-emerald-450 dark:text-slate-950 rounded-full transition-all duration-200 cursor-pointer shadow-xs"
                  >
                    Submit Member Application
                  </button>
                </form>
              )}
            </div>

            {/* Donation Details & newsletter & Contact Details (Col 8-12) */}
            <div className="lg:col-span-5 space-y-8 font-sans">
              
              {/* Donation Details Card */}
              <div className="border border-slate-100 dark:border-slate-800 bg-[#f8fafc] dark:bg-slate-900/30 p-8 rounded-3xl shadow-xs">
                <div className="text-xs font-sans font-bold text-slate-400 mb-3">
                  Co-Sponsorship
                </div>
                <h3 className="text-xl font-serif font-black text-slate-900 dark:text-white uppercase mb-4">
                  Financial Support
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-6">
                  Donations fund off-grid solar panels and server backup batteries. Project Sankalp is a Section 8 non-profit (tax benefit under 80G).
                </p>

                <div className="border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-950 p-5 rounded-2xl text-xs font-mono space-y-2 mb-6 text-slate-700 dark:text-slate-300">
                  <div className="text-center font-bold border-b border-slate-105 pb-2 text-slate-900 dark:text-white">
                    BANK DETAILS
                  </div>
                  <div>ACCOUNT NAME: PROJECT SANKALP FOUNDATION</div>
                  <div>ACCOUNT NUMBER: 98765432109</div>
                  <div>IFSC CODE: SBIN0001234</div>
                  <div>UPI ADDRESS: sankalp@sbi</div>
                </div>

                <div className="text-[10px] font-bold text-slate-400">
                  Send receipts to: info@projectsankalp.org
                </div>
              </div>

              {/* Newsletter Subscription */}
              <div className="border border-slate-100 dark:border-slate-800 bg-[#f8fafc] dark:bg-slate-900/30 p-8 rounded-3xl shadow-xs">
                <div className="text-xs font-sans font-bold text-slate-400 mb-3">
                  Join the List
                </div>
                <h3 className="text-lg font-serif font-black text-slate-900 dark:text-white uppercase mb-2">
                  Newsletter Updates
                </h3>
                <p className="text-xs text-slate-550 dark:text-slate-400 mb-6 leading-relaxed">
                  Receive monthly project brief summaries and updates.
                </p>

                {newsletterSuccess ? (
                  <div className="border border-slate-200 bg-slate-100/50 p-4 text-center rounded-xl text-xs font-bold text-slate-700">
                    Subscribed Successfully
                  </div>
                ) : (
                  <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                    <input
                      type="email"
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      className="w-full px-4 py-3 bg-white dark:bg-slate-900 border border-slate-205 dark:border-slate-700 text-sm focus:outline-none rounded-xl"
                      placeholder="you@example.com"
                    />
                    {newsletterError && (
                      <p className="text-xs text-red-500 font-semibold" role="alert">
                        Error: {newsletterError}
                      </p>
                    )}
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center px-4 py-3 text-xs font-sans font-bold tracking-wider uppercase text-white bg-slate-900 hover:bg-[#10b981] dark:bg-[#10b981] dark:hover:bg-[#10b981] dark:hover:text-slate-950 rounded-full transition-all duration-200 cursor-pointer"
                    >
                      Subscribe
                    </button>
                  </form>
                )}
              </div>

              {/* HQ details */}
              <div className="border border-slate-100 bg-[#f8fafc] dark:bg-[#0f172a] p-8 rounded-3xl text-xs font-mono space-y-4 text-slate-600 dark:text-slate-350">
                <div className="font-bold border-b border-slate-200/60 pb-2 text-slate-900 dark:text-white">
                  HEADQUARTERS ADDRESS
                </div>
                <div>{address}</div>
                <div className="pt-2 border-t border-slate-200/60">
                  <span className="font-bold">EMAIL:</span> {email}
                </div>
                <div>
                  <span className="font-bold">PHONE:</span> {phone}
                </div>
              </div>

            </div>
          </div>

          {/* Section 3: Testimonials */}
          <div className="border-t border-slate-100 dark:border-slate-800 pt-16">
            <div className="text-center mb-12">
              <span className="inline-block px-3 py-1 bg-emerald-50 dark:bg-[#062e15] rounded-full text-xs font-sans font-bold text-emerald-800 dark:text-[#10b981] rounded-full">Voice Logs</span>
              <h2 className="text-3xl font-serif font-black text-slate-900 dark:text-white uppercase mt-2 mb-4">
                What Members Say
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((t, index) => (
                <div 
                  key={index}
                  className="border border-slate-100 dark:border-slate-800/80 p-8 rounded-3xl bg-white dark:bg-slate-900/30 flex flex-col justify-between shadow-xs"
                >
                  <p className="text-sm italic font-sans text-slate-550 dark:text-slate-300 leading-relaxed mb-6">
                    “{t.quote}”
                  </p>
                  <div>
                    <h4 className="text-sm font-sans font-bold text-slate-900 dark:text-white">
                      {t.author}
                    </h4>
                    <p className="text-xs font-sans text-slate-500 dark:text-slate-400">
                      {t.info}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
