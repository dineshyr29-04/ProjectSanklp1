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
      <main id="main-content" className="flex-grow bg-white dark:bg-[#050f08] py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold text-emerald-800 dark:text-emerald-400">[ JOIN THE COMMUNITY ]</span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-emerald-950 dark:text-emerald-100 uppercase tracking-tight mt-2 mb-4">
              Members & Volunteers
            </h1>
            <p className="text-sm sm:text-base text-emerald-900/80 dark:text-emerald-300">
              Apply to join as a technology mentor, request community lab setups, or sponsor hardware to support digital access in rural spaces.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-start mb-20">
            {/* Volunteer Form (Col 1-7) */}
            <div className="lg:col-span-7 border-2 border-emerald-800 dark:border-emerald-500 bg-white dark:bg-zinc-900 p-8 sm:p-10 shadow-sm">
              <h2 className="text-2xl font-black text-emerald-950 dark:text-emerald-100 uppercase mb-2">
                VOLUNTEER & MEMBERSHIP APPLICATION
              </h2>
              <p className="text-xs text-emerald-900/80 dark:text-emerald-300 mb-8 font-mono">
                [ REQUIREMENT: HIGH CONTRAST BORDER SYSTEM ACTIVE ]
              </p>

              {volunteerSuccess ? (
                <div className="border border-emerald-800 bg-emerald-50/50 dark:bg-zinc-950 p-6 text-center">
                  <div className="font-mono text-sm font-bold text-emerald-800 dark:text-emerald-400 mb-4">
                    [ APPLICATION LOGGED SUCCESSFULLY ]
                  </div>
                  <p className="text-sm text-emerald-900 dark:text-emerald-300 leading-relaxed mb-6">
                    Our team coordinators will review your submission and email you the orientation packet details within 3 business days.
                  </p>
                  <button
                    onClick={() => setVolunteerSuccess(false)}
                    className="font-mono text-xs font-bold text-emerald-800 dark:text-emerald-400 hover:underline focus:outline-none"
                  >
                    [ SUBMIT ANOTHER APPLICATION ]
                  </button>
                </div>
              ) : (
                <form onSubmit={handleVolunteerSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                      <label htmlFor="volunteer-name" className="block text-xs font-mono font-bold text-emerald-800 dark:text-emerald-400 uppercase mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="volunteer-name"
                        value={volunteerForm.name}
                        onChange={(e) => setVolunteerForm({ ...volunteerForm, name: e.target.value })}
                        className="w-full px-4 py-3 bg-white dark:bg-zinc-950 border-2 border-emerald-800 dark:border-emerald-500 text-sm focus:outline-none focus:bg-emerald-50/10"
                        placeholder="Jane Doe"
                      />
                      {volunteerErrors.name && (
                        <p className="mt-1.5 text-xs text-red-600 font-mono" role="alert">
                          [ ERROR: {volunteerErrors.name.toUpperCase()} ]
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="volunteer-email" className="block text-xs font-mono font-bold text-emerald-800 dark:text-emerald-400 uppercase mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="volunteer-email"
                        value={volunteerForm.email}
                        onChange={(e) => setVolunteerForm({ ...volunteerForm, email: e.target.value })}
                        className="w-full px-4 py-3 bg-white dark:bg-zinc-950 border-2 border-emerald-800 dark:border-emerald-500 text-sm focus:outline-none focus:bg-emerald-50/10"
                        placeholder="jane@example.com"
                      />
                      {volunteerErrors.email && (
                        <p className="mt-1.5 text-xs text-red-600 font-mono" role="alert">
                          [ ERROR: {volunteerErrors.email.toUpperCase()} ]
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    {/* Phone */}
                    <div>
                      <label htmlFor="volunteer-phone" className="block text-xs font-mono font-bold text-emerald-800 dark:text-emerald-400 uppercase mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="volunteer-phone"
                        value={volunteerForm.phone}
                        onChange={(e) => setVolunteerForm({ ...volunteerForm, phone: e.target.value })}
                        className="w-full px-4 py-3 bg-white dark:bg-zinc-950 border-2 border-emerald-800 dark:border-emerald-500 text-sm focus:outline-none focus:bg-emerald-50/10"
                        placeholder="+91 98765 43210"
                      />
                      {volunteerErrors.phone && (
                        <p className="mt-1.5 text-xs text-red-600 font-mono" role="alert">
                          [ ERROR: {volunteerErrors.phone.toUpperCase()} ]
                        </p>
                      )}
                    </div>

                    {/* Preferred Program */}
                    <div>
                      <label htmlFor="volunteer-program" className="block text-xs font-mono font-bold text-emerald-800 dark:text-emerald-400 uppercase mb-2">
                        Select Program
                      </label>
                      <select
                        id="volunteer-program"
                        value={volunteerForm.program}
                        onChange={(e) => setVolunteerForm({ ...volunteerForm, program: e.target.value })}
                        className="w-full px-4 py-3 bg-white dark:bg-zinc-950 border-2 border-emerald-800 dark:border-emerald-500 text-sm focus:outline-none text-emerald-950 dark:text-emerald-200"
                      >
                        <option value="digital-literacy">Digital Literacy Academy</option>
                        <option value="tech-mentorship">Career Accelerator Mentorship</option>
                        <option value="community-labs">Smart Lab Setup Setup</option>
                        <option value="sankalp-fellows">Social Tech Fellowship</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="volunteer-message" className="block text-xs font-mono font-bold text-emerald-800 dark:text-emerald-400 uppercase mb-2">
                      Contribution Statement
                    </label>
                    <textarea
                      id="volunteer-message"
                      value={volunteerForm.message}
                      onChange={(e) => setVolunteerForm({ ...volunteerForm, message: e.target.value })}
                      rows={4}
                      className="w-full px-4 py-3 bg-white dark:bg-zinc-950 border-2 border-emerald-800 dark:border-emerald-500 text-sm focus:outline-none resize-none"
                      placeholder="Briefly state your technical/teaching background and why you want to participate..."
                    />
                    {volunteerErrors.message && (
                      <p className="mt-1.5 text-xs text-red-600 font-mono" role="alert">
                        [ ERROR: {volunteerErrors.message.toUpperCase()} ]
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center px-6 py-4 text-xs font-mono font-bold tracking-widest uppercase text-white bg-emerald-800 hover:bg-white hover:text-emerald-800 border-2 border-emerald-800 transition-all duration-200 cursor-pointer"
                  >
                    [ SUBMIT MEMBER APPLICATION ]
                  </button>
                </form>
              )}
            </div>

            {/* Donation Details & newsletter & Contact Details (Col 8-12) */}
            <div className="lg:col-span-5 space-y-8">
              
              {/* Donation Details Card - Inline Instead of Modal */}
              <div className="border-2 border-emerald-800 dark:border-emerald-500 bg-white dark:bg-zinc-900 p-8 shadow-sm">
                <div className="text-xs font-mono font-bold text-emerald-800 dark:text-emerald-400 mb-3">
                  [ SUPPORT US ]
                </div>
                <h3 className="text-xl font-black text-emerald-950 dark:text-emerald-100 uppercase mb-4">
                  FINANCIAL CO-SPONSORSHIP
                </h3>
                <p className="text-xs text-emerald-900/80 dark:text-emerald-300 leading-relaxed mb-6">
                  Donations fund off-grid solar panels and server backup batteries. Project Sankalp is a Section 8 non-profit (tax benefit under 80G).
                </p>

                <div className="border border-emerald-800/20 bg-emerald-50/30 dark:bg-zinc-950 p-4 text-xs font-mono space-y-2 mb-6 text-emerald-900 dark:text-emerald-300">
                  <div className="text-center font-bold border-b border-emerald-800/10 pb-2">
                    [ STATE BANK OF INDIA DETAILS ]
                  </div>
                  <div>ACCOUNT NAME: PROJECT SANKALP FOUNDATION</div>
                  <div>ACCOUNT NUMBER: 98765432109</div>
                  <div>IFSC CODE: SBIN0001234</div>
                  <div>UPI ADDRESS: sankalp@sbi</div>
                </div>

                <div className="text-[10px] font-mono text-emerald-800 dark:text-emerald-400">
                  [ Send receipts to: info@projectsankalp.org ]
                </div>
              </div>

              {/* Newsletter Subscription */}
              <div className="border-2 border-emerald-800 dark:border-emerald-500 bg-white dark:bg-zinc-900 p-8 shadow-sm">
                <div className="text-xs font-mono font-bold text-emerald-800 dark:text-emerald-400 mb-3">
                  [ JOIN THE LIST ]
                </div>
                <h3 className="text-lg font-black text-emerald-950 dark:text-emerald-100 uppercase mb-2">
                  NEWSLETTER SUBSCRIPTION
                </h3>
                <p className="text-xs text-emerald-900/80 dark:text-emerald-300 mb-6 leading-relaxed">
                  Receive monthly project brief summaries and updates.
                </p>

                {newsletterSuccess ? (
                  <div className="border border-emerald-800 bg-emerald-50/50 p-4 text-center font-mono text-xs font-bold text-emerald-800">
                    [ SUBSCRIBED SUCCESSFULLY ]
                  </div>
                ) : (
                  <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                    <input
                      type="email"
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      className="w-full px-4 py-3 bg-white dark:bg-zinc-950 border-2 border-emerald-800 dark:border-emerald-500 text-sm focus:outline-none"
                      placeholder="you@example.com"
                    />
                    {newsletterError && (
                      <p className="text-xs text-red-600 font-mono" role="alert">
                        [ ERROR: {newsletterError.toUpperCase()} ]
                      </p>
                    )}
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center px-4 py-3 text-xs font-mono font-bold tracking-widest uppercase text-white bg-emerald-800 hover:bg-white hover:text-emerald-800 border-2 border-emerald-800 transition-all duration-200 cursor-pointer"
                    >
                      [ SUBSCRIBE ]
                    </button>
                  </form>
                )}
              </div>

              {/* HQ details */}
              <div className="border border-emerald-800/30 bg-white dark:bg-zinc-900 p-8 text-xs font-mono space-y-4 text-emerald-950 dark:text-emerald-300">
                <div className="font-bold border-b border-emerald-800/10 pb-2">
                  [ HEADQUARTERS ADDRESS ]
                </div>
                <div>{address}</div>
                <div className="pt-2 border-t border-emerald-800/10">
                  <span className="font-bold">EMAIL:</span> {email}
                </div>
                <div>
                  <span className="font-bold">PHONE:</span> {phone}
                </div>
              </div>

            </div>
          </div>

          {/* Section 3: Testimonials */}
          <div className="border-t-2 border-emerald-800 dark:border-emerald-500 pt-16">
            <div className="text-center mb-12">
              <span className="text-xs font-mono font-bold text-emerald-800 dark:text-emerald-400">[ VOICE LOGS ]</span>
              <h2 className="text-3xl font-black text-emerald-950 dark:text-emerald-100 uppercase mt-2 mb-4">
                What Members Say
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((t, index) => (
                <div 
                  key={index}
                  className="border-2 border-emerald-800 dark:border-emerald-500 p-8 bg-white dark:bg-zinc-900 flex flex-col justify-between"
                >
                  <p className="text-sm italic text-emerald-950 dark:text-emerald-200 leading-relaxed mb-6">
                    “{t.quote}”
                  </p>
                  <div>
                    <h4 className="text-sm font-black text-emerald-800 dark:text-emerald-400 uppercase">
                      {t.author}
                    </h4>
                    <p className="text-xs text-emerald-900/60 dark:text-emerald-400/60 font-mono">
                      [ {t.info.toUpperCase()} ]
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
