"use client";

import React, { useState } from "react";
import Header from "../../src/components/sections/Header";
import Footer from "../../src/components/sections/Footer";
import FinalCTA from "../../src/components/sections/FinalCTA";
import { siteConfig } from "../../src/config/org";

/* ─────────────────────────────────────────────
   10 Team Members Template
   ───────────────────────────────────────────── */
const teamMembers = [
  {
    name: "Dr. Ananya Iyer",
    role: "Founder & Executive Director",
    responsibility: "Strategic leadership, policy & partnerships",
    department: "Leadership",
    initials: "AI",
    color: "#0F172A",
  },
  {
    name: "Vikram Rathore",
    role: "Director of Programs",
    responsibility: "Field programs, volunteer coordination & operations",
    department: "Operations",
    initials: "VR",
    color: "#1E3A5F",
  },
  {
    name: "Sarah D'Souza",
    role: "Head of Infrastructure",
    responsibility: "Smart lab setup, solar systems & tech deployment",
    department: "Technology",
    initials: "SD",
    color: "#10B981",
  },
  {
    name: "Dinesh Kumar",
    role: "Lead Curriculum Designer",
    responsibility: "Learning programs, educator training & content",
    department: "Education",
    initials: "DK",
    color: "#0F4C3A",
  },
  {
    name: "Priya Menon",
    role: "Community Outreach Lead",
    responsibility: "Awareness campaigns, community drives & NGO liaison",
    department: "Outreach",
    initials: "PM",
    color: "#7C3AED",
  },
  {
    name: "Arjun Nair",
    role: "Student Volunteer Coordinator",
    responsibility: "NSS volunteer management, campus mobilization",
    department: "Volunteers",
    initials: "AN",
    color: "#B45309",
  },
  {
    name: "Kavya Reddy",
    role: "Digital Literacy Trainer",
    responsibility: "Workshop facilitation, digital skills training",
    department: "Education",
    initials: "KR",
    color: "#1D4ED8",
  },
  {
    name: "Rohan Sharma",
    role: "Tech & Innovation Lead",
    responsibility: "Open-source projects, hackathon management & fellowships",
    department: "Technology",
    initials: "RS",
    color: "#0F172A",
  },
  {
    name: "Meera Krishnan",
    role: "Communications & Media",
    responsibility: "Social media, press relations & storytelling",
    department: "Communications",
    initials: "MK",
    color: "#10B981",
  },
  {
    name: "Suresh Pillai",
    role: "Finance & Compliance",
    responsibility: "Budget management, 80G compliance & donor reporting",
    department: "Administration",
    initials: "SP",
    color: "#C2410C",
  },
];

const deptColors: Record<string, { bg: string; text: string }> = {
  Leadership: { bg: "#F8FAFC", text: "#0F172A" },
  Operations: { bg: "#EFF6FF", text: "#1D4ED8" },
  Technology: { bg: "#F0FDF4", text: "#047857" },
  Education: { bg: "#FFFBEB", text: "#B45309" },
  Outreach: { bg: "#FAF5FF", text: "#7C3AED" },
  Volunteers: { bg: "#FFF7ED", text: "#C2410C" },
  Communications: { bg: "#F0FDF4", text: "#10B981" },
  Administration: { bg: "#FEF2F2", text: "#B91C1C" },
};

