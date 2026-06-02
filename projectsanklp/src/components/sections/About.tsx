import React from "react";
import Image from "next/image";
import { siteConfig } from "../../config/org";

export default function About() {
  const { title, description } = siteConfig.about;

  const paragraphs = description.split("\n\n");

  return (
    <section id="who-we-are" className="bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 sm:py-32">
        {/* Two-column editorial layout */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left — Text */}
          <div>
            <p className="eyebrow mb-5" style={{ color: "var(--accent)" }}>
              Who We Are
            </p>

            <h2
              className="font-serif font-black text-[#0F172A] mb-8"
              style={{
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                lineHeight: 1.08,
                letterSpacing: "-0.02em",
              }}
            >
              {title}
            </h2>

            <hr className="editorial-divider mb-8" />

            <div className="space-y-5">
              {paragraphs.map((para, i) => (
                <p
                  key={i}
                  className="font-sans text-slate-600"
                  style={{ fontSize: "1.0625rem", lineHeight: 1.8 }}
                >
                  {para}
                </p>
              ))}
            </div>

            {/* Pull-quote / highlighted stat */}
            <blockquote
              className="mt-10 border-l-4 pl-6"
              style={{ borderColor: "var(--accent)" }}
            >
              <p
                className="font-serif font-bold text-[#0F172A] italic"
                style={{ fontSize: "clamp(1.125rem, 2vw, 1.375rem)", lineHeight: 1.45 }}
              >
                "Not Me, But You — the NSS motto that drives every action we take."
              </p>
            </blockquote>
          </div>

          {/* Right — Photograph */}
          <div className="relative">
            <div
              className="relative overflow-hidden rounded-2xl"
              style={{ aspectRatio: "4/3" }}
            >
              <Image
                src="/about-workshop.jpg"
                alt="Students collaborating in a Project Sankalp workshop"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>

            {/* Floating stat accent */}
            <div
              className="absolute -bottom-6 -left-6 bg-white border border-slate-100 shadow-lg rounded-2xl px-7 py-5"
              aria-hidden="true"
            >
              <p
                className="font-serif font-black text-[#0F172A]"
                style={{ fontSize: "2.25rem", lineHeight: 1, letterSpacing: "-0.04em" }}
              >
                2021
              </p>
              <p className="font-sans text-slate-500 text-xs font-semibold mt-1 uppercase tracking-wider">
                Est. Founded
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
