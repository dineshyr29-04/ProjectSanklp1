import React from "react";
import { siteConfig } from "../../config/org";

export default function StudentStories() {
  const testimonials = siteConfig.testimonials;

  return (
    <section id="student-stories" className="bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 sm:py-32">
        {/* Section header */}
        <div className="max-w-2xl mb-16 sm:mb-20">
          <p className="eyebrow mb-5" style={{ color: "var(--accent)" }}>
            Student Stories
          </p>
          <h2
            className="font-serif font-black text-[#0F172A]"
            style={{
              fontSize: "clamp(2rem, 4vw, 3.25rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            Voices from our community.
          </h2>
          <p
            className="font-sans text-slate-500 mt-4"
            style={{ fontSize: "1.0625rem", lineHeight: 1.75 }}
          >
            Real words from the volunteers, students, and educators whose lives have been shaped by Project Sankalp.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {testimonials.map((testimonial, index) => (
            <blockquote
              key={index}
              id={`testimonial-${index + 1}`}
              className="relative flex flex-col"
              style={{
                borderTop: "3px solid",
                borderColor: index % 2 === 0 ? "var(--accent)" : "#10B981",
                paddingTop: "2rem",
              }}
            >
              {/* Opening quote mark */}
              <span
                className="font-serif absolute top-4 right-0"
                aria-hidden="true"
                style={{
                  fontSize: "8rem",
                  lineHeight: 1,
                  color: "#F1F5F9",
                  fontWeight: 900,
                  letterSpacing: "-0.04em",
                  userSelect: "none",
                }}
              >
                "
              </span>

              {/* Quote */}
              <p
                className="font-serif font-bold text-[#0F172A] relative z-10 mb-8 flex-1"
                style={{
                  fontSize: "clamp(1.125rem, 2vw, 1.375rem)",
                  lineHeight: 1.55,
                  letterSpacing: "-0.01em",
                  fontStyle: "italic",
                }}
              >
                "{testimonial.quote}"
              </p>

              {/* Author row */}
              <div className="flex items-center gap-4">
                {/* Avatar with initials */}
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-sans font-bold text-white text-sm"
                  style={{
                    backgroundColor: index % 2 === 0 ? "#0F172A" : "#10B981",
                  }}
                  aria-hidden="true"
                >
                  {testimonial.initials || testimonial.author.slice(0, 2).toUpperCase()}
                </div>

                <div>
                  <p
                    className="font-sans font-bold text-[#0F172A]"
                    style={{ fontSize: "0.9375rem" }}
                  >
                    {testimonial.author}
                  </p>
                  <p
                    className="font-sans text-slate-500"
                    style={{ fontSize: "0.8125rem", lineHeight: 1.5 }}
                  >
                    {testimonial.info}
                  </p>
                </div>
              </div>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