export default function MembersPage() {
  const { email, phone, address } = siteConfig.contact;
  const testimonials = siteConfig.testimonials;

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
    setVolunteerForm({ name: "", email: "", phone: "", program: "digital-literacy", message: "" });
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
      <main id="main-content" className="flex-grow bg-white">

        {/* ── Page Hero ── */}
        <section className="bg-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-20">
            <p className="eyebrow mb-5" style={{ color: "var(--accent)" }}>
              Join the Community
            </p>
            <h1
              className="font-serif font-black text-[#0F172A] max-w-3xl"
              style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", lineHeight: 1.06, letterSpacing: "-0.025em" }}
            >
              Members & Volunteers
            </h1>
            <p
              className="font-sans text-slate-500 mt-5 max-w-xl"
              style={{ fontSize: "1.0625rem", lineHeight: 1.75 }}
            >
              Apply to volunteer, connect as a mentor, or support our programs. Every contribution — big or small — moves us closer to our mission.
            </p>
          </div>
        </section>

        {/* ── Volunteer Application + Contact ── */}
        <section className="bg-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-20">
            <div className="grid lg:grid-cols-12 gap-10 items-start">

              {/* Volunteer Form */}
              <div
                className="lg:col-span-7 p-8 sm:p-10 rounded-2xl border border-slate-100"
                style={{ backgroundColor: "#FAFAF8" }}
              >
                <p className="eyebrow mb-3" style={{ color: "var(--accent)" }}>Application</p>
                <h2
                  className="font-serif font-black text-[#0F172A] mb-2"
                  style={{ fontSize: "1.75rem", letterSpacing: "-0.02em" }}
                >
                  Volunteer & Membership Form
                </h2>
                <p className="font-sans text-slate-500 mb-8" style={{ fontSize: "0.9375rem" }}>
                  Share your skills and join a cohort of change-makers.
                </p>

                {volunteerSuccess ? (
                  <div className="p-8 text-center rounded-xl border border-slate-100 bg-white">
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
                      style={{ backgroundColor: "#F0FDF4" }}
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path d="M5 12l5 5L19 7" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <h3 className="font-serif font-bold text-[#0F172A] mb-2" style={{ fontSize: "1.25rem" }}>
                      Application Received!
                    </h3>
                    <p className="font-sans text-slate-500 mb-6" style={{ fontSize: "0.9375rem", lineHeight: 1.7 }}>
                      Our coordinators will review your submission and reach out within 3 business days.
                    </p>
                    <button
                      onClick={() => setVolunteerSuccess(false)}
                      className="font-sans font-bold hover:underline"
                      style={{ color: "var(--accent)", fontSize: "0.875rem" }}
                    >
                      Submit another application →
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleVolunteerSubmit} className="space-y-5" noValidate>
                    <div className="grid sm:grid-cols-2 gap-5">
                      {/* Name */}
                      <div>
                        <label htmlFor="vol-name" className="block font-sans font-bold text-[#0F172A] mb-2" style={{ fontSize: "0.8125rem" }}>
                          Full Name *
                        </label>
                        <input
                          type="text" id="vol-name"
                          value={volunteerForm.name}
                          onChange={(e) => setVolunteerForm({ ...volunteerForm, name: e.target.value })}
                          className="w-full px-4 py-3 bg-white border rounded-lg font-sans focus:outline-none transition-colors"
                          style={{
                            borderColor: volunteerErrors.name ? "#EF4444" : "#E2E8F0",
                            fontSize: "0.9375rem",
                          }}
                          placeholder="Jane Doe"
                        />
                        {volunteerErrors.name && (
                          <p className="mt-1.5 font-sans text-red-500" style={{ fontSize: "0.8125rem" }} role="alert">
                            {volunteerErrors.name}
                          </p>
                        )}
                      </div>

                      {/* Email */}
                      <div>
                        <label htmlFor="vol-email" className="block font-sans font-bold text-[#0F172A] mb-2" style={{ fontSize: "0.8125rem" }}>
                          Email Address *
                        </label>
                        <input
                          type="email" id="vol-email"
                          value={volunteerForm.email}
                          onChange={(e) => setVolunteerForm({ ...volunteerForm, email: e.target.value })}
                          className="w-full px-4 py-3 bg-white border rounded-lg font-sans focus:outline-none transition-colors"
                          style={{
                            borderColor: volunteerErrors.email ? "#EF4444" : "#E2E8F0",
                            fontSize: "0.9375rem",
                          }}
                          placeholder="jane@example.com"
                        />
                        {volunteerErrors.email && (
                          <p className="mt-1.5 font-sans text-red-500" style={{ fontSize: "0.8125rem" }} role="alert">
                            {volunteerErrors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      {/* Phone */}
                      <div>
                        <label htmlFor="vol-phone" className="block font-sans font-bold text-[#0F172A] mb-2" style={{ fontSize: "0.8125rem" }}>
                          Phone Number *
                        </label>
                        <input
                          type="tel" id="vol-phone"
                          value={volunteerForm.phone}
                          onChange={(e) => setVolunteerForm({ ...volunteerForm, phone: e.target.value })}
                          className="w-full px-4 py-3 bg-white border rounded-lg font-sans focus:outline-none transition-colors"
                          style={{
                            borderColor: volunteerErrors.phone ? "#EF4444" : "#E2E8F0",
                            fontSize: "0.9375rem",
                          }}
                          placeholder="+91 98765 43210"
                        />
                        {volunteerErrors.phone && (
                          <p className="mt-1.5 font-sans text-red-500" style={{ fontSize: "0.8125rem" }} role="alert">
                            {volunteerErrors.phone}
                          </p>
                        )}
                      </div>

                      {/* Program */}
                      <div>
                        <label htmlFor="vol-program" className="block font-sans font-bold text-[#0F172A] mb-2" style={{ fontSize: "0.8125rem" }}>
                          Select Program
                        </label>
                        <select
                          id="vol-program"
                          value={volunteerForm.program}
                          onChange={(e) => setVolunteerForm({ ...volunteerForm, program: e.target.value })}
                          className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg font-sans focus:outline-none"
                          style={{ fontSize: "0.9375rem", color: "#475569" }}
                        >
                          <option value="digital-literacy">Digital Literacy Academy</option>
                          <option value="tech-mentorship">Career Accelerator Mentorship</option>
                          <option value="community-labs">Smart Lab Setup</option>
                          <option value="sankalp-fellows">Social Tech Fellowship</option>
                          <option value="awareness">Awareness Campaigns</option>
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="vol-message" className="block font-sans font-bold text-[#0F172A] mb-2" style={{ fontSize: "0.8125rem" }}>
                        Why do you want to join? *
                      </label>
                      <textarea
                        id="vol-message"
                        value={volunteerForm.message}
                        onChange={(e) => setVolunteerForm({ ...volunteerForm, message: e.target.value })}
                        rows={4}
                        className="w-full px-4 py-3 bg-white border rounded-lg font-sans focus:outline-none resize-none"
                        style={{
                          borderColor: volunteerErrors.message ? "#EF4444" : "#E2E8F0",
                          fontSize: "0.9375rem",
                        }}
                        placeholder="Briefly describe your background and motivation…"
                      />
                      {volunteerErrors.message && (
                        <p className="mt-1.5 font-sans text-red-500" style={{ fontSize: "0.8125rem" }} role="alert">
                          {volunteerErrors.message}
                        </p>
                      )}
                    </div>

                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 font-sans font-bold text-white rounded-md transition-all hover:opacity-90 cursor-pointer"
                      style={{ backgroundColor: "#0F172A", fontSize: "0.9375rem" }}
                    >
                      Submit Application
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                        <path d="M3 8H13M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  </form>
                )}
              </div>

              {/* Right column — Donation + Newsletter + Contact */}
              <div className="lg:col-span-5 space-y-6">

                {/* Donation */}
                <div className="p-7 rounded-2xl border border-slate-100" style={{ backgroundColor: "#FAFAF8" }}>
                  <p className="eyebrow mb-3" style={{ color: "var(--accent)" }}>Financial Support</p>
                  <h3 className="font-serif font-bold text-[#0F172A] mb-2" style={{ fontSize: "1.25rem", letterSpacing: "-0.01em" }}>
                    Support our mission
                  </h3>
                  <p className="font-sans text-slate-500 mb-5" style={{ fontSize: "0.875rem", lineHeight: 1.75 }}>
                    Donations fund solar-powered labs and skill programs. We are a Section 8 non-profit (80G eligible).
                  </p>
                  <div
                    className="p-5 rounded-xl border border-slate-100 bg-white font-mono space-y-2"
                    style={{ fontSize: "0.8rem", color: "#475569" }}
                  >
                    <p className="font-bold text-[#0F172A] border-b border-slate-100 pb-2 mb-2">BANK DETAILS</p>
                    <p>ACCOUNT NAME: PROJECT SANKALP FOUNDATION</p>
                    <p>ACCOUNT NUMBER: 98765432109</p>
                    <p>IFSC CODE: SBIN0001234</p>
                    <p>UPI: sankalp@sbi</p>
                  </div>
                  <p className="font-sans text-slate-400 mt-3" style={{ fontSize: "0.75rem" }}>
                    Send receipts to: {email}
                  </p>
                </div>

                {/* Newsletter */}
                <div className="p-7 rounded-2xl border border-slate-100" style={{ backgroundColor: "#FAFAF8" }}>
                  <p className="eyebrow mb-3" style={{ color: "var(--accent)" }}>Stay Updated</p>
                  <h3 className="font-serif font-bold text-[#0F172A] mb-2" style={{ fontSize: "1.25rem", letterSpacing: "-0.01em" }}>
                    Monthly newsletter
                  </h3>
                  <p className="font-sans text-slate-500 mb-5" style={{ fontSize: "0.875rem", lineHeight: 1.75 }}>
                    Get project updates, event announcements, and impact stories every month.
                  </p>
                  {newsletterSuccess ? (
                    <div className="p-4 text-center rounded-lg bg-white border border-slate-100 font-sans font-bold text-[#10B981]" style={{ fontSize: "0.875rem" }}>
                      ✓ Subscribed successfully!
                    </div>
                  ) : (
                    <form onSubmit={handleNewsletterSubmit} className="flex gap-3">
                      <input
                        type="email"
                        value={newsletterEmail}
                        onChange={(e) => setNewsletterEmail(e.target.value)}
                        className="flex-1 px-4 py-3 bg-white border border-slate-200 rounded-lg font-sans focus:outline-none"
                        style={{ fontSize: "0.9375rem" }}
                        placeholder="you@example.com"
                      />
                      <button
                        type="submit"
                        className="px-5 py-3 font-sans font-bold text-white rounded-lg transition-all hover:opacity-90 cursor-pointer flex-shrink-0"
                        style={{ backgroundColor: "#0F172A", fontSize: "0.875rem" }}
                      >
                        Subscribe
                      </button>
                    </form>
                  )}
                  {newsletterError && (
                    <p className="mt-2 font-sans text-red-500" style={{ fontSize: "0.8125rem" }} role="alert">
                      {newsletterError}
                    </p>
                  )}
                </div>

                {/* Contact */}
                <div className="p-7 rounded-2xl border border-slate-100 font-sans space-y-3" style={{ backgroundColor: "#FAFAF8", fontSize: "0.875rem" }}>
                  <p className="eyebrow mb-3" style={{ color: "var(--accent)" }}>Headquarters</p>
                  <p className="font-bold text-[#0F172A]">{address}</p>
                  <p>
                    <span className="font-bold text-[#0F172A]">Email: </span>
                    <a href={`mailto:${email}`} className="hover:underline" style={{ color: "var(--accent)", textDecoration: "none" }}>{email}</a>
                  </p>
                  <p>
                    <span className="font-bold text-[#0F172A]">Phone: </span>
                    <a href={`tel:${phone}`} className="text-slate-500 hover:underline" style={{ textDecoration: "none" }}>{phone}</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Team Behind Project Sankalp ── */}
        <section id="our-team" className="border-t border-slate-100" style={{ backgroundColor: "#0F172A" }}>
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 sm:py-28">

            {/* Section header */}
            <div className="max-w-2xl mb-16 sm:mb-20">
              <p className="eyebrow mb-5" style={{ color: "var(--accent)" }}>
                The Team
              </p>
              <h2
                className="font-serif font-black text-white"
                style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)", lineHeight: 1.08, letterSpacing: "-0.02em" }}
              >
                The people behind Project Sankalp.
              </h2>
              <p
                className="font-sans mt-4"
                style={{ color: "#94A3B8", fontSize: "1.0625rem", lineHeight: 1.75 }}
              >
                A diverse, passionate group of students, educators, and professionals united by a single purpose — to serve communities and create lasting social change.
              </p>
            </div>

            {/* 5-column × 2-row grid of 10 members */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
              {teamMembers.map((member, index) => {
                const dept = deptColors[member.department] || { bg: "#F8FAFC", text: "#475569" };
                return (
                  <article
                    key={index}
                    id={`member-${index + 1}`}
                    className="group flex flex-col items-center text-center"
                  >
                    {/* Avatar circle */}
                    <div
                      className="relative mb-5 flex-shrink-0"
                      style={{ width: "5rem", height: "5rem" }}
                    >
                      {/* Outer ring — shown on hover */}
                      <div
                        className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{
                          border: "2px solid var(--accent)",
                          transform: "scale(1.12)",
                        }}
                        aria-hidden="true"
                      />
                      {/* Avatar */}
                      <div
                        className="w-full h-full rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-105"
                        style={{ backgroundColor: member.color }}
                      >
                        <span
                          className="font-serif font-black text-white select-none"
                          style={{ fontSize: "1.375rem", letterSpacing: "-0.02em" }}
                          aria-hidden="true"
                        >
                          {member.initials}
                        </span>
                      </div>
                    </div>

                    {/* Department badge */}
                    <span
                      className="inline-block px-2.5 py-0.5 rounded-full font-bold mb-2"
                      style={{
                        backgroundColor: dept.bg,
                        color: dept.text,
                        fontSize: "0.6rem",
                        letterSpacing: "0.07em",
                        textTransform: "uppercase",
                      }}
                    >
                      {member.department}
                    </span>

                    {/* Name */}
                    <h3
                      className="font-serif font-bold text-white mb-1"
                      style={{ fontSize: "0.975rem", letterSpacing: "-0.01em", lineHeight: 1.3 }}
                    >
                      {member.name}
                    </h3>

                    {/* Role */}
                    <p
                      className="font-sans font-semibold mb-2"
                      style={{ color: "var(--accent)", fontSize: "0.7rem", letterSpacing: "0.05em", textTransform: "uppercase" }}
                    >
                      {member.role}
                    </p>

                    {/* Responsibility — visible on hover */}
                    <p
                      className="font-sans opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ color: "#64748B", fontSize: "0.75rem", lineHeight: 1.6 }}
                    >
                      {member.responsibility}
                    </p>
                  </article>
                );
              })}
            </div>

            {/* Divider + join strip */}
            <div
              className="mt-16 sm:mt-20 pt-10 border-t flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
              style={{ borderColor: "#1E293B" }}
            >
              <div>
                <p
                  className="font-serif font-bold text-white mb-1"
                  style={{ fontSize: "1.25rem", letterSpacing: "-0.01em" }}
                >
                  Want to join this team?
                </p>
                <p className="font-sans" style={{ color: "#64748B", fontSize: "0.9375rem" }}>
                  Fill in the application form above or email us directly.
                </p>
              </div>
              <a
                href={`mailto:${email}?subject=Team Application – Project Sankalp`}
                className="inline-flex items-center gap-2 px-7 py-3 font-sans font-bold rounded-md transition-all hover:-translate-y-0.5 flex-shrink-0"
                style={{
                  backgroundColor: "var(--accent)",
                  color: "#0F172A",
                  fontSize: "0.875rem",
                  textDecoration: "none",
                }}
              >
                Apply to Join
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8H13M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* ── Testimonials ── */}
        <section className="bg-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 sm:py-24">
            <div className="max-w-2xl mb-14">
              <p className="eyebrow mb-5" style={{ color: "var(--accent)" }}>
                In Their Words
              </p>
              <h2
                className="font-serif font-black text-[#0F172A]"
                style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.08, letterSpacing: "-0.02em" }}
              >
                What members say.
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
              {testimonials.map((t, index) => (
                <blockquote
                  key={index}
                  className="relative flex flex-col"
                  style={{
                    borderTop: "3px solid",
                    borderColor: index % 2 === 0 ? "var(--accent)" : "#10B981",
                    paddingTop: "2rem",
                  }}
                >
                  <span
                    className="font-serif absolute top-4 right-0 select-none pointer-events-none"
                    aria-hidden="true"
                    style={{ fontSize: "7rem", lineHeight: 1, color: "#F1F5F9", fontWeight: 900 }}
                  >
                    "
                  </span>
                  <p
                    className="font-serif font-bold text-[#0F172A] italic relative z-10 mb-8 flex-1"
                    style={{ fontSize: "clamp(1.1rem, 2vw, 1.3rem)", lineHeight: 1.55, letterSpacing: "-0.01em" }}
                  >
                    "{t.quote}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div
                      className="w-11 h-11 rounded-full flex items-center justify-center font-sans font-bold text-white text-sm flex-shrink-0"
                      style={{ backgroundColor: index % 2 === 0 ? "#0F172A" : "#10B981" }}
                      aria-hidden="true"
                    >
                      {(t.initials || t.author.slice(0, 2)).toUpperCase()}
                    </div>
                    <div>
                      <p className="font-sans font-bold text-[#0F172A]" style={{ fontSize: "0.9375rem" }}>
                        {t.author}
                      </p>
                      <p className="font-sans text-slate-500" style={{ fontSize: "0.8125rem" }}>
                        {t.info}
                      </p>
                    </div>
                  </div>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
