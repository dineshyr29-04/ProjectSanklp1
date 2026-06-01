"use client";

import React, { useState, useEffect, useRef } from "react";
import { siteConfig, TeamMember } from "../../config/org";
import { Linkedin, X } from "../ui/Icons";

export default function Team() {
  const { title, subtitle, members } = siteConfig.team;
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const previousFocus = useRef<HTMLElement | null>(null);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedMember(null);
        if (previousFocus.current) {
          previousFocus.current.focus();
        }
      }
    };
    if (selectedMember) {
      window.addEventListener("keydown", handleKeyDown);
      // Save last active element for keyboard navigation restoration
      previousFocus.current = document.activeElement as HTMLElement;
      // Focus the modal
      setTimeout(() => {
        modalRef.current?.focus();
      }, 50);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedMember]);

  const openModal = (member: TeamMember) => {
    setSelectedMember(member);
  };

  const closeModal = () => {
    setSelectedMember(null);
    if (previousFocus.current) {
      previousFocus.current.focus();
    }
  };

  // Generate initials for avatar placeholder
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  // Generate unique gradient color based on name length/letters
  const getGradient = (name: string) => {
    const gradients = [
      "from-indigo-500 to-purple-600",
      "from-blue-500 to-indigo-600",
      "from-emerald-400 to-teal-600",
      "from-violet-500 to-purple-700",
    ];
    const index = name.length % gradients.length;
    return gradients[index];
  };

  return (
    <section id="team" className="py-24 sm:py-32 relative overflow-hidden bg-white dark:bg-black">
      <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-indigo-500/5 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          <h2 className="text-base font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-3">
            Our Leadership
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight mb-6">
            {title}
          </p>
          <div className="w-12 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto rounded-full mb-6" />
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            {subtitle}
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {members.map((member, index) => (
            <div
              key={index}
              className="bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200/50 dark:border-zinc-800/50 rounded-2xl p-6 text-center hover:shadow-md hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Avatar Placeholder with initials */}
                <div
                  className={`w-24 h-24 rounded-full bg-gradient-to-br ${getGradient(
                    member.name
                  )} text-white flex items-center justify-center text-2xl font-extrabold mx-auto mb-6 shadow-sm`}
                >
                  {getInitials(member.name)}
                </div>

                {/* Name & Role */}
                <h3 className="text-lg font-bold text-zinc-950 dark:text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 mb-4 uppercase tracking-wider">
                  {member.role}
                </p>

                {/* Bio Snippet */}
                <p className="text-sm text-zinc-600 dark:text-zinc-400 line-clamp-3 mb-6">
                  {member.bio}
                </p>
              </div>

              {/* View Bio Button */}
              <div>
                <button
                  onClick={() => openModal(member)}
                  className="w-full inline-flex items-center justify-center px-4 py-2.5 text-xs font-bold text-zinc-950 dark:text-white bg-zinc-200/60 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  Read Profile & Bio
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Press/Media Contact Block */}
        <div className="mt-20 glass-panel rounded-2xl p-8 text-center max-w-2xl mx-auto shadow-sm border border-zinc-200/60 dark:border-zinc-800/60">
          <h3 className="text-lg font-bold text-zinc-950 dark:text-white mb-2">Press & Media Inquiries</h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
            Are you a journalist or researcher interested in writing about our community smart labs or digital literacy studies?
          </p>
          <a
            href={`mailto:${siteConfig.contact.email}?subject=Press Inquiry - Project Sankalp`}
            className="inline-flex items-center text-sm font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300"
          >
            Email Press Contact <span aria-hidden="true" className="ml-1">→</span>
          </a>
        </div>
      </div>

      {/* Accessible Bio Modal */}
      {selectedMember && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/60 backdrop-blur-sm animate-fade-in"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div
            ref={modalRef}
            tabIndex={-1}
            className="relative w-full max-w-lg bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-2xl p-6 sm:p-8 animate-scale-up focus:outline-none"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 p-1.5 rounded-full text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-4 sm:gap-6 mb-6">
              <div
                className={`w-16 h-16 rounded-full bg-gradient-to-br ${getGradient(
                  selectedMember.name
                )} text-white flex items-center justify-center text-xl font-extrabold shadow-sm`}
              >
                {getInitials(selectedMember.name)}
              </div>
              <div>
                <h3 id="modal-title" className="text-xl sm:text-2xl font-extrabold text-zinc-950 dark:text-white">
                  {selectedMember.name}
                </h3>
                <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
                  {selectedMember.role}
                </p>
              </div>
            </div>

            {/* Modal Content */}
            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-2">Biography</h4>
                <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">
                  {selectedMember.bio}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-3">Direct Contact</h4>
                <div className="flex flex-wrap gap-4 items-center">
                  <a
                    href={`mailto:${selectedMember.email}`}
                    className="inline-flex items-center justify-center px-4 py-2 text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 rounded-lg transition-colors"
                  >
                    Email {selectedMember.name.split(" ")[0]}
                  </a>
                  <a
                    href={selectedMember.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-zinc-700 hover:text-indigo-600 dark:text-zinc-300 dark:hover:text-indigo-400"
                    aria-label={`${selectedMember.name}'s LinkedIn profile`}
                  >
                    <Linkedin size={16} />
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
