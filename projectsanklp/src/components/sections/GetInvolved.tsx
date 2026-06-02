"use client";

import React, { useState } from "react";
import { siteConfig } from "../../config/org";
import { Github, Linkedin, Twitter, Instagram, Heart, X } from "../ui/Icons";

export default function GetInvolved() {
  const { email, phone, address, socials } = siteConfig.contact;

  // Form states
  const [volunteerForm, setVolunteerForm] = useState({
    name: "",
    email: "",
    phone: "",
    program: "digital-literacy",
    message: "",
  });
  const [volunteerErrors, setVolunteerErrors] = useState<Record<string, string>>({});
  const [volunteerSuccess, setVolunteerSuccess] = useState(false);

  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterError, setNewsletterError] = useState("");
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);

  const [showDonateModal, setShowDonateModal] = useState(false);

  // Volunteer Submission handler
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
    // Reset form
    setVolunteerForm({
      name: "",
      email: "",
      phone: "",
      program: "digital-literacy",
      message: "",
    });
  };

  // Newsletter Submission handler
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
    <section id="get-involved" className="py-24 sm:py-32 relative overflow-hidden bg-white">
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-[color:var(--accent)]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          <h2 className="text-base font-semibold uppercase tracking-wider text-[color:var(--accent)] mb-3">
            Collaborate With Us
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight mb-6">
            Ways to Get Involved
          </p>
          <div className="w-12 h-1 bg-[color:var(--accent)] mx-auto rounded-full mb-6" />
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            Join hands with Project Sankalp to create digital pathways and technical mentors in underserved areas.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Volunteer Form (Col 1-7) */}
          <div className="lg:col-span-7 bg-white dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800/50 rounded-3xl p-6 sm:p-10 shadow-sm">
            <h3 className="text-xl sm:text-2xl font-bold text-zinc-950 dark:text-white mb-2">
              Volunteer Application
            </h3>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-8">
              Share your skills and build local digital literacy cohorts. We provide mentorship curriculum resources.
            </p>

            {volunteerSuccess ? (
              <div className="bg-[color:var(--card)] border border-slate-100 rounded-2xl p-6 text-center animate-scale-up">
                <div className="w-12 h-12 rounded-full bg-[color:var(--card)] text-[color:var(--accent)] flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-black mb-2">Application Received!</h4>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Thank you for applying to volunteer with Project Sankalp. Our program coordinators will review your submission and email you details within 3 business days.
                </p>
                <button
                  onClick={() => setVolunteerSuccess(false)}
                  className="mt-6 inline-flex items-center text-sm font-semibold text-[color:var(--accent)] hover:underline focus:outline-none"
                >
                  Submit another application
                </button>
              </div>
            ) : (
              <form onSubmit={handleVolunteerSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="volunteer-name" className="block text-sm font-bold text-zinc-800 dark:text-zinc-200 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="volunteer-name"
                      value={volunteerForm.name}
                      onChange={(e) => setVolunteerForm({ ...volunteerForm, name: e.target.value })}
                      className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)]"
                      placeholder="Jane Doe"
                    />
                    {volunteerErrors.name && (
                      <p className="mt-1.5 text-xs text-rose-500" role="alert">
                        {volunteerErrors.name}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="volunteer-email" className="block text-sm font-bold text-zinc-800 dark:text-zinc-200 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="volunteer-email"
                      value={volunteerForm.email}
                      onChange={(e) => setVolunteerForm({ ...volunteerForm, email: e.target.value })}
                      className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)]"
                      placeholder="jane@example.com"
                    />
                    {volunteerErrors.email && (
                      <p className="mt-1.5 text-xs text-rose-500" role="alert">
                        {volunteerErrors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Phone */}
                  <div>
                    <label htmlFor="volunteer-phone" className="block text-sm font-bold text-zinc-800 dark:text-zinc-200 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="volunteer-phone"
                      value={volunteerForm.phone}
                      onChange={(e) => setVolunteerForm({ ...volunteerForm, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)]"
                      placeholder="+91 98765 43210"
                    />
                    {volunteerErrors.phone && (
                      <p className="mt-1.5 text-xs text-rose-500" role="alert">
                        {volunteerErrors.phone}
                      </p>
                    )}
                  </div>

                  {/* Preferred Program */}
                  <div>
                    <label htmlFor="volunteer-program" className="block text-sm font-bold text-zinc-800 dark:text-zinc-200 mb-2">
                      Select Program
                    </label>
                    <select
                      id="volunteer-program"
                      value={volunteerForm.program}
                      onChange={(e) => setVolunteerForm({ ...volunteerForm, program: e.target.value })}
                      className="w-full px-4 py-3 bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)] text-zinc-700 dark:text-zinc-300"
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
                  <label htmlFor="volunteer-message" className="block text-sm font-bold text-zinc-800 dark:text-zinc-200 mb-2">
                    How would you like to contribute?
                  </label>
                  <textarea
                    id="volunteer-message"
                    value={volunteerForm.message}
                    onChange={(e) => setVolunteerForm({ ...volunteerForm, message: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)] resize-none"
                    placeholder="Tell us briefly about your background and programming/technical/teaching skills..."
                  />
                  {volunteerErrors.message && (
                    <p className="mt-1.5 text-xs text-rose-500" role="alert">
                      {volunteerErrors.message}
                    </p>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center px-6 py-4 text-base font-bold text-white bg-black hover:bg-[color:var(--accent)] rounded-xl shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)] cursor-pointer"
                >
                  Submit Application
                </button>
              </form>
            )}
          </div>

          {/* Newsletter, Donation & Contacts (Col 8-12) */}
          <div className="lg:col-span-5 space-y-8">
            {/* Donation Placeholder Block */}
            <div className="bg-white dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800/50 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[color:var(--card)] text-[color:var(--accent)] flex items-center justify-center mb-6">
                  <Heart size={20} />
                </div>
                <h3 className="text-lg font-extrabold text-zinc-950 dark:text-white mb-2">
                  Support Our Smart Labs
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                  Your donations fund solar backup cells, system monitors, and high-speed network hardware in rural hubs. Every contribution creates lasting digital hubs.
                </p>
              </div>
              <button
                onClick={() => setShowDonateModal(true)}
                    className="w-full inline-flex items-center justify-center px-4 py-3 text-sm font-bold text-white bg-black hover:bg-[color:var(--accent)] rounded-xl shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)] cursor-pointer"
              >
                Donate Now
              </button>
            </div>

            {/* Newsletter Subscription */}
            <div className="bg-white dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800/50 rounded-3xl p-6 sm:p-8 shadow-sm">
              <h3 className="text-lg font-extrabold text-zinc-950 dark:text-white mb-2">
                Join Our Newsletter
              </h3>
              <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mb-6">
                Receive monthly briefs, case studies, and volunteer updates.
              </p>

              {newsletterSuccess ? (
                <div className="bg-[color:var(--card)] border border-slate-100 rounded-2xl p-4 text-center animate-scale-up">
                  <p className="text-sm font-semibold text-[color:var(--accent)]">
                    Subscribed successfully!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="newsletter-email" className="sr-only">Email address</label>
                    <input
                      type="email"
                      id="newsletter-email"
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)]"
                      placeholder="you@example.com"
                    />
                    {newsletterError && (
                      <p className="mt-1.5 text-xs text-rose-500" role="alert">
                        {newsletterError}
                      </p>
                    )}
                  </div>
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center px-4 py-3 text-sm font-bold text-white bg-black hover:bg-[color:var(--accent)] rounded-xl shadow-md transition-colors focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)] cursor-pointer"
                    >
                      Subscribe
                    </button>
                </form>
              )}
            </div>

            {/* Direct Contact & Socials */}
            <div className="bg-white dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800/50 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
              <h3 className="text-lg font-extrabold text-zinc-950 dark:text-white border-b border-zinc-100 dark:border-zinc-800 pb-3">
                Contact Details
              </h3>
              
              <div className="space-y-4 text-sm text-zinc-600 dark:text-zinc-400">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-1">Email</h4>
                  <a href={`mailto:${email}`} className="hover:text-[color:var(--accent)] transition-colors font-semibold">
                    {email}
                  </a>
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-1">Phone</h4>
                  <a href={`tel:${phone}`} className="hover:text-[color:var(--accent)] transition-colors font-semibold">
                    {phone}
                  </a>
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-1">HQ Address</h4>
                  <p className="leading-relaxed">
                    {address}
                  </p>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800">
                <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-3">Follow Project Sankalp</h4>
                <div className="flex gap-4">
                  <a href={socials.twitter} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-zinc-50 hover:bg-[color:var(--card)] hover:text-[color:var(--accent)] dark:bg-zinc-950 dark:hover:bg-zinc-900 dark:hover:text-[color:var(--accent)] transition-all" aria-label="Twitter">
                    <Twitter size={18} />
                  </a>
                  <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-zinc-50 hover:bg-[color:var(--card)] hover:text-[color:var(--accent)] dark:bg-zinc-950 dark:hover:bg-zinc-900 dark:hover:text-[color:var(--accent)] transition-all" aria-label="LinkedIn">
                    <Linkedin size={18} />
                  </a>
                  <a href={socials.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-zinc-50 hover:bg-[color:var(--card)] hover:text-[color:var(--accent)] dark:bg-zinc-950 dark:hover:bg-zinc-900 dark:hover:text-[color:var(--accent)] transition-all" aria-label="GitHub">
                    <Github size={18} />
                  </a>
                  <a href={socials.instagram} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-zinc-50 hover:bg-[color:var(--card)] hover:text-[color:var(--accent)] dark:bg-zinc-950 dark:hover:bg-zinc-900 dark:hover:text-[color:var(--accent)] transition-all" aria-label="Instagram">
                    <Instagram size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Accessible Donate Modal */}
      {showDonateModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/60 backdrop-blur-sm animate-fade-in"
          onClick={() => setShowDonateModal(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="donate-modal-title"
        >
          <div
            className="relative w-full max-w-md bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-2xl p-6 sm:p-8 animate-scale-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={() => setShowDonateModal(false)}
              className="absolute top-4 right-4 p-1.5 rounded-full text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            {/* Content */}
            <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-[color:var(--card)] text-[color:var(--accent)] flex items-center justify-center mx-auto mb-4">
                <Heart size={24} />
              </div>
              <h3 id="donate-modal-title" className="text-xl sm:text-2xl font-extrabold text-zinc-950 dark:text-white mb-2">
                Donate to Project Sankalp
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                Thank you for your generosity! Since we are registered as a non-profit organization (Section 8), all donations receive tax benefits under section 80G.
              </p>

              <div className="bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200/50 dark:border-zinc-800/50 rounded-xl p-4 text-left text-sm space-y-3 mb-6">
                <p className="font-bold text-zinc-800 dark:text-zinc-200 border-b border-zinc-200/60 dark:border-zinc-800/60 pb-2 text-center">Bank Account Details (Placeholder)</p>
                <div>
                  <span className="font-semibold text-zinc-500 dark:text-zinc-400">Account Name:</span> Project Sankalp Foundation
                </div>
                <div>
                  <span className="font-semibold text-zinc-500 dark:text-zinc-400">Bank Name:</span> State Bank of India
                </div>
                <div>
                  <span className="font-semibold text-zinc-500 dark:text-zinc-400">Account Number:</span> 98765432109 (Savings)
                </div>
                <div>
                  <span className="font-semibold text-zinc-500 dark:text-zinc-400">IFSC Code:</span> SBIN0001234
                </div>
                <div>
                  <span className="font-semibold text-zinc-500 dark:text-zinc-400">UPI ID:</span> sankalp@sbi
                </div>
              </div>

              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                Please email a copy of your bank transaction receipt to <a href={`mailto:${email}`} className="text-[color:var(--accent)] hover:underline">{email}</a> to receive your 80G tax tax deduction certificate.
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
